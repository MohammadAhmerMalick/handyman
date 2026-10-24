import Image, { type ImageProps } from 'next/image'

type SiteImageProps = Omit<ImageProps, 'priority'>

/** Site images with explicit `title` and `loading` for SEO / audit tooling. */
const SiteImage = ({
  alt,
  loading,
  preload,
  title,
  ...props
}: SiteImageProps) => {
  const altText = typeof alt === 'string' ? alt : ''
  const resolvedTitle = title ?? (altText || undefined)

  return (
    <Image
      {...props}
      alt={alt}
      loading={preload ? 'eager' : (loading ?? 'lazy')}
      preload={preload}
      title={resolvedTitle}
    />
  )
}

export default SiteImage
