---
title: Ocarina of Time
---

<script setup>
import { data as chapters } from './chapters.data'
</script>

# Ocarina of Time

The 1999 FAQ, revived: a complete walkthrough of Zelda 64, preserved with its author's voice intact.

## Walkthrough

<div class="guide-grid">
  <a
    v-for="c in chapters"
    :key="c.url"
    :href="c.url"
    class="guide-card"
  >
    <span class="guide-card-chapter">Chapter {{ c.chapter }}</span>
    <span class="guide-card-title">{{ c.title }}</span>
  </a>
</div>

## Reference

| Chapter / Topic | Title |
| --- | --- |
| Story | [The Story](./story) |
| Characters | [Characters](./characters) |
| Controls | [Controls](./controls) |
| Items | [Weapons / Equipment / Clothing / Items](./equipment) |
| Bosses | [Boss Guide](./bosses) |
| Enemies | [Enemies](./enemies) |
| Shops | [Shops](./shops) |
| Collectibles | [Heart Piece Locations](./heart-pieces) |
| Collectibles | [Gold Skulltula Locations](./skulltulas) |
| Extras | [Munky's Mini-Game Review](./mini-games) |
| Meta | [About This FAQ](./about) |

<style scoped>
.guide-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 12px;
  margin-top: 16px;
}
.guide-card {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 14px 16px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  background: var(--vp-c-bg-soft);
  text-decoration: none;
  transition: border-color 0.2s, background 0.2s;
}
.guide-card:hover {
  border-color: var(--vp-c-brand-1);
  background: var(--vp-c-bg);
}
.guide-card-chapter {
  font-size: 0.8em;
  color: var(--vp-c-text-2);
}
.guide-card-title {
  font-weight: 600;
  color: var(--vp-c-text-1);
}
</style>
