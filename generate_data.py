"""
Generate data.json from Tool_Categories.csv + actual files in thumbs/ and gifs/.
This makes the website fully data-driven — zero hardcoded filenames in HTML.
"""
import csv, os, json, glob

CSV_FILE = 'Tool_Categories.csv'
THUMBS_DIR = 'thumbs'
GIFS_DIR = 'gifs'
OUT_FILE = 'data.json'

# --- Category Consolidation Mapping ---
# We map granular or sparse 'trade' categories to broader ones for a cleaner UI.
TRADE_MAPPING = {
    '營造': '營造工程',
    '工程': '營造工程',
    '水電': '營造工程',
    '水電工程': '營造工程',
    '泥作': '營造工程',
    '石材': '營造工程',
    '拆除': '營造工程',
    
    '木工': '木工裝潢',
    '裝潢': '木工裝潢',
    '油漆': '木工裝潢',
    
    '汽車': '汽車機械',
    '汽車修護': '汽車機械',
    '機械': '汽車機械',
    
    '園藝': '園藝農林',
    '林業': '園藝農林',
    
    '手作': '通用與配件',
    '模型': '通用與配件',
    '通用': '通用與配件',
    '收納系統': '通用與配件',
    '防護配件': '通用與配件',
    '檢修': '通用與配件',
    '細部': '通用與配件',
    '工安': '通用與配件',
    '測量': '通用與配件',
    '戶外': '通用與配件',
    '清潔': '通用與配件'
}

def consolidate_trades(raw_trade_str):
    """Split raw trades by '/', map them, and return unique sorted broader trades."""
    raw_list = [x.strip() for x in raw_trade_str.split('/') if x.strip()]
    mapped = set()
    for t in raw_list:
        mapped.add(TRADE_MAPPING.get(t, t)) # Fallback to original if not in mapping
    
    # If a tool is mapped to multiple categories, we keep them all.
    return ' / '.join(sorted(list(mapped)))

def list_assets(folder, ext):
    """Return dict: {basename_without_ext: filename} e.g. {'02_Manpa_Holes_Cutter': '02_Manpa_Holes_Cutter.jpg'}"""
    d = {}
    for f in sorted(glob.glob(os.path.join(folder, f'*.{ext}'))):
        name = os.path.basename(f)
        key = os.path.splitext(name)[0]
        d[key] = name
    return d

def find_asset(assets, idx_prefix, product_name):
    """Find asset by matching the zero-padded index prefix."""
    for key, fname in assets.items():
        if key.startswith(idx_prefix + '_'):
            return fname
    return None

def main():
    thumbs = list_assets(THUMBS_DIR, 'jpg')
    gifs = list_assets(GIFS_DIR, 'gif')

    tools = []
    with open(CSV_FILE, 'r', encoding='utf-8-sig') as f:
        reader = csv.reader(f)
        header = next(reader)
        for i, row in enumerate(reader, start=1):
            if len(row) < 10: continue
            time_str = row[0].replace('`', '').strip()

            # Skip 00:00 intro
            if time_str == '00:00':
                continue

            name = row[1].strip()
            if not name or name == '-': continue

            idx_prefix = str(i).zfill(2)
            thumb = find_asset(thumbs, idx_prefix, name)
            gif = find_asset(gifs, idx_prefix, name)

            tools.append({
                'time': time_str,
                'name': name,
                'trade': consolidate_trades(row[2].strip()),
                'usage': row[3].strip(),
                'price': row[4].strip(),
                'desc': row[5].strip(),
                'alt': row[6].strip(),
                'cost': row[7].strip(),
                'pain': row[8].strip(),
                'link': row[9].strip(),
                'thumb': f'{THUMBS_DIR}/{thumb}' if thumb else None,
                'gif': f'{GIFS_DIR}/{gif}' if gif else None,
            })

    with open(OUT_FILE, 'w', encoding='utf-8') as f:
        json.dump({'tools': tools, 'count': len(tools)}, f, ensure_ascii=False, indent=2)

    print(f'✓ Generated {OUT_FILE} with {len(tools)} tools')

if __name__ == '__main__':
    main()
