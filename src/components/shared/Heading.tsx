import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from 'cn'
import type { ReactNode } from 'react'

type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

const headingVariants = cva('flex w-full gap-4', {
  defaultVariants: {
    layout: 'center',
    variant: 'default',
  },
  variants: {
    layout: {
      center: 'mx-auto max-w-3xl flex-col items-center text-center',
      left: 'max-w-3xl flex-col items-start text-left',
      right: 'ml-auto max-w-3xl flex-col items-end text-right',
      split:
        'flex-col items-start text-left md:flex-row md:items-end md:justify-between md:gap-12',
      stacked:
        'max-w-3xl flex-col items-start border-primary border-l-4 pl-5 text-left',
    },
    variant: {
      accent: '',
      default: '',
      inverted: '',
      muted: '',
    },
  },
})

const headingTextVariants = cva(
  'text-balance font-heading font-semibold tracking-tight',
  {
    defaultVariants: {
      size: 'lg',
      variant: 'default',
    },
    variants: {
      size: {
        lg: 'text-3xl leading-tight md:text-4xl',
        md: 'text-2xl leading-snug md:text-3xl',
        sm: 'text-xl leading-snug md:text-2xl',
        xl: 'text-4xl leading-tight md:text-5xl',
      },
      variant: {
        accent: 'text-heading',
        default: 'text-heading',
        inverted: 'text-primary',
        muted: 'text-foreground',
      },
    },
  }
)

const paragraphVariants = cva('max-w-2xl text-pretty leading-relaxed', {
  defaultVariants: {
    layout: 'center',
    variant: 'default',
  },
  variants: {
    layout: {
      center: '',
      left: '',
      right: '',
      split: 'md:max-w-md md:text-right',
      stacked: '',
    },
    variant: {
      accent: 'text-foreground',
      default: 'text-foreground',
      inverted: 'text-white/70',
      muted: 'text-muted-foreground',
    },
  },
})

const eyebrowVariants = cva('font-semibold uppercase tracking-[0.2em]', {
  defaultVariants: {
    variant: 'default',
  },
  variants: {
    variant: {
      accent: 'text-primary',
      default: 'text-foreground',
      inverted: 'text-primary',
      muted: 'text-muted-foreground',
    },
  },
})

const dividerVariants = cva('h-1 w-12 rounded-full', {
  compoundVariants: [
    {
      class: 'mx-auto',
      layout: 'center',
    },
    {
      class: 'ml-auto',
      layout: 'right',
    },
  ],
  defaultVariants: {
    layout: 'center',
    variant: 'accent',
  },
  variants: {
    layout: {
      center: '',
      left: '',
      right: '',
      split: '',
      stacked: '',
    },
    variant: {
      accent: 'bg-primary',
      default: 'bg-primary',
      inverted: 'bg-primary',
      muted: 'bg-border',
    },
  },
})

type HeadingProps = {
  as?: HeadingTag
  children?: ReactNode
  className?: string
  eyebrow?: string
  heading: string
  layout?: VariantProps<typeof headingVariants>['layout']
  paragraph?: string
  showDivider?: boolean
  size?: VariantProps<typeof headingTextVariants>['size']
  variant?: VariantProps<typeof headingVariants>['variant']
}

const Heading = ({
  as: Tag = 'h2',
  children,
  className,
  eyebrow,
  heading,
  layout = 'center',
  paragraph,
  showDivider,
  size = 'lg',
  variant = 'default',
}: HeadingProps) => {
  const shouldShowDivider = showDivider ?? variant === 'accent'
  const hasCopy = Boolean(paragraph || children)

  return (
    <header className={cn(headingVariants({ layout, variant }), className)}>
      <div
        className={cn(
          'flex flex-col gap-3',
          layout === 'center' && 'items-center',
          layout === 'right' && 'items-end',
          layout === 'split' && 'min-w-0 flex-1'
        )}
      >
        {eyebrow ? (
          <span className={eyebrowVariants({ variant })}>{eyebrow}</span>
        ) : null}

        <Tag className={headingTextVariants({ size, variant })}>{heading}</Tag>

        {shouldShowDivider ? (
          <span aria-hidden className={dividerVariants({ layout, variant })} />
        ) : null}
      </div>

      {hasCopy ? (
        <div
          className={cn(
            'flex flex-col gap-4',
            layout === 'center' && 'items-center',
            layout === 'right' && 'items-end',
            layout === 'split' && 'min-w-0 md:items-end'
          )}
        >
          {paragraph ? (
            <p className={paragraphVariants({ layout, variant })}>
              {paragraph}
            </p>
          ) : null}
          {children}
        </div>
      ) : null}
    </header>
  )
}

export default Heading
export type { HeadingProps, HeadingTag }
