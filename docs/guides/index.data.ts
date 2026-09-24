import { createContentLoader } from 'vitepress'

export interface Guide {
  url: string
  title: string
  frontmatter: Record<string, unknown>
}

declare const data: Guide[]
export { data }

export default createContentLoader('guides/*/index.md', {
  includeSrc: false,
  render: false,
  transform(raw): Guide[] {
    return raw
      .map(({ url, frontmatter }) => ({
        url,
        title: (frontmatter.title as string) || urlToTitle(url),
        frontmatter
      }))
      .sort((a, b) => a.title.localeCompare(b.title))
  }
})

function urlToTitle(url: string): string {
  // /guides/firered-leafgreen/ -> Firered Leafgreen
  const slug = url.replace(/^\/guides\//, '').replace(/\/$/, '')
  return slug
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ')
}
