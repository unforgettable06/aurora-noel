# -*- coding: utf-8 -*-
import qrcode
from PIL import Image, ImageDraw, ImageFont

URL = "https://unforgettable06.github.io/aurora-noel/"

qr = qrcode.QRCode(version=None, error_correction=qrcode.constants.ERROR_CORRECT_H, box_size=12, border=2)
qr.add_data(URL)
qr.make(fit=True)
qr_img = qr.make_image(fill_color="#0b1622", back_color="#f4f8ff").convert("RGB")
qr_size = 620
qr_img = qr_img.resize((qr_size, qr_size), Image.LANCZOS)

W, H = 1080, 1480
img = Image.new("RGB", (W, H), "#08111c")
d = ImageDraw.Draw(img)

for y in range(H):
    t = y / H
    r = int(8 + 6 * (1 - abs(t - .5) * 2))
    g = int(17 + 14 * (1 - abs(t - .5) * 2))
    b = int(28 + 26 * (1 - abs(t - .5) * 2))
    d.line([(0, y), (W, y)], fill=(r, g, b))

def font(size, bold=False):
    name = "msyhbd.ttc" if bold else "msyh.ttc"
    return ImageFont.truetype(rf"C:\Windows\Fonts\{name}", size)

def center(text, y, f, fill):
    bbox = d.textbbox((0, 0), text, font=f)
    d.text(((W - (bbox[2] - bbox[0])) / 2, y), text, font=f, fill=fill)

center("M E R R Y   C H R I S T M A S", 78, font(26), "#e7bd82")
center("极光圣诞树", 120, font(72, True), "#f2f7ff")
center("体验入口", 215, font(46), "#bcd6ee")

panel = 700
px, py = (W - panel) // 2, 320
d.rounded_rectangle([px, py, px + panel, py + panel], radius=36, fill="#eef5ff")
img.paste(qr_img, (px + (panel - qr_size) // 2, py + (panel - qr_size) // 2))

center(URL, 1070, font(34), "#9fc4e6")

steps = [
    ("1", "手机相机扫上面的二维码，或浏览器打开链接"),
    ("2", "点右边的「手势控制」，允许摄像头"),
    ("3", "张开手掌 → 捏合食指和拇指，随机看照片"),
]
y = 1140
for num, text in steps:
    d.ellipse([110, y + 6, 158, y + 54], fill="#e7bd82")
    fb = d.textbbox((0, 0), num, font=font(28, True))
    d.text((134 - (fb[2] - fb[0]) / 2, y + 10), num, font=font(28, True), fill="#08111c")
    d.text((180, y + 10), text, font=font(30), fill="#dbe9f7")
    y += 82

center("不用下载 · 不用注册 · 免费公开", 1400, font(28), "#7f9bb5")

img.save(r"C:\Users\28999\OneDrive\文档\deepseek-harness\default-workspace\aurora-noel-120\docs\share-qr.png")
print("saved")