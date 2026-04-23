---
name: analyzer
description: Carousel analysis framework — how to tear down a carousel (own or competitor's) and extract what to copy, what to fix, what to avoid. Claude uses this when Dev says "analyze this carousel" or "why did this one hit/flop".
type: reference
---

# Carousel Analyzer

Purpose: systematic teardown of any carousel to produce actionable lessons. Used when Dev shares a link, screenshot, or asks "what's wrong with this one" about his own post or a competitor's.

---

## When Dev triggers this skill

Phrases that route here:
- "analyze this carousel"
- "tear this down"
- "why did this [hit / flop]"
- "what's wrong with this"
- "what can we learn from [competitor handle]"
- "roast my carousel"

---

## The 7-part teardown

Run through all 7 in order. Skip nothing — even the parts that look strong deserve a sentence.

### 1. Hook (Slide 1)
Measured in: does it force slide 2?

Check:
- **Specificity** — does it name a number, name, or outcome? "How I made money" fails. "How $4K turned into $40K ARR in 18 months" passes.
- **Promise** — is the payoff clear? The reader should know what they get if they swipe.
- **Tension** — contrarian, curiosity gap, or loss aversion? Neutral statements die.
- **Visual hierarchy** — is the hook the biggest thing on slide 1? Background art competing with text is a kill signal.
- **Scan test** — cover everything but the hook. Is it still a reason to swipe?

Output: 1-sentence verdict + which hook archetype it used (see hooks.md)

### 2. Promise → payoff tracking
Slide 1 made a promise. Did every other slide deliver on it?

Check:
- Does slide N always advance toward the promise?
- Any slides that could be deleted without losing the promise? (kill candidates)
- Any slides that break frame — bullet lists when the rest is stories, or vice versa?
- Is there a "throwaway" slide — bio plug, generic motivation, filler transition? Cut it.

Output: list of slides that deliver vs. slides that drag

### 3. Information density
Target: 15-35 words per slide. Range bands:
- **< 10 words** — too sparse, feels unfinished unless the visual carries it
- **10-25 words** — sweet spot for most slides
- **25-40 words** — OK for "meat" slides with real substance
- **> 40 words** — reader bounces

Check:
- Which slide is densest? Is that intentional (meat slide) or accidental (writer dumped)?
- Which is thinnest? Is it justified (visual carries it) or lazy?
- Consistency — does slide 3 feel like it belongs with slide 7?

Output: word count per slide, flag outliers

### 4. Visual craft
Check:
- **Consistency** — same type scale, same color palette, same rhythm across all slides
- **Contrast** — can you read it on mobile at 50% size? (zoom out mentally)
- **Hierarchy** — is there a clear primary/secondary/tertiary on each slide?
- **Motifs** — does a recurring visual element tie slides together (a ruler, a dot, a chart style)?
- **Restraint** — are there gradients, shadows, effects doing work? Or decoration for decoration's sake?
- **Breaking the grid** — one slide that intentionally breaks the pattern creates memorability. Zero breaks = monotone.

Output: one-line aesthetic summary + top craft issue

### 5. Narrative arc
The best carousels have a shape. Check which arc this one follows:
- **Listicle** — "N things that X" (flattest, easiest)
- **Before-after** — state A → catalyst → state B
- **Teardown** — thing → parts → verdict
- **Story** — setup → conflict → resolution → lesson
- **Argument** — claim → 3 proofs → conclusion
- **Countdown** — worst to best / least to most
- **Compare** — A vs B across N axes

Check:
- Is there an arc at all, or just a pile of slides?
- Does the arc peak near the end (good) or fizzle (bad)?
- Is there a "false summit" — looks done, then pivots to a deeper insight?

Output: named arc + verdict on arc execution

### 6. CTA / closer
Measured in: does the reader want to do something?

Check:
- Is there a specific ask? (Follow / comment / DM / link)
- Is the ask low-friction? ("Comment 'send' and I'll DM the template" > "DM me for more")
- Does it match the promise? A teardown carousel shouldn't end with "follow for more"
- Is the closer *the strongest slide*? Many carousels die on slide 9 because slide 8 already peaked.

Output: CTA type + whether it's earned

### 7. Audience fit
Check:
- Who is the target reader? Can you name them in a sentence?
- Would Dev's existing audience (PE-curious operators, solo acquirers, 20-something founders) care?
- If the answer is "everyone" — it's for no one
- Is it a post only someone with Dev's specific credibility can write? Or generic enough that a thousand other accounts could post it?

Output: reader persona + differentiation score (1-5)

---

## The scorecard

After the 7-part teardown, produce a scorecard:

| Dimension | Score (1-5) | One-line note |
|-----------|-------------|---------------|
| Hook | | |
| Promise delivery | | |
| Info density | | |
| Visual craft | | |
| Narrative arc | | |
| CTA | | |
| Audience fit | | |
| **Total / 35** | | |

Bands:
- **30-35** — clone this structure into Dev's own content
- **22-29** — solid, extract 1-2 specific lessons
- **15-21** — mixed, skip unless a single dimension is exceptional
- **< 15** — tear down for what *not* to do

---

## Output format when Dev asks for a teardown

```
VERDICT: [one sentence — was it good, bad, or interesting]

WHAT TO COPY:
- [specific technique Dev should steal]
- [specific technique Dev should steal]

WHAT TO FIX:
- [specific failure mode to avoid]
- [specific failure mode to avoid]

SCORECARD:
[table]

LESSON FOR DEV'S NEXT CAROUSEL:
[1-2 sentences — the single action item]
```

Keep it tight. Dev doesn't need a book report.

---

## Competitor analysis variant

When analyzing someone else's carousel (not Dev's), add these checks:

- **Niche overlap** — do they target the same reader as Dev? If not, weight lessons lower.
- **Signal vs style** — separate what's working *because of the content* from what's working *because of audience size*. A 50K-follower account can post mediocre content and still hit. Don't copy a pattern just because the numbers are big.
- **Format arbitrage** — are they doing something format-wise (GIFs, long text posts, specific chart style) that Dev's niche hasn't adopted yet?
- **Voice risk** — if a competitor's voice is very strong, copying their structure can feel derivative. Warn Dev before he clones too close.

---

## Self-analysis variant (Dev's own posts)

When analyzing Dev's own carousel, add:

- **Expectation vs outcome** — did it hit expectations? Why or why not? (Ask Dev if unclear.)
- **Pipeline effect** — did it drive DMs, profile visits, newsletter signups? Engagement ≠ business impact.
- **Memorability** — if someone saw this 3 days ago, what would they remember? If the answer is "nothing specific," the post didn't land even if it got likes.
- **Reusability** — can the structure or style be reused for a different topic? If yes, log it in `top-posts.md` as a proven pattern.

---

## Common failure modes (check against these)

- **Hook bait-and-switch** — slide 1 promises X, slide 2-10 deliver Y
- **Listicle drift** — starts as a story, becomes a bullet list halfway through
- **Filler slide** — one slide that's a generic transition or motivation hit
- **CTA whiplash** — carousel argues Dev's expertise then ends with "what do you think?"
- **Design noise** — 4 accent colors, 3 font weights fighting each other
- **No memorable slide** — nothing to screenshot
- **Assumes context** — uses acronyms or insider references without defining them on slide 1-2
- **Length inflation** — 12 slides of content stretched to 10; or 6 slides padded to 10
- **Soft ending** — last slide is the weakest, kills the share rate

---

## Companion files

- Hook critique → use hook archetypes from `hooks.md`
- Style critique → compare to specs in `styles/*.md`
- Voice critique → cross-check against Dev's top posts in `top-posts.md`
- Fact-check → verify claims against `pocket-fund-facts.md`
