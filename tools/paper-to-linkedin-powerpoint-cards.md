---
name: paper-to-linkedin-powerpoint-cards
description: Transform an academic paper into a reader-friendly, scrollable PowerPoint card deck for LinkedIn, using a calm professional tone, Times New Roman typography, 16:9 cards, and soft-blue takeaway boxes.
---

# Paper → LinkedIn PowerPoint Cards

Use this skill when the user wants to turn a journal article, preprint, report, thesis chapter, conference paper, or uploaded PDF into a **divulgative / reader-friendly set of PowerPoint cards** suitable for LinkedIn or professional public communication.

The output should feel like the previous “card deck” style: self-contained, readable, calm, visually clean, not hype-driven, and useful to both professionals and interested non-specialists.

## Core output

Create an editable `.pptx` deck in **16:9 widescreen format**. Optionally also create a PDF and/or self-contained HTML version when requested.

The deck should normally contain **8–10 cards**. Each card should present one idea, using:

- A short section label, called a `kicker`, except on the first card unless the user asks for one.
- A clear title.
- One or two short explanatory paragraphs.
- A bottom summary / take-home box.
- Optional stat tiles for key numerical findings.
- A final source / citation card.

Do **not** use the phrase “Plain-language summary” on the first card unless the user specifically asks for it.

## Intended tone

Write in a style that is:

- Public-facing but not patronising.
- Professional, warm, and clear.
- Explanatory rather than promotional.
- Accurate about study design and limitations.
- Focused on meaning, not just results.
- Suitable for a LinkedIn audience of clinicians, researchers, service leads, patients, families, charities, and policy-adjacent readers.

The writing should feel like: “Here is why this paper matters, what was done, what was found, and what it means in practice.”

Avoid:

- Hype: “game-changing”, “revolutionary”, “proves”.
- Excessive methodological detail.
- Dense academic phrasing.
- Overstating causal claims from observational, feasibility, qualitative, or audit data.
- Overloading a card with more than one main message.

## Inputs to request or infer

Accept any of the following:

- Paper URL.
- DOI.
- Uploaded PDF.
- Full citation.
- Manuscript text.
- User-supplied notes about intended audience or emphasis.

If the user does not specify audience, assume a mixed professional LinkedIn audience.

If the user does not specify style, use the default visual style below.

## Source handling and accuracy

Before writing the deck:

1. Read the paper sufficiently to identify:
   - Research question / aim.
   - Study design.
   - Setting and sample.
   - Main methods.
   - Primary findings.
   - Key numerical results.
   - Limitations.
   - Practical implications.
   - Full citation and DOI.

2. Preserve the paper’s claims accurately.

3. Use plain language, but do not simplify to the point of distortion.

4. If the study is exploratory, feasibility-based, qualitative, cross-sectional, retrospective, underpowered, or observational, say so indirectly or explicitly where relevant.

5. Do not invent findings, sample sizes, p values, mechanisms, conclusions, or implications.

6. If the paper’s content is inaccessible or unclear, ask for the PDF or manuscript rather than guessing.

## Default card structure

Use this as the standard structure unless the paper calls for a different narrative.

### Card 1 — Cover / hook

Purpose: state the big issue and why the paper exists.

No kicker by default.

Pattern:

- Title: a short, memorable framing sentence.
- Subtitle: what the paper tells us.
- Body: 1–2 paragraphs introducing the problem.
- Take-home box: the central tension or answer.

Example title patterns:

- “Surviving [condition/event] is not the end of the story”
- “Why [topic] needs more than good intentions”
- “What happens after [clinical event]?”
- “When guidelines meet real-world care”

### Card 2 — Why this matters

Purpose: explain the human, clinical, service, or policy relevance.

Kicker: `Why this matters`

Focus on the problem behind the paper, not yet the methods.

### Card 3 — What we did

Purpose: explain the design in plain English.

Kicker: `What we did`

Include:

- Setting.
- Participants / sample.
- Study type.
- What was measured or analysed.

Keep it concise. Do not reproduce the Methods section.

### Card 4 — Key finding 1

Purpose: present the first major result.

Kicker options:

- `What we found`
- `Key finding`
- `Finding 1`

Use stat tiles where the paper has strong headline numbers. A stat card should have no more than four stat tiles.

### Card 5 — Key finding 2

Purpose: present a second major result, contrast, gap, or nuance.

Use this card for:

- Attrition / missingness.
- Differences between intended and actual care.
- A subgroup issue.
- Timing, access, fidelity, engagement, or implementation gaps.
- A clinically meaningful pattern.

### Card 6 — Interpretation

Purpose: explain what the findings mean.

Kicker options:

- `What this means`
- `Why gaps happened`
- `The bigger picture`

This is where the deck becomes useful rather than just descriptive.

### Card 7 — Practical message

Purpose: translate findings into service, practice, policy, or research implications.

Kicker options:

- `The practical message`
- `What needs to change`
- `For services`
- `For clinicians`

Do not write generic “more research is needed” unless this is genuinely the main implication.

### Card 8 — Take-home / what next

Purpose: give a compact, shareable summary of what readers should remember.

Kicker: `Take-home`

This card may include short lines for different audiences, e.g.:

- For patients / families.
- For clinicians.
- For services.
- For researchers.

### Final card — Source

Purpose: cite the original paper.

Kicker: `Source`

Include:

- Full citation.
- DOI or stable URL.
- Open access / licence statement when known.
- Brief note that this is a reader-friendly interpretation.

## Card writing rules

For each card:

- Use one main idea only.
- Use a title that can stand alone.
- Use 40–110 words of body text where possible.
- Use short paragraphs, not bullet-heavy layouts.
- Put the strongest message in the summary box.
- Avoid acronyms unless they are essential; define them the first time.
- Prefer active phrasing.
- Prefer concrete words over abstract nouns.
- Keep numerical claims exact and traceable to the paper.

Good bottom-box summary patterns:

- “The answer: partly — but not consistently enough.”
- “Survival is the start of a pathway, not the end of one.”
- “Offering assessment is not the same as embedding it into routine care.”
- “A good pathway has to be designed for the messy reality of clinical work.”
- “The future of care must include life after survival.”

## Visual design specification

Use this default style to match the previous deck.

### Slide size

- PowerPoint widescreen, 16:9.
- Recommended: 13.333 × 7.5 inches.
- One card per slide.
- White card background.
- No busy images unless the user asks for visuals.

### Typography

Use Times New Roman or a close built-in serif fallback.

Recommended sizes for 16:9 cards:

- Kicker: 12–14 pt, bold, uppercase or small label style.
- Title: 30–34 pt, bold. Use 27–30 pt for long titles.
- Subtitle: 18–20 pt.
- Body: 18–20 pt.
- Stat number: 28–34 pt, bold.
- Stat label: 13–15 pt.
- Summary box: 20–22 pt, bold.
- Source text: 14–16 pt.

Titles should be slightly smaller than a typical presentation title because the cards are meant to be read as a scrollable deck.

### Colours

Use the following default palette:

- Summary box fill: `#CDD3FC`
- Summary box border: `#AEB8F3`
- Accent: `#5D6BB6`
- Main text: `#17202A`
- Muted text: `#566573`
- Soft stat tile background: `#F5F6FF`
- Slide background: `#FFFFFF`

Use the summary colour for the bottom take-home boxes. Do not use dark red unless the user requests it.

### Layout

Use generous margins and a calm editorial layout.

Suggested layout for each 16:9 slide:

- Top label / kicker centred or slightly above title.
- Title centred.
- Optional subtitle centred.
- Body text left-aligned in a central column.
- Stat tiles in one row of up to four tiles.
- Bottom summary box centred and spanning most of the slide width.

Recommended margins:

- Left/right: 0.75–1.0 inch.
- Top: 0.45–0.7 inch.
- Bottom: 0.45–0.7 inch.

Use rounded rectangles for stat tiles and summary boxes.

## Stat tile rules

Use stat tiles only when numbers are central to the story.

Each stat tile should contain:

- A large number.
- A short label.

Examples:

- `61%` / `attended at least one structured follow-up visit`
- `25%` / `with dates were seen within 90 days`
- `185 days` / `median time from discharge to follow-up`

Do not use more than four stat tiles on one card. If there are more than four important numbers, split them across cards.

## Implementation guidance for Codex or code generation

When creating the PowerPoint programmatically, use `python-pptx` if available.

Basic implementation pattern:

1. Create a card data structure.
2. Set slide size to 16:9.
3. Add a blank slide for each card.
4. Add title, kicker, body, stat tiles, and summary box as editable text shapes.
5. Save as `.pptx`.
6. Optionally export or render for visual checking.

Recommended card data schema:

```json
{
  "kicker": "What we found",
  "title": "After discharge: follow-up happened, but often too late or incompletely",
  "subtitle": null,
  "body": [
    "Among those who attended follow-up, screening was completed for cognition in 44%, mood or emotional problems in 52%, and fatigue in 51%."
  ],
  "stats": [
    ["61%", "attended at least one structured follow-up visit"],
    ["25%", "with dates were seen within 90 days"],
    ["185 days", "median time from discharge to follow-up"],
    ["45%", "had a family member attend follow-up"]
  ],
  "take": "Even when follow-up exists, its timing and content can vary substantially."
}
```

The first card may have `kicker: null`.

## Quality checks before returning the file

Before giving the final file to the user, check:

- The deck is 16:9.
- Text is editable, not flattened screenshots, unless the user explicitly asks for image cards.
- Titles fit on the slide and are not too large.
- Summary boxes use `#CDD3FC`.
- The first card does not say “Plain-language summary” unless requested.
- Each card has one clear message.
- Numerical findings match the source paper.
- Limitations and uncertainty are not erased.
- The final card cites the original paper.
- The file opens successfully.
- A quick render or preview shows no overflow or cropped text.

## Suggested final response to the user

Keep the final message brief and link the generated files:

“Done — I created the 16:9 PowerPoint card deck in the same style.

[Download PowerPoint](sandbox:/mnt/data/filename.pptx)”

If a PDF or HTML version is also created, include those links too.

## Optional user-facing prompt template

The user can reuse this prompt:

“Please turn this paper into a reader-friendly LinkedIn card deck using the paper-to-LinkedIn PowerPoint card style: 16:9 slides, Times New Roman, soft-blue takeaway boxes, calm professional tone, one idea per card, 8–10 cards, final source card. Keep the claims accurate and do not overstate the findings: [URL/DOI/PDF].”
