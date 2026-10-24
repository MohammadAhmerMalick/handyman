import { readFileSync } from 'node:fs'
import { join } from 'node:path'

const markViewBox = 54

const sourceInner = readFileSync(join(process.cwd(), 'public/icon.svg'), 'utf8')
  .replace(/^<svg\b[^>]*>/, '')
  .replace(/<\/svg>\s*$/, '')

/** Inline SVG mark as a data URL for Satori / ImageResponse (paths only, no `<text>`). */
export const faviconMarkSrc = (size: number) => {
  const scale = size / markViewBox
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" fill="none"><g transform="scale(${scale})">${sourceInner}</g></svg>`

  return `data:image/svg+xml;base64,${Buffer.from(svg).toString('base64')}`
}

type FaviconProps = {
  size?: number
}

const Favicon = ({ size = 512 }: FaviconProps) => {
  const markSize = Math.round(size * 0.8)

  return (
    // biome-ignore lint/performance/noImgElement: Satori only rasterizes a native img
    <img
      alt=""
      height={markSize}
      src={faviconMarkSrc(markSize)}
      width={markSize}
    />
  )
}

export default Favicon
