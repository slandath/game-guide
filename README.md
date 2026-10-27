# Game Guides Documentation Site

An AI-assisted static documentation site built with [VitePress](https://vitepress.dev/) (latest stable, Node 24). Hosts converted game guides (Markdown). Browsable, full-text searchable (local minisearch), print-friendly.

## Guide Attributions

[POKEMON FIRERED/LEAFGREEN by Deathborn 668](https://gamefaqs.gamespot.com/gba/918915-pokemon-firered-version/faqs/46239)

## Quick start

```bash
pnpm install
pnpm dev      # http://localhost:5173
pnpm build    # outputs to docs/.vitepress/dist
pnpm preview  # preview production build
```

Requires Node `>=18.0.0` (devcontainer: Node 24 `typescript-node:24`), pnpm `>=12.0.0` via `packageManager: pnpm@12.6.0`.

## Adding a guide

1. Create `docs/guides/<series>/<slug>/index.md` — series and slug are lowercase-hyphenated (e.g. `pokemon/emerald`). Content lives in `index.md` so it can be split into multiple pages later.
2. Add images to `docs/public/<series>/<slug>/` — referenced as `/<series>/<slug>/image.png` (VitePress `public` convention).
3. Add one sidebar entry in `docs/.vitepress/config.ts`:

```ts
sidebar: {
  '/guides/<series>/<slug>/': [{ text: '<Guide Title>', items: [{ text: '<Guide Title>', link: '/guides/<series>/<slug>/' }] }],
  // ... existing guides
}
```

Homepage guide list is auto-generated via VitePress data loader (`docs/index.data.ts` + `createContentLoader`), so no homepage edit is needed.
