import { readFileSync } from 'node:fs'
import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import { ImageResponse } from 'next/og'

export const alt =
  'Handyman. Renovation, maintenance, and trade services across the UAE.'

export const contentType = 'image/png'

const socialSizes = [
  { height: 630, id: 'og', width: 1200 },
  { height: 600, id: 'twitter', width: 1200 },
  { height: 1080, id: 'square', width: 1080 },
] as const

type SocialSizeId = (typeof socialSizes)[number]['id']

const sourceInner = readFileSync(join(process.cwd(), 'public/icon.svg'), 'utf8')
  .replace(/^<svg\b[^>]*>/, '')
  .replace(/<\/svg>\s*$/, '')

const iconSrc = (markSize: number) => {
  const scale = markSize / 54
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${markSize}" height="${markSize}" viewBox="0 0 ${markSize} ${markSize}" fill="none"><g transform="scale(${scale})">${sourceInner}</g></svg>`

  return `data:image/svg+xml;base64,${Buffer.from(svg).toString('base64')}`
}

export const generateImageMetadata = () => {
  return socialSizes.map(({ height, id, width }) => ({
    alt,
    contentType,
    id,
    size: { height, width },
  }))
}

type OpenGraphImageProps = {
  id: Promise<SocialSizeId>
}

const OpenGraphImage = async ({ id }: OpenGraphImageProps) => {
  const sizeId = await id
  const variant =
    socialSizes.find((entry) => entry.id === sizeId) ?? socialSizes[0]
  const { height, width } = variant
  const isSquare = width === height
  const scale = width / 1200
  const markSize = Math.round((isSquare ? 280 : 320) * scale)
  const padX = Math.round((isSquare ? 64 : 80) * scale)
  const titleSize = Math.round((isSquare ? 72 : 84) * scale)
  const taglineSize = Math.round(28 * scale)
  const bodySize = Math.round(30 * scale)
  const gap = Math.round((isSquare ? 40 : 64) * scale)
  const textWidth = isSquare ? width - padX * 2 : Math.round(620 * scale)

  return new ImageResponse(
    <div
      style={{
        background: '#222222',
        display: 'flex',
        height: '100%',
        width: '100%',
      }}
    >
      <div
        style={{
          background: '#FFC527',
          display: 'flex',
          height: Math.max(8, Math.round(12 * scale)),
          left: 0,
          position: 'absolute',
          right: 0,
          top: 0,
        }}
      />
      <div
        style={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: isSquare ? 'column' : 'row',
          height: '100%',
          justifyContent: 'center',
          padding: isSquare
            ? `${Math.round(72 * scale)}px ${padX}px`
            : `0 ${padX}px`,
          width: '100%',
        }}
      >
        {/* biome-ignore lint/performance/noImgElement: Satori only rasterizes a native img */}
        <img
          alt=""
          height={markSize}
          src={iconSrc(markSize)}
          width={markSize}
        />
        <div
          style={{
            alignItems: isSquare ? 'center' : 'flex-start',
            display: 'flex',
            flexDirection: 'column',
            marginLeft: isSquare ? 0 : gap,
            marginTop: isSquare ? gap : 0,
            textAlign: isSquare ? 'center' : 'left',
            width: textWidth,
          }}
        >
          <div
            style={{
              color: '#FFC527',
              fontSize: titleSize,
              fontWeight: 600,
            }}
          >
            HANDYMAN
          </div>
          <div
            style={{
              color: '#FFFFFF',
              fontSize: taglineSize,
              marginTop: Math.round(18 * scale),
            }}
          >
            REPAIR | REBUILD | REFRESH
          </div>
          <div
            style={{
              color: 'rgba(255,255,255,0.78)',
              display: 'flex',
              fontSize: bodySize,
              justifyContent: isSquare ? 'center' : 'flex-start',
              lineHeight: 1.35,
              marginTop: Math.round(36 * scale),
              textAlign: isSquare ? 'center' : 'left',
              width: textWidth,
            }}
          >
            Renovation, maintenance, and trade services across the UAE.
          </div>
        </div>
      </div>
    </div>,
    { height, width }
  )
}

export default OpenGraphImage
