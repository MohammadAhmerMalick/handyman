import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://handyman.ae'),
}

type RootLayoutProps = {
  children: ReactNode
}

/** Pass-through root — locale html/body live in `app/[locale]/layout.tsx`. */
const RootLayout = ({ children }: RootLayoutProps) => children

export default RootLayout
