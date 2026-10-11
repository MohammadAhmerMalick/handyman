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
import { categoryIcons } from '@/data/services/icons'
import type {
  ServiceCategoryId,
  ServiceDetail,
  ServiceItem,
} from '@/data/services/types'

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

const builtServices: ServiceDetail[] = allSeeds.map((seed) => {
  const detail = buildService({
    ...seed,
    related: fillRelatedServices(seed, seedBySlug),
  })
  return detail
})

const serviceBySlug = new Map(
  builtServices.map((service) => [service.slug, service])
)

for (const service of builtServices) {
  for (const related of service.relatedServices) {
    if (!serviceBySlug.has(related)) {
      throw new Error(
        `Invalid related service "${related}" on "${service.slug}"`
      )
    }
  }
}

export const serviceDetails: ServiceDetail[] = builtServices

export const publishedServices: ServiceDetail[] = serviceDetails.filter(
  (service) => service.published
)

const toServiceItem = (service: ServiceDetail): ServiceItem => {
  return {
    category: service.category,
    description: service.shortDescription,
    icon: categoryIcons[service.category],
    slug: service.slug,
    title: service.title,
  }
}

/** Broad catalog for the Services list and detail routes. */
export const catalogServices: ServiceItem[] =
  publishedServices.map(toServiceItem)

const highlightSlugs = [
  'villa-flat-office-and-shop-renovation',
  'air-conditioning-services',
  'plumbing-and-carpentry',
  'masonry-and-painting',
  'handyman-and-general-maintenance',
] as const

/** Five highlight services shown on the home page and in the footer. */
export const highlightServices: ServiceItem[] = highlightSlugs.map((slug) => {
  const service = serviceBySlug.get(slug)
  if (!service) {
    throw new Error(`Missing highlight service: ${slug}`)
  }
  return toServiceItem(service)
})

export const serviceHref = (slug: string) => {
  return `/services/${slug}`
}

export const categoryHref = (slug: string) => {
  return `/services#${slug}`
}

export const getServiceBySlug = (slug: string) => {
  return publishedServices.find((service) => service.slug === slug)
}

export const getServiceItemBySlug = (slug: string) => {
  return catalogServices.find((service) => service.slug === slug)
}

export const getRelatedServices = (service: ServiceDetail): ServiceItem[] => {
  return service.relatedServices
    .map((slug) => {
      const detail = serviceBySlug.get(slug)
      return detail ? toServiceItem(detail) : undefined
    })
    .filter((item): item is ServiceItem => Boolean(item))
}

export const getServicesByCategory = (category: ServiceCategoryId) => {
  return catalogServices.filter((service) => service.category === category)
}

export const catalogByCategory = serviceCategories
  .map((category) => ({
    category,
    services: getServicesByCategory(category.id),
  }))
  .filter((group) => group.services.length > 0)

export type { ServiceSeed } from '@/data/services/buildService'
export type { ServiceCategoryId, ServiceDetail, ServiceItem }
export { getCategoryById, serviceCategories }
