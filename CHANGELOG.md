# Changelog

All notable changes to the Blaze Robotics Academy website are recorded here.

## 2026-05-26

### Added
- **README.md** — project documentation describing the static site, its pages, structure, and how to serve it locally.
- **.claude/launch.json** — dev server configuration. Defines a `static-site` server that serves the folder via `python -m http.server 8000` (port 8000).

### Changed

#### Typography — heading weight
- Lightened all display headings, tuned in steps from 900 (Black) down to **600**:
  - The five Barlow Condensed pages (`index`, `ignite`, `build`, `compete`, `innovate`): every display heading/title `font-weight` 900 → 700 → 600.
  - `about.html` (uses the Outfit typeface): heading weights 800 → 600 to match.
- Restored bold site chrome for contrast against the lighter headings: the logo wordmark (`.logo-name`) and nav links (`.nl a`) set to **900** on all six pages.

#### Home page (`index.html`)
- **Hero stats** updated:
  - Replaced the `5× Days / Week` stat with **`100% Hands-On`**.
  - Relabeled the experience stat `Years` → **`Years Experience`**.
  - Reordered the 2×2 grid to: top row `K–12` / `100% Hands-On`, bottom row `4 Locations` / `20+ Years Experience`.
- **"Explore Programs" button** now links to the on-page "Four Stages" journey section (`#journey`) instead of jumping straight to `build.html`. Added `id="journey"` to that section to support the anchor (smooth scroll was already enabled site-wide).
- **Fixed inconsistent pillar name:** the Three Pillars section read `Soft Skills That Last` while the hero card read `Soft Skills That Stick`. Standardized both to **`Soft Skills That Stick`**.

#### Home hero buttons
- Made the two hero call-to-action buttons (`Start Your Journey`, `Explore Programs`) equal size and column-aligned with the stat cards below them. `.hero-acts` switched from a content-sized flex row to a 2-column grid matching `.hstats` (`1fr 1fr`, 14px gap, 440px max-width); button text centered; buttons stack to a single full-width column below the 960px breakpoint.

- **Hero button text alignment:** centered the button labels both horizontally and vertically (`.hero-acts .btn` set to `display:flex; align-items:center; justify-content:center`), so the shorter "Explore Programs" label sits centered within its equal-height box.
- **Hero "★ Proof" card** made to stand out more: full gold border on all sides (was gold left edge only), stronger gold background tint (`.1` → `.18`), and a soft gold glow (`box-shadow`).
- **Removed the ticker bar** from the home page. It remains on the other five pages.

#### Content / copy (`index.html`)
- **Design Thinking cards** reworded to follow the canonical design thinking loop in order (Empathize → Define → Ideate → Prototype → Test):
  - Hero Pillar 01 description → "Empathize, define, ideate, prototype, and test — the engineering mindset applied to everything."
  - Three Pillars card description reordered (empathize now precedes define; "iterate until it works" → "test relentlessly"), and its tags changed to **Empathize · Define · Ideate · Prototype · Test** (was Problem Definition · Prototyping · Iteration · User Empathy).
- **Engineering Excellence** hero card description reworded from "Real robots, real code, real CAD. Students build skills that matter in college, careers, and life." to "Authentic engineering — competition-grade robots, Python and C++, and professional CAD. No simplified, training-wheel versions." (drops the brand name and the repetitive "real …").

#### Content / copy — brand names & wording (site-wide)
- **Removed brand names from marketing copy**, keeping them only in factual competition references. Genericized `index.html` (pillar copy + "VEX Robotics" tag → "Robotics"), `build.html` (course/camp bullets: "VEX IQ/V5" platforms → generic robotics wording; "Tinkercad & Fusion 360" → "professional CAD software"; "VEX season game" → "the competition's season game"; "VEX robots" → "competition robots"), and `about.html` (CAD skill line). **Kept** factual references: "2026 VEX World Champions", "VEX IQ tournaments/teams", the "What Is VEX?" explainer on `ignite.html`, and coach credentials — removing the name there would lose meaning.
- **Removed the repetitive "real … real … real" phrasing** across `index.html`, `build.html`, `compete.html`, and `ignite.html` (e.g. "Real tournaments. Real pressure. Real growth." → "where tournament pressure drives real growth"; ignite heading "Real Engineering. Real Competition." → "Where Engineering Meets Competition."). Lone, natural uses of "real" were left as-is.

#### Home hero — right column repurposed as a CTA
- The hero-right used to repeat the three pillars + proof point (the same content shown in the "Three Pillars" section one scroll below). Replaced that duplicate content with a conversion-focused **"Book a Free Trial Class"** CTA panel: a white card with a "★ Start Here" badge, headline, pitch, and a full-width primary button linking to the Amilia enrollment store. Removed the now-unused `.pillars-stack`/`.pillar-card`/`.pc-*` CSS and added `.hero-cta` styles.
- **Featured Programs carousel:** the lower part of that panel is a manually-navigable carousel of individual program cards (placeholder content for now). Each card has a thumbnail (placeholder gradient + icon), grade level, program name, and a "View Details" button linking to the program page. Prev/next arrows and dot indicators cycle one card at a time (`.fp-*` styles + a small carousel script added to the page IIFE); auto-rotation can be layered on later. Also added a mobile fix so the panel no longer overflows the viewport (`min-width:0` on the hero columns, `max-width:none` on `.hero-cta` under 960px).

#### Responsive
- **Ticker bar** now stacks cleanly on narrow screens. Below the 960px breakpoint it switches to a left-aligned vertical column and hides the `|` separators (previously the wrapped items left the pipes orphaned mid-line). Applied to all pages that still have a ticker (`ignite`, `build`, `compete`, `innovate`, `about`).

#### about.html — matched to site design system
- `about.html` previously used a separate design system (Outfit typeface, rounder corners, lighter weights, non-uppercase headings). Restyled it to match the other five pages:
  - Swapped the Outfit font for the shared **Barlow Condensed / Barlow** stack and adopted the shared base CSS (`:root` tokens, typography, nav, buttons, section headers, ticker, footer, reveal, responsive).
  - Converted the light gradient hero to the site's dark **`.hero-pg`** style (blue gradient, white Barlow Condensed headline with gold accent, gold kicker).
  - Restyled every unique section (approach, design-thinking grid, skills, Ignite partnership, coaches, locations, FAQ): titles now use Barlow Condensed uppercase, card corners reduced to 8px with top/left accent borders, body text in Barlow. Content unchanged.
