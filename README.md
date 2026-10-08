# Portfolio: Valentín Belone

Personal site of a backend developer working with Python, Django and PostgreSQL. It presents
production systems built for real clients, with a case study for each featured project.

**Live site:** https://www.belone-dev.com.ar/ · Spanish at `/`, English at `/en`

## What it does

- **Static by default:** every page (home and case studies, in both languages) is prerendered at
  build time, so search engines and link previews read the full content without running JavaScript.
- **Bilingual routing without middleware:** Spanish lives at the root and English under `/en`. Each
  language has its own root layout, which gives every page the right `<html lang>` and `hreflang` links.
- **Light and dark themes:** follows the system preference, remembers the visitor's choice and
  applies it before the first paint, so there is no theme flash.
- **SEO:** per-page metadata, generated Open Graph images (one per case study), `sitemap.xml` with
  language alternates, `robots.txt` and `schema.org/Person` structured data.
- **Accessibility:** WCAG AA contrast in both themes (the light theme uses a darker accent for that
  reason), skip link, keyboard navigation, descriptive `alt` text on every screenshot.

## Stack

Next.js 16 (App Router, Cache Components) · React 19 · TypeScript · Tailwind CSS v4 · Embla Carousel

## Design

Editorial layout on a wide 12-column grid: the hero sets the surname at display size behind a
black-and-white cutout portrait, sections keep their titles in a sticky left column, and the
contact section closes on the same burgundy band as the hero. Type is all serif (Instrument Serif
for display, Newsreader for text) plus JetBrains Mono for technical details. Micro-interactions
are CSS or a few lines of vanilla JS (one shared `IntersectionObserver` for scroll reveals) and
respect `prefers-reduced-motion`.

| Token          | Light              | Dark      | Contrast on background |
| -------------- | ------------------ | --------- | ---------------------- |
| Background     | `#FAF5F2`          | `#1A0609` | n/a                    |
| Text           | `#2B0A11`          | `#F6E9E7` | 16.8 : 1 / 16.5 : 1    |
| Muted text     | `#6E4A50`          | `#C9A9AC` | 7.0 : 1 / 9.1 : 1      |
| Accent         | `#800020` burgundy | `#F4C2C2` | 10.0 : 1 / 12.4 : 1    |
| Hero / contact | cream on `#800020` | same      | 9.9 : 1                |

Blush pink `#F4C2C2` is never used as text on light backgrounds: there it only works as a fill.

## Structure

```
src/
  app/
    (es)/               Spanish root layout, home and /proyectos/[slug]
    (en)/en/            English root layout, home and /en/proyectos/[slug]
    sitemap.ts, robots.ts, global-not-found.tsx
  content/              All site content: profile, projects, experience, skills, case studies
  i18n/                 Locale helpers and UI strings (es, en)
  components/           Layout, home sections and case study page
  assets/projects/      Case study screenshots (test data only)
  lib/                  Metadata, Open Graph images and case study route helpers
```

Content and code are separate: each fact (a URL, a stack, a date) is written once in
`src/content/`, with its Spanish and English text side by side, so the two versions can't drift apart.

## Running it

```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # production build
npm run lint         # ESLint
npm run typecheck    # route types + tsc
npm run format       # Prettier
```

CI runs formatting, lint, type checks and a production build on every push and pull request.
