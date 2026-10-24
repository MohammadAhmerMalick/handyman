import createMiddleware from 'next-intl/middleware'
import { routing } from './i18n/routing'

export default createMiddleware(routing)

export const config = {
  // App Router metadata lives at the root (`app/icon.tsx`, etc.), not under `[locale]`.
  matcher:
    '/((?!api|trpc|_next|_vercel|.*\\..*|opengraph-image|apple-icon|icon).*)',
}
