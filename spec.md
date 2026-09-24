# spec.md — Game Guide Documentation Site

## Goal

Build a static documentation site using VitePress to host converted game
guides (Markdown, converted from old Word docs via LLM). Site must be
browsable, full-text searchable, and print-friendly. Supports adding more
guides over time.

---

## Tech Stack

- VitePress (latest stable), pnpm 12 (stable line, `latest` tag), Node 24 (devcontainer) / Node 18+ engines
- Search: VitePress built-in local search (minisearch), no external services
- Runs locally only — no deployment/CI config
- Preference: always use the recommended VitePress built-in (config, theme, data loader, home layout) before writing custom code

---

## Folder Structure

```text
project-root/
├── .devcontainer/
│   └── devcontainer.json               ← devcontainer (Node 24, typescript-node:24, port 5173, pnpm 12)
├── docs/
│   ├── .vitepress/
│   │   ├── config.ts
│   │   └── theme/
│   │       ├── index.ts
│   │       └── custom.css
│   ├── index.md                          ← homepage, layout:home + data-loader list
│   ├── index.data.ts                     ← VitePress data loader (createContentLoader) for guide discovery
│   ├── guides/
│   │   └── pokemon-firered-leafgreen/
│   │       └── index.md                  ← converted guide content
│   └── public/
│       └── (images, per-guide subfolder)
├── package.json
└── README.md
```

Rules for future guides:
- One folder per guide under `docs/guides/<slug>/`, lowercase-hyphenated
- Content lives in `index.md` (allows splitting into multiple pages later)
- Guide-specific images go in `docs/public/<slug>/`

---

## Initial Content

Place the provided converted Markdown file at:
`docs/guides/pokemon-firered-leafgreen/index.md` (do not alter). If not
provided at scaffold time, use a placeholder heading + "Content coming
soon."

---

## Navigation & Sidebar

- Top nav: Home (`/`), Guides (`/` or `/#guides`) via `themeConfig.nav` (VitePress built-in)
- Sidebar scoped per guide via path-prefix keys in `config.ts` (`themeConfig.sidebar['/guides/<slug>/']`) — VitePress built-in
- Homepage lists all guides as links/cards (acts as a directory) — use VitePress **data loader** (`docs/index.data.ts` with `createContentLoader('guides/*/index.md')`) imported in `docs/index.md` via `<script setup> import { data } from './index.data'` (see VitePress guide/data-loading.md). This is the recommended VitePress tool for content discovery — homepage auto-updates without hardcoding `features`

---

## Search

Enable built-in local search in `config.ts`:

```ts
themeConfig: {
  search: { provider: 'local' }
}
```

No Algolia, no external APIs.

---

## Print Styling

Add `docs/.vitepress/theme/custom.css`, imported via a theme
`index.ts` that extends `DefaultTheme`. **This stylesheet must include
`@media print` rules** dedicated to making the browser's Print /
Save-as-PDF output clean, covering:

1. Hide nav, sidebar, search box, edit/prev-next links, footer
2. Force black-on-white, remove shadows, expand content to full width
3. Page breaks: `h1`/`h2` start new pages (except first on a page);
   tables/code blocks/images avoid breaking mid-element
4. Links: internal `#anchor` links print plain; external `http` links
   append their URL in parentheses
5. Images constrained to `max-width: 100%`
6. Reasonable `@page` margins (e.g. `2cm 1.5cm`)

Plain CSS only — no PagedJS.

---

## Config Requirements (`docs/.vitepress/config.ts`)

- `title` / `description` placeholders
- `themeConfig.search.provider: 'local'`
- `themeConfig.nav`: Home + Guides
- `themeConfig.sidebar`: scoped per guide path
- `cleanUrls: true`

---

## package.json Scripts

```json
{
  "scripts": {
    "dev": "vitepress dev docs",
    "build": "vitepress build docs",
    "preview": "vitepress preview docs"
  }
}
```

---

## Non-Goals

No deployment/CI, no Algolia, no PagedJS, no auth, no CMS/database. No custom homepage indexing outside VitePress data loader.

---

## Acceptance Criteria

1. `pnpm dev` shows homepage linking to the FireRed/LeafGreen guide
2. Guide page renders correctly with a scoped sidebar
3. Search returns results from guide content
4. Browser print/Print-to-PDF: no nav/UI chrome, black-on-white, sensible
   page breaks, external links show URLs, internal links don't
5. Adding a new guide folder (`docs/guides/<new-slug>/index.md` + `docs/public/<new-slug>/`) + one sidebar entry in `config.ts` works without touching other files; homepage updates automatically via data loader
