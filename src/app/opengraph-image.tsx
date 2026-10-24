import { ImageResponse } from 'next/og'
import Favicon from '@/components/layout/Favicon'

// Image metadata
export const alt = 'AutoRent'
export const size = {
  height: 630,
  width: 1200,
}
export const card = 'summary'

export const contentType = 'image/png'

// Image generation
export default async function Image() {
  return new ImageResponse(
    // ImageResponse JSX element
    <div
      style={{
        alignItems: 'center',
        display: 'flex',
        height: '100%',
        justifyContent: 'center',
        width: '100%',
      }}
    >
      <Favicon />
    </div>,
    // ImageResponse options
    {
      ...size,
    }
  )
}
