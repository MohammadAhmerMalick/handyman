import { ImageResponse } from 'next/og'
import Favicon from '@/components/layout/Favicon'
import { resolveMetadataImageSize } from '@/lib/metadataImageSize'

export const contentType = 'image/png'

export const generateImageMetadata = () => {
  const sizes = [57, 60, 72, 76, 114, 120, 144, 152, 180]

  return sizes.map((size) => ({
    contentType: 'image/png',
    id: size,
    size: { height: size, width: size },
  }))
}

type AppleIconProps = {
  id: Promise<number>
}

const AppleIcon = async ({ id }: AppleIconProps) => {
  const size = await resolveMetadataImageSize(id, 180)

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

export default AppleIcon
