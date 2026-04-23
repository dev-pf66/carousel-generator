# Terminal / Minimal Design System

Dark, developer-native, monospace-everywhere aesthetic. Use for tactical playbooks, process breakdowns, data-heavy content, and anything that benefits from a "steal this command" feeling.

## When to use
- How-To carousels (step-by-step playbooks, sourcing workflows, systems)
- Data + metrics breakdowns (funnels, conversion, stats)
- Contrarian operator content where code/terminal tone adds credibility
- Technical audiences (dev, SaaS, builders, indie operators)

Avoid for: personal stories, warm narratives, editorial takes. Too cold — Warm Midnight or Editorial Magazine suits those better.

## Design Tokens

| Token | Value |
|-------|-------|
| Body background | `#05080c` (deep space) |
| Card background | `#0d1117` (GitHub dark) |
| Gutter background | `#0a0e14` (slightly darker) |
| Terminal chrome bar | `#161b22` |
| Border primary | `#30363d` |
| Border subtle | `#21262d` / `#1f2937` |
| Text primary | `#e6edf3` (bright) |
| Text muted | `#7d8590` |
| Text very muted | `#484f58` (line numbers) |
| Accent green | `#3fb950` (primary CTA / highlight) |
| Accent cyan | `#39c5cf` (secondary emphasis) |
| Accent amber | `#d29922` (numbers, warnings, handwritten) |
| Syntax red/pink | `#ff7b72` (keywords: `const`, `let`, `type`) |
| Syntax cyan-light | `#a5d6ff` (strings) |
| Syntax orange | `#f0a44d` (numbers) |
| Syntax grey | `#8b949e` (comments, italic) |
| Syntax green-bright | `#7ee787` (properties, success) |
| Syntax purple | `#d2a8ff` (function names) |
| Syntax blue | `#58a6ff` (reserved) |
| Error red | `#f85149` |
| Primary font | JetBrains Mono (400, 500, 700, 800) |
| HW annotation font | Caveat (500, 700) |

## Slide Shell Structure

Every slide has terminal window chrome:

```
┌─ chrome (44px, 3 dots + title) ────────────────┐
│  ● ● ●     dev@pocketfund:~/playbook — zsh     │
├────────────────────────────────────────────────┤
│ [gutter: line numbers, 44px wide, optional]    │
│                                                │
│  body (48-56px padding)                        │
│     step-tag, headlines, code blocks           │
│                                                │
├────────────────────────────────────────────────┤
│ scroll-bar (36px, branch · file · meta)        │
└────────────────────────────────────────────────┘
```

### Shell CSS

```css
.card {
  width: {W}px;
  height: {H}px;
  background: #0d1117;
  border: 1px solid #30363d;
  border-radius: 12px;
  position: relative;
  overflow: hidden;
  font-family: 'JetBrains Mono', monospace;
  color: #e6edf3;
}

.chrome {
  position: absolute; top: 0; left: 0; right: 0;
  height: 44px;
  background: #161b22;
  border-bottom: 1px solid #30363d;
  display: flex; align-items: center;
  padding: 0 18px; gap: 8px;
  z-index: 5;
}
.dot { width: 12px; height: 12px; border-radius: 50%; }
.dot.r { background: #ff5f56; }
.dot.y { background: #ffbd2e; }
.dot.g { background: #27c93f; }
.chrome-title {
  flex: 1; text-align: center;
  font-size: 12px; color: #7d8590;
  letter-spacing: 0.5px;
}

.body {
  position: absolute;
  top: 44px; left: 0; right: 0; bottom: 0;
  padding: 48px 56px;
  display: flex; flex-direction: column;
}

.scroll-bar {
  position: absolute;
  bottom: 0; left: 0; right: 0; height: 36px;
  background: #010409;
  border-top: 1px solid #21262d;
  display: flex; align-items: center;
  padding: 0 20px;
  font-size: 12px; color: #7d8590;
  justify-content: space-between;
  z-index: 5;
}
.scroll-bar .left { color: #3fb950; }    /* branch */
.scroll-bar .branch { color: #d29922; }   /* meta */
```

## Typography

| Element | Size (1080×1350) | Weight | Notes |
|---------|------------------|--------|-------|
| Cover title | 92px | 800 | Multi-line, letter-spacing -3px, line-height 0.95 |
| Step headline | 52px | 800 | letter-spacing -1px |
| Mid headline | 68-76px | 800 | for compressed slides |
| Subline | 22px | 400 | `#7d8590`, line-height 1.45 |
| Step tag | 13px | 500 | letter-spacing 2px, uppercase, `#7d8590` with green `[STEP 01/08]` |
| Prompt (`$ ...`) | 18px | 500 | `#3fb950`, `$ ` prefix in muted |
| Code block | 22-26px | 400 | JetBrains Mono, line-height 1.65 |
| Handwritten | 34px | 500 | Caveat, slight rotation, amber default |
| Scroll bar meta | 12px | 400 | JetBrains Mono |
| Gutter line numbers | 11px | 400 | `#484f58`, right-aligned |

## Component CSS Classes

### `.step-tag` — Chapter label
```css
.step-tag {
  font-size: 13px; color: #7d8590;
  letter-spacing: 2px; font-weight: 500;
  margin-bottom: 4px;
}
.step-tag .num { color: #3fb950; }
.step-div {
  border-top: 1px solid #30363d;
  margin: 14px 0 28px;
}
```

Usage: `[STEP 01/08] &nbsp; DEFINE YOUR THESIS`

### `.prompt` — Terminal prompt
```css
.prompt {
  font-size: 18px;
  color: #3fb950;
  margin-bottom: 20px;
  font-weight: 500;
}
.prompt::before {
  content: "$ ";
  color: #7d8590;
}
```

### `.code` — Syntax-highlighted code block
```css
.code {
  background: #010409;
  border: 1px solid #21262d;
  border-radius: 8px;
  padding: 26px 30px;
  font-size: 22px;
  line-height: 1.65;
  color: #e6edf3;
  margin-bottom: 24px;
}
.code.big { font-size: 26px; }

.kw  { color: #ff7b72; }   /* keywords: const, let, type, if */
.str { color: #a5d6ff; }   /* strings */
.num { color: #f0a44d; }   /* numbers */
.cm  { color: #8b949e; font-style: italic; }  /* comments */
.pr  { color: #7ee787; }   /* property names (thesis, Deal) */
.fn  { color: #d2a8ff; }   /* function / key names */
```

### `.bar-row` — Comparison bar
```css
.bar-row {
  display: flex; align-items: center;
  gap: 16px; margin-bottom: 14px;
  font-size: 22px;
}
.bar-row .lbl { width: 180px; color: #e6edf3; }
.bar-row .pct { width: 80px; color: #d29922; font-weight: 700; }
.bar {
  height: 22px;
  background: #3fb950;
  border-radius: 3px;
  box-shadow: 0 0 12px rgba(63,185,80,0.4);
}
.bar.dim { background: #30363d; box-shadow: none; }
```

### `.rules` — Arrow bullet list
```css
.rules {
  list-style: none;
  font-size: 24px;
  line-height: 1.9;
}
.rules li {
  padding-left: 28px;
  position: relative;
  color: #e6edf3;
  margin-bottom: 10px;
}
.rules li::before {
  content: "▸";
  color: #3fb950;
  position: absolute;
  left: 0;
  font-weight: 700;
}
```

### `.q-list` — Numbered questions
```css
.q-list {
  list-style: none;
  font-size: 26px;
  line-height: 1.8;
  font-weight: 500;
}
.q-list li {
  color: #e6edf3;
  margin-bottom: 8px;
  display: flex;
  gap: 18px;
}
.q-list li .qn {
  color: #3fb950;
  font-weight: 700;
}
```

Usage: `<li><span class="qn">01.</span> Why are you selling?</li>`

### `.funnel` — Data conversion funnel
```css
.funnel { margin: 14px 0 24px; }
.funnel-row {
  display: grid;
  grid-template-columns: 140px 1fr 60px;
  gap: 16px; align-items: center;
  margin-bottom: 14px;
  font-size: 22px;
}
.funnel-row .stage {
  color: #7d8590;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 14px;
}
.funnel-row .count {
  color: #d29922;
  font-weight: 700;
  text-align: right;
}
.f-bar {
  height: 26px;
  background: linear-gradient(90deg, #3fb950, #7ee787);
  border-radius: 3px;
}
```

### `.hw` — Handwritten annotation
```css
.hw {
  font-family: 'Caveat', cursive;
  font-size: 34px;
  color: #d29922;                /* amber default */
  transform: rotate(-2deg);
  line-height: 1.2;
  position: absolute;
  z-index: 5;
}
.hw.green { color: #7ee787; }
.hw.cy    { color: #39c5cf; }
```

Position absolutely near content: `style="top:140px;right:60px"` or `style="bottom:120px;right:60px"`.

### `.timeline` — Week/step timeline
```css
.timeline {
  list-style: none;
  font-size: 24px;
  line-height: 1.9;
  padding-left: 10px;
}
.timeline li {
  display: grid;
  grid-template-columns: 140px 40px 1fr;
  align-items: center;
  gap: 8px;
  color: #e6edf3;
  margin-bottom: 8px;
}
.timeline .wk { color: #39c5cf; font-weight: 700; }
.timeline .ar { color: #3fb950; }
```

### `.result-strip` — Numeric result callout
```css
.result-strip {
  background: #010409;
  border-left: 3px solid #3fb950;
  padding: 18px 24px;
  font-size: 22px;
  color: #e6edf3;
  margin: 18px 0;
  line-height: 1.5;
}
.result-strip .num {
  color: #d29922;
  font-weight: 800;
  font-size: 28px;
}
.result-strip .cm {
  display: block;
  color: #8b949e;
  font-size: 16px;
  margin-top: 4px;
  font-style: italic;
}
```

### Cover hero (slide 1)
```css
.cover-hero {
  flex: 1;
  display: flex; flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}
.cover-title {
  font-size: 92px;
  font-weight: 800;
  letter-spacing: -3px;
  line-height: 0.95;
  color: #e6edf3;
  margin-bottom: 28px;
}
.cover-title .g { color: #3fb950; }

.cursor-block {
  display: inline-block;
  width: 20px; height: 90px;
  background: #3fb950;
  vertical-align: middle;
  margin-left: 4px;
  animation: blink 1s step-end infinite;
}
@keyframes blink { 50% { opacity: 0; } }
```

## Slide Type Patterns

### Cover
- Terminal chrome with path-style title (`dev@pocketfund:~/playbook — zsh`)
- `$ cat playbook.md` prompt above title
- Huge `cover-title` (multi-line if needed) with blinking `cursor-block`
- Subline in muted grey with amber/green highlight spans
- Handwritten note in top-right, rotated -2deg
- Scroll bar: `▸ main | file.md | UTF-8 · markdown`

### Step slide
- `[STEP 01/08]` tag with `//` section name in caps
- Big headline (52px) with green accent on the punchline word
- Sub-line (22px, muted)
- Primary visual: `.code` block, `.rules`, `.q-list`, or `.bar-row`
- Handwritten in bottom/top corner
- Scroll bar: `▸ step-NN | NN / 08 | filename.ext`

### Data/Funnel slide
- `.funnel` with stage names, gradient bars, counts
- Conversion rate callout below
- Green handwritten reinforcing the insight

### CTA slide
- `$ exit` prompt
- `cta-main` headline with green accent
- Two short supporting lines
- `cta-dm` with `<span class="cmd">KEYWORD</span>` in amber box
- Handle `@devlikesbizness` with green `@`
- Handwritten closer: "stop reading. start sourcing."

## html2canvas Compatibility

Safe in this style:
- `border-radius` on card and code blocks
- `linear-gradient` on funnel bars (export fine)
- Absolute positioning
- `box-shadow` on glow bars (render ok at small opacity)
- `conic-gradient` — avoid; not needed here

Avoid:
- CSS `animation` during capture — clone-based capture strips the cursor block (set `display:none` on clone)
- `mix-blend-mode` — not used in this style
- `background-clip: text` — not used

Clone-based capture: hide `.cursor-block` with `display: none` on the clone so the blinking cursor doesn't appear mid-blink in the export.

## Design Principles

1. **Monospace everywhere except handwritten notes.** JetBrains Mono for all rendered text — headlines, code, bars, numbers, labels. Caveat only for annotations.
2. **Syntax highlighting is the decoration.** No other graphic ornament — the code IS the art.
3. **Green = go / success / primary action.** Use sparingly; one hero color per slide.
4. **Amber = numbers and warnings.** Reserves attention for data points.
5. **Line numbers and file names build realism.** Even fake ones. Readers subconsciously trust a "real" terminal view.
6. **Window chrome is non-negotiable.** Three dots + path-style title at top, scroll/status bar at bottom. Both frame the content as code output.
7. **Handwritten notes cut the coldness.** One per slide, positioned in a corner, amber or green. Breaks the monospace monotony.
