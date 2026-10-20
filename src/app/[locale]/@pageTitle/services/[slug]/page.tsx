import { notFound } from 'next/navigation'
import { hasLocale } from 'next-intl'
import PageTitle from '@/components/shared/PageTitle'
import { getServiceBySlug, publishedServices } from '@/data/services'
import { routing } from '@/i18n/routing'

type PageTitleSlotProps = {
  params: Promise<{ locale: string; slug: string }>
}

export const generateStaticParams = () => {
  return publishedServices.map((service) => ({ slug: service.slug }))
}

export const dynamicParams = false

const PageTitleSlot = async ({ params }: PageTitleSlotProps) => {
  const { locale: requested, slug } = await params
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale
  const service = getServiceBySlug(slug, locale)

  if (!service) notFound()

  return (
    <PageTitle description={service.shortDescription} title={service.title} />
  )
}

export default PageTitleSlot
