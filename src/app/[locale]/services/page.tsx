import ServicesCatalog from '@/components/sections/services/ServicesCatalog'
import { generatePageMetadata } from '@/lib/pageMetadata'

export const generateMetadata = () => generatePageMetadata('services')

const ServicesPage = () => {
  return <ServicesCatalog />
}

export default ServicesPage
