import type { ServiceCategory, ServiceCategoryId } from '@/data/services/types'

export const serviceCategories: ServiceCategory[] = [
  {
    description:
      'Villa, flat, office, and shop renovation projects across the UAE.',
    id: 'renovation',
    slug: 'renovation',
    title: 'Renovation',
  },
  {
    description:
      'Everyday repairs, fittings, and preventive maintenance for homes and workplaces.',
    id: 'general-handyman',
    slug: 'general-handyman',
    title: 'General Handyman',
  },
  {
    description:
      'Leaks, fixtures, drains, and water-supply repairs for kitchens and bathrooms.',
    id: 'plumbing',
    slug: 'plumbing',
    title: 'Plumbing',
  },
  {
    description:
      'Lighting, switches, sockets, and fixture work carried out where appropriately licensed.',
    id: 'electrical',
    slug: 'electrical',
    title: 'Electrical',
  },
  {
    description:
      'Doors, cabinets, shelving, timber repairs, and custom woodwork.',
    id: 'carpentry',
    slug: 'carpentry',
    title: 'Carpentry & Joinery',
  },
  {
    description:
      'AC installation support, servicing, drainage checks, and airflow troubleshooting.',
    id: 'air-conditioning',
    slug: 'air-conditioning',
    title: 'Air Conditioning & Ventilation',
  },
  {
    description:
      'Interior and exterior painting, wallpaper, and surface preparation.',
    id: 'painting',
    slug: 'painting',
    title: 'Painting & Decorating',
  },
  {
    description:
      'Brickwork touch-ups, plaster repairs, tiling, and grout maintenance.',
    id: 'masonry-tiling',
    slug: 'masonry-tiling',
    title: 'Masonry & Tiling',
  },
  {
    description:
      'Laminate, vinyl, wood flooring installs, and floor surface repairs.',
    id: 'flooring',
    slug: 'flooring',
    title: 'Flooring',
  },
  {
    description:
      'Door and window repairs, seals, screens, and glazing maintenance.',
    id: 'doors-windows',
    slug: 'doors-windows',
    title: 'Doors, Windows & Glazing',
  },
  {
    description:
      'Cabinet, worktop, sink, and extractor maintenance for busy kitchens.',
    id: 'kitchen',
    slug: 'kitchen',
    title: 'Kitchen Services',
  },
  {
    description:
      'Fixture installs, resealing, accessories, and minor bathroom refreshes.',
    id: 'bathroom',
    slug: 'bathroom',
    title: 'Bathroom Services',
  },
  {
    description: 'Drywall, false ceilings, partitions, and wall fixing work.',
    id: 'walls-ceilings',
    slug: 'walls-ceilings',
    title: 'Walls, Ceilings & Partitions',
  },
  {
    description:
      'Leak sealing, wet-area waterproofing repairs, and gutter maintenance.',
    id: 'waterproofing',
    slug: 'waterproofing',
    title: 'Roofing, Waterproofing & Sealing',
  },
  {
    description:
      'Fence, gate, decking, patio, and outdoor fixture maintenance.',
    id: 'outdoor',
    slug: 'outdoor',
    title: 'Outdoor & Garden',
  },
  {
    description:
      'Furniture assembly, wall mounting, blinds, and TV bracket installs.',
    id: 'furniture-installation',
    slug: 'furniture-installation',
    title: 'Furniture & Interior Installation',
  },
  {
    description:
      'Smart locks, doorbells, sensors, and camera mounting within suitable scope.',
    id: 'smart-home',
    slug: 'smart-home',
    title: 'Smart Home & Security',
  },
  {
    description:
      'Office, retail, and landlord maintenance for workplaces across the UAE.',
    id: 'commercial',
    slug: 'commercial',
    title: 'Commercial Property Maintenance',
  },
  {
    description:
      'Move-in and move-out repairs, snagging, and rental property upkeep.',
    id: 'rental-move',
    slug: 'rental-move',
    title: 'Rental & Move-In Services',
  },
  {
    description:
      'Post-maintenance cleaning, deep cleans, and surface upkeep support.',
    id: 'cleaning',
    slug: 'cleaning',
    title: 'Cleaning & Maintenance Support',
  },
  {
    description:
      'Accessibility fittings, safety anchoring, and seasonal maintenance plans.',
    id: 'specialist-seasonal',
    slug: 'specialist-seasonal',
    title: 'Specialist & Seasonal',
  },
  {
    description:
      'Dubai and Sharjah-focused apartment, villa, and holiday-home maintenance.',
    id: 'uae-property',
    slug: 'uae-property',
    title: 'UAE Property Maintenance',
  },
]

export const getCategoryById = (id: ServiceCategoryId) => {
  return serviceCategories.find((category) => category.id === id)
}
