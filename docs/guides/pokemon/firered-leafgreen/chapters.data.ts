import { createContentLoader } from 'vitepress'

export interface Chapter {
  url: string
  chapter: number
  title: string
}

declare const data: Chapter[]
export { data }

// Loads the 10 numbered walkthrough chapters of this guide. Pages without a
// "# N." chapter heading (index, post-game, reference) are excluded.
export default createContentLoader('guides/pokemon/firered-leafgreen/walkthrough/*.md', {
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
