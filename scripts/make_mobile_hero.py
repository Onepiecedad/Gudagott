#!/usr/bin/env python3
"""
Skapar exterior-mobile.jpg med korrekt aspect ratio för mobil.

Problemet: originalet (1920x1071, 1.79:1) → cover skalar från HÖJD
→ bilden 1357px bred i 515px viewport → X-overflow = 842px → skylten klipt.

Lösningen: skapa 760x900 (0.844:1) portrait-bild → cover skalar från HÖJD
men då bilden är mer portrait → X-overflow bara ~125px → skylten ryms!

Teknik: bygg bilden "underifrån upp":
- Nederst: skalad exteriörfoto (full bredden, hela skylten synlig)
- Ovanpå: utfyllnad med speglade/suddade sektioner av byggnadsväggen
"""
from PIL import Image, ImageFilter, ImageOps

SRC = "public/exterior-new.jpg"
DST = "public/exterior-mobile.jpg"

CANVAS_W = 760
CANVAS_H = 900

img = Image.open(SRC)
orig_w, orig_h = img.size
print(f"Original: {orig_w}x{orig_h} ({orig_w/orig_h:.2f}:1)")

# Skala hela originalbilden till 760px bred (hela skylten synlig)
scale = CANVAS_W / orig_w
scaled_h = int(orig_h * scale)  # ≈ 424px
scaled = img.resize((CANVAS_W, scaled_h), Image.LANCZOS)
print(f"Skalad byggnad: {CANVAS_W}x{scaled_h}")

# Skapa canvas
canvas = Image.new("RGB", (CANVAS_W, CANVAS_H), (235, 233, 229))

# Ta toppen av originalbilden (byggnadsväggen) och skala upp den
# för att fylla utrymmet ovanför butiken
extra_h = CANVAS_H - scaled_h  # ≈ 476px

# Crop toppen av den skalade bilden (tak och övre vägg)
top_source = scaled.crop((0, 0, CANVAS_W, min(extra_h + 60, scaled_h)))
# Spegla och filtrera för naturlig utfyllnad
top_fill = ImageOps.flip(top_source)
top_fill = top_fill.resize((CANVAS_W, extra_h), Image.LANCZOS)
top_fill = top_fill.filter(ImageFilter.GaussianBlur(radius=2))

# Placera: utfyllnad ovanför, byggnaden nedanför
canvas.paste(top_fill, (0, 0))
canvas.paste(scaled, (0, extra_h))

canvas.save(DST, "JPEG", quality=85, optimize=True)

from pathlib import Path
size_kb = Path(DST).stat().st_size // 1024
w, h = Image.open(DST).size
print(f"\nSparad: {DST}")
print(f"Storlek: {w}x{h} ({w/h:.2f}:1), {size_kb}KB")
print(f"\nPå mobil 515x757 med cover:")
cover_scale = max(515/w, 757/h)
disp_w = int(w * cover_scale)
disp_h = int(h * cover_scale)
x_overflow = disp_w - 515
print(f"  Bilden skalas till: {disp_w}x{disp_h}")
print(f"  X overflow: {x_overflow}px (var 842px med originalet)")
print(f"  Skylten syns med god marginal: {'JA ✓' if x_overflow < 200 else 'NEJ ✗'}")
