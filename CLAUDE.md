# Blaze Robotics Academy — Project Guide

Marketing website for **Blaze Robotics Academy**, a K–12 robotics education program
(four Seattle-area locations: Bellevue, Bel-Red, Sammamish, Issaquah).

> New session? Read this file, then skim `CHANGELOG.md` for the latest changes. The most
> recent work has been on `index.html`'s hero section.

## What this is

A set of **static HTML pages**. **No build step, no framework, no bundler** — just files
served as-is. External dependencies are Google Fonts (Barlow / Barlow Condensed) over CDN,
plus the project's own shared `css/base.css` and `js/main.js`.

Each page links the shared design system, then carries its own **page-specific** `<style>`
block and (where needed) a small inline `<script>` for page-only behavior.

### Directory layout
```
/                      ← HTML pages live in the root (keeps clean URLs + Vercel routing)
├── css/base.css       ← shared design system: :root tokens, nav, buttons, footer,
│                         ticker, scroll-reveal, the @media(max-width:960px) base, etc.
├── js/main.js         ← shared site JS: scroll-reveal observer + mobile nav toggle
└── assets/img/        ← images (e.g. logo_trimmed.png)
```
Every page has `<link rel="stylesheet" href="css/base.css">` **before** its own `<style>`
(so page CSS can override base), and `<script src="js/main.js"></script>` near `</body>`.
**Edit shared chrome/tokens in `css/base.css` / `js/main.js` once** — don't re-add it per page.

| File | Page | Purpose |
| --- | --- | --- |
| `index.html` | Home | Overview, three pillars, four-stage journey. **Most actively edited.** Has page-specific carousel JS in its own inline IIFE. |
| `ignite.html` | Ignite Curiosity | Step 01 — trial classes / membership, no experience needed. Inline `showQ()` helper. |
| `build.html` | Build Mastery | Step 02 — structured courses & camps by grade. Inline `filterC()` helper. |
| `compete.html` | Compete | Track A — competition teams, tournament prep. |
| `innovate.html` | Innovate | Track B — capstone projects, "Robot for Good". |
| `about.html` | About Us | Story, approach, Ignite partnership, FAQs. |

## Running the preview

Dev server is configured in `.claude/launch.json` (named `static-site`):
`python -m http.server 8000` → <http://localhost:8000>.

- Start via the `preview_start` tool with name `static-site` (preferred), or
  `python -m http.server 8000` in the project root.
- The preview environment **resets scroll/navigation to index between screenshots**;
  re-navigate with `location.assign('http://localhost:8000/index.html')` and verify layout
  by reading computed styles / `getBoundingClientRect` via `preview_eval` rather than
  trusting a single screenshot.
- Note: the user also views a **stale Vercel deploy** (`new-blaze-website.vercel.app`).
  Local edits don't appear there until redeployed — localhost has the latest.

## Conventions

### Design system (all 6 pages; defined once in `css/base.css`)
- Fonts: **Barlow Condensed** (display/headings, uppercase) + **Barlow** (body).
- Shared `:root` CSS custom properties (in `base.css`): `--blue`, `--blue-dk`, `--gold-lt`,
  `--red`, `--display`, `--body`, `--dark:#0f1419`, etc.
- Display headings use `font-weight:600` (deliberately lightened from 900); site chrome
  (nav links `.nl a`) stays bold (900) for contrast.
- The logo is an **image** (`assets/img/logo_trimmed.png`, `.logo-img`), sized 42px tall in
  the nav (34px on mobile). The old text-wordmark CSS (`.logo-text/.logo-name/.logo-sub`) is
  kept **commented out** in each page's `<style>` in case we revert.
- Card corners ~8px with top/left gold accent borders. Glassmorphism for the hero CTA
  panel (translucent bg + `backdrop-filter:blur` + gold top border).
- `about.html` was originally a different design system (Outfit font) — it has been fully
  restyled to match the others. Keep it consistent with the shared system.

### Copy voice (IMPORTANT — also in user memory)
- **No brand names in marketing copy.** Genericize VEX / Tinkercad / Fusion 360
  (e.g. "VEX Robotics" → "Robotics"; "Tinkercad & Fusion 360" → "professional CAD
  software"). **Keep brand names only in factual competition references** — e.g.
  "2026 VEX World Champions", "VEX IQ tournaments", the "What Is VEX?" explainer on
  `ignite.html`, coach credentials.
- **Avoid the repetitive "real … real … real" phrasing.** Lone natural uses are fine.

### Responsive
- Primary breakpoint is **`@media(max-width:960px)`** (desktop → tablet/mobile).
- `index.html` also has a **secondary phone breakpoint `@media(max-width:560px)`** that
  stacks the card grids (`.pillars`, `.jgrid`, `.lgrid`) to a single column — at phone
  widths the 2-up cells are too narrow for card titles and overflow. Tablets (560–960px)
  keep the 2-up layout.
- Mobile grid columns use **`minmax(0,1fr)`** (not plain `1fr`) so tracks can shrink to
  the viewport — plain `1fr` has a `min-width:auto` floor that caused horizontal overflow
  on the home page.
- The hero uses CSS Grid `grid-template-areas` + `display:contents` (on `.hero-left`,
  `.hero-right`, `.hero-cta`) to reorder elements between desktop and mobile **without
  HTML changes**. Current mobile order: badge → headline → tagline → CTA top half →
  paragraph → stats → Featured Programs carousel.

### Hero carousel (`.fp-*` in index.html)
- Featured Programs carousel: auto-rotates every 4500ms, pauses on hover, peek layout
  (cards `flex:0 0 82%` so the next peeks in), pixel-based translate stepping, last card
  right-aligns via `Math.max(-idx*step, viewportW - trackW)`. Logic lives in `index.html`'s
  own inline IIFE (separate from the shared `js/main.js`). Supports finger-swipe via
  **Touch Events** (`touchmove` is `{passive:false}` so horizontal drags `preventDefault`;
  vertical is left to scroll, aided by `touch-action:pan-y`). Touch Events were chosen over
  Pointer Events because the latter are unreliable for touch dragging on iOS Safari. Desktop
  keeps arrows + dots.

## Workflow expectations
- **Log every change in `CHANGELOG.md`** (under the current date heading) — the user
  relies on it as the running history.
- Edits often go through several quick visual iterations; the user reviews in the browser
  and gives feedback. When offering design choices, present a few concrete options.
- The user commits to git (`main`, remote `origin`). Don't commit unless asked.

## Key files
- `css/base.css` — shared design system (tokens, nav, buttons, footer, ticker, reveal,
  base responsive). **Edit shared styles here, once.**
- `js/main.js` — shared site JS (scroll-reveal observer + mobile nav toggle).
- `assets/img/` — images (logo, etc.).
- `CHANGELOG.md` — full running history of every change. **Read this to see recent work.**
- `README.md` — public-facing project description.
- `.claude/launch.json` — dev server config.
