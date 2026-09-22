import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'

import './globals.css'
import Footer from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'
import ScrollToTop from '@/components/layout/ScrollToTop'
import TopBar from '@/components/layout/TopBar'
import { cn } from '@/lib/utils'

const outfit = Outfit({ subsets: ['latin'], variable: '--font-sans' })

export const metadata: Metadata = {
  title: 'Handyman',
}

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html
      lang="en"
      className={cn('h-full bg-primary font-sans antialiased', outfit.variable)}
    >
      <body className="flex min-h-full flex-col bg-white">
        <TopBar />
        <Navbar />
        <div className="flex flex-1 flex-col">{children}</div>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  )
}
