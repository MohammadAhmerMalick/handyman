import { notFound } from 'next/navigation'
import { hasLocale } from 'next-intl'
import { setRequestLocale } from 'next-intl/server'
import { routing } from '@/i18n/routing'

type UnknownPageProps = {
  params: Promise<{ locale: string }>
}

const UnknownPage = async ({ params }: UnknownPageProps) => {
  const { locale } = await params

  if (hasLocale(routing.locales, locale)) {
    setRequestLocale(locale)
  }

  notFound()
}

export default UnknownPage
