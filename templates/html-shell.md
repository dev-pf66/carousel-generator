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
/* ===== BASE (style-agnostic) ===== */
* { margin:0; padding:0; box-sizing:border-box; }
body {
  background: #111;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* --- Page header & controls --- */
.page-header {
  text-align: center;
  padding: 32px 20px 0;
  color: #fff;
}
.page-header h1 {
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 8px;
}
.page-header p {
  font-size: 14px;
  color: rgba(255,255,255,.4);
}

.controls {
  display: flex;
  gap: 12px;
  justify-content: center;
  padding: 20px;
  flex-wrap: wrap;
}
.controls button {
  padding: 10px 20px;
  border: 1px solid rgba(255,255,255,.15);
  background: rgba(255,255,255,.05);
  color: #fff;
  border-radius: 8px;
  cursor: pointer;
  font-size: 13px;
  font-weight: 600;
  transition: all .2s;
}
.controls button:hover {
  background: rgba(255,255,255,.1);
  border-color: rgba(255,255,255,.25);
}

/* --- Slides grid --- */
.slides-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 24px;
  padding: 20px 40px 60px;
  max-width: 1400px;
  width: 100%;
}

/* --- Card scaler (responsive fit) --- */
.card-wrap {
  position: relative;
  cursor: pointer;
}
.card-wrap .dl-btn {
  position: absolute;
  top: 8px;
  right: 8px;
  z-index: 10;
  padding: 6px 12px;
  background: rgba(0,0,0,.6);
  color: #fff;
  border: 1px solid rgba(255,255,255,.15);
  border-radius: 6px;
  font-size: 11px;
  cursor: pointer;
  opacity: 0;
  transition: opacity .2s;
}
.card-wrap:hover .dl-btn { opacity: 1; }

.card {
  width: {W}px;
  height: {H}px;
  position: relative;
  overflow: hidden;
  transform-origin: top left;
}

/* --- Isolate overlay --- */
.iso-overlay {
  display: none;
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,.92);
  z-index: 9999;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.iso-overlay.active { display: flex; }
.iso-overlay .iso-card {
  transform-origin: center center;
}
.iso-hint {
  position: fixed;
  bottom: 24px;
  left: 50%;
  transform: translateX(-50%);
  color: rgba(255,255,255,.3);
  font-size: 13px;
  z-index: 10000;
  pointer-events: none;
}

/* --- SVG grain filter (shared) --- */
svg.grain-filter {
  position: fixed;
  pointer-events: none;
  width: 0;
  height: 0;
}

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
// ===== Scale slides to fit container =====
function scaleSlides() {
  document.querySelectorAll('.card-wrap').forEach(wrap => {
    const card = wrap.querySelector('.card');
    const availW = wrap.parentElement.clientWidth;
    const scale = Math.min(1, availW / {W});
    card.style.transform = `scale(${scale})`;
    wrap.style.height = `${({H}) * scale}px`;
  });
}
window.addEventListener('resize', scaleSlides);
window.addEventListener('load', scaleSlides);

// ===== Isolate slide =====
function iso(wrap) {
  const card = wrap.querySelector('.card');
  const clone = card.cloneNode(true);
  clone.style.transform = 'none';
  const vw = window.innerWidth, vh = window.innerHeight;
  const scale = Math.min((vw * 0.9) / {W}, (vh * 0.9) / {H});
  clone.style.transform = `scale(${scale})`;
  const container = document.getElementById('isoCard');
  container.innerHTML = '';
  container.appendChild(clone);
  document.getElementById('isoOverlay').classList.add('active');
  document.body.style.overflow = 'hidden';
}
function closeIso() {
  document.getElementById('isoOverlay').classList.remove('active');
  document.body.style.overflow = '';
}
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeIso(); });

// ===== Download individual PNG =====
function dl(btn, n) {
  const card = btn.closest('.card-wrap').querySelector('.card');
  html2canvas(card, { scale: 1, width: {W}, height: {H}, useCORS: true }).then(canvas => {
    const a = document.createElement('a');
    a.download = `{FILE_PREFIX}-slide-${n}.png`;
    a.href = canvas.toDataURL('image/png');
    a.click();
  });
}

// ===== Download all as ZIP =====
async function downloadZip() {
  const zip = new JSZip();
  const cards = document.querySelectorAll('.card');
  for (let i = 0; i < cards.length; i++) {
    const canvas = await html2canvas(cards[i], { scale: 1, width: {W}, height: {H}, useCORS: true });
    const blob = await new Promise(r => canvas.toBlob(r, 'image/png'));
    zip.file(`{FILE_PREFIX}-slide-${i + 1}.png`, blob);
  }
  const content = await zip.generateAsync({ type: 'blob' });
  const a = document.createElement('a');
  a.download = `{FILE_PREFIX}-all-slides.zip`;
  a.href = URL.createObjectURL(content);
  a.click();
  URL.revokeObjectURL(a.href);
}

// ===== Download PDF =====
async function downloadPDF() {
  const { jsPDF } = window.jspdf;
  const cards = document.querySelectorAll('.card');
  const pdf = new jsPDF({
    orientation: {W} > {H} ? 'landscape' : ({W} === {H} ? 'landscape' : 'portrait'),
    unit: 'px',
    format: [{W}, {H}]
  });
  for (let i = 0; i < cards.length; i++) {
    if (i > 0) pdf.addPage([{W}, {H}]);
    const canvas = await html2canvas(cards[i], { scale: 2, width: {W}, height: {H}, useCORS: true });
    pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, {W}, {H});
  }
  pdf.save(`{FILE_PREFIX}.pdf`);
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
