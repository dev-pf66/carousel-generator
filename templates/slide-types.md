# Slide Type Templates

9 reusable slide layouts. Each works with any design system — swap the CSS classes for the active style (Neon Glow or Brutalist Concrete).

Class references below use Neon Glow names. For Brutalist Concrete, substitute the equivalent classes from `styles/brutalist-concrete.md`.

---

## 1. Cover

**Use:** First slide. Pure hook — bold headline + optional big stat.

```html
<div class="sc">
  <div class="top"><div class="dots"><!-- active dot --></div><span class="pill green">TAG</span></div>
  <div class="body" style="flex:1;display:flex;flex-direction:column;justify-content:center;gap:20px;">
    <h1 style="font-size:56px;font-weight:700;">The Hook Headline</h1>
    <p style="font-size:16px;color:rgba(255,255,255,.4);">One-line supporting context</p>
    <div class="bstat">
      <span class="blabel">KEY METRIC</span>
      $4.7T
    </div>
  </div>
  <div class="foot"><span class="handle">@devlikesbizness</span><span class="swipe">Swipe to Know More →</span></div>
</div>
```

**Guidelines:**
- Headline should be scroll-stopping — no intro, no logo, just the hook
- Big stat is optional but powerful for data-driven topics
- Keep supporting text to one short line

---

## 2. Timeline / Events

**Use:** Chronological events, numbered milestones, historical moments.

```html
<div class="sc">
  <div class="top"><div class="dots"><!-- dots --></div><span class="pill green">TAG</span></div>
  <p class="eyebrow">EYEBROW LABEL</p>
  <h2 style="font-size:52px;font-weight:700;">Timeline Headline</h2>
  <div class="events" style="flex:1;display:flex;flex-direction:column;gap:14px;justify-content:center;">
    <div class="ev">
      <div class="circ">1</div>
      <div><div class="etitle">Event Title</div><div class="edesc">Brief description of what happened and why it matters.</div></div>
    </div>
    <div class="ev">
      <div class="circ">2</div>
      <div><div class="etitle">Event Title</div><div class="edesc">Brief description.</div></div>
    </div>
    <div class="ev">
      <div class="circ">3</div>
      <div><div class="etitle">Event Title</div><div class="edesc">Brief description.</div></div>
    </div>
  </div>
  <div class="foot"><span class="handle">@devlikesbizness</span><span class="swipe">Swipe →</span></div>
</div>
```

**Guidelines:**
- 3 events per slide max — more gets cramped
- Circle indicators should match the style's accent color
- Keep descriptions to 1-2 lines

---

## 3. Data / Stats

**Use:** Big numbers, KPIs, metrics breakdowns.

```html
<div class="sc">
  <div class="top"><div class="dots"><!-- dots --></div><span class="pill green">TAG</span></div>
  <p class="eyebrow">EYEBROW LABEL</p>
  <h2 style="font-size:52px;font-weight:700;">Stats Headline</h2>
  <div class="stats" style="flex:1;display:flex;flex-direction:column;gap:10px;justify-content:center;">
    <div class="sr"><div class="num">$4.7T</div><div class="desc"><b>Bold lead phrase</b> — supporting detail about this metric.</div></div>
    <div class="sr"><div class="num">43%</div><div class="desc"><b>Bold lead</b> — what this percentage means.</div></div>
    <div class="sr"><div class="num">2.3×</div><div class="desc"><b>Bold lead</b> — context for the multiplier.</div></div>
    <div class="sr"><div class="num">65%</div><div class="desc"><b>Bold lead</b> — final stat detail.</div></div>
  </div>
  <div class="foot"><span class="handle">@devlikesbizness</span><span class="swipe">Swipe →</span></div>
</div>
```

**Guidelines:**
- 3-4 stat rows per slide
- Big number first, description second
- Bold the lead phrase in descriptions
- Use micro labels above stat rows if needed

---

## 4. Problems / Mistakes

**Use:** Red flags, errors, common mistakes, "don't do this" content.

```html
<div class="sc">
  <div class="top"><div class="dots"><!-- dots --></div><span class="pill green">TAG</span></div>
  <p class="eyebrow">EYEBROW LABEL</p>
  <h2 style="font-size:52px;font-weight:700;">Problems Headline</h2>
  <div class="errors" style="flex:1;display:flex;flex-direction:column;gap:12px;justify-content:center;">
    <div class="err">
      <span class="ewm">01</span>
      <div class="etitle">✕ Problem Title</div>
      <div class="edesc">Why this is a problem and what it costs you.</div>
    </div>
    <div class="err">
      <span class="ewm">02</span>
      <div class="etitle">✕ Problem Title</div>
      <div class="edesc">Consequence of this mistake.</div>
    </div>
    <div class="err">
      <span class="ewm">03</span>
      <div class="etitle">✕ Problem Title</div>
      <div class="edesc">What happens when you ignore this.</div>
    </div>
  </div>
  <div class="foot"><span class="handle">@devlikesbizness</span><span class="swipe">Swipe →</span></div>
</div>
```

**Guidelines:**
- 3 error cards per slide (with faded number watermark)
- ✕ prefix on titles for visual consistency
- Red-tinted styling automatically via `.err` class

---

## 5. Definition + Bullets

**Use:** Define a concept, then support with arrow-card takeaways.

```html
<div class="sc">
  <div class="top"><div class="dots"><!-- dots --></div><span class="pill green">TAG</span></div>
  <p class="eyebrow">EYEBROW LABEL</p>
  <h2 style="font-size:52px;font-weight:700;">Concept Headline</h2>
  <div class="body" style="flex:1;display:flex;flex-direction:column;gap:14px;justify-content:center;">
    <div class="glass" style="margin-bottom:8px;">
      <div style="font-size:20px;font-weight:700;">Term / Concept</div>
      <div style="font-size:15px;color:rgba(255,255,255,.4);margin-top:6px;">Definition or explanation of the concept in 2-3 sentences.</div>
    </div>
    <div class="ac"><span class="arrow">→</span><div><div class="atitle">Takeaway One</div><div class="adesc">Why this matters.</div></div></div>
    <div class="ac"><span class="arrow">→</span><div><div class="atitle">Takeaway Two</div><div class="adesc">Practical implication.</div></div></div>
    <div class="ac"><span class="arrow">→</span><div><div class="atitle">Takeaway Three</div><div class="adesc">What to do about it.</div></div></div>
  </div>
  <div class="foot"><span class="handle">@devlikesbizness</span><span class="swipe">Swipe →</span></div>
</div>
```

**Guidelines:**
- Glass card for the definition, arrow cards for supporting points
- 3 arrow cards is the sweet spot
- Definition should be concise — 2-3 sentences max

---

## 6. Comparison Table

**Use:** Feature vs feature, option A vs B, winner/loser comparisons.

```html
<div class="sc">
  <div class="top"><div class="dots"><!-- dots --></div><span class="pill green">TAG</span></div>
  <p class="eyebrow">EYEBROW LABEL</p>
  <h2 style="font-size:52px;font-weight:700;">Comparison Headline</h2>
  <div class="tbody" style="flex:1;display:flex;flex-direction:column;justify-content:center;gap:12px;">
    <table class="ctbl">
      <thead>
        <tr><th>METRIC</th><th class="win">WINNER</th><th>LOSER</th></tr>
      </thead>
      <tbody>
        <tr><td>Row label</td><td class="win">Winner value</td><td class="lose">Loser value</td></tr>
        <tr><td>Row label</td><td class="win">Winner value</td><td class="lose">Loser value</td></tr>
        <tr><td>Row label</td><td class="win">Winner value</td><td class="lose">Loser value</td></tr>
        <tr><td>Row label</td><td class="win">Winner value</td><td class="lose">Loser value</td></tr>
      </tbody>
    </table>
    <div class="glass" style="font-size:13px;color:rgba(255,255,255,.35);">
      Footnote: source or additional context for the data.
    </div>
  </div>
  <div class="foot"><span class="handle">@devlikesbizness</span><span class="swipe">Swipe →</span></div>
</div>
```

**Guidelines:**
- 4-6 rows is the sweet spot
- Highlight the winner column with accent color
- Dim the loser column to create visual hierarchy
- Add a footnote glass card for sources

---

## 7. Card Grid

**Use:** Platform overviews, category breakdowns, 2×2 or 3×N grids.

```html
<div class="sc">
  <div class="top"><div class="dots"><!-- dots --></div><span class="pill green">TAG</span></div>
  <p class="eyebrow">EYEBROW LABEL</p>
  <h2 style="font-size:52px;font-weight:700;">Grid Headline</h2>
  <p style="font-size:15px;color:rgba(255,255,255,.4);margin-bottom:12px;">Brief intro context.</p>
  <div class="grid" style="display:grid;grid-template-columns:1fr 1fr;gap:10px;flex:1;align-content:center;">
    <div class="glass"><div style="font-size:18px;font-weight:700;">Card Title</div><div style="font-size:13px;color:rgba(255,255,255,.4);margin-top:4px;">Description</div></div>
    <div class="glass"><div style="font-size:18px;font-weight:700;">Card Title</div><div style="font-size:13px;color:rgba(255,255,255,.4);margin-top:4px;">Description</div></div>
    <div class="glass"><div style="font-size:18px;font-weight:700;">Card Title</div><div style="font-size:13px;color:rgba(255,255,255,.4);margin-top:4px;">Description</div></div>
    <div class="glass"><div style="font-size:18px;font-weight:700;">Card Title</div><div style="font-size:13px;color:rgba(255,255,255,.4);margin-top:4px;">Description</div></div>
  </div>
  <div class="foot"><span class="handle">@devlikesbizness</span><span class="swipe">Swipe →</span></div>
</div>
```

**Guidelines:**
- 2×2 grid for 4 items (most common)
- 3×N grid for lists of entities (investors, companies, tools)
- Each card should have a bold title + 1-line description
- Use accent border (left or top) to differentiate cards if needed

---

## 8. Steps / Process

**Use:** Numbered steps, how-to sequences, playbook breakdowns.

```html
<div class="sc">
  <div class="top"><div class="dots"><!-- dots --></div><span class="pill green">TAG</span></div>
  <p class="eyebrow">EYEBROW LABEL</p>
  <h2 style="font-size:52px;font-weight:700;">Steps Headline</h2>
  <div class="steps" style="flex:1;display:flex;flex-direction:column;gap:12px;justify-content:center;">
    <div class="sb active">
      <div class="letter">A</div>
      <div><div class="stitle">Step Title</div><div class="sdesc">What to do and why it matters.</div></div>
    </div>
    <div class="sb">
      <div class="letter">B</div>
      <div><div class="stitle">Step Title</div><div class="sdesc">Next action to take.</div></div>
    </div>
    <div class="sb">
      <div class="letter">C</div>
      <div><div class="stitle">Step Title</div><div class="sdesc">Follow-up step.</div></div>
    </div>
    <div class="sb">
      <div class="letter">D</div>
      <div><div class="stitle">Step Title</div><div class="sdesc">Final step in the process.</div></div>
    </div>
  </div>
  <div class="foot"><span class="handle">@devlikesbizness</span><span class="swipe">Swipe →</span></div>
</div>
```

**Guidelines:**
- 3-4 steps per slide (more = too cramped)
- Use letters (A-D) or numbers (1-4)
- Mark the current/active step with `.active` class for glow
- Keep descriptions to one line

---

## 9. CTA (Call to Action)

**Use:** Last slide. Always. Follow prompt + engagement ask.

```html
<div class="sc">
  <div class="top"><div class="dots"><!-- active on last dot --></div></div>
  <div class="cta-center">
    <h2>Follow for More</h2>
    <p class="sub">Daily micro PE insights, deal breakdowns, and frameworks for buying businesses.</p>
    <div class="btns">
      <span class="pill cta-fill">@devlikesbizness</span>
      <span class="pill cta-outline">Save This Post</span>
    </div>
  </div>
  <div class="foot"><span class="handle">@devlikesbizness</span></div>
</div>
```

**Guidelines:**
- Always the last slide
- Two buttons: primary (follow/handle) + secondary (save/share)
- Subtitle should reference what kind of content they'll get
- No "Swipe →" on this slide — it's the end

---

## Slide Type Selection Guide

| Content Type | Best Slide Template |
|-------------|-------------------|
| Opening hook, first impression | **Cover** |
| Historical events, milestones | **Timeline** |
| Numbers, KPIs, metrics | **Data/Stats** |
| Red flags, mistakes, warnings | **Problems** |
| Explain a concept | **Definition + Bullets** |
| A vs B comparison | **Comparison Table** |
| Multiple items/entities | **Card Grid** |
| How-to, playbook, process | **Steps** |
| Final slide, always | **CTA** |
