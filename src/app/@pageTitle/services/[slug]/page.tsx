import { notFound } from 'next/navigation'
import PageTitle from '@/components/shared/PageTitle'
import { getServiceBySlug, publishedServices } from '@/data/services'

type PageTitleSlotProps = {
  params: Promise<{ slug: string }>
}

export const generateStaticParams = () => {
  return publishedServices.map((service) => ({ slug: service.slug }))
}

export const dynamicParams = false

const PageTitleSlot = async ({ params }: PageTitleSlotProps) => {
  const { slug } = await params
  const service = getServiceBySlug(slug)

  if (!service) notFound()

  return (
    <PageTitle description={service.shortDescription} title={service.title} />
  )
}

export default PageTitleSlot
