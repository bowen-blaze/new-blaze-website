# Blaze Robotics Academy Website

Marketing website for Blaze Robotics Academy, a K–12 robotics education program teaching
engineering, coding, and design thinking across four locations in the Seattle area
(Bellevue, Bel-Red, Sammamish, Issaquah).

The site is a set of static HTML pages. Each page is fully self-contained — markup, inline
CSS, and a small inline JavaScript snippet all live in a single `.html` file. There is no
build step, framework, or external dependency beyond Google Fonts (Barlow / Barlow
Condensed) loaded over CDN.

## Pages

The site is organized around "The Blaze Journey" — a four-stage path that all pages link to
via a shared top navigation.

| File | Page | Purpose |
| --- | --- | --- |
| `index.html` | Home | Overview of the academy, its three pillars, and the four-stage journey. |
| `ignite.html` | Ignite Curiosity | Step 01 — intro / trial classes and membership, no experience required. |
| `build.html` | Build Mastery | Step 02 — structured courses and camps by grade level. |
| `compete.html` | Compete | Track A — competition teams and tournament prep (VEX Robotics). |
| `innovate.html` | Innovate | Track B — real-world capstone projects and "Robot for Good" initiatives. |
| `about.html` | About Us | Story, approach, Ignite partnership, and FAQs. |

## Structure

Each page follows the same template:

- **`<head>`** — meta tags, page title, Google Fonts link, and a `<style>` block with all
  CSS (CSS custom properties define the shared color palette and typography).
- **`<nav>`** — fixed top navigation shared across all pages, plus an "Enroll Now" button
  linking to the external Amilia store.
- **Content sections** — hero, pillars, journey cards, etc.
- **`<footer>`** — site links, social media, locations, and contact info.
- **`<script>`** — a small inline script for scroll-reveal animations
  (`IntersectionObserver`) and the mobile nav toggle.

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
