import type { MetadataRoute } from 'next'
import { getSiteUrl } from '@/lib/siteUrl'

const robots = (): MetadataRoute.Robots => {
  const origin = getSiteUrl().origin

  return {
    rules: {
      allow: '/',
      userAgent: '*',
    },
    sitemap: `${origin}/sitemap.xml`,
  }
}

export default robots
