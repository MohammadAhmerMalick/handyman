import { buildService, type ServiceSeed } from '@/data/services/buildService'
import { airConditioningSeeds } from '@/data/services/catalog/air-conditioning'
import { bathroomSeeds } from '@/data/services/catalog/bathroom'
import { carpentrySeeds } from '@/data/services/catalog/carpentry'
import { cleaningSeeds } from '@/data/services/catalog/cleaning'
import { commercialSeeds } from '@/data/services/catalog/commercial'
import { doorsWindowsSeeds } from '@/data/services/catalog/doors-windows'
import { electricalSeeds } from '@/data/services/catalog/electrical'
import { flooringSeeds } from '@/data/services/catalog/flooring'
import { furnitureInstallationSeeds } from '@/data/services/catalog/furniture-installation'
import { generalHandymanSeeds } from '@/data/services/catalog/general-handyman'
import { kitchenSeeds } from '@/data/services/catalog/kitchen'
import { masonryTilingSeeds } from '@/data/services/catalog/masonry-tiling'
import { outdoorSeeds } from '@/data/services/catalog/outdoor'
import { paintingSeeds } from '@/data/services/catalog/painting'
import { plumbingSeeds } from '@/data/services/catalog/plumbing'
import { renovationSeeds } from '@/data/services/catalog/renovation'
import { rentalMoveSeeds } from '@/data/services/catalog/rental-move'
import { smartHomeSeeds } from '@/data/services/catalog/smart-home'
import { specialistSeasonalSeeds } from '@/data/services/catalog/specialist-seasonal'
import { uaePropertySeeds } from '@/data/services/catalog/uae-property'
import { wallsCeilingsSeeds } from '@/data/services/catalog/walls-ceilings'
import { waterproofingSeeds } from '@/data/services/catalog/waterproofing'
import { getCategoryById, serviceCategories } from '@/data/services/categories'
import { getCopy } from '@/data/services/copy'
import { overlays } from '@/data/services/i18n/registry'
import { categoryIcons } from '@/data/services/icons'
import type {
  ServiceCategoryId,
  ServiceDetail,
  ServiceItem,
} from '@/data/services/types'
import type { AppLocale } from '@/i18n/routing'

const allSeeds: ServiceSeed[] = [
  ...renovationSeeds,
  ...generalHandymanSeeds,
  ...plumbingSeeds,
  ...electricalSeeds,
  ...carpentrySeeds,
  ...airConditioningSeeds,
  ...paintingSeeds,
  ...masonryTilingSeeds,
  ...flooringSeeds,
  ...doorsWindowsSeeds,
  ...kitchenSeeds,
  ...bathroomSeeds,
  ...wallsCeilingsSeeds,
  ...waterproofingSeeds,
  ...outdoorSeeds,
  ...furnitureInstallationSeeds,
  ...smartHomeSeeds,
  ...commercialSeeds,
  ...rentalMoveSeeds,
  ...cleaningSeeds,
  ...specialistSeasonalSeeds,
  ...uaePropertySeeds,
]

const assertUniqueSlugs = (seeds: ServiceSeed[]) => {
  const seen = new Set<string>()
  for (const seed of seeds) {
    if (seen.has(seed.slug)) {
      throw new Error(`Duplicate service slug: ${seed.slug}`)
    }
    seen.add(seed.slug)
  }
}

assertUniqueSlugs(allSeeds)

const RELATED_COUNT = 6

const fillRelatedServices = (
  seed: ServiceSeed,
  bySlug: Map<string, ServiceSeed>
): string[] => {
  const valid = (seed.related ?? []).filter(
    (slug) => slug !== seed.slug && bySlug.has(slug)
  )
  if (valid.length >= RELATED_COUNT) return valid.slice(0, RELATED_COUNT)

  const sameCategory = allSeeds
    .filter(
      (item) =>
        item.category === seed.category &&
        item.slug !== seed.slug &&
        !valid.includes(item.slug)
    )
    .map((item) => item.slug)

  const filled = [...valid, ...sameCategory].slice(0, RELATED_COUNT)
  if (filled.length >= RELATED_COUNT) return filled

  const extras = allSeeds
    .filter((item) => item.slug !== seed.slug && !filled.includes(item.slug))
    .map((item) => item.slug)

  return [...filled, ...extras].slice(0, RELATED_COUNT)
}

const seedBySlug = new Map(allSeeds.map((seed) => [seed.slug, seed]))

const applyOverlay = (seed: ServiceSeed, locale: AppLocale): ServiceSeed => {
  const overlay = overlays[locale]?.[seed.category]?.[seed.slug]
  if (!overlay) return seed

  return {
    ...seed,
    ...overlay,
    category: seed.category,
    keywords: seed.keywords,
    related: seed.related,
    slug: seed.slug,
  }
}

type LocaleCatalog = {
  bySlug: Map<string, ServiceDetail>
  details: ServiceDetail[]
}

const localeCatalogCache = new Map<AppLocale, LocaleCatalog>()

const buildLocaleCatalog = (locale: AppLocale): LocaleCatalog => {
  const cached = localeCatalogCache.get(locale)
  if (cached) return cached

  const copy = getCopy(locale)
  const details = allSeeds.map((seed) =>
    buildService(
      {
        ...applyOverlay(seed, locale),
        related: fillRelatedServices(seed, seedBySlug),
      },
      locale,
      copy
    )
  )
  const bySlug = new Map(details.map((service) => [service.slug, service]))

  for (const service of details) {
    for (const related of service.relatedServices) {
      if (!bySlug.has(related)) {
        throw new Error(
          `Invalid related service "${related}" on "${service.slug}"`
        )
      }
    }
  }

  const catalog = { bySlug, details }
  localeCatalogCache.set(locale, catalog)
  return catalog
}

export const getPublishedServices = (locale: AppLocale = 'en') => {
  return buildLocaleCatalog(locale).details.filter(
    (service) => service.published
  )
}

export const serviceDetails: ServiceDetail[] = getPublishedServices('en')

export const publishedServices: ServiceDetail[] = serviceDetails

const toServiceItem = (service: ServiceDetail): ServiceItem => {
  return {
    category: service.category,
    description: service.shortDescription,
    icon: categoryIcons[service.category],
    slug: service.slug,
    title: service.title,
  }
}

const highlightSlugs = [
  'villa-flat-office-and-shop-renovation',
  'air-conditioning-services',
  'plumbing-and-carpentry',
  'masonry-and-painting',
  'handyman-and-general-maintenance',
] as const

export const getHighlightServices = (
  locale: AppLocale = 'en'
): ServiceItem[] => {
  const { bySlug } = buildLocaleCatalog(locale)

  return highlightSlugs.map((slug) => {
    const service = bySlug.get(slug)
    if (!service) {
      throw new Error(`Missing highlight service: ${slug}`)
    }
    return toServiceItem(service)
  })
}

/** Five highlight services shown on the home page and in the footer. */
export const highlightServices: ServiceItem[] = getHighlightServices('en')

export const serviceHref = (slug: string) => {
  return `/services/${slug}`
}

export const categoryHref = (slug: string) => {
  return `/services#${slug}`
}

export const getServiceBySlug = (slug: string, locale: AppLocale = 'en') => {
  return getPublishedServices(locale).find((service) => service.slug === slug)
}

export const getServiceItemBySlug = (
  slug: string,
  locale: AppLocale = 'en'
) => {
  return getCatalogServices(locale).find((service) => service.slug === slug)
}

export const getRelatedServices = (
  service: ServiceDetail,
  locale: AppLocale = 'en'
): ServiceItem[] => {
  const { bySlug } = buildLocaleCatalog(locale)

  return service.relatedServices
    .map((slug) => {
      const detail = bySlug.get(slug)
      return detail ? toServiceItem(detail) : undefined
    })
    .filter((item): item is ServiceItem => Boolean(item))
}

export const getCatalogServices = (locale: AppLocale = 'en'): ServiceItem[] => {
  return getPublishedServices(locale).map(toServiceItem)
}

export const getServicesByCategory = (
  category: ServiceCategoryId,
  locale: AppLocale = 'en'
) => {
  return getCatalogServices(locale).filter(
    (service) => service.category === category
  )
}

export const getCatalogByCategory = (locale: AppLocale = 'en') => {
  return serviceCategories
    .map((category) => ({
      category: {
        ...category,
        description: category.description,
        title: category.title,
      },
      services: getServicesByCategory(category.id, locale),
    }))
    .filter((group) => group.services.length > 0)
}

export const catalogServices: ServiceItem[] = getCatalogServices('en')

export const catalogByCategory = getCatalogByCategory('en')

export type { ServiceSeed } from '@/data/services/buildService'
export type { ServiceCategoryId, ServiceDetail, ServiceItem }
export { getCategoryById, serviceCategories }
