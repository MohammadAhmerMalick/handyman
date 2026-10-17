import { notFound } from 'next/navigation'
import ServiceDetail from '@/components/sections/services/ServiceDetail'
import { getServiceBySlug, publishedServices } from '@/data/services'

type ServiceDetailPageProps = {
  params: Promise<{ slug: string }>
}

export const generateStaticParams = () => {
  return publishedServices.map((service) => ({ slug: service.slug }))
}

export const dynamicParams = false

export const generateMetadata = async ({ params }: ServiceDetailPageProps) => {
  const { slug } = await params
  const service = getServiceBySlug(slug)

  if (!service) return {}

  return {
    description: service.metaDescription,
    title: { absolute: service.metaTitle },
  }
}

const ServiceDetailPage = async ({ params }: ServiceDetailPageProps) => {
  const { slug } = await params
  const service = getServiceBySlug(slug)

  if (!service) notFound()

  return <ServiceDetail service={service} />
}

export default ServiceDetailPage
