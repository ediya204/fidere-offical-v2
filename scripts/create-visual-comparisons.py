from pathlib import Path
from PIL import Image, ImageDraw, ImageFont, ImageChops
import json, shutil, hashlib
BASE=Path(__file__).resolve().parents[1]/'artifacts/visual-validation'
OUT=BASE/'comparison-sheets'; OUT.mkdir(exist_ok=True)
RAW=BASE/'source-captures'; RAW.mkdir(exist_ok=True)
converted=[]
for p in BASE.glob('*.png'):
 with Image.open(p) as im:
  if im.format!='PNG':
   raw=RAW/(p.stem+'.jpg')
   if raw.exists() and raw.read_bytes()!=p.read_bytes(): raw=RAW/(p.stem+'-'+hashlib.sha256(p.read_bytes()).hexdigest()[:10]+'.jpg')
   if not raw.exists():shutil.copyfile(p,raw)
   im.convert('RGB').save(p,format='PNG');converted.append(p.name)
(BASE/'encoding-normalization.json').write_text(json.dumps({'conversion':'Original screenshot JPEG bytes preserved; decoded losslessly to PNG. No scaling or retouching of source captures.','files':converted},indent=2))
fontfile='/System/Library/Fonts/Supplemental/Arial.ttf'
def font(size): return ImageFont.truetype(fontfile,size)
def label(canvas,txt,x,y,size=22): ImageDraw.Draw(canvas).text((x,y),txt,font=font(size),fill='#172c3b')
pairs=[('About','reference-about','fidere-about'),('Wealth management','reference-wealth','fidere-wealth'),('Advisory / Private trust','reference-advisory','fidere-private-trust')]
for device,w,h in [('desktop',720,500),('mobile',390,844)]:
 gap=24;pad=24;bar=86;row=h+bar+24
 canvas=Image.new('RGB',(pad*2+w*2+gap,row*3+pad),'#ffffff')
 for i,(title,ref,local) in enumerate(pairs):
  y=pad+i*row
  label(canvas,title+' | '+('1440 x 1000' if device=='desktop' else '390 x 844'),pad,y,22)
  for col,(stem,caption) in enumerate([(ref,'Lighthouse Canton'),(local,'FIDERE TRUST - white adaptation')]):
   x=pad+col*(w+gap)
   label(canvas,caption,x,y+34,16)
   im=Image.open(BASE/f'{stem}-{device}-top.png').convert('RGB');im=im.resize((w,h),Image.Resampling.LANCZOS)
   canvas.paste(im,(x,y+bar));ImageDraw.Draw(canvas).rectangle((x,y+bar,x+w-1,y+bar+h-1),outline='#d9d7d3')
 canvas.save(OUT/f'comparison-{device}.png')
# Full pages retain the same scale, so differing content lengths remain visible.
w=300;gap=16;pad=20;pairgap=32;bar=92
ims=[]
for title,ref,local in pairs:
 row=[]
 for stem in [ref,local]:
  im=Image.open(BASE/f'{stem}-desktop-full.png').convert('RGB')
  row.append(im.resize((w,round(im.height*w/im.width)),Image.Resampling.LANCZOS))
 ims.append((title,row))
height=max(im.height for _,row in ims for im in row)+bar+pad*2
canvas=Image.new('RGB',(pad*2+3*(w*2+gap)+pairgap*2,height),'white')
for i,(title,row) in enumerate(ims):
 x=pad+i*(w*2+gap+pairgap);label(canvas,title,x,pad,22)
 for j,im in enumerate(row):
  xx=x+j*(w+gap);label(canvas,'Lighthouse' if j==0 else 'FIDERE',xx,pad+34,16);canvas.paste(im,(xx,pad+bar));ImageDraw.Draw(canvas).rectangle((xx,pad+bar,xx+w-1,pad+bar+im.height-1),outline='#d9d7d3')
canvas.save(OUT/'comparison-full-pages.png')
ref=Image.open(BASE/'reference-advisory-desktop-top.png').convert('RGB');local=Image.open(BASE/'fidere-private-trust-desktop-top.png').convert('RGB')
overlay=Image.blend(ref,local,.5);draw=ImageDraw.Draw(overlay)
for x in [80,1360]:draw.line((x,97,x,1000),fill='#00a8c6',width=2)
for y in [97,549]:draw.line((0,y,1440,y),fill='#00a8c6',width=2)
overlay.save(OUT/'advisory-geometry-overlay.png')
# Visual overview of distinct local page bodies, with each whole page at the same width.
names=['private-trust','family-office','corporate-trust','transaction-support','tax-compliance','funds','governance','client-due-diligence']
thumbw=230;gap=18;pad=22
thumbs=[]
for name in names:
 p=BASE/f'fidere-{name}-desktop-full.png'
 im=Image.open(p).convert('RGB');im=im.resize((thumbw,round(im.height*thumbw/im.width)),Image.Resampling.LANCZOS);thumbs.append((name,im))
h=max(im.height for _,im in thumbs)+84
board=Image.new('RGB',(pad*2+4*thumbw+3*gap,h*2+pad),'white')
for i,(name,im) in enumerate(thumbs):
 x=pad+(i%4)*(thumbw+gap);y=pad+(i//4)*h;label(board,name,x,y,16);board.paste(im,(x,y+40));ImageDraw.Draw(board).rectangle((x,y+40,x+thumbw-1,y+40+im.height-1),outline='#d9d7d3')
board.save(OUT/'fidere-page-types.png')
print(json.dumps({'converted':len(converted),'comparison_sheets':[p.name for p in OUT.glob('*.png')]},indent=2))
