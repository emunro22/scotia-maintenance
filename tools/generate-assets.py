"""
Generates brand icons (favicon, apple-touch-icon, OG image) from the supplied logo,
plus on-brand stylised landscape panels used as placeholder imagery.

Replace the files in /public/images with real project photography before launch,
keeping the same filenames so no code changes are needed.
"""
import math
import random

from PIL import Image, ImageDraw, ImageFilter

NAVY = (14, 42, 82)
NAVY_DEEP = (10, 30, 60)
BLUE = (27, 111, 178)
CYAN = (41, 166, 201)
CYAN_LIGHT = (95, 195, 222)
MOSS = (62, 107, 76)
MOSS_LIGHT = (99, 143, 106)
MIST = (244, 246, 248)

mark = Image.open("public/scotia-maintenance-mark.png").convert("RGBA")
mark_white = Image.open("public/scotia-maintenance-logo-white.png").convert("RGBA")
logo = Image.open("public/scotia-maintenance-logo.png").convert("RGBA")


def rounded_tile(size, radius_ratio=0.22, bg=NAVY):
    img = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    d = ImageDraw.Draw(img)
    d.rounded_rectangle([0, 0, size - 1, size - 1], radius=int(size * radius_ratio), fill=bg + (255,))
    return img


def icon(size):
    tile = rounded_tile(size)
    w = int(size * 0.66)
    h = int(w * mark_white.height / mark_white.width * 0.0 + w * (mark.height / mark.width))
    m = mark_white.crop(mark_white.getbbox())
    scale = w / m.width
    m = m.resize((w, max(1, int(m.height * scale))), Image.LANCZOS)
    # crop the monogram out of the white lockup
    m = m.crop((0, 0, int(m.width * 0.31), m.height))
    scale2 = (size * 0.62) / m.width
    m = m.resize((int(m.width * scale2), int(m.height * scale2)), Image.LANCZOS)
    tile.alpha_composite(m, ((size - m.width) // 2, (size - m.height) // 2))
    return tile


icon(180).save("public/apple-touch-icon.png")
icon(512).save("public/icon-512.png")
icon(192).save("public/icon-192.png")
ico = icon(64)
ico.save("app/favicon.ico", sizes=[(16, 16), (32, 32), (48, 48), (64, 64)])


# --------------------------------------------------------------------------
# Stylised landscape panels
# --------------------------------------------------------------------------

def lerp(a, b, t):
    return tuple(int(round(a[i] + (b[i] - a[i]) * t)) for i in range(3))


def vertical_gradient(size, top, bottom):
    w, h = size
    img = Image.new("RGB", (w, h))
    d = ImageDraw.Draw(img)
    for y in range(h):
        d.line([(0, y), (w, y)], fill=lerp(top, bottom, y / max(1, h - 1)))
    return img


def hill(draw, w, h, base_y, amp, freq, phase, colour):
    pts = [(0, h)]
    for x in range(0, w + 8, 8):
        y = base_y + math.sin(x / w * math.pi * freq + phase) * amp + math.sin(x / w * math.pi * freq * 2.3 + phase) * amp * 0.35
        pts.append((x, y))
    pts.append((w, h))
    draw.polygon(pts, fill=colour)


def hedge(draw, w, y, height, colour, seed):
    rnd = random.Random(seed)
    x = -20
    while x < w + 20:
        r = rnd.randint(int(height * 0.55), int(height * 1.05))
        draw.ellipse([x - r, y - r, x + r, y + r], fill=colour)
        x += int(r * 0.85)
    draw.rectangle([0, y, w, y + height * 2], fill=colour)


def lawn_stripes(img, w, h, top_y, light, dark, angle=0.14):
    d = ImageDraw.Draw(img)
    band = max(24, w // 22)
    i = 0
    x = -w
    while x < w * 2:
        colour = light if i % 2 == 0 else dark
        skew = int((h - top_y) * angle * 4)
        d.polygon([(x, top_y), (x + band, top_y), (x + band + skew, h), (x + skew, h)], fill=colour)
        x += band
        i += 1


def grain(img, amount=6, seed=1):
    rnd = random.Random(seed)
    w, h = img.size
    noise = Image.new("L", (w // 2, h // 2))
    noise.putdata([rnd.randint(128 - amount * 8, 128 + amount * 8) for _ in range((w // 2) * (h // 2))])
    noise = noise.resize((w, h), Image.BILINEAR).filter(ImageFilter.GaussianBlur(0.6))
    return Image.blend(img, Image.merge("RGB", (noise, noise, noise)), 0.06)


def panel(path, size, seed, warm=0.0, paved=False, beds=False):
    w, h = size
    rnd = random.Random(seed)
    sky_top = lerp(MIST, CYAN_LIGHT, 0.25 + rnd.random() * 0.25)
    sky_bottom = lerp(MIST, (255, 255, 255), 0.5)
    img = vertical_gradient(size, sky_top, sky_bottom)
    d = ImageDraw.Draw(img)

    horizon = int(h * (0.40 + rnd.random() * 0.08))
    hill(d, w, h, horizon, h * 0.035, 1.4, rnd.random() * 3, lerp(NAVY, MIST, 0.72))
    hill(d, w, h, horizon + h * 0.05, h * 0.03, 1.9, rnd.random() * 3, lerp(NAVY, MIST, 0.55))
    hill(d, w, h, horizon + h * 0.10, h * 0.025, 2.4, rnd.random() * 3, lerp(BLUE, MIST, 0.5))

    tree_y = int(horizon + h * 0.14)
    hedge(d, w, tree_y, int(h * 0.055), lerp(MOSS, NAVY, 0.45), seed + 7)
    hedge(d, w, int(tree_y + h * 0.045), int(h * 0.04), lerp(MOSS, NAVY, 0.2), seed + 11)

    lawn_top = int(h * 0.60)
    d.rectangle([0, lawn_top, w, h], fill=lerp(MOSS, (255, 255, 255), 0.12 + warm * 0.1))
    lawn_stripes(img, w, h, lawn_top,
                 lerp(MOSS_LIGHT, (255, 255, 255), 0.20 + warm * 0.08),
                 lerp(MOSS, NAVY, 0.10))
    d = ImageDraw.Draw(img)

    if beds:
        bed_h = int(h * 0.055)
        d.rectangle([0, lawn_top, w, lawn_top + bed_h], fill=lerp((92, 74, 60), NAVY, 0.35))
        x = -10
        while x < w + 10:
            pr = rnd.randint(int(h * 0.012), int(h * 0.028))
            py = lawn_top + rnd.randint(-int(bed_h * 0.4), int(bed_h * 0.3))
            d.ellipse([x - pr, py - pr, x + pr, py + pr],
                      fill=lerp(MOSS_LIGHT, CYAN_LIGHT, rnd.random() * 0.4))
            x += rnd.randint(int(w * 0.03), int(w * 0.06))

    if paved:
        top_w = int(w * 0.12)
        bot_w = int(w * 0.46)
        cx = int(w * 0.5)
        d.polygon([(cx - top_w // 2, lawn_top), (cx + top_w // 2, lawn_top),
                   (cx + bot_w // 2, h), (cx - bot_w // 2, h)],
                  fill=lerp(MIST, NAVY, 0.18))
        rows = 9
        for i in range(1, rows):
            t = (i / rows) ** 1.6
            y = int(lawn_top + (h - lawn_top) * t)
            half = int((top_w + (bot_w - top_w) * t) / 2)
            d.line([(cx - half, y), (cx + half, y)], fill=lerp(MIST, NAVY, 0.30), width=max(1, w // 500))

    img = grain(img, seed=seed)
    img.save(path, "JPEG", quality=82, optimize=True, progressive=True)


panel("public/images/scotia-maintenance-landscaping-glasgow.jpg", (1600, 1200), 3, paved=True, beds=True)
panel("public/images/garden-maintenance-paisley.jpg", (1200, 900), 12, beds=True)
panel("public/images/lawn-maintenance-renfrew-scotland.jpg", (1200, 900), 21)
panel("public/images/garden-landscaping-erskine.jpg", (1200, 900), 34, paved=True)
panel("public/images/planting-borders-bearsden.jpg", (1200, 900), 47, beds=True, warm=0.3)
panel("public/images/outdoor-maintenance-clydebank.jpg", (1200, 900), 55, paved=True)
panel("public/images/garden-improvements-milngavie.jpg", (1200, 900), 63, paved=True, beds=True)
panel("public/images/scotia-maintenance-garden-team-glasgow.jpg", (1400, 1050), 71, beds=True)


# --------------------------------------------------------------------------
# Open Graph image
# --------------------------------------------------------------------------
og = vertical_gradient((1200, 630), NAVY_DEEP, NAVY)
d = ImageDraw.Draw(og)
hill(d, 1200, 630, 470, 22, 1.3, 0.4, lerp(NAVY, CYAN, 0.14))
hill(d, 1200, 630, 520, 18, 2.1, 2.0, lerp(NAVY, CYAN, 0.22))
d.rectangle([0, 574, 1200, 630], fill=CYAN)
lock = logo.crop(logo.getbbox())
scale = 620 / lock.width
lock = lock.resize((620, int(lock.height * scale)), Image.LANCZOS)
white_lock = mark_white.crop(mark_white.getbbox())
white_lock = white_lock.resize((620, int(white_lock.height * (620 / white_lock.width))), Image.LANCZOS)
og = og.convert("RGBA")
og.alpha_composite(white_lock, (90, 150))
d = ImageDraw.Draw(og)
og.convert("RGB").save("public/images/og-scotia-maintenance.jpg", "JPEG", quality=86, optimize=True)

print("assets generated")

# Neutral, scene-descriptive panels used across area pages
panel("public/images/striped-lawn-garden-maintenance-scotland.jpg", (1200, 900), 82)
panel("public/images/garden-border-planting-west-scotland.jpg", (1200, 900), 91, beds=True, warm=0.2)
panel("public/images/landscaped-garden-path-scotland.jpg", (1200, 900), 104, paved=True, beds=True)
panel("public/images/hedge-trimming-garden-tidy-scotland.jpg", (1200, 900), 118, beds=True)
