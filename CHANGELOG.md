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
- The hero-right used to repeat the three pillars + proof point (the same content shown in the "Three Pillars" section one scroll below). Replaced that duplicate content with a CTA-style panel: a white card with a kicker badge, headline, intro paragraph, and a primary button. The top block is currently a **"New Here? · Find Your Starting Point."** welcome that points visitors to the on-page Four Stages journey (`See the Journey →` linking to `#journey`). Removed the now-unused `.pillars-stack`/`.pillar-card`/`.pc-*` CSS and added `.hero-cta` styles. (Earlier iteration had a "Book a Free Trial Class" CTA here, since replaced.)
- **Featured Programs carousel:** the lower part of that panel is a carousel of individual program cards (placeholder content for now). Each card has a thumbnail (placeholder gradient + icon), grade level, program name, and a "View Details" button linking to the program page. Prev/next arrows and dot indicators cycle one card at a time (`.fp-*` styles + a small carousel script added to the page IIFE).
  - **Auto-rotation** advances every 4.5 seconds; pauses on hover and resets after manual navigation; resizes correctly via a window resize handler.
  - **Peek layout:** cards sized to **82%** of the viewport with a 14px gap, so the next card visibly peeks in on the right edge instead of cards being full-width. Slide stepping switched from percentage to pixel-based (`cardWidth + gap`) to support the peek.
  - **Right-aligned last card:** the slide translate is now clamped by `Math.max(-idx*step, viewportW - trackW)`, so when reaching the last card it stops at "right edge aligned to viewport right" instead of overshooting into empty space. The peek now flips to the *previous* card on the left for that final position.
  - **Card backgrounds:** each `.fp-card` now has a slightly opaque translucent background (`rgba(255,255,255,.08)`), a subtle 1px outline, 8px corner radius, and 12px padding — so each program reads as a distinct card on the glass panel. The thumbnail uses negative margins to keep bleeding to the card's top/side edges (classic image-on-top, content-below card look), with the card's `overflow:hidden` and `border-radius` clipping the top corners cleanly.

- **Moved the two hero call-to-action buttons** (Start Your Journey, Explore Programs) out of the hero-left and into the hero-right CTA panel, replacing the single "See the Journey →" button. Removed the now-unused `.hero-cta .btn{display:block;width:100%}` rule that was for the single button. Hero-left is now just the intro/brand text + stats grid. Inside the panel the two buttons stack vertically (full-width each) via `.hero-cta .hero-acts{grid-template-columns:1fr}` — fits the narrow panel cleanly without text wrapping.
- **Rebalanced hero-left vertical rhythm** after the buttons were removed: the gap below the hero paragraph used to be 44px (it was tuned to space the now-gone buttons), while the gap above it was 24px. Brought the below-gap down to 24px to match — `.hero-sub` `margin-bottom` 32 → 24, `.hstats` `margin-top` 44 → 0 (margin-collapsed result is 24px).

- **Centered the hero across all viewport sizes** so the two columns no longer drift apart on wide browsers and stack neatly on small ones.
  - **Wide screens:** added `padding-inline:max(0px, calc(50vw - 700px))` to `.hero` — content stays in its natural 2-column layout up to a 1400px-wide centered band; on wider viewports the side padding grows to keep the columns together at the centre. Background gradient still spans full-width.
  - **Mobile (≤960px):** in addition to the existing 1-column stack, content is now horizontally centered. `.hero-left` gets `text-align:center` + `align-items:center` (block children shrink-to-fit and centre), `.hstats` gets `margin-left/right:auto`, and `.hero-right` gets `align-items:center` so the CTA panel (now `max-width:480px`) sits centred too. Padding evened to `24px` sides on both columns.
- Mobile fix so the panel no longer overflows the viewport (`min-width:0` on the hero columns, `max-width:none` on `.hero-cta` under 960px).
- **Panel styling — blended then refined into a glass panel:**
  - First removed the white card background, border radius, and drop shadow from `.hero-cta` so it sat directly on the dark hero gradient, and recolored everything inside for a dark backdrop (badge gold, headline white, paragraph translucent-white, carousel chrome and dots in translucent-white, active dot in gold).
  - Then added definition back without breaking cohesion: a faint translucent white background with backdrop blur for a glass effect, a 1px translucent-white outline, a thin **gold top accent** (`border-top:2px solid var(--gold-lt)`) to echo the hero's gold highlights, and a soft drop shadow for depth. Colorful program thumbnails stay as the focal anchors.
  - (Briefly tried a heavier liquid-glass treatment — directional gradient, `blur(22px) saturate(180%)`, inset highlight/shadow, 14px radius — then reverted to the subtle glass panel above.)

#### Responsive
- **Ticker bar** now stacks cleanly on narrow screens. Below the 960px breakpoint it switches to a left-aligned vertical column and hides the `|` separators (previously the wrapped items left the pipes orphaned mid-line). Applied to all pages that still have a ticker (`ignite`, `build`, `compete`, `innovate`, `about`).

#### about.html — matched to site design system
- `about.html` previously used a separate design system (Outfit typeface, rounder corners, lighter weights, non-uppercase headings). Restyled it to match the other five pages:
  - Swapped the Outfit font for the shared **Barlow Condensed / Barlow** stack and adopted the shared base CSS (`:root` tokens, typography, nav, buttons, section headers, ticker, footer, reveal, responsive).
  - Converted the light gradient hero to the site's dark **`.hero-pg`** style (blue gradient, white Barlow Condensed headline with gold accent, gold kicker).
  - Restyled every unique section (approach, design-thinking grid, skills, Ignite partnership, coaches, locations, FAQ): titles now use Barlow Condensed uppercase, card corners reduced to 8px with top/left accent borders, body text in Barlow. Content unchanged.
