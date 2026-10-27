import { createContentLoader } from 'vitepress'

export interface Chapter {
  url: string
  chapter: number
  title: string
}

declare const data: Chapter[]
export { data }

// Loads the 9 walkthrough chapter pages of this guide (index.md and any
// reference pages are excluded because they have no "# N." chapter heading).
export default createContentLoader('guides/zelda/ocarina-of-time/*.md', {
  includeSrc: true,
  render: false,
  transform(src): Chapter[] {
    return src
      .map(({ url, frontmatter, src: text }) => {
        const heading = text?.match(/^# (\d+)\. (.+)$/m)
        return heading
          ? {
              url,
              chapter: Number(heading[1]),
              title: frontmatter.title ?? heading[2]
            }
          : null
      })
      .filter((c): c is Chapter => c !== null)
      .sort((a, b) => a.chapter - b.chapter)
  }
})
