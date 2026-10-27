import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Game Guides',
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
      '/guides/pokemon/firered-leafgreen/': [
        { text: 'Pokémon FireRed / LeafGreen', link: '/guides/pokemon/firered-leafgreen/' }
      ],
      '/guides/pokemon/emerald/': [
        { text: 'Pokémon Emerald', link: '/guides/pokemon/emerald/' }
      ],
      '/guides/zelda/ocarina-of-time/': [
        { text: 'Ocarina of Time', link: '/guides/zelda/ocarina-of-time/' }
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
