---
title: Guides
---

<script setup>
import { data as groups } from './index.data'
</script>

# Guides

Browse all available game guides, grouped by game series.

<div v-for="group in groups" :key="group.series">
  <h2 class="series-heading">{{ group.label }}</h2>
  <div class="guides-grid">
    <a
      v-for="g in group.guides"
      :key="g.url"
      :href="g.url"
      class="guide-card"
    >
      <span class="guide-card-title">{{ g.title }}</span>
      <span class="guide-card-url">{{ g.url }}</span>
    </a>
  </div>
</div>

<p v-if="!groups || groups.length === 0" class="guides-empty">
  No guides yet — add a folder under <code>docs/guides/&lt;series&gt;/&lt;game-slug&gt;/</code>.
</p>

<style scoped>
.guides-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 16px;
  margin-top: 16px;
}
.guide-card {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 16px;
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
.guide-card-title {
  font-weight: 600;
  color: var(--vp-c-text-1);
}
.guide-card-url {
  font-size: 0.85em;
  color: var(--vp-c-text-2);
}
.guides-empty {
  color: var(--vp-c-text-2);
}
</style>
