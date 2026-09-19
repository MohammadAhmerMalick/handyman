import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'

import './globals.css'
import { cn } from '@/lib/utils'

const outfit = Outfit({ subsets: ['latin'], variable: '--font-sans' })

export const metadata: Metadata = {
  title: 'Handyman',
}

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html
      lang="en"
      className={cn('h-full', 'antialiased', 'font-sans', outfit.variable)}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  )
}
