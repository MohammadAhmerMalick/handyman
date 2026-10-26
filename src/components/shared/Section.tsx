import { cn } from 'cn'
import type { ComponentProps } from 'react'
import SiteImage from '@/components/shared/SiteImage'

type SectionProps = ComponentProps<'section'> & {
  /** Corner illustration from `public/`. */
  background?: string
  /** Bottom corner the illustration sits in. */
  backgroundSide?: 'left' | 'right'
  /** Gray fill. Combine with `background` when the illustration should sit on the gray band. */
  banded?: boolean
}

/** Intrinsic size for Next.js image optimization (matches files in `public/`). */
const sectionBackgroundDimensions: Record<
  string,
  { width: number; height: number }
> = {
  '/about-figure.png': { height: 330, width: 323 },
  '/app-promo-bg.png': { height: 330, width: 330 },
  '/categories-bg.png': { height: 271, width: 318 },
  '/faq-bg.png': { height: 268, width: 399 },
  '/services-bg.png': { height: 291, width: 297 },
  '/testimonials-bg.png': { height: 276, width: 408 },
}

const Section = ({
  background,
  backgroundSide = 'left',
  banded = false,
  children,
  className,
  style,
  ...props
}: SectionProps) => {
  const backgroundSize = background
    ? sectionBackgroundDimensions[background]
    : undefined

  return (
    <section
      className={cn(
        'relative',
        banded ? 'bg-muted/50' : 'bg-background',
        background && 'pb-16',
        className
      )}
      style={style}
      {...props}
    >
      {background && backgroundSize ? (
        <SiteImage
          alt="Section background"
          aria-hidden
          className={cn(
            'pointer-events-none absolute bottom-14 h-37.5 w-auto opacity-20 md:h-87.5',
            backgroundSide === 'left' ? 'left-6' : 'right-6'
          )}
          height={backgroundSize.height}
          sizes="350px"
          src={background}
          width={backgroundSize.width}
        />
      ) : null}
      <div className="relative">{children}</div>
    </section>
  )
}

export default Section
