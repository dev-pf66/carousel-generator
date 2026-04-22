# Carousel Generator

Generate Instagram/LinkedIn/TikTok carousel slides as a single self-contained HTML file. The user opens it in a browser to export PNGs or PDF.

This skill is **self-contained** — everything needed is in this folder.

## Defaults

| Setting | Default |
|---------|---------|
| Style | Neon Glow |
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
| **Neon Glow** (default) | Data-driven, info-dense, stats, reports, frameworks | `styles/neon-glow.md` |
| **Brutalist Concrete** | Business breakdowns, case studies, historical comparisons | `styles/brutalist-concrete.md` |

## Workflow

### Step 1: Gather Requirements
- Topic + key points (or generate if given just a topic)
- Platform → determines dimensions (default: 1080×1080)
- Style → Neon Glow unless user says otherwise
- Slide count → 7-10 slides (see `content.md` for guidelines)

### Step 2: Content Strategy
- Pick narrative type from `content.md` (Listicle, Story Arc, How-To, Hot Take, Myth-Buster)
- Outline slide-by-slide content
- Write all copy in Dev's voice (see `voice.md`)

### Step 3: Select Slide Types
- Pick from the 9 templates in `templates/slide-types.md`
- Match template to content (e.g., stats → Data/Stats slide, comparisons → Comparison Table)

### Step 4: Build HTML
- Start with the shell from `templates/html-shell.md`
- Insert design system CSS from `styles/{chosen-style}.md`
- Build each slide using the selected slide type HTML snippets
- Populate with the copy from Step 2

### Step 5: Polish
- Verify text fits — no overflow, no cramping
- Check visual hierarchy — headline > body > footer on every slide
- Ensure slide 1 is a pure hook, last slide is a CTA
- Handle watermark on every slide

### Step 6: Write Companion Caption
- Write a LinkedIn/Instagram caption to pair with the carousel
- Follow `voice.md` guidelines
- Include hook, key takeaway, CTA question, 5-8 hashtags

### Step 7: Deliver
- Save to `~/Desktop/carousel-{slug}.html`
- Tell the user: "Open in Chrome → click any slide to isolate → download PNGs or PDF"

### Step 8: Publish via PostBridge (optional)
After exporting PNGs from the browser:

```bash
# One-time setup
export POST_BRIDGE_API_KEY=pb_live_xxxxx

# List your connected social accounts to get account IDs
node ~/Desktop/carousel-generator/publish.js --list-accounts

# Publish the carousel images (order matters — slide 1 first)
node ~/Desktop/carousel-generator/publish.js \
  --files ~/Desktop/carousel-{slug}-slide-1.png \
          ~/Desktop/carousel-{slug}-slide-2.png \
          ~/Desktop/carousel-{slug}-slide-3.png \
  --accounts acc_id1,acc_id2 \
  --caption "Your caption here"

# Or schedule for later (ISO 8601)
node ~/Desktop/carousel-generator/publish.js \
  --files ~/Desktop/carousel-{slug}-*.png \
  --accounts acc_id1 \
  --caption "Your caption" \
  --schedule "2026-04-23T14:00:00Z"
```

Requires Node.js 18+ (`node --version`). No npm install needed.  
API add-on: $5/month at [post-bridge.com/dashboard/api-keys](https://www.post-bridge.com/dashboard/api-keys).

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
- Text should be **big and bold** — headlines 52-56px, body 15-17px weight 500+
- Differentiate from references — take inspiration but put own spin on it
