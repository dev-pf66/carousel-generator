# Warm Midnight Design System

Professional, trust-building carousel style. Deep navy with warm amber/gold accents. Best for seller psychology, negotiation, relationship-driven content.

## Design Tokens

| Token | Value |
|-------|-------|
| Background | `#0f172a` (deep navy) |
| Primary accent | `#f59e0b` (amber/gold) |
| Secondary accent | `#22c55e` (green — for positive/transition highlights) |
| Error/negative | `#ef4444` (red) |
| Text primary | `#fff` |
| Text muted | `rgba(255,255,255,.5)` |
| Text bold-in-body | `#eee` |
| Heading font | Space Grotesk 700 |
| Body font | Inter 500-700 |
| Handwritten font | Caveat 500-700 (annotations) |
| Grain | SVG fractalNoise, opacity `.25`, mix-blend-mode `overlay` |

### Google Fonts URL

```
https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600;700&family=Caveat:wght@400;500;600;700&display=swap
```

### Ambient Glow Orbs (per slide)

```css
.card::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse at 20% 80%, rgba(245,158,11,.08) 0%, transparent 50%),
    radial-gradient(ellipse at 80% 20%, rgba(251,191,36,.06) 0%, transparent 50%),
    radial-gradient(ellipse at 50% 50%, rgba(234,88,12,.04) 0%, transparent 50%);
  z-index: 0;
  pointer-events: none;
}
```

### SVG Grain Overlay

```css
.card::after {
  content: '';
  position: absolute;
  inset: 0;
  filter: url(#grain);
  opacity: .25;
  mix-blend-mode: overlay;
  pointer-events: none;
  z-index: 1;
}
```

## Component CSS Classes

### `.pill.amber` — Badge/Tag
```css
.pill.amber {
  background: rgba(245,158,11,.1);
  color: #f59e0b;
  border: 1px solid rgba(245,158,11,.2);
}
.pill.cta-fill {
  background: #f59e0b;
  color: #0f172a;
  padding: 16px 36px;
  font-size: 18px;
  border-radius: 30px;
  font-weight: 700;
}
.pill.cta-outline {
  background: transparent;
  color: #f59e0b;
  border: 1px solid rgba(245,158,11,.3);
  padding: 16px 36px;
  font-size: 18px;
  border-radius: 30px;
}
```

### Dots Navigation (amber active)
```css
.dots span.active {
  background: rgba(245,158,11,.15);
  border-color: rgba(245,158,11,.3);
  color: #f59e0b;
}
```

### `.eyebrow` — Section Label
```css
.eyebrow {
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 4px;
  text-transform: uppercase;
  color: #f59e0b;
  margin-bottom: 14px;
}
```

### `.glass` — Glass Card
```css
.glass {
  background: rgba(255,255,255,.03);
  border: 1px solid rgba(255,255,255,.06);
  border-radius: 14px;
  padding: 22px 26px;
}
.glass.glow {
  border-color: rgba(245,158,11,.2);
}
```

### `.sr` — Stat Row (amber left border)
```css
.sr {
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 16px 0;
  border-left: 4px solid rgba(245,158,11,.5);
  padding-left: 20px;
}
.sr .num {
  font-size: 52px;
  font-weight: 700;
  color: #fff;
  min-width: 80px;
  font-family: 'Space Grotesk', sans-serif;
}
.sr .desc { font-size: 21px; color: rgba(255,255,255,.5); font-weight: 500; line-height: 1.35; }
.sr .desc b { color: #eee; }
```

### `.sb` — Step Block (amber indicator)
```css
.sb .letter {
  width: 44px;
  height: 44px;
  border-radius: 10px;
  background: rgba(255,255,255,.04);
  border: 1px solid rgba(255,255,255,.08);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 18px;
  color: #f59e0b;
  flex-shrink: 0;
  font-family: 'Space Grotesk', sans-serif;
}
.sb.active .letter {
  background: rgba(245,158,11,.1);
  border-color: rgba(245,158,11,.3);
}
.sb .stitle { font-size: 24px; font-weight: 700; color: #fff; }
.sb .sdesc { font-size: 21px; color: rgba(255,255,255,.5); margin-top: 4px; line-height: 1.35; }
```

### `.ac` — Arrow Card (amber arrow)
```css
.ac .arrow { color: #f59e0b; font-size: 26px; flex-shrink: 0; margin-top: 2px; }
.ac .atitle { font-weight: 700; color: #fff; font-size: 24px; }
.ac .adesc { color: rgba(255,255,255,.5); font-size: 21px; margin-top: 5px; line-height: 1.35; }
```

### `.qb` — Quote Block (amber border)
```css
.qb { border-left: 4px solid rgba(245,158,11,.5); padding-left: 22px; }
.qb .qmark { color: #f59e0b; font-size: 40px; line-height: 1; }
.qb .qtext { font-size: 28px; font-weight: 700; color: #fff; line-height: 1.35; }
```

### `.ctbl` — Comparison Table (amber winner)
```css
.ctbl th.win { color: #f59e0b; background: rgba(245,158,11,.05); }
.ctbl td.win { color: #fff; font-weight: 700; background: rgba(245,158,11,.03); }
.ctbl td.lose { color: rgba(255,255,255,.3); }
```

### `.err` — Error/Problem Card
```css
.err {
  background: rgba(239,68,68,.03);
  border-left: 4px solid rgba(239,68,68,.5);
  border-radius: 12px;
  padding: 22px 26px;
  position: relative;
  overflow: hidden;
}
.err .ewm {
  position: absolute; right: 12px; top: 50%; transform: translateY(-50%);
  font-size: 120px; font-weight: 700; color: rgba(239,68,68,.04); line-height: 1;
}
.err .etitle { font-size: 24px; font-weight: 700; color: #fff; }
.err .edesc { font-size: 21px; color: rgba(255,255,255,.5); margin-top: 6px; line-height: 1.35; }
```

### `.cta-center` — CTA Slide
```css
.cta-center h2 { font-size: 58px; font-weight: 700; color: #fff; }
.cta-center .sub { font-size: 26px; color: rgba(255,255,255,.45); max-width: 750px; line-height: 1.4; }
```

## Special Components

### `.hw-note` — Handwritten Annotation
Caveat font, amber colored, slightly rotated. Feels like someone scribbled personal notes on the slides.

```css
.hw-note {
  font-family: 'Caveat', cursive;
  color: #f59e0b;
  position: absolute;
  font-size: 26px;
  font-weight: 600;
  line-height: 1.2;
}
```

Usage: position with inline styles (`top`, `right`, `transform:rotate(-3deg)`). Can also use `color:#22c55e` for green annotations on transition/positive sections.

### `.loi-doc` — Document Mockup
Cream-colored paper rectangle that looks like a real document. Use highlighted sections to draw attention to key parts.

```css
.loi-doc {
  background: #f5f1eb;
  border-radius: 8px;
  padding: 32px 36px;
  color: #1a1a1a;
  position: relative;
  overflow: hidden;
}
.loi-doc .loi-header {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 16px;
  font-weight: 700;
  color: #666;
  letter-spacing: 2px;
  text-transform: uppercase;
  padding-bottom: 12px;
  border-bottom: 2px solid #ddd;
  margin-bottom: 16px;
}
.loi-doc .loi-line.dim {
  color: #bbb;
  background: repeating-linear-gradient(to right, #ccc 0, #ccc 60px, transparent 60px, transparent 68px);
  background-size: 68px 2px;
  background-position: 0 50%;
  background-repeat: repeat-x;
  height: 14px;
  margin-bottom: 12px;
  border-radius: 2px;
}
.loi-doc .loi-highlight {
  background: rgba(245,158,11,.15);
  border-left: 4px solid #f59e0b;
  padding: 12px 16px;
  border-radius: 0 6px 6px 0;
  margin: 10px 0;
  font-size: 19px;
  color: #1a1a1a;
  line-height: 1.5;
  font-weight: 500;
}
.loi-doc .loi-hl-green {
  background: rgba(34,197,94,.15);
  border-left: 4px solid #22c55e;
  padding: 12px 16px;
  border-radius: 0 6px 6px 0;
  margin: 10px 0;
  font-size: 19px;
  color: #1a1a1a;
  line-height: 1.5;
  font-weight: 500;
}
```

### Do/Don't Split Layout
Side-by-side columns for contrasting good vs bad approaches.

```css
.split { display: flex; gap: 16px; flex: 1; }
.split-col {
  flex: 1; border-radius: 12px; padding: 24px 26px;
  display: flex; flex-direction: column; gap: 14px;
}
.split-col.bad { background: rgba(239,68,68,.06); border: 2px solid rgba(239,68,68,.2); }
.split-col.good { background: rgba(245,158,11,.06); border: 2px solid rgba(245,158,11,.2); }
.split-label { font-size: 14px; font-weight: 700; letter-spacing: 3px; text-transform: uppercase; padding-bottom: 10px; border-bottom: 1px solid rgba(255,255,255,.06); }
.split-label.bad { color: #ef4444; }
.split-label.good { color: #f59e0b; }
.split-item { font-size: 20px; line-height: 1.4; color: rgba(255,255,255,.6); padding-left: 16px; border-left: 3px solid rgba(255,255,255,.06); }
.split-item b { color: #fff; }
.split-col.bad .split-item { border-left-color: rgba(239,68,68,.3); }
.split-col.good .split-item { border-left-color: rgba(245,158,11,.3); }
```

## Typewriter Animation (Cover Slide)

JS-powered typing effect for the headline on slide 1. Types character by character, then fades in subtitle and annotation.

```javascript
(function(){
  var text = "Your headline text here.";
  var el = document.getElementById('typewriter-text');
  var sub = document.getElementById('tw-sub');
  var hw = document.getElementById('tw-hw');
  var i = 0;
  function type(){
    if(i < text.length){
      el.textContent += text.charAt(i);
      i++;
      setTimeout(type, 35 + Math.random() * 25);
    } else {
      setTimeout(function(){ sub.style.opacity = '1'; }, 300);
      setTimeout(function(){ hw.style.opacity = '1'; }, 800);
    }
  }
  setTimeout(type, 600);
})();
```

HTML structure:
```html
<div class="typewriter-wrap">
  <div id="typewriter-text"></div>
  <span class="cursor" id="tw-cursor"></span>
</div>
<p id="tw-sub" style="opacity:0;transition:opacity .6s;">Subtitle text</p>
<span class="hw-note" id="tw-hw" style="opacity:0;transition:opacity .6s;">annotation</span>
```

CSS:
```css
#typewriter-text {
  font-size: 62px; font-weight: 700; line-height: 1.05;
  font-family: 'Space Grotesk', sans-serif; color: #fff;
  min-height: 200px;
}
.cursor {
  display: inline-block; width: 4px; height: 60px; background: #f59e0b;
  margin-left: 4px; vertical-align: text-bottom;
  animation: blink .6s infinite;
}
@keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
```

**Export note:** In `captureCard()`, fill in the full text, set subtitle/annotation opacity to 1, and hide the cursor so PNG/PDF exports show the complete slide.

## When to Use

- Seller psychology, negotiation tactics, relationship-building content
- LOI breakdowns, deal structure walkthroughs
- Any content where trust and warmth matter more than raw data
- Pairs well with: document mockups, do/don't splits, handwritten annotations
