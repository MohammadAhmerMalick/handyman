import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Dev-only: allow LAN IP origins (e.g. phone at http://192.168.x.x:3000).
  // Without this, Next blocks /_next/* and client components never hydrate.
  allowedDevOrigins: process.env.DEV_ALLOWED_ORIGINS
    ? process.env.DEV_ALLOWED_ORIGINS.split(',').map((entry) => entry.trim())
    : ['*.*.*.*'],
  images: {
    remotePatterns: [
      {
        hostname: 'placehold.co',
        protocol: 'https',
      },
    ],
  },
}

export default nextConfig
