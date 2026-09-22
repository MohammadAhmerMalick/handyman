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
  title: 'Handyman',
}

type RootLayoutProps = {
  children: ReactNode
  pageTitle: ReactNode
}

export default function RootLayout({ children, pageTitle }: RootLayoutProps) {
  return (
    <html
      lang="en"
      className={cn('h-full bg-primary font-sans antialiased', outfit.variable)}
    >
      <body className="flex min-h-full flex-col bg-white">
        <TopBar />
        <Navbar />
        {pageTitle}
        <div className="flex flex-1 flex-col">{children}</div>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  )
}
