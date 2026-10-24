import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { contact } from '@/data/contact'
import { getPageLink, type PageId, pages, type SiteLink } from '@/data/links'
import { hrefLangTags } from '@/i18n/locales'
import { getPathname } from '@/i18n/navigation'
import { type AppLocale, routing } from '@/i18n/routing'
import { absoluteSiteUrl } from '@/lib/siteUrl'

const pageHref: Record<PageId, string> = {
  about: pages.about.href,
  contact: pages.contact.href,
  faq: pages.faq.href,
  home: pages.home.href,
  privacy: pages.privacy.href,
  services: pages.services.href,
  terms: pages.terms.href,
}

export const localeAlternates = (href: string): Metadata['alternates'] => {
  const languages: Record<string, string> = {
    'x-default': absoluteSiteUrl(
      getPathname({ href, locale: routing.defaultLocale })
    ),
  }

  for (const locale of routing.locales) {
    languages[hrefLangTags[locale]] = absoluteSiteUrl(
      getPathname({ href, locale })
    )
  }

  return {
    canonical: './',
    languages,
  }
}

const toMetadata = (page: SiteLink): Metadata => ({
  description: page.description,
  openGraph: {
    description: page.description,
    title: page.title,
  },
  title: page.title,
  twitter: {
    description: page.description,
    title: page.title,
  },
})

export const generatePageMetadata = async (page: PageId): Promise<Metadata> => {
  const t = await getTranslations('Pages')
  const title = t(`${page}.title`)
  const description = t(`${page}.description`, {
    address: contact.address,
    serviceArea: contact.serviceArea,
  })

  return {
    alternates: localeAlternates(pageHref[page]),
    description,
    openGraph: {
      description,
      title,
    },
    title,
    twitter: {
      description,
      title,
    },
  }
}

export const metadataForPath = (pathname: string): Metadata => {
  const page = getPageLink(pathname)
  if (!page) return {}
  return toMetadata(page)
}

export const pageMetadata = {
  about: toMetadata(pages.about),
  contact: toMetadata(pages.contact),
  faq: toMetadata(pages.faq),
  home: toMetadata(pages.home),
  privacy: toMetadata(pages.privacy),
  services: toMetadata(pages.services),
  terms: toMetadata(pages.terms),
} as const

export type { AppLocale }
