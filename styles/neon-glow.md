# Neon Glow Design System

Dev's preferred carousel style. Pure black, neon green glows, glass morphism, info-dense.

## Design Tokens

| Token | Value |
|-------|-------|
| Background | `#000` (pure black) |
| Primary accent | `#4ade80` (green) |
| Secondary accent | `#06b6d4` (cyan) |
| Error/negative | `#ef4444` (red) |
| Text primary | `#fff` |
| Text muted | `rgba(255,255,255,.4)` to `.45` |
| Text bold-in-body | `#eee` |
| Heading font | Space Grotesk 700 |
| Body font | Inter 500-700 |
| Grain | SVG fractalNoise, opacity `.3`, mix-blend-mode `overlay` |

### Glow Effects

```css
/* Primary green glow (headlines, accent text) */
text-shadow: 0 0 30px rgba(74,222,128,.4), 0 0 60px rgba(74,222,128,.15);

/* Cyan glow (secondary accent) */
text-shadow: 0 0 30px rgba(6,182,212,.4);

/* Red glow (errors/negatives) */
text-shadow: 0 0 30px rgba(239,68,68,.4);

/* Box glow (stat rows, active elements) */
box-shadow: -6px 0 20px rgba(74,222,128,.15);
```

### Ambient Glow Orbs (per slide)

```css
.card::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse at 20% 80%, rgba(74,222,128,.1) 0%, transparent 50%),
    radial-gradient(ellipse at 80% 20%, rgba(6,182,212,.08) 0%, transparent 50%),
    radial-gradient(ellipse at 50% 50%, rgba(168,85,247,.06) 0%, transparent 50%);
  z-index: 0;
  pointer-events: none;
}
```

### SVG Grain Overlay

```html
<svg style="position:fixed;pointer-events:none;width:0;height:0">
  <filter id="grain"><feTurbulence type="fractalNoise" baseFrequency=".65" numOctaves="3" stitchTiles="stitch"/></filter>
</svg>
```

```css
.card::after {
  content: '';
  position: absolute;
  inset: 0;
  filter: url(#grain);
  opacity: .3;
  mix-blend-mode: overlay;
  pointer-events: none;
  z-index: 1;
}
```

## Typography

| Element | Size | Weight | Style |
|---------|------|--------|-------|
| Headline | 52-56px | 700 | Space Grotesk, white, optional green glow |
| Eyebrow | 14px | 700 | letter-spacing 3px, uppercase, green with glow |
| Glass card title | 20-24px | 700 | white |
| Body / description | 15-17px | 500 | `rgba(255,255,255,.4)` to `.45` |
| Bold in body | — | 700 | color `#eee` |
| Stat number | 48px | 700 | white with subtle green text-shadow |
| Big hero stat | 120px | 700 | green `#4ade80` with strong glow |
| Micro label | 10-12px | 700 | letter-spacing 2px, uppercase, green with glow |

## Slide Structure

Every slide follows this vertical flow:

```
┌─────────────────────────────┐
│ ● ● ●(dots)        [BADGE] │  ← top bar
│                             │
│ EYEBROW LABEL               │
│ Main Headline               │
│                             │
│ ┌─────────────────────────┐ │
│ │    Body content area    │ │  ← flex:1, centered
│ │    (components here)    │ │
│ └─────────────────────────┘ │
│                             │
│ @devlikesbizness    Swipe → │  ← footer
└─────────────────────────────┘
```

## Component CSS Classes

### `.glass` — Glass Card
```css
.glass {
  background: rgba(255,255,255,.03);
  border: 1px solid rgba(255,255,255,.06);
  border-radius: 14px;
  padding: 14px 18px;
}
/* Glow variant */
.glass.glow {
  border-color: rgba(74,222,128,.2);
  box-shadow: 0 0 20px rgba(74,222,128,.05);
}
/* Cyan variant */
.glass.cyan {
  border-left: 3px solid rgba(6,182,212,.6);
}
```

### `.sr` — Stat Row
```css
.sr {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 12px 0;
  border-left: 3px solid rgba(74,222,128,.5);
  padding-left: 16px;
  box-shadow: -6px 0 20px rgba(74,222,128,.15);
}
.sr .num {
  font-size: 48px;
  font-weight: 700;
  color: #fff;
  text-shadow: 0 0 20px rgba(74,222,128,.3);
  min-width: 120px;
}
.sr .desc {
  font-size: 15px;
  color: rgba(255,255,255,.45);
  font-weight: 500;
}
.sr .desc b { color: #eee; }
```

### `.ev` — Event/Timeline Block
```css
.ev {
  display: flex;
  align-items: flex-start;
  gap: 16px;
}
.ev .circ {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: rgba(255,255,255,.04);
  border: 1px solid rgba(255,255,255,.08);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 14px;
  color: #4ade80;
  flex-shrink: 0;
}
.ev .etitle { font-size: 20px; font-weight: 700; color: #fff; }
.ev .edesc { font-size: 15px; color: rgba(255,255,255,.4); margin-top: 4px; }
```

### `.err` — Error/Problem Card
```css
.err {
  background: rgba(239,68,68,.03);
  border-left: 3px solid rgba(239,68,68,.5);
  border-radius: 12px;
  padding: 14px 18px;
  position: relative;
  overflow: hidden;
}
.err .ewm {
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 120px;
  font-weight: 700;
  color: rgba(239,68,68,.04);
  line-height: 1;
}
.err .etitle {
  font-size: 17px;
  font-weight: 700;
  color: #fff;
}
.err .edesc {
  font-size: 14px;
  color: rgba(255,255,255,.4);
  margin-top: 4px;
}
```

### `.ac` — Arrow Card (Takeaway/Bullet)
```css
.ac {
  display: flex;
  gap: 12px;
  align-items: flex-start;
}
.ac .arrow {
  color: #4ade80;
  font-size: 18px;
  flex-shrink: 0;
  margin-top: 2px;
  text-shadow: 0 0 15px rgba(74,222,128,.4);
}
.ac .atitle { font-weight: 700; color: #fff; font-size: 16px; }
.ac .adesc { color: rgba(255,255,255,.4); font-size: 14px; margin-top: 2px; }
```

### `.sb` — Step Block (Lettered)
```css
.sb {
  display: flex;
  gap: 14px;
  align-items: flex-start;
}
.sb .letter {
  width: 34px;
  height: 34px;
  border-radius: 8px;
  background: rgba(255,255,255,.04);
  border: 1px solid rgba(255,255,255,.08);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 14px;
  color: #4ade80;
  flex-shrink: 0;
}
/* Active step — green glow */
.sb.active .letter {
  background: rgba(74,222,128,.1);
  border-color: rgba(74,222,128,.3);
  box-shadow: 0 0 12px rgba(74,222,128,.2);
}
.sb .stitle { font-size: 17px; font-weight: 700; color: #fff; }
.sb .sdesc { font-size: 14px; color: rgba(255,255,255,.4); margin-top: 2px; }
```

### `.pill` — Badge/Tag
```css
.pill {
  display: inline-block;
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
}
.pill.green {
  background: rgba(74,222,128,.1);
  color: #4ade80;
  border: 1px solid rgba(74,222,128,.2);
}
.pill.dark {
  background: rgba(255,255,255,.04);
  color: rgba(255,255,255,.5);
  border: 1px solid rgba(255,255,255,.08);
}
/* CTA filled pill button */
.pill.cta-fill {
  background: #4ade80;
  color: #000;
  padding: 12px 28px;
  font-size: 14px;
  border-radius: 30px;
  cursor: pointer;
}
/* CTA outline pill button */
.pill.cta-outline {
  background: transparent;
  color: #4ade80;
  border: 1px solid rgba(74,222,128,.3);
  padding: 12px 28px;
  font-size: 14px;
  border-radius: 30px;
}
```

### `.ctbl` — Comparison Table
```css
.ctbl {
  width: 100%;
  border-collapse: collapse;
}
.ctbl th, .ctbl td {
  padding: 10px 14px;
  text-align: left;
  font-size: 17px;
}
.ctbl th {
  font-size: 12px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: rgba(255,255,255,.3);
  font-weight: 700;
  border-bottom: 1px solid rgba(255,255,255,.06);
}
/* Winner column header */
.ctbl th.win {
  color: #4ade80;
  text-shadow: 0 0 20px rgba(74,222,128,.3);
  background: rgba(74,222,128,.05);
}
/* Winner column cells */
.ctbl td.win {
  color: #fff;
  font-weight: 700;
  background: rgba(74,222,128,.03);
}
/* Loser column cells */
.ctbl td.lose {
  color: rgba(255,255,255,.25);
}
.ctbl tr { border-bottom: 1px solid rgba(255,255,255,.04); }
```

### `.qb` — Quote Block
```css
.qb {
  border-left: 3px solid rgba(74,222,128,.5);
  padding-left: 18px;
  box-shadow: -6px 0 20px rgba(74,222,128,.15);
}
.qb .qmark {
  color: #4ade80;
  font-size: 32px;
  text-shadow: 0 0 20px rgba(74,222,128,.4);
  line-height: 1;
}
.qb .qtext {
  font-size: 20px;
  font-weight: 700;
  color: #fff;
  line-height: 1.4;
}
```

### `.bstat` — Big Hero Stat
```css
.bstat {
  font-size: 120px;
  font-weight: 700;
  color: #4ade80;
  text-shadow: 0 0 40px rgba(74,222,128,.5), 0 0 80px rgba(74,222,128,.2);
  line-height: 1;
  text-align: center;
}
.bstat .blabel {
  font-size: 12px;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: #4ade80;
  text-shadow: 0 0 20px rgba(74,222,128,.4);
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
  color: #fff;
  text-shadow: 0 0 30px rgba(74,222,128,.2);
}
.cta-center .sub {
  font-size: 17px;
  color: rgba(255,255,255,.4);
  max-width: 600px;
}
.cta-center .btns {
  display: flex;
  gap: 16px;
  margin-top: 16px;
}
```

### Dots Navigation
```css
.dots {
  display: flex;
  gap: 8px;
}
.dots span {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: rgba(255,255,255,.06);
  border: 1px solid rgba(255,255,255,.08);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 9px;
  font-weight: 700;
  color: rgba(255,255,255,.2);
}
.dots span.active {
  background: rgba(74,222,128,.15);
  border-color: rgba(74,222,128,.3);
  color: #4ade80;
  box-shadow: 0 0 10px rgba(74,222,128,.2);
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
  color: rgba(255,255,255,.2);
  letter-spacing: 1px;
}
.foot .swipe {
  font-size: 11px;
  color: rgba(255,255,255,.15);
  letter-spacing: 1px;
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
  color: rgba(255,255,255,.03);
  line-height: 1;
  z-index: 0;
  pointer-events: none;
}
```
