import { cn } from 'cn'
import type { ComponentProps, CSSProperties } from 'react'

type SectionProps = ComponentProps<'section'> & {
  /** Corner illustration from `public/`. */
  background?: string
  /** Bottom corner the illustration sits in. */
  backgroundSide?: 'left' | 'right'
  /** Gray fill. Combine with `background` when the illustration should sit on the gray band. */
  banded?: boolean
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
  return (
    <section
      className={cn(
        'relative',
        banded ? 'bg-muted/50' : 'bg-background',
        background &&
          'pb-16 before:pointer-events-none before:absolute before:inset-0 before:bg-size-[auto_150px] before:bg-no-repeat before:opacity-20 before:content-[""] md:before:bg-size-[auto_350px] before:[background-image:var(--section-bg)]',
        background &&
          (backgroundSide === 'left'
            ? 'before:bg-position-[left_1.5rem_bottom_3.5rem]'
            : 'before:bg-position-[right_1.5rem_bottom_3.5rem]'),
        className
      )}
      style={
        {
          ...style,
          ...(background ? { '--section-bg': `url(${background})` } : null),
        } as CSSProperties
      }
      {...props}
    >
      <div className="relative">{children}</div>
    </section>
  )
}

export default Section
