# Changelog

All notable changes to the Blaze Robotics Academy website are recorded here.

## 2026-05-28

### Changed

#### Home hero — decorative circles no longer tint the headline (`index.html`)
- The orange `.hero::before` circle is absolutely positioned, so it painted *above* the in-flow `<h1>` and laid a ~12% orange tint over "THINK./BUILD." where they overlapped. Fixed by making `.hero` a stacking context (`isolation:isolate`) and giving both decorative circles (`::before`/`::after`) `z-index:-1`, so they render above the gradient but behind all hero text. Headline is now clean white; circles remain visible as background decoration.

#### Ignite Curiosity page — teal theme + matching nav (`ignite.html`, `css/base.css`)
- Changed the hero's primary CTA "Book a Free Trial" from `btn-red` (orange) to **`btn-gold`** so it harmonizes with the new teal hero (teal + gold) and matches the Innovate page's gold hero CTA. (The secondary button was already `btn-out-w` outlined-white, same as Innovate.) Left the bottom-CTA-band button and the quiz-result button as-is.
- Changed the Ignite hero to the Innovate page's teal-green gradient (`linear-gradient(135deg,#042027,#063a3c 40%,var(--teal) 90%,#15ae8a)`) and swapped its decorative glow from the old orange tint to a subtle light one to suit the new palette.
- Applied the "active nav link matches the page color" effect (previously only on Innovate) to Ignite: generalized the base rule to `.nl a.on-innovate, .nl a.on-ignite{color:var(--teal);background:var(--teal-dim);}` and changed the Ignite page's active nav link from `class="on"` (blue) to `class="on-ignite"` (teal).

#### Blaze Journey — equal card heights across both groups (`index.html`)
- Fixed card bottoms not aligning at some widths. The two groups were separate grids, so cards only equalized height *within* a group; when a description wrapped to a different line count, the left and right pairs ended up different heights. Made all four share one height: `.jflow` uses `align-items:stretch` (groups equal height), `.jgroup` is a flex column, and `.jrow` is `flex:1; align-content:stretch` so its cards fill the shared height — with the footer pinned to the card bottom, all four footers now line up regardless of wrapping.

#### Blaze Journey — recolored card stripes to VEX product lines (`index.html`)
- Changed the four journey cards' top stripes (`.s1`–`.s4`) to match the VEX lines: Ignite Curiosity → **emerald-teal green** (`#15ae8a`, matching the Innovate page hero gradient), Build Mastery → **VEX IQ blue** (`#0098DA`), Compete → **VEX V5 red** (`#E0241C`), Innovate → **gold** (`var(--gold)`). (Greens/true-red aren't in the base palette, so VEX-accurate hex was used inline — easy to swap for exact brand values.)

#### Blaze Journey — regrouped the four cards by structure (`index.html`)
- The four journey cards were all equal peers, which hid that Step 01→02 is a shared sequence and Track A/B are parallel alternatives. Regrouped them into two labeled groups — **"Build Your Foundation"** (Step 01 Ignite, Step 02 Build) and **"Then Choose Your Track"** (Track A Compete, Track B Innovate). New markup: `.jflow` › two `.jgroup`s, each a `.jgroup-label` + a `.jrow` of two cards. Replaced the old `.jgrid` (`repeat(4,1fr)`).
- Responsive: groups side-by-side on wide screens (4 cards in two labeled pairs, 40px gap between groups vs 18px within), stack vertically at ≤960px (each group keeps its 2 cards side by side), and fully single-column at ≤560px. Updated the 960/560 breakpoint rules accordingly (`.jflow` stacks at 960, `.jrow` stacks at 560).

#### Home — swapped section order (`index.html`)
- Swapped the **The Blaze Journey** and **What We Believe** (Three Pillars) sections, so the journey now comes first (right after the hero) and the pillars follow. Flipped their `bg-white`/`bg-off` classes so the alternating background rhythm with neighboring sections is preserved (hero → white → off → white → …). Kept `id="journey"` on the Blaze Journey section so the hero's "Explore Programs" → `#journey` anchor still resolves.
- Changed the Blaze Journey heading "**Four Stages.** One Solid Foundation." → "**Many Flexible Programs.** One Solid Foundation." — more accurate, since the program is a shared foundation (Ignite → Build) plus optional tracks (Compete / Innovate) rather than four fixed stages, and it reinforces the section's "the foundation is identical; where you go is your call" lead. The two lines are near-balanced (~14% width difference) and scale down cleanly on mobile.

#### Three Pillars — added "iterate" to Design Thinking (`index.html`)
- Added the iteration step to the Design Thinking pillar so the design-thinking loop is complete: description now ends "…prototype fast, test relentlessly, **and iterate until it works**," and a matching **Iterate** tag was added (now Empathize · Define · Ideate · Prototype · Test · Iterate).

#### Three Pillars — rewrote Engineering Excellence (`index.html`)
- Rewrote the Engineering Excellence pillar description: "Robotics brings together mechanical, electrical, and computer engineering — and our students work across all three. From competition-grade robots and real code to professional design tools and AI, we hold them to genuine technical standards." Frames robotics as the union of **mechanical, electrical, and computer engineering**, drops "kits," and keeps it brief (~35 words, in line with the other two pillars); the specifics (Coding, CAD, AI, Engineering Design Process) are carried by the pillar's tags rather than spelled out in prose.
- Updated that pillar's tags to match the new content: **Robotics · Coding · CAD · AI · Engineering Design Process** (was Robotics · Coding · 3D Design · Systems Thinking).
- Added a **Problem Solving** tag to the Soft Skills pillar (now Leadership · Collaboration · Communication · Critical Thinking · Problem Solving).
- Changed the Soft Skills pillar icon from a star (🌟) to a handshake (🤝), so the three pillar icons read as think → build → collaborate (🧠 · ⚙️ · 🤝).

#### Home hero — stats replaced (`index.html`)
- Replaced the four hero stats (`K–12 / All Grades`, `100% / Hands-On`, `4 / Locations`, `20+ / Years Experience`) with six achievement/scale stats that better convey track record: **5000+ Students Taught**, **10+ Years**, **160+ State Qualifiers**, **50+ World Qualifiers**, **600+ Awards**, **30+ Communities & Schools Served**. The 2-column `.hstats` grid now flows to a 2×3 layout; each number keeps the gold `<em>` accent on its `+`. Verified no overflow and all labels fit at desktop, 375px, and mobile.
- Rewrote the hero paragraph (`.hero-sub`) for smoother flow and to work in a positioning claim + stats lead-in: "Blaze Robotics Academy develops the next generation of engineers, innovators, and leaders — from first-time builders to world-stage competitors. As the **#1 robotics academy in the Pacific Northwest**, our students and coaches deliver results that speak for themselves:" The colon leads straight into the stats grid below. (Kept in the existing paragraph element, since the hero's `grid-template-areas` would mis-place a bare new node.)
  - The "#1 robotics academy in the Pacific Northwest" phrase is wrapped in `<strong class="hl">` and emphasized in **gold** (`--gold-lt`, weight 700) to draw the eye to the claim.
  - Credits "our students **and coaches**" (was just "students'") since the stats reflect the whole program — coaching, awards, communities served — not only student outcomes.

#### Project reorganization — extracted shared code into directories
- De-duplicated the site: the design system and shared JS were previously copy-pasted into all six pages (e.g. the logo change had to be made six times). Pulled the shared parts into external files — still fully static, no build step.
  - **`css/base.css`** — the 121 lines of design-system CSS that were byte-for-byte identical across all pages (`:root` tokens, typography, nav, buttons, section headers, footer, ticker, scroll-reveal, the base `@media(max-width:960px)` rules). Each page now has `<link rel="stylesheet" href="css/base.css">` **before** its own (page-specific-only) `<style>`, so page rules still override base.
  - **`js/main.js`** — the shared IIFE (scroll-reveal `IntersectionObserver` + mobile nav-hamburger toggle), loaded on every page via `<script src="js/main.js">`. Page-specific JS stays inline: `index`'s carousel (now its own IIFE), `ignite`'s `showQ()`, `build`'s `filterC()`.
  - **`assets/img/`** — created and moved `logo_trimmed.png` here (via `git mv`); updated the `src` in all six pages to `assets/img/logo_trimmed.png`.
- Net effect: total HTML dropped from ~2,961 → ~2,185 lines (~776 duplicated lines removed), replaced by ~134 lines of shared `base.css` + `main.js`. Shared chrome/tokens are now edited once.
- HTML pages intentionally **stay in the repo root** (not moved into a `/pages` folder) to preserve their URLs and Vercel routing.
- Verified every page in the preview: `base.css` + `main.js` load (200), CSS tokens resolve, logo loads from the new path, scroll-reveal + nav toggle + carousel (incl. swipe) + `showQ`/`filterC` all work, no console errors, no layout/overflow changes. Updated `CLAUDE.md` to document the new structure.

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
- **Fix — swipe didn't work on iOS Safari.** The original implementation used Pointer Events, which are unreliable for touch dragging on iOS Safari (flaky `pointermove` delivery, `setPointerCapture` issues). Rewrote the swipe to use native **Touch Events** (`touchstart`/`touchmove`/`touchend`/`touchcancel`), the dependable mechanism on iOS Safari and Android. `touchmove` is registered `{passive:false}` so a horizontal drag can `preventDefault()` (stopping iOS's horizontal rubber-band scroll) while vertical swipes are left alone so the page scrolls. Same snap threshold and tap-vs-swipe click suppression as before. Desktop is unaffected (still arrows + dots; touch events simply don't fire for mouse).
- **Fix — carousel completely unresponsive to touch (real cause).** On mobile the carousel swipe AND the in-card "View Details" / prev-next buttons did nothing on a real device, even though everything worked in synthetic tests. Cause: the hero's decorative `::before`/`::after` circles were painting **on top of** the carousel and intercepting all touch/click input. On desktop they sit below the CTA because `.hero-right` has `z-index:2`, but the mobile layout sets `.hero-right`/`.hero-cta` to `display:contents`, which discards that stacking context — so the circles floated above the carousel. (Synthetic `.click()` / dispatched events bypass hit-testing, which is why earlier tests passed.) Fixes: added `pointer-events:none` to the decorative `.hero::before`/`.hero::after` (they should never capture input), and gave `.hero-cta-top`/`.hero-cta-feat` `position:relative;z-index:1` in the mobile breakpoint so the CTA/carousel sits above the decoration. Verified with `document.elementFromPoint` over the cards: hit target went from `section.hero` (blocked) → `div.fp-card` (reachable).
- **Fix — tap after a swipe was being eaten.** Symptom: after attempting a swipe, the next tap on a card's "View Details" button showed the pressed/light state but didn't navigate; tapping an arrow first "cleared" it. Cause: a capture-phase `click` handler on the track suppressed a click whenever a swipe flag was set — but the flag persisted past the swipe and consumed the user's next legitimate tap. Removed that handler: it was buggy and redundant, since `preventDefault()` on the horizontal `touchmove` already stops the browser from synthesizing a click for a swipe gesture (so a swipe still can't trigger a card link), while a plain tap never hits that `preventDefault` and clicks normally. Also loosened the swipe commit threshold (`max(40, 18% of card width)` → `max(35, 15%)`) for a more responsive feel.
- **Fix — swipe canceled mid-drag (card dragged slightly then snapped back), worsening on later cards.** `touch-action:pan-y` was only on `.fp-track`, but `touch-action` is **not inherited** and a finger actually lands on a `.fp-card` (or its thumbnail/title/button), which defaulted to `touch-action:auto`. With `auto`, the browser was free to claim the horizontal gesture and fire `touchcancel` part-way through, so the drag ended early and snapped back. Set `touch-action:pan-y` on `.fp-viewport` **and all its descendants** (`.fp-viewport, .fp-viewport *`) so a horizontal swipe is always handed to the JS no matter where the touch starts; vertical swipes still scroll the page. Also added velocity/flick detection in `endTouch` (Date-stamped at `touchstart`): a quick short swipe (`>12px` and `>0.3 px/ms`) now commits instead of snapping back. Verified the state machine advances through all four cards and a flick commits, while a tiny slow drag still snaps back.
- **Fix (definitive) — rebuilt the carousel on native CSS scroll-snap.** Swipe still failed on iPhone: it worked only from the first card, and from cards 2–4 the horizontal swipe scrolled the page vertically instead of moving the card. Root cause: the JS-transform carousel translated `.fp-track` (a viewport-wide box) so that the visible cards lived in the track's *overflow* region; iOS Safari mis-hit-tests touches over content that overflows a transformed element, routing the gesture to the page underneath (Chromium hit-tested it correctly, so it never reproduced locally). Rather than keep fighting iOS touch handling, replaced the whole mechanism with **native horizontal scroll-snap**: `.fp-viewport` is now `display:flex; overflow-x:auto; scroll-snap-type:x mandatory` (scrollbar hidden), `.fp-track` is `display:contents`, and each `.fp-card` has `scroll-snap-align:start`. The finger swipe is now the browser's own scroll — reliable on iOS from every card, with momentum and snapping for free. JS was reduced to driving the arrows/dots/autoplay (`scrollTo`) and syncing the active dot to the scrolled position via a debounced `scroll` listener; all the manual touch/pointer handling was removed. Same peek layout and visuals; verified it's a real scroll container, arrows/dots/scroll-sync work, and no console errors.

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
