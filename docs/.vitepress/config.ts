import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Pokemon Game Guides',
  description: 'Converted game guides — browsable, searchable, print-friendly.',
  cleanUrls: true,
  vite: {
    server: {
      host: true,
      port: 5173
    }
  },
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guides', link: '/guides/' }
    ],
    sidebar: {
      '/guides/firered-leafgreen/': [
        { text: 'Pokémon FireRed / LeafGreen', link: '/guides/firered-leafgreen/' }
      ]
    },
    search: {
      provider: 'local'
    },
    outline: {
      level: [2, 3]
    }
  }
})
