#!/usr/bin/env python3
"""
Skapar exterior-mobile.jpg:
- Visar hela byggnadsbredden (full sign synlig)
- Portrait-format (460×900px) för mobil viewport
- Byggnadsvägg-färg (#e8e6e1) som bakgrund
"""
from PIL import Image

SRC = "public/exterior-new.jpg"
DST = "public/exterior-mobile.jpg"
TARGET_W = 460    # lite bredare än 390px för säkerhetsmarginal
TARGET_H = 900    # portrait, täcker 100svh på de flesta mobiler
BG_COLOR = (235, 233, 229)  # byggnadens ljusgrå/krämvit väggfärg

img = Image.open(SRC)
orig_w, orig_h = img.size
print(f"Original: {orig_w}x{orig_h}")

# Skala hela bilden till TARGET_W bredd (visar HELA skyltens bredd)
scale = TARGET_W / orig_w
new_w = TARGET_W
new_h = int(orig_h * scale)
print(f"Skalad: {new_w}x{new_h}")

resized = img.resize((new_w, new_h), Image.LANCZOS)

# Skapa portrait-canvas med väggfärg
canvas = Image.new("RGB", (TARGET_W, TARGET_H), BG_COLOR)

# Placera byggnaden i nedre 2/3 del av canvasen (skylt och markiser syns centralt)
paste_y = TARGET_H - new_h  # justera nedre kant mot botten
if paste_y < 0:
    # Bild är taller än canvas — croppa från nedre delen (inkl. gatan)
    crop_top = (-paste_y) // 3   # ta lite från toppen (himmel)
    resized = resized.crop((0, crop_top, new_w, new_h))
    paste_y = TARGET_H - (new_h - crop_top)

canvas.paste(resized, (0, max(0, paste_y)))
canvas.save(DST, "JPEG", quality=85, optimize=True)

from pathlib import Path
size_kb = Path(DST).stat().st_size // 1024
print(f"Sparad: {DST} ({TARGET_W}x{TARGET_H}, {size_kb}KB)")
print("Hela byggnadsbredden synlig — full skylt på mobil!")
