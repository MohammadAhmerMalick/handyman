/**
 * Public origin for metadata (canonical, hreflang, Open Graph, JSON-LD).
 *
 * Override with `NEXT_PUBLIC_SITE_URL` when needed (e.g. local dev). Vercel preview
 * deploys fall back to `VERCEL_URL`. Otherwise defaults to the live Docker/nginx host.
 */
const DEFAULT_SITE_ORIGIN = 'https://beiruttobeirut.uroojperfumes.com'

export const getSiteUrl = (): URL => {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.trim()
  if (explicit) {
    return new URL(explicit.replace(/\/$/, ''))
  }

  if (process.env.VERCEL_ENV === 'preview' && process.env.VERCEL_URL) {
    return new URL(`https://${process.env.VERCEL_URL}`)
  }

  return new URL(DEFAULT_SITE_ORIGIN)
}

/** Resolve a locale-aware pathname to an absolute URL on the current site origin. */
export const absoluteSiteUrl = (pathname: string): string => {
  const url = new URL(pathname, getSiteUrl())
  return url.toString()
}
