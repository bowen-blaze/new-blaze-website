# Blaze Robotics Academy Website

Marketing website for Blaze Robotics Academy, a K–12 robotics education program teaching
engineering, coding, and design thinking across four locations in the Seattle area
(Bellevue, Bel-Red, Sammamish, Issaquah).

The site is a set of static HTML pages. There is no build step, framework, or bundler —
files are served as-is. Pages share a common design system and behavior through two
project files, `css/base.css` and `js/main.js`, and otherwise keep their page-specific
styles and scripts inline. The only external dependency is Google Fonts (Barlow / Barlow
Condensed) loaded over CDN.

## Pages

The site is organized around "The Blaze Journey" — a flexible path with a shared foundation
(Ignite → Build) and two optional tracks (Compete / Innovate), linked from a shared top
navigation.

| File | Page | Purpose |
| --- | --- | --- |
| `index.html` | Home | Overview of the academy, its three pillars, and the Blaze Journey program path. |
| `ignite.html` | Ignite Curiosity | Step 01 — intro / trial classes and membership, no experience required. |
| `build.html` | Build Mastery | Step 02 — structured courses and camps by grade level. |
| `compete.html` | Compete | Track A — competition teams and tournament prep (VEX Robotics). |
| `innovate.html` | Innovate | Track B — real-world capstone projects and "Robot for Good" initiatives. |
| `about.html` | About Us | Story, approach, Ignite partnership, and FAQs. |

## Structure

```
/                      HTML pages live in the repo root (keeps clean URLs)
├── css/base.css       Shared design system: :root color/typography tokens, nav,
│                      buttons, footer, ticker, scroll-reveal, base responsive rules
├── js/main.js         Shared site JS: scroll-reveal (IntersectionObserver) + mobile nav toggle
├── assets/img/        Images (e.g. logo_trimmed.png)
├── *.html             The six pages (see table above)
├── README.md          This file
├── CHANGELOG.md       Running history of changes
└── CLAUDE.md          Notes for AI assistants working on the project
```

Each page follows the same template:

- **`<head>`** — meta tags, page title, Google Fonts link, `<link>` to `css/base.css`
  (the shared design system), then a `<style>` block with **page-specific** CSS only.
- **`<nav>`** — fixed top navigation shared across all pages, with the logo image and an
  "Enroll Now" button linking to the external Amilia store.
- **Content sections** — hero, pillars, journey cards, etc.
- **`<footer>`** — site links, social media, locations, and contact info.
- **Scripts** — `js/main.js` (shared scroll-reveal + nav toggle) plus, on some pages, a
  small inline script for page-specific behavior (e.g. the home-page carousel).

## Viewing locally

No tooling required. Open `index.html` directly in a browser, or serve the folder over a
simple static server, for example:

```sh
python -m http.server 8000
```

Then visit <http://localhost:8000>.

## External links

- **Enrollment:** Amilia store (`app.amilia.com/store/en/blazeroboticsacademy`)
- **Main site / contact:** `blazeroboticsacademy.org`
- **Social:** Facebook, Instagram, YouTube

## Contact

info@blazeroboticsacademy.org · 425-610-8618
