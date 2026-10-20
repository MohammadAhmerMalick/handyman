import { type CopyHelpers, getCopy, localeFacts } from '@/data/services/copy'
import {
  serviceHeroImage,
  serviceSidebarImage,
  serviceSupportingImages,
} from '@/data/services/images'
import type { ServiceCategoryId, ServiceDetail } from '@/data/services/types'
import type { AppLocale } from '@/i18n/routing'

export type ServiceSeed = {
  angle: string
  benefits: string[]
  category: ServiceCategoryId
  complianceNote?: string
  includes: string[]
  keywords?: string[]
  outcome: string
  problems: string[]
  process?: string[]
  related?: string[]
  slug: string
  tips: string[]
  title: string
  whenNeeded: string
}

const hashString = (value: string) => {
  let hash = 0
  for (let index = 0; index < value.length; index += 1) {
    hash = (hash << 5) - hash + value.charCodeAt(index)
    hash |= 0
  }
  return Math.abs(hash)
}

export const buildService = (
  seed: ServiceSeed,
  locale: AppLocale = 'en',
  copy: CopyHelpers = getCopy(locale)
): ServiceDetail => {
  const process = seed.process ?? copy.defaultProcess(seed)
  const pattern = (hashString(seed.slug) % 2) as 0 | 1
  const introduction = copy.introduction(seed, pattern)
  const keywords = seed.keywords ?? [
    seed.title,
    `${seed.title} UAE`,
    `${seed.title} Dubai`,
    'handyman services',
    'property maintenance',
  ]

  return {
    availability: copy.availability(),
    benefits: seed.benefits,
    category: seed.category,
    commonProblems: seed.problems,
    complianceNote: seed.complianceNote,
    faqs: copy.faqs(seed),
    heroDescription: introduction,
    heroImage: serviceHeroImage(seed.category, seed.title),
    heroTitle: seed.title,
    introduction,
    keywords,
    mainDescription: copy.mainDescription(seed, pattern),
    maintenanceTips: seed.tips,
    metaDescription: copy.metaDescription(seed),
    metaTitle: copy.metaTitle(seed),
    process,
    published: true,
    relatedServices: seed.related ?? [],
    serviceAreas: localeFacts[locale].serviceArea,
    servicesIncluded: seed.includes,
    shortDescription: copy.shortDescription(seed),
    sidebarImage: serviceSidebarImage(seed.category, seed.title),
    slug: seed.slug,
    supportingImages: serviceSupportingImages(seed.category, seed.title),
    title: seed.title,
    whyChooseUs: copy.whyChooseUs(seed),
  }
}
