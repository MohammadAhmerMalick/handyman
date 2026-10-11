import type { ServiceCategoryId, ServiceImage } from '@/data/services/types'

export const categoryImageSrc = (category: ServiceCategoryId) => {
  return `/services/categories/${category}.jpg`
}

const categoryTitles: Record<ServiceCategoryId, string> = {
  'air-conditioning': 'Air conditioning',
  bathroom: 'Bathroom',
  carpentry: 'Carpentry',
  cleaning: 'Cleaning',
  commercial: 'Commercial',
  'doors-windows': 'Doors and windows',
  electrical: 'Electrical',
  flooring: 'Flooring',
  'furniture-installation': 'Furniture installation',
  'general-handyman': 'General handyman',
  kitchen: 'Kitchen',
  'masonry-tiling': 'Masonry and tiling',
  outdoor: 'Outdoor',
  painting: 'Painting',
  plumbing: 'Plumbing',
  renovation: 'Renovation',
  'rental-move': 'Rental and move-in',
  'smart-home': 'Smart home',
  'specialist-seasonal': 'Specialist and seasonal',
  'uae-property': 'UAE property',
  'walls-ceilings': 'Walls and ceilings',
  waterproofing: 'Waterproofing',
}

export const serviceHeroImage = (
  category: ServiceCategoryId,
  title: string
): ServiceImage => {
  return {
    alt: `${title} — ${categoryTitles[category]} services in the UAE`,
    src: categoryImageSrc(category),
  }
}

export const serviceSupportingImages = (
  category: ServiceCategoryId,
  title: string
): [ServiceImage, ServiceImage] => {
  const src = categoryImageSrc(category)
  return [
    {
      alt: `${title} — on-site ${categoryTitles[category].toLowerCase()} work`,
      src,
    },
    {
      alt: `${title} — finished ${categoryTitles[category].toLowerCase()} result`,
      src,
    },
  ]
}

export const serviceSidebarImage = (
  category: ServiceCategoryId,
  title: string
): ServiceImage => {
  return {
    alt: `${title} — Handyman ${categoryTitles[category].toLowerCase()} services`,
    src: categoryImageSrc(category),
  }
}
