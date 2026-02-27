import os, subprocess, re
import imageio_ffmpeg

video = "video.mp4"
out_dir = os.path.join("..", "thumbs")

segments = [
    ("00:00","Tools_Amazon"),("00:16","Manpa_Holes_Cutter"),("00:46","Stair_Tread_Tool"),
    ("01:18","Laser_Rust_Remover"),("01:51","Lock_Installation"),("02:23","Fanttik_S2_Pro"),
    ("02:58","Drill"),("03:30","GeoRipper_Hand_Trencher"),("04:11","Worx_Pruning_Shear"),
    ("04:38","HOTO_Rotary_Tool"),("05:17","Tilswall_HVLP"),("05:54","Degree_Seam_Setter"),
    ("06:25","Bucasso_Pen_Sander"),("07:04","Orange_Ninja"),("07:33","Gerber_Suspension_NXT"),
    ("08:05","Leaf_Blower"),("08:40","Worx_MAKERX"),("09:18","Mini_Angle_Grinder"),
    ("09:58","Utility_Knife"),("10:34","Rockwell_JawStand_XP"),("11:13","Chainsaw_Sharpener"),
    ("11:45","Variable_Speed_Buffer"),("12:32","Work_Bench"),("13:38","CLAWVERINE_15"),
    ("14:21","Post_Hole_Digger"),("15:07","Multi-function_Scribing_Tool"),
    ("15:50","Milwaukee_Tool_M12"),("16:44","ClipTech_Hubs"),("17:29","Scraper_Utility_Knife"),
    ("18:31","Portable_Bearing_Packer"),("19:10","Knuckle_Saver"),("19:47","Staircase_Platform"),
    ("20:51","Cleaning_Disc"),("21:23","Detail_Sander"),("22:07","wolfcraft_Level"),
    ("22:37","Torque_Wrench"),("23:35","Wheel_Impaktor"),("24:18","Spirit_Level"),
    ("25:02","STAIR_TREAD"),("25:47","Stud_Finder"),("26:52","Extraction_Socket_Set"),
    ("27:51","Caulk_Gun"),("28:38","Rail_Clamps"),("29:21","Kreg_Set_Up_Bars"),
    ("30:03","Firewood_Splitter"),("30:57","Hilti_TE_2"),("31:41","Spider_Tool_Holster"),
    ("32:21","RYOBI_ONE"),("33:17","Multi-Mode_Sander"),("34:09","Cordless_Polishing_Tool"),
    ("35:09","Mobile_Drill_Stand"),("35:58","Edge_Clamps"),("36:32","Worx_WX572L"),
    ("37:25","Cable_Cutter"),("38:20","DEWALT_Impact_Driver"),("39:12","Strap_Wrench"),
    ("39:54","Contour_Gauge"),("40:38","Extension_Cord"),
]

def time_to_sec(t):
    m, s = map(int, t.split(':'))
    return m * 60 + s

def main():
    ffmpeg = imageio_ffmpeg.get_ffmpeg_exe()
    os.makedirs(out_dir, exist_ok=True)
    
    for i, (ts, name) in enumerate(segments):
        idx = str(i+1).zfill(2)
        out = os.path.join(out_dir, f"{idx}_{name}.jpg")
        if os.path.exists(out):
            print(f"Skip {out}")
            continue
        # Seek 3 seconds into each segment for a more representative frame
        seek = time_to_sec(ts) + 3
        cmd = [
            ffmpeg, "-y",
            "-ss", str(seek),
            "-i", video,
            "-vframes", "1",
            "-vf", "scale=480:-1",
            "-q:v", "3",
            out
        ]
        r = subprocess.run(cmd, stdout=subprocess.DEVNULL, stderr=subprocess.PIPE, text=True, errors="ignore")
        status = "✓" if r.returncode == 0 else "✗"
        print(f"[{idx}] {status} {name}")

    print(f"\nDone! {len(segments)} thumbnails in {out_dir}")

if __name__ == "__main__":
    main()
