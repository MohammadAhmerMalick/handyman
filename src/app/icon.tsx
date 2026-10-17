import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import { ImageResponse } from 'next/og'

const iconSizes = [16, 32, 48, 192, 512]

const sourceInner = readFileSync(join(process.cwd(), 'public/icon.svg'), 'utf8')
  .replace(/^<svg\b[^>]*>/, '')
  .replace(/<\/svg>\s*$/, '')

const iconSrc = (size: number) => {
  const scale = size / 54
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" fill="none"><g transform="scale(${scale})">${sourceInner}</g></svg>`

  return `data:image/svg+xml;base64,${Buffer.from(svg).toString('base64')}`
}

export const generateImageMetadata = () => {
  return iconSizes.map((size) => ({
    contentType: 'image/png',
    id: size,
    size: { height: size, width: size },
  }))
}

type IconProps = {
  id: Promise<number>
}

const Icon = async ({ id }: IconProps) => {
  const size = Number(await id)

  return new ImageResponse(
    <div
      style={{
        alignItems: 'center',
        display: 'flex',
        height: '100%',
        justifyContent: 'center',
        width: '100%',
      }}
    >
      {/* biome-ignore lint/performance/noImgElement: Satori only rasterizes a native img */}
      <img alt="" height={size} src={iconSrc(size)} width={size} />
    </div>,
    { height: size, width: size }
  )
}

export default Icon
