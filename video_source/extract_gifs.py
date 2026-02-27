import os
import subprocess
import imageio_ffmpeg
import sys
import re

url = "https://www.youtube.com/watch?v=kv-_CezuTBg"
output_video_path = "video.mp4"
out_dir = "gifs"

def time_to_sec(t_str):
    m, s = map(int, t_str.split(':'))
    return m * 60 + s

segments = [
    ("00:00", "Tools Amazon"),
    ("00:16", "Manpa Holes Cutter"),
    ("00:46", "Stair Tread Tool"),
    ("01:18", "Laser Rust Remover"),
    ("01:51", "Lock Installation"),
    ("02:23", "Fanttik S2 Pro"),
    ("02:58", "Drill"),
    ("03:30", "GeoRipper Hand Trencher"),
    ("04:11", "Worx Pruning Shear"),
    ("04:38", "HOTO Rotary Tool"),
    ("05:17", "Tilswall HVLP"),
    ("05:54", "Degree Seam Setter"),
    ("06:25", "Bucasso Pen Sander"),
    ("07:04", "Orange Ninja"),
    ("07:33", "Gerber Suspension NXT"),
    ("08:05", "Leaf Blower"),
    ("08:40", "Worx MAKERX"),
    ("09:18", "Mini Angle Grinder"),
    ("09:58", "Utility Knife"),
    ("10:34", "Rockwell JawStand XP"),
    ("11:13", "Chainsaw Sharpener"),
    ("11:45", "Variable Speed Buffer"),
    ("12:32", "Work Bench"),
    ("13:38", "CLAWVERINE 15"),
    ("14:21", "Post Hole Digger"),
    ("15:07", "Multi-function Scribing Tool"),
    ("15:50", "Milwaukee Tool M12"),
    ("16:44", "ClipTech Hubs"),
    ("17:29", "Scraper Utility Knife"),
    ("18:31", "Portable Bearing Packer"),
    ("19:10", "Knuckle Saver"),
    ("19:47", "Staircase Platform"),
    ("20:51", "Cleaning Disc"),
    ("21:23", "Detail Sander"),
    ("22:07", "wolfcraft Level"),
    ("22:37", "Torque Wrench"),
    ("23:35", "Wheel Impaktor"),
    ("24:18", "Spirit Level"),
    ("25:02", "STAIR TREAD"),
    ("25:47", "Stud Finder"),
    ("26:52", "Extraction Socket Set"),
    ("27:51", "Caulk Gun"),
    ("28:38", "Rail Clamps"),
    ("29:21", "Kreg Set Up Bars"),
    ("30:03", "Firewood Splitter"),
    ("30:57", "Hilti TE 2"),
    ("31:41", "Spider Tool Holster"),
    ("32:21", "RYOBI ONE+"),
    ("33:17", "Multi-Mode Sander"),
    ("34:09", "Cordless Polishing Tool"),
    ("35:09", "Mobile Drill Stand"),
    ("35:58", "Edge Clamps"),
    ("36:32", "Worx WX572L"),
    ("37:25", "Cable Cutter"),
    ("38:20", "DEWALT Impact Driver"),
    ("39:12", "Strap Wrench"),
    ("39:54", "Contour Gauge"),
    ("40:38", "Extension Cord")
]

def main():
    if not os.path.exists(output_video_path):
        print("Downloading video using yt-dlp...")
        subprocess.run([
            sys.executable, "-m", "yt_dlp", 
            "-f", "bestvideo[height<=720][ext=mp4]+bestaudio[ext=m4a]/mp4", 
            "--merge-output-format", "mp4",
            "-o", output_video_path, url
        ], check=True)

    ffmpeg_exe = imageio_ffmpeg.get_ffmpeg_exe()
    os.makedirs(out_dir, exist_ok=True)

    print("Extracting GIFs...")
    total = len(segments)
    
    for i in range(total):
        start_str, title = segments[i]
        start_sec = time_to_sec(start_str)
        
        if i < total - 1:
            end_sec = time_to_sec(segments[i+1][0])
        else:
            end_sec = start_sec + 20 

        duration = end_sec - start_sec
        # Limit to 15 seconds max to avoid giant GIFs
        if duration > 15:
            duration = 15

        safe_title = re.sub(r'[^\w\s-]', '', title).strip().replace(' ', '_')
        out_file = os.path.join(out_dir, f"{str(i+1).zfill(2)}_{safe_title}.gif")
        
        if os.path.exists(out_file):
            print(f"Skipping {out_file}, already exists")
            continue
            
        print(f"[{i+1}/{total}] Extracting {title} (start: {start_sec}s, duration: {duration}s)...")
        
        # Fast seeking requires -ss before -i, but for precision, we can put -ss after -i, or combine them.
        # Here we use -ss before -i for fast jumping, then transcode
        cmd = [
            ffmpeg_exe,
            "-y", # overwrite output
            "-ss", str(start_sec),
            "-t", str(duration),
            "-i", output_video_path,
            "-vf", "fps=10,scale=480:-1:flags=lanczos,split[s0][s1];[s0]palettegen[p];[s1][p]paletteuse",
            "-loop", "0",
            out_file
        ]
        
        # Suppress ffmpeg output to avoid cluttering terminal
        result = subprocess.run(cmd, stdout=subprocess.DEVNULL, stderr=subprocess.PIPE, text=True, encoding="utf-8", errors="ignore")
        if result.returncode != 0:
            print(f"Error extracting {title}: {result.stderr}")

    print("Done!")

if __name__ == "__main__":
    main()
