import type { MetadataRoute } from 'next'
import { type PageId, pages } from '@/data/links'
import { publishedServices, serviceHref } from '@/data/services'
import { alternateLanguages } from '@/lib/pageMetadata'

const staticPageIds: PageId[] = [
  'home',
  'about',
  'services',
  'faq',
  'contact',
  'privacy',
  'terms',
]

const sitemapEntry = (href: string): MetadataRoute.Sitemap[number] => {
  const languages = alternateLanguages(href)

  return {
    alternates: { languages },
    url: languages['x-default'],
  }
}

const sitemap = (): MetadataRoute.Sitemap => {
  const staticEntries = staticPageIds.map((id) => sitemapEntry(pages[id].href))
  const serviceEntries = publishedServices.map((service) =>
    sitemapEntry(serviceHref(service.slug))
  )

  return [...staticEntries, ...serviceEntries]
}

export default sitemap
