---
title: Pokémon FireRed / LeafGreen
---

<script setup>
import { data as chapters } from './chapters.data'
</script>

# Pokémon FireRed / LeafGreen

## Walkthrough

<div class="chapter-grid">
  <a
    v-for="c in chapters"
    :key="c.url"
    :href="c.url"
    class="chapter-card"
  >
    <span class="chapter-card-chapter">Chapter {{ c.chapter }}</span>
    <span class="chapter-card-title">{{ c.title }}</span>
  </a>
</div>

## Post-Game

- [The Sevii Islands Quest](./post-game/sevii-islands)
- [Sevii Islands Bonuses](./post-game/sevii-bonus)
- [End of Game Bonuses](./post-game/endgame-bonus)

## Reference

- [About This FAQ](./about)
- [Controls](./controls)
- [Fame Checker](./fame-checker)
- [Frequently Asked Questions](./faq)
- [Type Attack Chart](./type-chart)
- [Battle Reference](./battle-reference)
- [Version-Exclusive Pokémon](./version-exclusives)
- [Pokémon Abilities](./abilities)
- [The Pokémon Attack Listings](./attacks)
- [Nature Lists](./natures)
- [EV Training and IV Stats for Dummies](./ev-iv)

<style scoped>
.chapter-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 12px;
  margin-top: 16px;
}
.chapter-card {
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
.chapter-card:hover {
  border-color: var(--vp-c-brand-1);
  background: var(--vp-c-bg);
}
.chapter-card-chapter {
  font-size: 0.8em;
  color: var(--vp-c-text-2);
}
.chapter-card-title {
  font-weight: 600;
  color: var(--vp-c-text-1);
}
</style>
