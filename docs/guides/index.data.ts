import { createContentLoader } from 'vitepress'

export interface Guide {
  url: string
  title: string
  series: string
}

declare const data: Guide[]
export { data }

export default createContentLoader('guides/**/index.md', {
  includeSrc: false,
  render: false,
  transform(raw): Guide[] {
    return raw
      .filter((p) => p.url !== '/guides/' && p.url !== '/guides')
      .map(({ url, frontmatter }) => ({
        url,
        series: urlToSeries(url),
        title: (frontmatter.title as string) || urlToTitle(url)
      }))
      .sort((a, b) => a.title.localeCompare(b.title))
  }
})

// /guides/pokemon/firered-leafgreen/ -> pokemon
function urlToSeries(url: string): string {
  return url.replace(/^\/guides\//, '').replace(/\/.*$/, '')
}

// /guides/pokemon/firered-leafgreen/ -> Firered Leafgreen
function urlToTitle(url: string): string {
  const slug = url.replace(/^\/guides\//, '').replace(/\/$/, '').split('/').pop() || ''
  return slug
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ')
}
