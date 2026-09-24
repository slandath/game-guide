# poke-guide — Game Guide Documentation Site

Static documentation site built with [VitePress](https://vitepress.dev/) (latest stable, Node 24). Hosts converted game guides (Markdown). Browsable, full-text searchable (local minisearch), print-friendly.

## Quick start

```bash
pnpm install
pnpm dev      # http://localhost:5173
pnpm build    # outputs to docs/.vitepress/dist
pnpm preview  # preview production build
```

Requires Node `>=18.0.0` (devcontainer: Node 24 `typescript-node:24`), pnpm `>=12.0.0` via `packageManager: pnpm@12.6.0`.

## Adding a guide

1. Create `docs/guides/<slug>/index.md` — slug is lowercase-hyphenated (e.g. `pokemon-emerald`). Content lives in `index.md` so it can be split into multiple pages later.
2. Add images to `docs/public/<slug>/` — referenced as `/<slug>/image.png` (VitePress `public` convention).
3. Add one sidebar entry in `docs/.vitepress/config.ts`:

```ts
sidebar: {
  '/guides/<slug>/': [{ text: '<Guide Title>', items: [{ text: '<Guide Title>', link: '/guides/<slug>/' }] }],
  // ... existing guides
}
```

Homepage guide list is auto-generated via VitePress data loader (`docs/index.data.ts` + `createContentLoader`), so no homepage edit is needed.

When the converted Markdown file is ready, drop it wholesale at `docs/guides/pokemon-firered-leafgreen/index.md` (do not alter formatting).

## Print

`docs/.vitepress/theme/custom.css` contains `@media print` rules: hides nav/sidebar/search/footer, forces black-on-white, expands content, sensible page breaks, `max-width:100%` images, `@page` margins, and appends URLs for external links only.

## Dev container

Open in VS Code with Dev Containers extension — image `mcr.microsoft.com/devcontainers/typescript-node:24`, forwards `5173`. `postCreateCommand` (from your adapted template, tailwind dropped) runs:
```bash
npm install -g pnpm@12.6.0 && pnpm install && pnpm build && pnpm add -g opencode-ai
```
No `corepack enable` (avoids `EACCES` as `node` user); `pnpm` is installed via `npm -g`.
