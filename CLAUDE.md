# Blaze Robotics Academy — Project Guide

Marketing website for **Blaze Robotics Academy**, a K–12 robotics education program
(four Seattle-area locations: Bellevue, Bel-Red, Sammamish, Issaquah).

> New session? Read this file, then skim `CHANGELOG.md` for the latest changes. The most
> recent work has been on `index.html`'s hero section.

## What this is

A set of **static HTML pages**. Each page is fully self-contained — markup, an inline
`<style>` block, and a small inline `<script>` all live in one `.html` file. **No build
step, no framework, no bundler.** Only external dependency is Google Fonts (Barlow /
Barlow Condensed) over CDN.

| File | Page | Purpose |
| --- | --- | --- |
| `index.html` | Home | Overview, three pillars, four-stage journey. **Most actively edited.** |
| `ignite.html` | Ignite Curiosity | Step 01 — trial classes / membership, no experience needed. |
| `build.html` | Build Mastery | Step 02 — structured courses & camps by grade. |
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

### Design system (5 pages: index, ignite, build, compete, innovate, + about)
- Fonts: **Barlow Condensed** (display/headings, uppercase) + **Barlow** (body).
- Shared `:root` CSS custom properties: `--blue`, `--blue-dk`, `--gold-lt`, `--red`,
  `--display`, `--body`, `--dark:#0f1419`, etc.
- Display headings use `font-weight:600` (deliberately lightened from 900); site chrome
  (logo wordmark `.logo-name`, nav links `.nl a`) stays bold (900) for contrast.
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
- Mobile breakpoint is **`@media(max-width:960px)`**.
- The hero uses CSS Grid `grid-template-areas` + `display:contents` (on `.hero-left`,
  `.hero-right`, `.hero-cta`) to reorder elements between desktop and mobile **without
  HTML changes**. Current mobile order: badge → headline → tagline → CTA top half →
  paragraph → stats → Featured Programs carousel.

### Hero carousel (`.fp-*` in index.html)
- Featured Programs carousel: auto-rotates every 4500ms, pauses on hover, peek layout
  (cards `flex:0 0 82%` so the next peeks in), pixel-based translate stepping, last card
  right-aligns via `Math.max(-idx*step, viewportW - trackW)`. Logic lives in the page's
  inline IIFE.

## Workflow expectations
- **Log every change in `CHANGELOG.md`** (under the current date heading) — the user
  relies on it as the running history.
- Edits often go through several quick visual iterations; the user reviews in the browser
  and gives feedback. When offering design choices, present a few concrete options.
- The user commits to git (`main`, remote `origin`). Don't commit unless asked.

## Key files
- `CHANGELOG.md` — full running history of every change. **Read this to see recent work.**
- `README.md` — public-facing project description.
- `.claude/launch.json` — dev server config.
