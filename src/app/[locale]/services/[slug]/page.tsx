import { notFound } from 'next/navigation'
import { hasLocale } from 'next-intl'
import { setRequestLocale } from 'next-intl/server'
import ServiceDetail from '@/components/sections/services/ServiceDetail'
import { getServiceBySlug, publishedServices } from '@/data/services'
import { type AppLocale, routing } from '@/i18n/routing'
import { localeAlternates, socialMetadata } from '@/lib/pageMetadata'

type ServiceDetailPageProps = {
  params: Promise<{ locale: string; slug: string }>
}

export const generateStaticParams = () => {
  return publishedServices.map((service) => ({ slug: service.slug }))
}

export const dynamicParams = false

export const generateMetadata = async ({ params }: ServiceDetailPageProps) => {
  const { locale: requested, slug } = await params
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale
  const service = getServiceBySlug(slug, locale)

  if (!service) return {}

  return {
    alternates: localeAlternates(`/services/${slug}`),
    description: service.metaDescription,
    title: { absolute: service.metaTitle },
    ...socialMetadata(service.metaTitle, service.metaDescription, locale),
  }
}

const ServiceDetailPage = async ({ params }: ServiceDetailPageProps) => {
  const { locale: requested, slug } = await params
  const locale = (
    hasLocale(routing.locales, requested) ? requested : routing.defaultLocale
  ) as AppLocale

  setRequestLocale(locale)

  const service = getServiceBySlug(slug, locale)

  if (!service) notFound()

  return <ServiceDetail locale={locale} service={service} />
}

export default ServiceDetailPage
