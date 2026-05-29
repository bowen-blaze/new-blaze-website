# Changelog

All notable changes to the Blaze Robotics Academy website are recorded here.

## 2026-05-28

### Changed

#### Logo — new image lockup (all 6 pages)
- Replaced the site logo across all six pages (`index`, `ignite`, `build`, `compete`, `innovate`, `about`). The old logo was an inline base64-embedded gear/triangle mark **plus** a separate `.logo-text` wordmark ("Blaze Robotics" / "Academy"). Swapped both for a single image file, **`logo_trimmed.png`** (1890×288 horizontal lockup that already contains the mark + full "Blaze Robotics Academy" wordmark), and removed the now-redundant `.logo-text` spans.
- Added a `.logo-img` rule (`height:42px; width:auto; display:block`) so the lockup sits at 42px tall in the 72px nav; mobile override (`≤960px`) drops it to 34px so it doesn't crowd the hamburger.
- Removing the base64 data URIs shrank the files substantially (e.g. `index.html` 84KB → 45KB).
- **Commented out** (rather than deleted) the now-unused `.logo-text` / `.logo-name` / `.logo-sub` CSS rules on all six pages, with a note, so the text-wordmark styles can be restored if we ever revert from the image logo.

#### Mobile layout — fixed horizontal overflow on the home page (`index.html`)
- The home page overflowed the viewport horizontally on phones (content ran off both edges; hero CTA paragraph text was cut off). Root cause was the classic CSS Grid `min-width:auto` track blowout: grid columns sized to their content's minimum width instead of the container, so tracks grew wider than the screen (the hero's `1fr` track resolved to ~658px on a 375px viewport).
  - **Hero:** mobile `grid-template-columns:1fr` → **`minmax(0,1fr)`** so the single column can shrink to the viewport (the `minmax` floor of 0 lets the track contract).
  - **Card grids** (`.pillars`, `.jgrid`, `.lgrid`): the 2-up mobile rule `1fr 1fr` → **`minmax(0,1fr) minmax(0,1fr)`** for the same reason.
  - **Added a narrow-phone breakpoint** (`@media(max-width:560px)`) that stacks `.pillars`/`.jgrid`/`.lgrid` to a **single column** — at ~156px-wide cells the 2-up layout was too tight for card titles (e.g. "Engineering Excellence" spilled out of its cell). Tablets (560–960px) keep the 2-up layout. *(Note: this is a second breakpoint alongside the documented 960px one.)*
- Verified zero horizontal overflow at 320px, 375px, and 768px; desktop layout unchanged.

#### Featured Programs carousel — touch swipe (`index.html`)
- Added finger-swipe navigation to the hero Featured Programs carousel for mobile/tablet, using Pointer Events. Swipe left → next card, swipe right → previous; the track follows the finger during the drag and animates to the nearest card on release.
  - **Touch/pen only** — `pointerdown` returns early for `pointerType:'mouse'`, so desktop behavior (arrows + dots + auto-rotate) is unchanged.
  - **Doesn't hijack vertical scrolling:** `touch-action:pan-y` on `.fp-track` plus an axis-decision check — if the first ~8px of movement is more vertical than horizontal, the carousel releases the gesture and lets the page scroll.
  - **Snap threshold:** advances only if the drag exceeds `max(40px, 18% of card width)`, otherwise snaps back to the current card.
  - **Tap vs. swipe:** a horizontal drag suppresses the subsequent `click` (capture-phase handler) so a swipe that ends over a "View Details" button doesn't accidentally navigate; clean taps still work.
  - Auto-rotation pauses while dragging and resumes on release. Refactored the translate math into a shared `txFor(i)` helper used by both `go()` and the drag handler. Added `user-select:none` on the track to prevent text selection mid-swipe.
- Verified via simulated touch events: left/right swipes change cards, a 25px drag snaps back, and a vertical drag leaves the carousel untouched.

#### Fix — logo broken on Vercel (filename case mismatch)
- The logo loaded locally but 404'd on the Vercel deploy. Cause: the file was tracked in git as **`Logo_trimmed.png`** (capital L) while all six pages reference **`logo_trimmed.png`** (lowercase). Windows is case-insensitive so it resolved locally, but Vercel's Linux filesystem is case-sensitive, so the lowercase `src` didn't match the capitalized file.
- Renamed the tracked file to lowercase **`logo_trimmed.png`** (via `git mv`) so the git-tracked name matches the `src` references exactly. **Must be committed and pushed** for the Vercel deploy to pick it up.

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
  - **Wide screens:** restructured `.hero` from `grid-template-columns:1fr 1fr` (each column claiming half the viewport, leaving the text far-left and the CTA orphaned near center) to `grid-template-columns:minmax(0,480px) 440px` with `justify-content:center` and a small `column-gap:20px`. The two columns now size to their content (480px text column matching the paragraph's max-width + 440px CTA panel) and the grid centers the pair as one tight unit no matter how wide the viewport — they read as a single body rather than two floating halves. Padding moved from the child columns up to `.hero` (`130px 24px 70px`). Background gradient still spans the full viewport.
  - **Mobile (≤960px):** grid switches to `1fr` with `row-gap:40px` between the stacked columns. Content is horizontally centered: `.hero-left` gets `text-align:center` + `align-items:center` (block children shrink-to-fit and centre), `.hstats` gets `margin-left/right:auto`, and `.hero-right` gets `align-items:center` so the CTA panel (now `max-width:480px`) sits centred too.

- **Reordered hero on mobile** so the call-to-action card appears right after the headline instead of below the paragraph and stats. Used `display:contents` on `.hero-left` to promote its children (badge, h1, tagline, paragraph, stats) into the parent grid, then defined `grid-template-areas` on `.hero`:
  - Desktop: `"badge cta" "h1 cta" "tagline cta" "para cta" "stats cta"` — left column stacks as before, CTA spans the right column.
  - Mobile: `"badge" "h1" "tagline" "cta" "para" "stats"` — the CTA panel sits between the tagline and the paragraph, so users see the actions before scrolling past the intro text. `justify-items:center` + `text-align:center` keep everything centered. No HTML changes — purely a CSS restructure.
- Mobile fix so the panel no longer overflows the viewport (`min-width:0` on the hero columns, `max-width:none` on `.hero-cta` under 960px).
- **Split the CTA panel on mobile** so only its top half (New Here? badge, "Find Your Starting Point" headline, pitch paragraph, the two buttons) sits between the tagline and the paragraph, while the **Featured Programs carousel drops to the very bottom** (after the stats). Wrapped the top-half elements in a new `.hero-cta-top` div. On mobile (`≤960px`) `.hero-right` and `.hero-cta` get `display:contents` (promoting `.hero-cta-top` and `.hero-cta-feat` into the hero grid), the grid template gains a trailing `feat` row (`"badge" "h1" "tagline" "cta" "para" "stats" "feat"`), and the glass-panel styling (translucent bg, blur, gold top border, shadow, 8px radius) is applied to `.hero-cta-top` and `.hero-cta-feat` individually so each reads as its own card now that the wrapping `.hero-cta` box is gone. Desktop is unchanged — both halves stay nested inside the single `.hero-cta` glass panel in the right column. Resulting mobile order: badge → headline → tagline → CTA top half → paragraph → stats → Featured Programs.
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
