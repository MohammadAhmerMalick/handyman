/**
 * Public origin for metadata (canonical, hreflang, Open Graph, JSON-LD).
 *
 * Set `NEXT_PUBLIC_SITE_URL` in Vercel when the live URL is not handyman.ae yet
 * (e.g. `https://your-project.vercel.app`). Preview deploys fall back to
 * `VERCEL_URL` so audits on the preview URL match canonical and hreflang.
 */
export const getSiteUrl = (): URL => {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.trim()
  if (explicit) {
    return new URL(explicit.replace(/\/$/, ''))
  }

  if (process.env.VERCEL_ENV === 'preview' && process.env.VERCEL_URL) {
    return new URL(`https://${process.env.VERCEL_URL}`)
  }

  return new URL('https://handyman.ae')
}

/** Resolve a locale-aware pathname to an absolute URL on the current site origin. */
export const absoluteSiteUrl = (pathname: string): string => {
  const url = new URL(pathname, getSiteUrl())
  return url.toString()
}
