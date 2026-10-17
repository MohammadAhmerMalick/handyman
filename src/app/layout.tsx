import { cn } from 'cn'
import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import type { ReactNode } from 'react'
import Footer from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'
import ScrollToTop from '@/components/layout/ScrollToTop'
import TopBar from '@/components/layout/TopBar'
import './globals.css'

const outfit = Outfit({ subsets: ['latin'], variable: '--font-sans' })

export const metadata: Metadata = {
  alternates: {
    canonical: './',
  },
  applicationName: 'Handyman',
  authors: [{ name: 'Handyman', url: 'https://handyman.ae' }],
  category: 'Home services',
  creator: 'Handyman',
  description: 'Renovation, maintenance, and trade services across the UAE.',
  keywords: [
    'Handyman',
    'handyman UAE',
    'handyman Dubai',
    'renovation',
    'air conditioning',
    'plumbing',
    'carpentry',
    'masonry',
    'painting',
    'property maintenance',
    'Marina Dubai',
  ],
  metadataBase: new URL('https://handyman.ae'),
  openGraph: {
    locale: 'en_AE',
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
    default: 'Handyman',
    template: '%s | Handyman',
  },
  twitter: {
    card: 'summary_large_image',
  },
}

type RootLayoutProps = {
  children: ReactNode
  pageTitle: ReactNode
}

const RootLayout = ({ children, pageTitle }: RootLayoutProps) => {
  return (
    <html
      lang="en"
      className={cn(
        'h-full scroll-smooth bg-primary font-sans antialiased',
        outfit.variable
      )}
    >
      <body className="flex min-h-full flex-col bg-white">
        <TopBar />
        <Navbar />
        {pageTitle}
        <main className="flex flex-1 flex-col">{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  )
}

export default RootLayout
