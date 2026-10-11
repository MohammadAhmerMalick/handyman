import type { LucideIcon } from 'lucide-react'

export type ServiceCategoryId =
  | 'general-handyman'
  | 'plumbing'
  | 'electrical'
  | 'carpentry'
  | 'air-conditioning'
  | 'painting'
  | 'masonry-tiling'
  | 'flooring'
  | 'doors-windows'
  | 'kitchen'
  | 'bathroom'
  | 'walls-ceilings'
  | 'waterproofing'
  | 'outdoor'
  | 'furniture-installation'
  | 'smart-home'
  | 'commercial'
  | 'rental-move'
  | 'cleaning'
  | 'specialist-seasonal'
  | 'uae-property'
  | 'renovation'

export type ServiceImage = {
  alt: string
  src: string
}

export type ServiceFaq = {
  answer: string
  question: string
}

export type ServiceCategory = {
  description: string
  id: ServiceCategoryId
  slug: string
  title: string
}

/** Card / list summary used across the site. */
export type ServiceItem = {
  category: ServiceCategoryId
  description: string
  icon: LucideIcon
  slug: string
  title: string
}

/** Full detail-page record. */
export type ServiceDetail = {
  availability: string
  benefits: string[]
  category: ServiceCategoryId
  commonProblems: string[]
  complianceNote?: string
  faqs: ServiceFaq[]
  heroDescription: string
  heroImage: ServiceImage
  heroTitle: string
  introduction: string
  keywords: string[]
  mainDescription: string[]
  maintenanceTips: string[]
  metaDescription: string
  metaTitle: string
  process: string[]
  published: boolean
  relatedServices: string[]
  serviceAreas: string
  servicesIncluded: string[]
  shortDescription: string
  sidebarImage: ServiceImage
  slug: string
  supportingImages: [ServiceImage, ServiceImage]
  title: string
  whyChooseUs: string
}
