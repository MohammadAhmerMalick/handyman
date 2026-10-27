import type { Metadata } from 'next'
import { getLocale, getTranslations } from 'next-intl/server'
import { contact } from '@/data/contact'
import { getPageLink, type PageId, pages, type SiteLink } from '@/data/links'
import { hrefLangTags, ogLocales } from '@/i18n/locales'
import { getPathname } from '@/i18n/navigation'
import { type AppLocale, routing } from '@/i18n/routing'
import { absoluteSiteUrl } from '@/lib/siteUrl'

/** File route from `src/app/opengraph-image.tsx`. Leaf `openGraph` replaces the parent, so every page must point at this image itself. */
export const openGraphImage = {
  alt: 'Handyman',
  height: 630,
  url: '/opengraph-image',
  width: 1200,
}

export const socialMetadata = (
  title: string,
  description: string | undefined,
  locale: AppLocale
): Pick<Metadata, 'openGraph' | 'twitter'> => ({
  openGraph: {
    description,
    images: [openGraphImage],
    locale: ogLocales[locale],
    siteName: 'Handyman',
    title,
    type: 'website',
    url: './',
  },
  twitter: {
    card: 'summary_large_image',
    description,
    images: [openGraphImage],
    title,
  },
})

const pageHref: Record<PageId, string> = {
  about: pages.about.href,
  contact: pages.contact.href,
  faq: pages.faq.href,
  home: pages.home.href,
  privacy: pages.privacy.href,
  services: pages.services.href,
  terms: pages.terms.href,
}

export const alternateLanguages = (href: string): Record<string, string> => {
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

  return languages
}

export const localeAlternates = (href: string): Metadata['alternates'] => ({
  canonical: './',
  languages: alternateLanguages(href),
})

const toMetadata = (page: SiteLink): Metadata => ({
  description: page.description,
  title: page.title,
  ...socialMetadata(page.title, page.description, routing.defaultLocale),
})

export const generatePageMetadata = async (page: PageId): Promise<Metadata> => {
  const locale = (await getLocale()) as AppLocale
  const t = await getTranslations('Pages')
  const description = t(`${page}.description`, {
    address: contact.address,
    serviceArea: contact.serviceArea,
  })
  const titleAbsolute =
    page === 'home' ? t('home.titleAbsolute') : undefined
  const title = titleAbsolute ?? t(`${page}.title`)
  const socialTitle = titleAbsolute ?? title

  return {
    alternates: localeAlternates(pageHref[page]),
    description,
    title: titleAbsolute ? { absolute: titleAbsolute } : title,
    ...socialMetadata(socialTitle, description, locale),
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
