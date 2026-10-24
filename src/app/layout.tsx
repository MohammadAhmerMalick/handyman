import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { getSiteUrl } from '@/lib/siteUrl'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: getSiteUrl(),
}

type RootLayoutProps = {
  children: ReactNode
}

/** Pass-through root — locale html/body live in `app/[locale]/layout.tsx`. */
const RootLayout = ({ children }: RootLayoutProps) => children

export default RootLayout
