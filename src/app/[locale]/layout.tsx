import { cn } from 'cn'
import type { Metadata, Viewport } from 'next'
import {
  Bricolage_Grotesque,
  Noto_Sans_Arabic,
  Noto_Sans_Devanagari,
  Noto_Sans_SC,
  Outfit,
} from 'next/font/google'
import { notFound } from 'next/navigation'
import { hasLocale, NextIntlClientProvider } from 'next-intl'
import {
  getMessages,
  getTranslations,
  setRequestLocale,
} from 'next-intl/server'
import type { ReactNode } from 'react'
import Footer from '@/components/layout/Footer'
import Navbar from '@/components/layout/navbar/Navbar'
import ScrollToTop from '@/components/layout/ScrollToTop'
import TopBar from '@/components/layout/TopBar'
import Analytics from '@/components/shared/Analytics'
import JsonLd from '@/components/shared/JsonLd'
import { isRtlLocale, ogLocales } from '@/i18n/locales'
import { routing } from '@/i18n/routing'
import { brandHex } from '@/lib/brandColors'
import { openGraphImage } from '@/lib/pageMetadata'
import { getSiteUrl } from '@/lib/siteUrl'

const outfit = Outfit({ subsets: ['latin'], variable: '--font-sans' })
const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-heading',
})
const notoArabic = Noto_Sans_Arabic({
  subsets: ['arabic'],
  variable: '--font-arabic',
})
const notoDevanagari = Noto_Sans_Devanagari({
  subsets: ['devanagari'],
  variable: '--font-devanagari',
})
const notoChinese = Noto_Sans_SC({
  subsets: ['latin'],
  variable: '--font-chinese',
  weight: ['400', '500', '600', '700'],
})

type LocaleLayoutProps = {
  children: ReactNode
  pageTitle: ReactNode
  params: Promise<{ locale: string }>
}

export const generateStaticParams = () => {
  return routing.locales.map((locale) => ({ locale }))
}

/** Browser UI chrome (mobile status bar, etc.). Matches sticky navbar surface. */
export const viewport: Viewport = {
  themeColor: [
    {
      color: brandHex.primaryForeground,
      media: '(prefers-color-scheme: light)',
    },
    {
      color: brandHex.primaryForeground,
      media: '(prefers-color-scheme: dark)',
    },
  ],
}

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> => {
  const { locale: requested } = await params
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale
  const t = await getTranslations({ locale, namespace: 'Metadata' })

  return {
    alternates: {
      canonical: './',
    },
    applicationName: 'Handyman',
    authors: [{ name: 'Handyman', url: getSiteUrl().toString() }],
    category: t('category'),
    creator: 'Handyman',
    description: t('description'),
    keywords: t('keywords')
      .split(',')
      .map((keyword) => keyword.trim())
      .filter(Boolean),
    metadataBase: getSiteUrl(),
    openGraph: {
      images: [openGraphImage],
      locale: ogLocales[locale],
      siteName: 'Handyman',
      type: 'website',
      url: './',
    },
    publisher: 'Handyman',
    robots: {
      follow: true,
      index: true,
    },
    title: {
      default: t('titleDefault'),
      template: t('titleTemplate'),
    },
    twitter: {
      card: 'summary_large_image',
      images: [openGraphImage],
    },
  }
}

const LocaleLayout = async ({
  children,
  pageTitle,
  params,
}: LocaleLayoutProps) => {
  const { locale } = await params

  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }

  setRequestLocale(locale)

  const messages = await getMessages()

  return (
    <html
      lang={locale}
      dir={isRtlLocale(locale) ? 'rtl' : 'ltr'}
      data-scroll-behavior="smooth"
      className={cn(
        'h-full scroll-smooth bg-primary font-sans antialiased',
        outfit.variable,
        bricolage.variable,
        notoArabic.variable,
        notoDevanagari.variable,
        notoChinese.variable
      )}
    >
      <body className="flex min-h-full flex-col bg-white">
        <NextIntlClientProvider messages={messages}>
          <JsonLd />
          <Analytics />
          <TopBar />
          <Navbar />
          {pageTitle}
          <main className="flex flex-1 flex-col">{children}</main>
          <Footer />
          <ScrollToTop />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}

export default LocaleLayout
