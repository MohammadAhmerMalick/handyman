import { ImageResponse } from 'next/og'
import Favicon from '@/components/layout/Favicon'
import { resolveMetadataImageSize } from '@/lib/metadataImageSize'

export const contentType = 'image/png'

export const generateImageMetadata = () => {
  const sizes = [16, 32, 48, 96, 192, 512]

  return sizes.map((size) => ({
    contentType: 'image/png',
    id: size,
    size: { height: size, width: size },
  }))
}

type IconProps = {
  id: Promise<number>
}

const Icon = async ({ id }: IconProps) => {
  const size = await resolveMetadataImageSize(id, 32)

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
      <Favicon size={size} />
    </div>,
    { height: size, width: size }
  )
}

export default Icon
