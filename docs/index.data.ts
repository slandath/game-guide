import { createContentLoader } from 'vitepress'

export interface Guide {
  url: string
  title: string
  series: string
}

export interface SeriesGroup {
  series: string
  label: string
  guides: Guide[]
}

declare const data: SeriesGroup[]
export { data }

export default createContentLoader('guides/**/index.md', {
  includeSrc: false,
  render: false,
  transform(raw): SeriesGroup[] {
    const guides = raw
      .filter((p) => p.url !== '/guides/' && p.url !== '/guides')
      .map(({ url, frontmatter }) => ({
        url,
        series: urlToSeries(url),
        title: (frontmatter.title as string) || urlToTitle(url)
      }))
      .sort((a, b) => a.title.localeCompare(b.title))

    const groups = new Map<string, Guide[]>()
    for (const guide of guides) {
      const list = groups.get(guide.series) || []
      list.push(guide)
      groups.set(guide.series, list)
    }
    return Array.from(groups.entries())
      .map(([series, list]) => ({ series, label: toLabel(series), guides: list }))
      .sort((a, b) => a.label.localeCompare(b.label))
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

function toLabel(series: string): string {
  return series
    .split('-')
    .map((w) => (w.toLowerCase() === 'pokemon' ? 'Pokémon' : w.charAt(0).toUpperCase() + w.slice(1)))
    .join(' ')
}
