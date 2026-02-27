import csv, os, subprocess

CSV_FILE = 'Tool_Categories.csv'
VIDEO_FILE = 'video_source/video.mp4'  # Assuming it's here based on 'video_source' dir
OUT_DIR = 'gifs'

if not os.path.exists(VIDEO_FILE):
    # Try current directory
    if os.path.exists('video.mp4'):
        VIDEO_FILE = 'video.mp4'
    else:
        print("Cannot find video.mp4")
        exit(1)

os.makedirs(OUT_DIR, exist_ok=True)

def ts_to_sec(ts):
    m, s = map(int, ts.split(':'))
    return m * 60 + s

tools = []
with open(CSV_FILE, 'r', encoding='utf-8-sig') as f:
    reader = csv.reader(f)
    next(reader)
    for row in reader:
        if len(row) < 2: continue
        time_str = row[0].replace('`', '').strip()
        name = row[1].strip()
        tools.append((time_str, name))

for i in range(len(tools)):
    start_time_str = tools[i][0]
    name = tools[i][1]
    
    if start_time_str == '00:00':
        continue # Skip the intro if you want, but wait, the HTML also skips 00:00!
        
    start_sec = ts_to_sec(start_time_str)
    
    # End time is the start of the next tool, or +10 seconds if it's the last one
    if i + 1 < len(tools):
        end_sec = ts_to_sec(tools[i+1][0])
    else:
        end_sec = start_sec + 15
        
    # generate a max 5 second GIF starting at start_sec
    duration = min(end_sec - start_sec, 5) # Just 5 seconds for GIF to keep it small
    if duration <= 0: duration = 5
    
    idx_str = str(i+1).zfill(2)
    safe_name = name.replace(' ', '_').replace('/', '_').replace(':', '')
    out_path = os.path.join(OUT_DIR, f"{idx_str}_{safe_name}.gif")
    
    # Fast GIF generation
    cmd = [
        'ffmpeg', '-y', '-ss', str(start_sec), '-t', str(duration),
        '-i', VIDEO_FILE,
        '-vf', 'fps=10,scale=480:-1:flags=lanczos,split[s0][s1];[s0]palettegen[p];[s1][p]paletteuse',
        '-loop', '0', out_path
    ]
    print(f"Generating {out_path} from {start_sec}s for {duration}s")
    subprocess.run(cmd, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)

print("Done generating GIFs.")
