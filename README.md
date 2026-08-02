# Zelalem Construction

A production-grade marketing website for a commercial construction company, built as a
fresh **Next.js 16 (App Router)** application migrated from an earlier React + Vite + CSS
codebase.

> **Migration note:** the original project (on the `master` branch) was React 19 + Vite with
> plain CSS Modules and hardcoded content. This branch is a ground-up rebuild on a modern,
> maintainable stack — not a patch of the old code.

## Tech stack

| Concern        | Choice                                             |
| -------------- | -------------------------------------------------- |
| Framework      | Next.js 16 (App Router, React Server Components)   |
| Language       | TypeScript (strict)                                |
| UI             | React 19                                           |
| Styling        | Tailwind CSS v4 (`@theme` design tokens)           |
| Content        | Sanity-ready content layer with local fallback     |
| Animation      | Framer Motion (respects `prefers-reduced-motion`)  |
| Data fetching  | TanStack Query (client) + RSC (server)             |
| Forms          | Server Actions + Zod validation + honeypot         |
| Icons          | lucide-react                                       |
| Linting        | ESLint (`next/core-web-vitals`, `next/typescript`) |

## Getting started

```bash
npm install
cp .env.example .env.local   # optional; the site runs without any env vars
npm run dev                  # http://localhost:3000
```

Scripts:

```bash
npm run dev        # start the dev server
npm run build      # production build
npm run start      # serve the production build
npm run lint       # ESLint
npm run typecheck  # tsc --noEmit
```

## Architecture

```
src/
├─ app/                 # App Router: layout, page, error/loading/not-found, sitemap, robots
├─ actions/             # Server Actions (contact form)
├─ components/
│  ├─ ui/               # Design-system primitives (Button, Card, Section, Heading, Badge…)
│  ├─ layout/           # Navbar, Footer, Logo, ThemeToggle
│  ├─ sections/         # Page sections (Hero, About, Services, Team, Projects…)
│  ├─ motion/           # Reveal — reduced-motion-aware animation wrapper
│  └─ seo/              # JSON-LD structured data
├─ constants/           # Site config, navigation, contact info
├─ lib/                 # content resolver, metadata, validation, utils
├─ providers/           # Theme + TanStack Query providers
├─ sanity/              # Client, env, and portable schema definitions
└─ types/               # Shared domain types
```

## Design system

All colors, spacing and typography flow from **one source of truth** in
`src/app/globals.css`. Semantic tokens (`primary`, `secondary`, `accent`, `success`,
`warning`, `danger`, `background`, `surface`, `foreground`, `muted`, `border`, `ring`) are
declared as CSS variables for light and dark themes and exposed to Tailwind via
`@theme inline`. Components only ever reference semantic utilities such as `bg-primary` or
`text-muted-foreground` — there are **no hardcoded hex/rgb values in component code**.

## Content & Sanity CMS

Content is served through a single API in `src/lib/content`. When Sanity env vars are set the
data comes from the CMS; otherwise it falls back to the bundled content in
`src/lib/content/data.ts`. The two sources share identical types, so switching requires no
component changes.

To enable Sanity:

1. Create a project at [sanity.io](https://www.sanity.io) and set the env vars in
   `.env.example`.
2. Scaffold a Studio (`npm create sanity@latest`) and register the document types in
   `src/sanity/schemas` (wrap each with `defineType`).
3. Content immediately flows through the existing resolver.

## Accessibility

- Semantic landmarks, correct heading order, skip-to-content link
- Visible keyboard focus states on every interactive element
- `aria-*` labels on icon-only controls; descriptive `alt` text on all images
- Full `prefers-reduced-motion` support
- WCAG AA-oriented color contrast in both themes

## SEO

- Centralized metadata with Open Graph + Twitter cards
- `sitemap.xml` and `robots.txt` via the Metadata API
- `GeneralContractor` JSON-LD structured data
- Canonical URLs and a configurable `NEXT_PUBLIC_SITE_URL`
