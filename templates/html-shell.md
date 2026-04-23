# HTML Shell Template

The boilerplate for every carousel HTML file. Copy this structure, then insert the style-specific CSS and slide content.

Template variables: `{W}`, `{H}`, `{SLIDE_COUNT}`, `{FILE_PREFIX}`, `{TITLE}`, `{GOOGLE_FONTS_URL}`

## Full HTML Shell

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>{TITLE}</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="{GOOGLE_FONTS_URL}" rel="stylesheet">
<script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js"></script>
<style>
/* ===== RESET & BASE ===== */
* { margin:0; padding:0; box-sizing:border-box; }
body {
  background: #111;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
}

/* --- Page header & controls --- */
.page-header { text-align:center; padding:32px 20px 0; }
.page-header h1 { font-size:24px; font-weight:700; margin-bottom:8px; color:#fff; }
.page-header p { font-size:14px; color:rgba(255,255,255,.4); }

.controls { display:flex; gap:12px; justify-content:center; padding:20px; flex-wrap:wrap; }
.controls button {
  padding:10px 20px; border:1px solid rgba(255,255,255,.15); background:rgba(255,255,255,.05);
  color:#fff; border-radius:8px; cursor:pointer; font-size:13px; font-weight:600; transition:all .2s;
}
.controls button:hover { background:rgba(255,255,255,.1); border-color:rgba(255,255,255,.25); }

/* --- Slides container (flex wrap, not CSS grid) --- */
.slides-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  padding: 20px 40px 60px;
  max-width: 1200px;
  width: 100%;
  justify-content: center;
}

/* --- Card wrapper: MUST contain the scaled card --- */
.card-wrap {
  position: relative;
  cursor: pointer;
  overflow: hidden;
  border-radius: 8px;
  flex-shrink: 0;
  /* Dimensions set by JS scaleSlides() */
}
.card-wrap .dl-btn {
  position:absolute; top:8px; right:8px; z-index:10; padding:6px 12px;
  background:rgba(0,0,0,.7); color:#fff; border:1px solid rgba(255,255,255,.2);
  border-radius:6px; font-size:11px; font-weight:600; cursor:pointer;
  opacity:0; transition:opacity .2s;
}
.card-wrap:hover .dl-btn { opacity:1; }

/* --- The actual full-size card, scaled to fit inside wrapper --- */
.card {
  width: {W}px;
  height: {H}px;
  position: absolute;
  top: 0;
  left: 0;
  transform-origin: top left;
  overflow: hidden;
  /* transform: scale() set by JS */
}

/* --- Isolate overlay --- */
.iso-overlay {
  display:none; position:fixed; inset:0; background:rgba(0,0,0,.92);
  z-index:9999; justify-content:center; align-items:center; cursor:pointer;
}
.iso-overlay.active { display:flex; }
.iso-overlay .iso-card { transform-origin:center center; }
.iso-hint {
  position:fixed; bottom:24px; left:50%; transform:translateX(-50%);
  color:rgba(255,255,255,.3); font-size:13px; z-index:10000; pointer-events:none;
}

/* --- SVG grain filter (shared) --- */
svg.grain-filter { position:fixed; pointer-events:none; width:0; height:0; }

/* INSERT STYLE-SPECIFIC CSS HERE */

</style>
</head>
<body>

<!-- SVG grain filter -->
<svg class="grain-filter">
  <filter id="grain">
    <feTurbulence type="fractalNoise" baseFrequency=".65" numOctaves="3" stitchTiles="stitch"/>
  </filter>
</svg>

<!-- Page header -->
<div class="page-header">
  <h1>{TITLE}</h1>
  <p>Click any slide to isolate · {SLIDE_COUNT} slides</p>
</div>

<!-- Controls -->
<div class="controls">
  <button onclick="downloadZip()">Download All PNGs (ZIP)</button>
  <button onclick="downloadPDF()">Download PDF</button>
</div>

<!-- Slides grid -->
<div class="slides-grid">

  <!-- INSERT SLIDES HERE -->
  <!-- Each slide wrapped in:
  <div class="card-wrap" onclick="iso(this)">
    <button class="dl-btn" onclick="event.stopPropagation(); dl(this, {N})">PNG</button>
    <div class="card" id="s{N}">
      ... slide content ...
    </div>
  </div>
  -->

</div>

<!-- Isolate overlay -->
<div class="iso-overlay" id="isoOverlay" onclick="closeIso()">
  <div class="iso-card" id="isoCard"></div>
  <div class="iso-hint">ESC to close · Click anywhere</div>
</div>

<script>
/* ===== RESPONSIVE SCALING =====
   Cards are {W}x{H} but displayed scaled down to ~520px max.
   card-wrap has overflow:hidden + explicit dimensions to contain the card.
   Runs on DOMContentLoaded, load, resize, and after 500ms (font safety).
*/
var CARD_W = {W}, CARD_H = {H};
var PREVIEW_MAX = 520; // max preview width in px

function scaleSlides() {
  var wraps = document.querySelectorAll('.card-wrap');
  var maxW = Math.min(PREVIEW_MAX, window.innerWidth - 80);
  var scale = maxW / CARD_W;
  var displayH = CARD_H * scale;
  wraps.forEach(function(wrap) {
    var card = wrap.querySelector('.card');
    wrap.style.width = maxW + 'px';
    wrap.style.height = displayH + 'px';
    card.style.transform = 'scale(' + scale + ')';
  });
}
window.addEventListener('DOMContentLoaded', scaleSlides);
window.addEventListener('load', scaleSlides);
window.addEventListener('resize', scaleSlides);
setTimeout(scaleSlides, 500); // catch late font loading

/* ===== ISOLATE SLIDE ===== */
function iso(wrap) {
  var card = wrap.querySelector('.card');
  var clone = card.cloneNode(true);
  var vw = window.innerWidth, vh = window.innerHeight;
  var scale = Math.min((vw * 0.85) / CARD_W, (vh * 0.85) / CARD_H);
  clone.style.position = 'absolute';
  clone.style.top = '50%';
  clone.style.left = '50%';
  clone.style.transform = 'translate(-50%, -50%) scale(' + scale + ')';
  var container = document.getElementById('isoCard');
  container.innerHTML = '';
  container.style.width = (CARD_W * scale) + 'px';
  container.style.height = (CARD_H * scale) + 'px';
  container.style.position = 'relative';
  container.appendChild(clone);
  document.getElementById('isoOverlay').classList.add('active');
  document.body.style.overflow = 'hidden';
}
function closeIso() {
  document.getElementById('isoOverlay').classList.remove('active');
  document.body.style.overflow = '';
}
document.addEventListener('keydown', function(e) { if (e.key === 'Escape') closeIso(); });

/* ===== CAPTURE HELPER =====
   Temporarily moves the card off-screen at FULL SIZE (no transform),
   captures it with html2canvas, then restores the scale transform.
   This is critical — html2canvas cannot accurately render scaled elements.
*/
function captureCard(card, scaleFactor) {
  return new Promise(function(resolve) {
    var origTransform = card.style.transform;
    var origPosition = card.style.position;
    // Move off-screen at full size for clean capture
    card.style.transform = 'none';
    card.style.position = 'fixed';
    card.style.top = '-9999px';
    card.style.left = '-9999px';
    // Force reflow
    card.offsetHeight;
    html2canvas(card, {
      scale: scaleFactor || 1,
      width: CARD_W,
      height: CARD_H,
      useCORS: true,
      allowTaint: true,
      backgroundColor: null,
      logging: false
    }).then(function(canvas) {
      card.style.transform = origTransform;
      card.style.position = origPosition;
      card.style.top = '';
      card.style.left = '';
      resolve(canvas);
    }).catch(function(err) {
      card.style.transform = origTransform;
      card.style.position = origPosition;
      card.style.top = '';
      card.style.left = '';
      console.error('Capture error:', err);
      resolve(null);
    });
  });
}

/* ===== DOWNLOAD INDIVIDUAL PNG ===== */
function dl(btn, n) {
  event.stopPropagation();
  var card = btn.closest('.card-wrap').querySelector('.card');
  btn.textContent = '...';
  captureCard(card, 1).then(function(canvas) {
    if (!canvas) { btn.textContent = 'PNG'; return; }
    var a = document.createElement('a');
    a.download = '{FILE_PREFIX}-slide-' + n + '.png';
    a.href = canvas.toDataURL('image/png');
    a.click();
    btn.textContent = 'PNG';
    scaleSlides();
  });
}

/* ===== DOWNLOAD ALL AS ZIP ===== */
async function downloadZip() {
  var zip = new JSZip();
  var cards = document.querySelectorAll('.card');
  for (var i = 0; i < cards.length; i++) {
    var canvas = await captureCard(cards[i], 1);
    if (!canvas) continue;
    var blob = await new Promise(function(r) { canvas.toBlob(r, 'image/png'); });
    zip.file('{FILE_PREFIX}-slide-' + (i + 1) + '.png', blob);
  }
  var content = await zip.generateAsync({ type: 'blob' });
  var a = document.createElement('a');
  a.download = '{FILE_PREFIX}-all-slides.zip';
  a.href = URL.createObjectURL(content);
  a.click();
  URL.revokeObjectURL(a.href);
  scaleSlides();
}

/* ===== DOWNLOAD PDF ===== */
async function downloadPDF() {
  var jsPDF = window.jspdf.jsPDF;
  var cards = document.querySelectorAll('.card');
  var orient = CARD_W >= CARD_H ? 'l' : 'p';
  var pdf = new jsPDF({ orientation: orient, unit: 'px', format: [CARD_W, CARD_H] });
  for (var i = 0; i < cards.length; i++) {
    if (i > 0) pdf.addPage([CARD_W, CARD_H], orient);
    var canvas = await captureCard(cards[i], 2);
    if (!canvas) continue;
    pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, CARD_W, CARD_H);
  }
  pdf.save('{FILE_PREFIX}.pdf');
  scaleSlides();
}
</script>
</body>
</html>
```

## Google Fonts URL Examples

**Neon Glow:**
```
https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600;700&display=swap
```

**Brutalist Concrete:**
```
https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Space+Mono:wght@400;700&display=swap
```

## Slide Wrapper Pattern

Each slide is wrapped like this:

```html
<div class="card-wrap" onclick="iso(this)">
  <button class="dl-btn" onclick="event.stopPropagation(); dl(this, 1)">PNG</button>
  <div class="card" id="s1">
    <!-- Style-specific inner structure -->
    <!-- For Neon Glow: ambient glows + grain + .sc container -->
    <!-- For Brutalist: redbar + inner-border + grain + .sc container -->
    <div class="sc">
      <!-- top bar with dots + badge -->
      <!-- eyebrow -->
      <!-- headline -->
      <!-- body content (components) -->
      <!-- footer -->
    </div>
  </div>
</div>
```

## Inner Container `.sc`

```css
.sc {
  position: relative;
  z-index: 2;
  padding: 48px 56px; /* adjust per format — see spacing scale */
  display: flex;
  flex-direction: column;
  height: 100%;
}
```

## Critical Implementation Notes

### Why cards use `position: absolute` inside wrapper
The `.card` is the actual full-size slide (e.g. 1080x1080). It's positioned absolutely inside `.card-wrap` and CSS-transformed with `scale()` to fit. The wrapper has `overflow: hidden` and explicit width/height set by JS to contain the scaled card. **Never use `position: relative` on `.card`** — it will overflow the wrapper and break the layout.

### Why downloads use `captureCard()` helper
html2canvas **cannot accurately render CSS `transform: scale()`**. The `captureCard()` function temporarily:
1. Removes the scale transform
2. Moves the card off-screen at full size (`position: fixed; top: -9999px`)
3. Captures at native resolution
4. Restores the transform and position

**Never call `html2canvas()` directly on a scaled card.** Always use `captureCard()`.

### html2canvas Limitations — DO NOT USE THESE CSS FEATURES
These CSS properties will render incorrectly or invisibly in PNG/PDF exports:

| CSS Feature | Problem | Use Instead |
|---|---|---|
| `background-clip: text` / `-webkit-background-clip: text` | Text becomes invisible in export | Solid `color` (e.g. `color: #ff6b35`) |
| `-webkit-text-fill-color: transparent` | Same — text disappears | Regular `color` property |
| CSS `filter: blur()` on large elements | Very slow or renders wrong | Keep blur orbs, they're approximate but OK |
| `mix-blend-mode` | Inconsistent rendering | Avoid or use opacity instead |

**Rule: All accent/colored text must use solid `color` values, never gradient-clip text.** The gradient effect looks great in-browser but exports as invisible text. Use a bold solid accent color instead — it still pops.
