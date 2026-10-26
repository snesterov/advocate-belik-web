import urllib.request
import re
import json
import html
import sys

def sync():
    url = 'https://t.me/s/galinabelik_advocate'
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'})
    
    with urllib.request.urlopen(req) as resp:
        resp_bytes = resp.read()
        resp_html = resp_bytes.decode('utf-8', errors='replace')

    pattern = re.compile(r'data-post="([^"]+)".*?<time datetime="([^"]+)".*?<div class="tgme_widget_message_text[^"]*"[^>]*>(.*?)</div>', re.DOTALL)
    items = []

    for m in pattern.finditer(resp_html):
        post_id = m.group(1)
        date = m.group(2)[:10]
        raw_text = m.group(3)
        clean = re.sub(r'<br\s*/?>', '\n', raw_text)
        clean = re.sub(r'<[^>]+>', '', clean).strip()
        clean = html.unescape(clean)
        
        sub_chunk = resp_html[m.start():m.end() + 1000]
        photo_m = re.search(r'tgme_widget_message_photo_wrap.*?background-image:url\(\'([^\']+)\'\)', sub_chunk)
        photo = photo_m.group(1) if photo_m else None
        
        lines = [l.strip() for l in clean.split('\n') if l.strip()]
        if not lines:
            continue
        
        title = lines[0][:100]
        preview = " ".join(lines[1:])[:200] if len(lines) > 1 else clean[:200]
        if len(clean) > 200:
            preview += "..."

        items.append({
            "id": post_id,
            "date": date,
            "title": title,
            "preview": preview,
            "photo": photo,
            "url": f"https://t.me/{post_id}"
        })

    seen = set()
    unique_items = []
    for it in reversed(items):
        if it['id'] not in seen:
            seen.add(it['id'])
            unique_items.append(it)
        if len(unique_items) >= 6:
            break

    unique_items.reverse()

    with open('posts.json', 'w', encoding='utf-8') as f:
        json.dump(unique_items, f, ensure_ascii=False, indent=2)

    print(f"Successfully synced {len(unique_items)} posts in UTF-8.")

if __name__ == '__main__':
    sync()
