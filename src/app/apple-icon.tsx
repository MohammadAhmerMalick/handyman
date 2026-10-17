import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import { ImageResponse } from 'next/og'

const appleIconSizes = [120, 152, 167, 180]

const sourceInner = readFileSync(join(process.cwd(), 'public/icon.svg'), 'utf8')
  .replace(/^<svg\b[^>]*>/, '')
  .replace(/<\/svg>\s*$/, '')

const iconSrc = (size: number) => {
  const scale = size / 54
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" fill="none"><g transform="scale(${scale})">${sourceInner}</g></svg>`

  return `data:image/svg+xml;base64,${Buffer.from(svg).toString('base64')}`
}

export const generateImageMetadata = () => {
  return appleIconSizes.map((size) => ({
    contentType: 'image/png',
    id: size,
    size: { height: size, width: size },
  }))
}

type AppleIconProps = {
  id: Promise<number>
}

const AppleIcon = async ({ id }: AppleIconProps) => {
  const size = Number(await id)
  const markSize = Math.round(size * 0.8)

  return new ImageResponse(
    <div
      style={{
        alignItems: 'center',
        background: '#222222',
        display: 'flex',
        height: '100%',
        justifyContent: 'center',
        width: '100%',
      }}
    >
      {/* biome-ignore lint/performance/noImgElement: Satori only rasterizes a native img */}
      <img alt="" height={markSize} src={iconSrc(markSize)} width={markSize} />
    </div>,
    { height: size, width: size }
  )
}

export default AppleIcon
