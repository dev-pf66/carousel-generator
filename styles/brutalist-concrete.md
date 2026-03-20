# Brutalist Concrete Design System

Warm, editorial, paper-textured style. Use for business/strategy breakdowns, case studies, and historical comparisons.

## Design Tokens

| Token | Value |
|-------|-------|
| Background | `#f0ece4` (warm paper) |
| Primary accent | `#e63946` (red) |
| Secondary accent | `#b45309` (amber — historical/comparison) |
| Text primary | `#1a1a1a` (near-black) |
| Text muted | `#777` |
| Heading font | Space Grotesk 700 |
| Body font | Space Mono 400/700 |
| Grain | SVG fractalNoise, opacity `.5`, mix-blend-mode `multiply` |
| Frame outer | `3px solid #1a1a1a` at inset |
| Frame inner | `1px solid #1a1a1a` at 6px inset |
| Red bar | `8px wide`, left edge, full height, `#e63946` |

## Slide Shell Structure

Every slide has this layered structure:

```
┌─ red bar (8px, left edge) ─────────────────────┐
│ ┌─ border-outer (3px solid #1a1a1a) ─────────┐ │
│ │ ┌─ border-inner (1px solid #1a1a1a, 6px) ─┐│ │
│ │ │                                          ││ │
│ │ │  grain overlay                           ││ │
│ │ │  .sc container                           ││ │
│ │ │     .snum watermark                      ││ │
│ │ │     content...                           ││ │
│ │ │     .foot footer                         ││ │
│ │ │                                          ││ │
│ │ └──────────────────────────────────────────┘│ │
│ └────────────────────────────────────────────┘ │
└────────────────────────────────────────────────┘
```

### Shell CSS

```css
.card {
  width: {W}px;
  height: {H}px;
  background: #f0ece4;
  position: relative;
  overflow: hidden;
  border: 3px solid #1a1a1a;
  font-family: 'Space Mono', monospace;
}

/* Red bar */
.card .redbar {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 8px;
  background: #e63946;
  z-index: 5;
}

/* Inner border */
.card .inner-border {
  position: absolute;
  inset: 6px;
  border: 1px solid #1a1a1a;
  pointer-events: none;
  z-index: 4;
}
```

### SVG Grain

```css
.card::after {
  content: '';
  position: absolute;
  inset: 0;
  filter: url(#grain);
  opacity: .5;
  mix-blend-mode: multiply;
  pointer-events: none;
  z-index: 3;
}
```

## Typography

| Element | Size | Weight | Style |
|---------|------|--------|-------|
| Headline | 52-58px (1:1) / 60-66px (4:5) | 700 | Space Grotesk, `#1a1a1a` |
| Cover headline | 56-62px (1:1) / 66-72px (4:5) | 700 | Space Grotesk |
| Eyebrow | 10-12px (1:1) / 12-14px (4:5) | 700 | Space Mono, ls 3-4px, uppercase, `#e63946` |
| Body | 15px (1:1) / 17px (4:5) | 400 | Space Mono, `#1a1a1a` |
| Stat number | 44-48px (1:1) / 48-52px (4:5) | 700 | Space Grotesk, `#e63946` |
| Big hero stat | 88-120px (1:1) / 110-140px (4:5) | 700 | Space Grotesk, `#e63946` |
| Micro label | 10-12px | 700 | Space Mono, ls 2px, uppercase, `#e63946` |
| Card body | 14px (1:1) / 16px (4:5) | 400 | Space Mono |

## Component CSS Classes

### `.box` — Content Box
```css
.box {
  border: 1px solid #1a1a1a;
  padding: 14px 18px;
  background: rgba(26,26,26,.03);
}
.box.red-top {
  border-top: 3px solid #e63946;
}
.box.amber-top {
  border-top: 3px solid #b45309;
}
```

### `.sr` — Stat Row
```css
.sr {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 12px 0;
  border-bottom: 1px solid rgba(26,26,26,.1);
}
.sr .num {
  font-size: 48px;
  font-weight: 700;
  font-family: 'Space Grotesk', sans-serif;
  color: #e63946;
  min-width: 120px;
}
.sr .desc {
  font-size: 15px;
  color: #1a1a1a;
  font-weight: 400;
}
.sr .desc b { font-weight: 700; }
```

### `.ac` — Arrow Card
```css
.ac {
  display: flex;
  gap: 12px;
  align-items: flex-start;
}
.ac .arrow {
  color: #e63946;
  font-size: 18px;
  flex-shrink: 0;
  margin-top: 2px;
}
.ac .atitle { font-weight: 700; color: #1a1a1a; font-size: 16px; }
.ac .adesc { color: #777; font-size: 14px; margin-top: 2px; }
```

### `.ctbl` — Comparison Table
```css
.ctbl {
  width: 100%;
  border-collapse: collapse;
  border: 1px solid #1a1a1a;
}
.ctbl th, .ctbl td {
  padding: 10px 14px;
  text-align: left;
  font-size: 17px;
  border: 1px solid rgba(26,26,26,.15);
}
.ctbl th {
  font-size: 12px;
  letter-spacing: 2px;
  text-transform: uppercase;
  font-weight: 700;
  background: #1a1a1a;
  color: #f0ece4;
}
.ctbl th.red { background: #e63946; color: #fff; }
.ctbl th.amber { background: #b45309; color: #fff; }
.ctbl td { color: #1a1a1a; }
.ctbl td.red { color: #e63946; font-weight: 700; }
```

### `.plat-grid` — Platform/2×2 Grid
```css
.plat-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}
.plat-grid .box {
  border: 1px solid #1a1a1a;
  padding: 14px;
}
.plat-grid .box .title {
  font-size: 16px;
  font-weight: 700;
  font-family: 'Space Grotesk', sans-serif;
  color: #1a1a1a;
  margin-bottom: 6px;
}
.plat-grid .box .desc {
  font-size: 13px;
  color: #777;
}
```

### `.inv-grid` — Investor/3-column Grid
```css
.inv-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 8px;
}
.inv-grid .box {
  border: 1px solid #1a1a1a;
  padding: 12px;
  text-align: center;
}
.inv-grid .box .name {
  font-size: 14px;
  font-weight: 700;
  font-family: 'Space Grotesk', sans-serif;
}
.inv-grid .box .detail {
  font-size: 11px;
  color: #777;
  margin-top: 4px;
}
/* Wide summary row spanning full width */
.inv-grid .wide {
  grid-column: 1 / -1;
  border-top: 2px solid #1a1a1a;
}
```

### `.fw` — Flywheel/Process Steps
```css
.fw {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.fw .step {
  display: flex;
  gap: 14px;
  align-items: flex-start;
}
.fw .step .num {
  width: 32px;
  height: 32px;
  border: 2px solid #e63946;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 14px;
  color: #e63946;
  flex-shrink: 0;
  font-family: 'Space Grotesk', sans-serif;
}
.fw .step .connector {
  width: 2px;
  height: 12px;
  background: rgba(230,57,70,.3);
  margin-left: 15px;
}
.fw .step .stitle { font-size: 16px; font-weight: 700; color: #1a1a1a; }
.fw .step .sdesc { font-size: 13px; color: #777; margin-top: 2px; }
```

### `.sb` — Step Block (Numbered)
```css
.sb {
  display: flex;
  gap: 14px;
  align-items: flex-start;
  padding: 10px 0;
  border-bottom: 1px solid rgba(26,26,26,.1);
}
.sb .num {
  font-size: 32px;
  font-weight: 700;
  font-family: 'Space Grotesk', sans-serif;
  color: #e63946;
  min-width: 40px;
}
.sb .stitle { font-size: 16px; font-weight: 700; color: #1a1a1a; }
.sb .sdesc { font-size: 13px; color: #777; margin-top: 2px; }
```

### `.bstat` — Big Hero Stat
```css
.bstat {
  font-size: 120px;
  font-weight: 700;
  font-family: 'Space Grotesk', sans-serif;
  color: #e63946;
  line-height: 1;
  text-align: center;
}
.bstat .blabel {
  font-size: 12px;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: #e63946;
  font-family: 'Space Mono', monospace;
  display: block;
  margin-bottom: 8px;
}
```

### `.cta-center` — CTA Slide Layout
```css
.cta-center {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 16px;
  flex: 1;
}
.cta-center h2 {
  font-size: 52px;
  font-weight: 700;
  font-family: 'Space Grotesk', sans-serif;
  color: #1a1a1a;
}
.cta-center .sub {
  font-size: 17px;
  color: #777;
  max-width: 600px;
}
.cta-center .btns {
  display: flex;
  gap: 16px;
  margin-top: 16px;
}
/* Filled red button */
.cta-center .btn-fill {
  background: #e63946;
  color: #fff;
  padding: 12px 28px;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  border: none;
}
/* Outline button */
.cta-center .btn-outline {
  background: transparent;
  color: #1a1a1a;
  border: 2px solid #1a1a1a;
  padding: 12px 28px;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
}
```

### Footer
```css
.foot {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
  padding-top: 16px;
}
.foot .handle {
  font-size: 12px;
  color: #777;
  letter-spacing: 1px;
  font-family: 'Space Mono', monospace;
}
.foot .swipe {
  font-size: 11px;
  color: #999;
  letter-spacing: 1px;
  font-family: 'Space Mono', monospace;
}
```

### Slide Number Watermark
```css
.snum {
  position: absolute;
  bottom: 20px;
  right: 30px;
  font-size: 120px;
  font-weight: 700;
  font-family: 'Space Grotesk', sans-serif;
  color: rgba(26,26,26,.04);
  line-height: 1;
  z-index: 0;
  pointer-events: none;
}
```
