# Editorial Magazine Design System

Serif-driven, newspaper/magazine aesthetic. Think The Economist, NYT Opinion, or Monocle. Use for compare/contrast content, hot takes that need gravitas, and long-form breakdowns that benefit from an "authoritative publication" frame.

## When to use
- Hot Take or Compare/Contrast carousels (X vs Y, old way vs new way)
- Multi-chapter frameworks where slides work as an article
- Content where the author voice matters (opinion pieces, manifestos)
- Anything that benefits from a magazine-of-record feel

Avoid for: tactical step-by-step playbooks (Terminal/Minimal suits those), punchy/aggressive takes (Brutalist is better), modern data-heavy content (feels wrong).

## Design Tokens

| Token | Value |
|-------|-------|
| Paper background | `#faf7f2` (warm cream) |
| Text primary (ink) | `#0f1729` (near-black navy) |
| Text secondary | `#2a3041` (slightly lighter navy) |
| Editorial red | `#b31b1b` (kickers, accents, italic emphasis) |
| Gold accent | `#b8893d` (ornaments, secondary metadata, PE column) |
| Rule line | `#d4cfc1` (thin horizontal dividers) |
| Rule heavy | `#0f1729` (section dividers, masthead underline) |
| Paper texture | SVG fractalNoise 0.6, opacity `.08`, no blend-mode |
| Display serif | Fraunces (400, 700, 900; italic 400) |
| Body serif | EB Garamond (400, 600; italic 400) |
| Sans (metadata) | Inter (400, 500, 600, 700) |
| Mono (bylines, labels) | IBM Plex Mono (400, 500, 700) |

## Slide Shell Structure

Every slide is a newspaper/magazine page:

```
┌─ masthead ─────────────────────────────────────┐
│  CH. 01 · THEME      The Pocket Report   P. 02 │
│ ───────────────────────────────────────────────│
├────────────────────────────────────────────────┤
│                                                │
│  KICKER / CHAPTER ONE · SECTION NAME           │
│  [Headline — Fraunces 900 italic]              │
│  ─────────────                                 │
│  [article body, pull quotes, columns]          │
│                                                │
├────────────────────────────────────────────────┤
│  SECTION                 §                  NN │
└────────────────────────────────────────────────┘
```

Cover slide uses a full, thicker masthead:
- Top: date + volume
- Center: `The Pocket Report` in italic Fraunces 900 (or chosen publication name)
- Bottom rule: section names + tagline + price

### Shell CSS

```css
.card {
  width: {W}px;
  height: {H}px;
  background: #faf7f2;
  position: relative;
  overflow: hidden;
  font-family: 'EB Garamond', serif;
  color: #0f1729;
}

.paper {
  position: absolute; inset: 0;
  pointer-events: none;
  opacity: 0.08;
  z-index: 1;
  background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='300'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.6' numOctaves='2'/><feColorMatrix values='0 0 0 0 0.4 0 0 0 0 0.35 0 0 0 0 0.25 0 0 0 0.6 0'/></filter><rect width='300' height='300' filter='url(%23n)'/></svg>");
}

.masthead {
  position: absolute; top: 0; left: 0; right: 0;
  border-bottom: 3px solid #0f1729;
  z-index: 2;
  padding: 24px 48px 16px;
}
.masthead.thin {
  border-bottom: 1px solid #0f1729;
  padding: 20px 48px 14px;
}

.foot {
  position: absolute;
  bottom: 14px; left: 48px; right: 48px;
  display: flex; justify-content: space-between;
  font-family: 'IBM Plex Mono', monospace;
  font-size: 10px; letter-spacing: 2.5px;
  text-transform: uppercase;
  color: #0f1729;
  font-weight: 500;
  z-index: 3;
}
.foot .center { color: #b8893d; }
```

## Typography

| Element | Size (1080×1350) | Font / Style | Notes |
|---------|------------------|--------------|-------|
| Publication title | 64px | Fraunces 900 italic | Centered on cover masthead |
| Publication title (thin) | 36px | Fraunces 900 italic | Inside interior mastheads |
| Cover headline | 102px | Fraunces 900 | 0.95 line-height, -3px letter-spacing |
| Section headline | 76px | Fraunces 900 | Interior article pages |
| Section headline (sm) | 60px | Fraunces 900 | When two-column layouts fit below |
| Italic emphasis | inherit | Fraunces italic 400 | For "the math", "different" etc. |
| Deck / subhead | 24-28px | EB Garamond italic | Below headline |
| Body | 20-22px | EB Garamond 400 | Line-height 1.55 |
| Drop cap | 96px | Fraunces 900 | On first paragraph letter |
| Pull quote | 54-62px | Fraunces italic 400 | Centered, border-top+bottom rules |
| Column header | 40px | Fraunces 900 | Compact, letter-spacing -1px |
| Column tag | 11-12px | IBM Plex Mono 700 | Letter-spacing 3px, uppercase, colored |
| Kicker | 12px | IBM Plex Mono 700 | Letter-spacing 3px, `#b31b1b` |
| Masthead meta | 11px | IBM Plex Mono 500 | Letter-spacing 2.5px, uppercase |
| Byline | 12px | IBM Plex Mono 500 | Uppercase, letter-spacing 2.5px |

## Component CSS Classes

### `.masthead` — Top publication bar
```css
.mast-row {
  display: flex; justify-content: space-between;
  align-items: baseline;
  font-family: 'IBM Plex Mono', monospace;
  font-size: 11px;
  letter-spacing: 2.5px;
  text-transform: uppercase;
  color: #0f1729;
  margin-bottom: 6px;
  font-weight: 500;
}
.mast-title {
  font-family: 'Fraunces', serif;
  font-weight: 900;
  font-size: 64px;
  line-height: 1;
  letter-spacing: -1px;
  text-align: center;
  font-style: italic;
}
.mast-title.sm { font-size: 36px; }
.mast-sub-row {
  display: flex;
  justify-content: space-between;
  font-family: 'IBM Plex Mono', monospace;
  font-size: 10px;
  letter-spacing: 2.5px;
  text-transform: uppercase;
  margin-top: 10px;
  border-top: 1px solid #d4cfc1;
  padding-top: 10px;
  font-weight: 500;
}
```

### `.kicker` — Chapter label
```css
.kicker {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 12px;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: #b31b1b;
  font-weight: 700;
  margin-bottom: 14px;
}
.kicker .ch { color: #0f1729; }
```

Usage: `<div class="kicker"><span class="ch">CHAPTER TWO ·</span> THE MATH</div>`

### `.h-section` — Article headline
```css
.h-section {
  font-family: 'Fraunces', serif;
  font-weight: 900;
  font-size: 76px;
  line-height: 0.95;
  letter-spacing: -2px;
  color: #0f1729;
  margin-bottom: 24px;
}
.h-section.sm { font-size: 60px; }
.h-section .it { font-style: italic; font-weight: 400; }
.h-section .red { color: #b31b1b; }
```

Usage: Mix upright + italic on same line: `The VC model is<br><span class="it red">broken</span> for most.`

### `.dropcap-p` — Body paragraph with drop cap
```css
.dropcap-p {
  font-family: 'EB Garamond', serif;
  font-size: 22px;
  line-height: 1.55;
  color: #0f1729;
  margin-bottom: 18px;
}
.dropcap-p::first-letter {
  font-family: 'Fraunces', serif;
  font-weight: 900;
  font-size: 96px;
  line-height: 0.85;
  float: left;
  margin: 8px 14px 0 0;
  color: #b31b1b;
}
```

### `.two-col` — Split-column compare layout (signature component)
```css
.two-col {
  display: grid;
  grid-template-columns: 1fr 3px 1fr;
  gap: 28px;
  margin-top: 10px;
}
.two-col .divider {
  background: #0f1729;
  min-height: 420px;
}

.col-tag {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 11px;
  letter-spacing: 3px;
  text-transform: uppercase;
  font-weight: 700;
  margin-bottom: 10px;
  padding-bottom: 8px;
  border-bottom: 2px solid;
}
.col-tag.vc { color: #b31b1b; border-color: #b31b1b; }
.col-tag.pe { color: #b8893d; border-color: #b8893d; }

.col-h {
  font-family: 'Fraunces', serif;
  font-weight: 900;
  font-size: 40px;
  line-height: 1;
  letter-spacing: -1px;
  margin-bottom: 14px;
  color: #0f1729;
}

.col-points {
  list-style: none;
  font-family: 'EB Garamond', serif;
  font-size: 19px;
  line-height: 1.55;
  color: #0f1729;
}
.col-points li {
  padding-left: 22px;
  position: relative;
  margin-bottom: 10px;
}
.col-points li::before {
  content: "§";
  position: absolute; left: 0;
  color: #b8893d;
  font-family: 'Fraunces', serif;
  font-style: italic;
  font-weight: 700;
}
.col-points.vc li::before { color: #b31b1b; }
```

### `.pull` — Pull quote
```css
.pull {
  font-family: 'Fraunces', serif;
  font-weight: 400;
  font-style: italic;
  font-size: 62px;
  line-height: 1.1;
  color: #0f1729;
  text-align: center;
  padding: 40px 20px;
  border-top: 3px solid #0f1729;
  border-bottom: 3px solid #0f1729;
  margin: 16px 0;
}
.pull .mark {
  color: #b31b1b;
  font-size: 80px;
  line-height: 0;
  vertical-align: -0.2em;
}
.pull-attrib {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 11px;
  letter-spacing: 3px;
  text-transform: uppercase;
  text-align: center;
  color: #0f1729;
  margin-top: 16px;
  font-weight: 500;
}
```

For a featured/intermission pull quote slide, wrap in a double-ruled box with large ornamental quote marks:

```html
<div style="border:2px double #0f1729;padding:60px 40px">
  <div style="font-family:Fraunces;font-size:140px;line-height:0;color:#b31b1b;text-align:center;margin-bottom:30px">❝</div>
  <div style="font-family:Fraunces;font-style:italic;font-size:54px;line-height:1.15;text-align:center">
    Your pull quote here.
  </div>
  <div style="font-family:Fraunces;font-size:140px;line-height:0;color:#b31b1b;text-align:center;margin-top:60px">❞</div>
</div>
```

### `.verdict` — Comparison table
```css
.verdict {
  width: 100%;
  margin-top: 12px;
  border-collapse: collapse;
}
.verdict th {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 11px;
  letter-spacing: 2px;
  text-transform: uppercase;
  font-weight: 700;
  padding: 14px 12px;
  text-align: left;
  border-bottom: 2px solid #0f1729;
  color: #0f1729;
}
.verdict th.vc { color: #b31b1b; }
.verdict th.pe { color: #b8893d; }
.verdict td {
  font-family: 'EB Garamond', serif;
  font-size: 19px;
  line-height: 1.4;
  padding: 14px 12px;
  border-bottom: 1px solid #d4cfc1;
  color: #0f1729;
  vertical-align: top;
}
.verdict td.topic {
  font-weight: 700;
  font-family: 'Fraunces', serif;
  font-style: italic;
  font-size: 20px;
}
```

### `.editor-box` — Editor's Note / CTA
```css
.editor-box {
  border: 3px double #0f1729;
  padding: 40px 44px;
  background: #faf7f2;
}
.editor-label {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 11px;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: #b31b1b;
  font-weight: 700;
  margin-bottom: 20px;
}
.editor-h {
  font-family: 'Fraunces', serif;
  font-weight: 900;
  font-size: 56px;
  line-height: 1;
  letter-spacing: -1px;
  margin-bottom: 20px;
}
.editor-h .it { font-style: italic; }
.editor-body {
  font-family: 'EB Garamond', serif;
  font-size: 22px;
  line-height: 1.55;
  color: #0f1729;
  margin-bottom: 18px;
}
.editor-body em {
  color: #b31b1b;
  font-weight: 600;
  font-style: italic;
}
.editor-sign {
  font-family: 'Fraunces', serif;
  font-style: italic;
  font-size: 30px;
  margin-top: 20px;
}
```

### `.flourish` / `.orn` — Ornamental dividers
```css
.flourish {
  font-family: 'Fraunces', serif;
  font-size: 56px;
  color: #b8893d;
  text-align: center;
  line-height: 1;
  margin: 4px 0;
  font-style: italic;
}
.orn {
  font-family: 'Fraunces', serif;
  font-size: 24px;
  color: #b8893d;
  text-align: center;
  margin: 8px 0;
  letter-spacing: 4px;
  font-style: italic;
}
```

Use `§ · § · §` or `§`  as ornament text.

### `.rule-div` — Horizontal rules
```css
.rule-div { border-top: 2px solid #0f1729; margin: 24px 0; }
.rule-div.thin { border-top: 1px solid #d4cfc1; }
```

## Slide Type Patterns

### Cover (page 01)
- Full masthead with date + volume at top, centered italic publication name, sub-row with section + price
- Centered kicker `★ FEATURE ★ SECTION` in red
- 3px red horizontal rule under kicker (80px wide, centered)
- Enormous headline with italic red word (compare/contrast hinted here)
- Ornamental flourish `§ · § · §` in gold
- Italic serif deck (3 lines max)
- Byline at bottom: `By [Author] · [Role]` with red accent on name

### Chapter page (standard interior)
- Thin masthead: `CH. 02 · THEME · The Pocket Report · P. 03`
- Kicker: `CHAPTER TWO · THE MATH`
- Section headline with italic emphasis word
- Thin rule divider
- Content: either `.two-col` split, drop-cap paragraphs, or stacked sections

### Compare page (`.two-col`)
- Left column = antagonist (VC, old way, problem): red `col-tag`, red bullet `§`
- Right column = protagonist (Micro PE, new way, solution): gold `col-tag`, gold bullet `§`
- Vertical divider between columns (3px solid ink)
- Each column has tag → col-h (40px) → optional col-body → col-points

### Pull quote intermission
- `§ INTERMISSION §` kicker centered
- Double-ruled box with giant `❝ ... ❞` marks in red
- Pull quote in Fraunces italic 54-62px
- `— ATTRIBUTION —` in mono caps below

### Verdict table
- Headline + thick rule-div
- `.verdict` table: TOPIC | VC (red) | PE (gold)
- 6-8 rows, italic Fraunces in TOPIC column
- Closing italic line below, centered

### Editor's Note (CTA)
- Thin masthead reading `EDITOR'S NOTE`
- `.editor-box` with double border
- `§ FROM THE EDITOR §` red label
- Big headline with italic word
- 2-3 body paragraphs
- `▸ TO CORRESPOND` sub-section for CTA
- Signature `— Dev PF` in Fraunces italic 30px

## html2canvas Compatibility

Safe:
- Double borders (`3px double`)
- `::first-letter` drop caps (render correctly)
- Serif italics
- Grid layouts
- SVG paper texture background-image

Avoid:
- `mix-blend-mode` — paper texture uses plain opacity instead
- `background-clip: text`
- `column-count` CSS — use grid `two-col` instead

Clone-based capture works without modification — no animations in this style.

## Design Principles

1. **Gravitas through serifs.** Fraunces does the heavy lifting — 900 weight for bold, italic 400 for emphasis. Mixing upright and italic within a headline creates the compare/contrast feeling.
2. **Red is for emphasis, gold is for ornament.** Red pulls the eye to a word or column tag. Gold reinforces publication identity (flourishes, secondary column, masthead sub-rows).
3. **Grid like a newspaper.** Two columns. Thin rules. Consistent margins (48px sides). Page numbers in mono at bottom corners.
4. **Every page is a spread.** Masthead up top, content in middle, footer at bottom. The repetition is intentional — it sells the "this is a real publication" illusion.
5. **Drop caps only on the opening paragraph.** Not on every paragraph — that's template-y.
6. **Ornamentation is sparse.** `§` bullets, `§ · § · §` dividers, double rules. No emojis. No illustrations. Typography is the decoration.
7. **Attribution always.** Cover has byline. CTA has signature. Interior pages have chapter + page numbers. Makes the piece feel authored.
8. **No handwritten notes.** Unlike Brutalist and Warm Midnight, Editorial Magazine is too formal for Caveat annotations — it breaks the publication frame.
