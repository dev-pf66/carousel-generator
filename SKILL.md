# Carousel Generator

Generate Instagram/LinkedIn/TikTok carousel slides as a single self-contained HTML file. The user opens it in a browser to export PNGs or PDF.

## Linked skill: dev-shah-voice

Voice/copy for every carousel comes from the companion **`dev-shah-voice`** skill.
- Local: `/Users/dev/clawd/skills/dev-shah-voice/` (with references/)
- GitHub: https://github.com/dev-pf66/dev-shah-voice

Load the voice skill before writing slide copy or captions. Key files inside it:
- `SKILL.md` — voice DNA, always/never, hook patterns, content structure
- `references/linkedin-posts.md` — approved LinkedIn exemplars
- `references/twitter-posts.md` — Twitter exemplars
- `references/7-readers.md` — 7-reader framework for voice checks
- `references/content-formulas.md` — proven post skeletons
- `references/editing-sweeps.md` — the editing checklist
- `references/psychology-tactics.md` — the persuasion levers
- `references/examples.md` — worked examples

**Rule:** copy in the carousel (headlines, body, CTA) and the companion caption must pass the voice check from that skill. If the voice skill isn't loaded, ask Dev before shipping copy.

## Defaults

| Setting | Default |
|---------|---------|
| Style | **Ask the user** (no default — always present options) |
| Size | 1080×1080 (square) |
| Fonts | Space Grotesk 700 (headings) + Inter 500-700 (body) |
| Handle | @devlikesbizness (every slide) |
| Exports | Individual PNG, Download All ZIP, Download PDF |
| Save location | `~/Desktop/carousel-{slug}.html` |

## Slide Dimensions

| Platform | Size | Aspect Ratio |
|----------|------|--------------|
| Instagram Post | 1080×1080 | 1:1 |
| Instagram Story/Reel | 1080×1920 | 9:16 |
| LinkedIn Carousel | 1080×1350 | 4:5 |
| TikTok Carousel | 1080×1920 | 9:16 |

## Format-Specific Typography Scale

| Token | 1:1 (1080×1080) | 4:5 (1080×1350) |
|-------|-----------------|-----------------|
| Headline | 52-58px | 60-66px |
| Cover headline | 56-62px | 66-72px |
| Eyebrow / micro label | 10-12px, ls 3-4px | 12-14px, ls 3-4px |
| Body text | 15px | 17px |
| Stat number | 44-48px | 48-52px |
| Big hero stat | 88-120px | 110-140px |
| Card/box body | 14px | 16px |
| Table cells | 17-18px | 20px |
| Table headers | 12-13px | 13-14px |
| CTA headline | 52-56px | 58-62px |
| CTA body | 15-16px | 17-18px |
| Watermark / slide number | 120px, .03-.04 opacity | 140px, .04-.05 opacity |

## Format-Specific Spacing Scale

| Token | 1:1 | 4:5 |
|-------|-----|-----|
| Slide padding | 48-56px 56-64px | 56-64px 64-72px |
| Headline margin-bottom | 16-24px | 24-32px |
| Section gap | 10-14px | 14-18px |
| Stat row padding | 12-14px 0 | 16-18px 0 |
| Card padding | 14px 18px | 18px 22px |
| Footer | margin-top: auto | margin-top: auto |

## Design Systems

| Style | When to Use | File |
|-------|-------------|------|
| **Neon Glow** | Data-driven, info-dense, stats, reports, frameworks | `styles/neon-glow.md` |
| **Brutalist Concrete** | Business breakdowns, case studies, red-flag/warning content | `styles/brutalist-concrete.md` |
| **Warm Midnight** | Seller psychology, negotiation, trust-building, relationship content | `styles/warm-midnight.md` |
| **Terminal / Minimal** | Tactical playbooks, step-by-step processes, data/funnel content, dev-coded voice | `styles/terminal-minimal.md` |
| **Editorial Magazine** | Hot takes, compare/contrast (X vs Y), manifesto-style opinion pieces | `styles/editorial-magazine.md` |

> **Brutalist variants:** base Brutalist uses red (`#e63946`) for warnings/red-flag content. Swap `#e63946` → `#15803d` (green) for positive funnels, winners, success stories. Keep all other tokens identical.

## Companion Reference Files

These files live alongside SKILL.md and get consulted during the workflow. Read them when relevant — don't dump all of them every conversation.

| File | Purpose | When to read |
|------|---------|--------------|
| `hooks.md` | 40+ proven hook patterns + quick-pick matrix by narrative type | Step 2 (planning) — pull 3 hook variants for slide 1 |
| `pocket-fund-facts.md` | Dev's business facts, deal numbers, voice-true quotes, approved CTAs | Step 2 (copy) + Step 7 (caption) — only use numbers/CTAs from this file |
| `top-posts.md` | Dev's top 10 LinkedIn posts + anti-patterns from flops | Step 2 — before drafting, match structure to a proven pattern |
| `analyzer.md` | 7-part teardown framework for carousel critique | When Dev asks "analyze this" or "why did this hit/flop" |
| `case-studies.md` | Structured extracts of Borderless + Dino Games client case studies — numbers, frameworks, quotes | When a carousel needs Pocket Fund proof or framework citations (non-dilutive valuation, deal structure, reframe stories) |
| `dev-shah-voice` skill (linked, not in this folder) | Voice DNA, always/never rules, hook patterns, content formulas, editing sweeps, 7-reader framework, approved LinkedIn/Twitter exemplars | Step 2 (copy) + Step 7 (caption) — before writing ANY user-facing copy |

**Rule — stats and claims:** never invent a number. If a specific Pocket Fund stat isn't in `pocket-fund-facts.md`, ask Dev before using it. External numbers need a source.

**Rule — hooks:** always generate 3 hook variants using patterns from `hooks.md`, let Dev pick. Never ship slide 1 with only one option.

**Rule — CTAs:** use only CTA keywords approved in `pocket-fund-facts.md`. Do not invent new ones without asking.

## Workflow

### Step 1: Gather Requirements
- Topic + key points (or generate if given just a topic)
- Platform → determines dimensions (default: 1080×1080)
- Slide count → 7-10 slides (see `content.md` for guidelines)

### Step 2: Plan the Carousel (PRESENT TO USER BEFORE BUILDING)
- Pick narrative type from `content.md` (Listicle, Story Arc, How-To, Hot Take, Myth-Buster)
- **Check `top-posts.md`** — has Dev validated this topic or format already? If yes, clone the structure that worked.
- **Check `pocket-fund-facts.md`** — pull any real numbers, deal names, or quotes relevant to the topic. Never invent stats.
- **Generate 3 hook variants** using patterns from `hooks.md`. Let Dev pick.
- **If the carousel is about Pocket Fund methodology, deal structure, or client work** — pull numbers and frameworks from `case-studies.md` first. Never invent client specifics.
- Outline slide-by-slide content plan (slide number, type, headline, key points)
- Write all copy in Dev's voice — pull from the **`dev-shah-voice`** skill (local: `/Users/dev/clawd/skills/dev-shah-voice/`, GitHub: `github.com/dev-pf66/dev-shah-voice`). Always check its SKILL.md + `references/linkedin-posts.md` before drafting.
- **Present the plan to the user** with a summary of each slide + the 3 hook options

### Step 3: Ask for Style
- **Do NOT default to any style.** Always present the options and ask the user to pick:
  - **Neon Glow** — black + neon green, glass morphism, info-dense. Best for data/stats/frameworks.
  - **Brutalist Concrete** — warm paper + red (or green) accents, grain overlay, industrial. Best for red flags, case studies, funnels.
  - **Warm Midnight** — deep navy + amber/gold, trust-building. Best for psychology/negotiation/relationships.
  - **Terminal / Minimal** — dark bg, JetBrains Mono, terminal chrome, code blocks with syntax highlighting. Best for tactical playbooks and dev-coded content.
  - **Editorial Magazine** — warm cream paper + navy ink + serif typography (Fraunces/EB Garamond), masthead + split columns. Best for hot takes and compare/contrast (X vs Y).
- Mention which style you'd recommend for the topic, but let the user choose.
- Also ask about interactive enhancements (typewriter animation, handwritten annotations, do/don't splits, document mockups) if relevant to the content.

### Step 4: Select Slide Types
- Pick from the 9 templates in `templates/slide-types.md`
- Match template to content (e.g., stats → Data/Stats slide, comparisons → Comparison Table)

### Step 5: Build HTML
- Start with the shell from `templates/html-shell.md`
- Insert design system CSS from `styles/{chosen-style}.md`
- Build each slide using the selected slide type HTML snippets
- Populate with the copy from Step 2

### Step 6: Polish
- Verify text fits — no overflow, no cramping
- Check visual hierarchy — headline > body > footer on every slide
- Ensure slide 1 is a pure hook, last slide is a CTA
- Handle watermark on every slide

### Step 7: Write Companion Caption
- Write a LinkedIn/Instagram caption to pair with the carousel
- Follow the **`dev-shah-voice`** skill — specifically its LinkedIn voice spec and the editing sweeps in `references/editing-sweeps.md`
- **Caption hook** — use a different hook pattern from `hooks.md` than slide 1 (the caption teases; slide 1 delivers)
- **CTA** — pick from approved CTA keywords in `pocket-fund-facts.md`. Don't invent new ones.
- Include hook, key takeaway, CTA question, 5-8 hashtags

### Step 8: Deliver
- Save to `~/Desktop/carousel-{slug}.html`
- Tell the user: "Open in Chrome → click any slide to isolate → download PNGs or PDF"

## Analysis Mode

When Dev asks "analyze this carousel", "tear this down", "why did this hit/flop", or "roast my carousel":
- Switch to the 7-part teardown framework in `analyzer.md`
- Produce the structured output format defined there (VERDICT → WHAT TO COPY → WHAT TO FIX → SCORECARD → LESSON)
- If the carousel is Dev's own, cross-reference `top-posts.md` — does it match a proven pattern or repeat a known flop?
- If it's a competitor's, flag voice/niche overlap before recommending clones

## File Naming

```
carousel-{topic-slug}.html
```
Examples: `carousel-napkin-valuation.html`, `carousel-seller-lied-meme.html`

## Previous Carousel Catalog

| File | Topic | Style | Size |
|------|-------|-------|------|
| `carousel-laundromat.html` | Why I'd Rather Buy a Laundromat | Dark custom | 1080×1350 |
| `carousel-anatomy-of-a-deal.html` | Anatomy of a Deal | Dark custom | 1080×1350 |
| `carousel-delusional-seller.html` | Delusional Seller Negotiation | Warm dark, amber | 1080×1350 |
| `carousel-seller-lied-meme.html` | Stages of Finding Out the Seller Lied | Dark custom | 1080×1350 |
| `carousel-napkin-valuation.html` | How to Value a Business on a Napkin | Dark custom | 1080×1350 |
| `carousel-loi-insomnia.html` | LOI Insomnia | Indigo, violet | 1080×1350 |
| `mckinsey-ma-carousel.html` | McKinsey M&A Report | **Neon Glow** | 1080×1080 |
| `carousel-ambani-monopoly.html` | The Reliance Monopoly Playbook | **Brutalist Concrete** | 1080×1350 |
| `carousel-india-no-vc.html` | India Doesn't Need Another VC-Backed Startup | **Neon Glow** | 1080×1080 |
| `carousel-wealth-transfer.html` | The Great Indian Wealth Transfer | Comic Panel | 1080×1080 |
| `carousel-loi-psychology.html` | How to Write an LOI That Gets Signed | **Warm Midnight** | 1080×1080 |
| `carousel-real-deal-flow.html` | Stop Browsing BizBuySell — Where Real Deals Are | **Neon Glow** | 1080×1080 |
| `carousel-playbook-terminal.html` | 8-Step Deal Sourcing Playbook | **Terminal / Minimal** | 1080×1350 |
| `carousel-red-flags-brutalist.html` | 8 Red Flags in Due Diligence | **Brutalist Concrete** (red) | 1080×1350 |
| `carousel-pe-vs-vc-editorial.html` | Micro PE vs VC — The Pocket Report | **Editorial Magazine** | 1080×1350 |
| `carousel-80-to-1-funnel.html` | 80→1 · The Deal Evaluation Funnel | **Brutalist Concrete** (green variant) | 1080×1350 |
| `carousel-every-vc-founder.html` | Every VC-Funded Founder Should Buy a Cashflow Business | **Editorial Magazine** | 1080×1350 |
| `carousel-day-in-life-pf.html` | A Day in the Life · PF Analyst | **Warm Midnight** | 1080×1350 |

All on Desktop (`~/Desktop/`). Open any for reference.

## Layout Rules

- Center-aligned text is standard for carousels
- Left-aligned works for longer educational content
- One key idea per slide — never overcrowd
- Slide 1 = hook (bold, curiosity-driven, no logo/intro, just the hook)
- Last slide = CTA
- Every slide: top bar (dots/badge) → eyebrow → headline → body area → footer

## Key Implementation Rules

- All styles inline or in `<style>` — no external CSS (except Google Fonts CDN)
- SVG filter for grain textures — no image dependencies
- All slides in one file — user scrolls to review, clicks to isolate
- Content should be **text/info/value heavy** — packed with real data, not just flashy
- Text should be **big and bold** — headlines 52-58px, body 20px+ weight 500+

## Readability Minimums (ENFORCE ALWAYS)

These are hard floors. Never go below them.

| Element | Min Size | Min Opacity | Notes |
|---------|----------|-------------|-------|
| Headlines | 48px | 100% white | Always full brightness |
| Body / description text | 20px | 75% white (`rgba(255,255,255,.75)`) | The useful content — must be easy to read |
| Bold / key phrases in body | 20px | 100% white | Full `#fff` always |
| Labels (eyebrow, box labels) | 13px | 40% white | Small but still legible |
| Accent text (stats, colored) | 20px | Use solid color, no opacity dim | e.g. `color:#dc2626` not `rgba(...)` |
| Watermark / slide number | 120px+ | 3-5% | Only element allowed below 20% |
| Handle / footer | 13px+ | 20-25% | Decorative, OK to be subtle |
| CTA subtitle | 18px+ | 50% white | Should be readable, not decorative |

**Rule: If it's meant to be read, it must be readable. Only watermarks and decorative elements go below 40% opacity.**
- Differentiate from references — take inspiration but put own spin on it

## Critical: Display & Export Rules (DO NOT SKIP)

### Card Display
- `.card-wrap` MUST have `overflow: hidden` and explicit width/height (set by JS)
- `.card` MUST be `position: absolute; top: 0; left: 0` inside the wrapper
- `.slides-grid` uses `display: flex; flex-wrap: wrap` — NOT CSS grid (grid breaks scaling)
- `scaleSlides()` must run on `DOMContentLoaded`, `load`, `resize`, AND after a 500ms timeout (fonts)

### PNG/PDF Export
- **NEVER call `html2canvas()` directly on a scaled card** — it captures the scaled-down version
- **ALWAYS use the `captureCard()` helper** from `templates/html-shell.md` which temporarily removes the transform, moves off-screen, captures at full resolution, then restores
- After any download, call `scaleSlides()` to restore layout

### html2canvas Banned CSS (will break exports)
- **`background-clip: text`** / **`-webkit-background-clip: text`** → text becomes INVISIBLE in export
- **`-webkit-text-fill-color: transparent`** → same problem, text disappears
- **`mix-blend-mode`** → inconsistent rendering
- **Use solid `color` values for all accent text** (e.g. `color: #4ade80` not gradient-clip)
- Gradient accent colors in-browser are nice but **break exports**. Always use solid colors.

## Export Fixes (CRITICAL — learned the hard way)

### Use Clone-Based captureCard()
The default `captureCard()` in `html-shell.md` moves the original card off-screen. This can fail when `.card-wrap` has `overflow: hidden` — the card gets clipped. **Use the clone-based approach instead:**

```javascript
function captureCard(card, sf) {
  return new Promise(function(resolve) {
    var clone = card.cloneNode(true);
    clone.style.position = 'fixed';
    clone.style.top = '-9999px';
    clone.style.left = '-9999px';
    clone.style.transform = 'none';
    clone.style.width = CARD_W + 'px';
    clone.style.height = CARD_H + 'px';
    // Strip any DOM overlays that html2canvas can't render
    var fx = clone.querySelectorAll('.halftone,.panel-border');
    fx.forEach(function(el) { el.remove(); });
    // If typewriter animation exists, fill in full text
    var tw = clone.querySelector('#typewriter-text');
    if (tw) tw.textContent = "Full headline text here";
    document.body.appendChild(clone);
    clone.offsetHeight;
    html2canvas(clone, {
      scale: sf || 1, width: CARD_W, height: CARD_H,
      useCORS: true, allowTaint: true,
      backgroundColor: '#000', logging: false
    }).then(function(canvas) {
      document.body.removeChild(clone);
      resolve(canvas);
    }).catch(function() {
      document.body.removeChild(clone);
      resolve(null);
    });
  });
}
```

### HD Export (2× resolution)
Always capture at `scale: 2` for crisp exports. PDF uses JPEG at 0.9 quality to keep file size under 100MB.

```javascript
// Individual PNG
captureCard(card, 2)

// PDF
pdf.addImage(cv.toDataURL('image/jpeg', 0.9), 'JPEG', 0, 0, 1080, 1080);
```

### html2canvas Banned CSS (expanded)
In addition to the existing banned list:

| CSS Feature | Problem | Fix |
|---|---|---|
| `::before` / `::after` pseudo-elements with complex backgrounds | Render as gray wash or solid blocks | Use real DOM elements (`.halftone`, `.panel-border`) and strip them from clone during capture |
| `::after` triangle tails on speech bubbles | Render as colored blocks, not triangles | Remove `::after` tails entirely — use plain rounded rectangles |
| `box-shadow` on speech bubbles / badges | Renders inconsistently or as gray artifacts | Remove `box-shadow` from exportable elements |
| Repeating `radial-gradient` patterns (halftone dots) | Renders as solid gray overlay | Move to DOM element, strip during capture |
| CSS `animation` / `@keyframes` | Captures mid-animation state | Fill in final state on clone before capture (e.g., typewriter text) |

### Animation Export Handling
When slides have CSS/JS animations (typewriter, fade-in), the clone must be set to the final state before capture:

```javascript
// In captureCard(), before appending clone:
var tw = clone.querySelector('#typewriter-text');
if (tw) tw.textContent = "Full headline text";
var twSub = clone.querySelector('#tw-sub');
if (twSub) twSub.style.opacity = '1';
var twHw = clone.querySelector('#tw-hw');
if (twHw) twHw.style.opacity = '1';
var twCur = clone.querySelector('#tw-cursor');
if (twCur) twCur.style.display = 'none';
```

## Interactive Design Enhancements

These components add visual variety and engagement to carousels. Available in **Warm Midnight** style but can be adapted to any style.

### 1. Document Mockups (`.loi-doc`)
Cream-colored paper rectangles that look like real documents. Use `.loi-highlight` (amber) and `.loi-hl-green` for callout sections, `.loi-line.dim` for redacted/blurred lines. Great for LOIs, contracts, term sheets.

### 2. Do/Don't Split Layout (`.split`)
Side-by-side red (`.split-col.bad`) and green/amber (`.split-col.good`) columns. Each column has a label and 3 items. Creates instant visual contrast — highly shareable.

### 3. Handwritten Annotations (`.hw-note`)
Caveat font, accent-colored, slightly rotated (`transform:rotate(-3deg)`). Position with absolute + inline styles. Makes slides feel personal and marked-up. Use sparingly — 1 per slide max.

### 4. Typewriter Animation
JS-powered character-by-character typing on cover slide. Subtitle and annotation fade in after typing completes. Blinking cursor during typing. See `styles/warm-midnight.md` for full implementation.
