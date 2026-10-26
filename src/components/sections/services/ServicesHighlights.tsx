import { cn } from 'cn'
import { ArrowRight } from 'lucide-react'
import { getTranslations } from 'next-intl/server'
import { Container } from '@/components/shared/Container'
import Heading from '@/components/shared/Heading'
import SiteImage from '@/components/shared/SiteImage'
import { Button } from '@/components/ui/button'
import { pages } from '@/data/links'
import { getHighlightServices, serviceHref } from '@/data/services'
import { categoryImageSrc } from '@/data/services/images'
import type { ServiceItem } from '@/data/services/types'
import { Link } from '@/i18n/navigation'
import type { AppLocale } from '@/i18n/routing'

const HIGHLIGHT_FEATURED_SIZES =
  '(min-width: 1024px) calc((min(100vw, 96rem) - 4rem - 1.25rem) / 2), (min-width: 640px) calc((100vw - 3rem - 1.25rem) / 2), min(761px, calc(100vw - 2rem))'

const HIGHLIGHT_COMPACT_SIZES =
  '(min-width: 1024px) calc((min(100vw, 96rem) - 4rem - 2.5rem) / 3), (min-width: 640px) calc((100vw - 3rem - 1.25rem) / 2), min(761px, calc(100vw - 2rem))'

/** Last highlight spans both columns from `sm` until `lg`. */
const HIGHLIGHT_COMPACT_FULL_ROW_SM_SIZES =
  '(min-width: 1024px) calc((min(100vw, 96rem) - 4rem - 2.5rem) / 3), (min-width: 640px) min(761px, calc(100vw - 3rem)), min(761px, calc(100vw - 2rem))'

type HighlightCardProps = {
  featured?: boolean
  fullRowSm?: boolean
  imageAlt: string
  service: ServiceItem
  viewLabel: string
}

const highlightSummary = (service: ServiceItem) => {
  const separator = ' — '
  const splitAt = service.description.indexOf(separator)
  const summary =
    splitAt === -1
      ? service.description
      : service.description.slice(splitAt + separator.length)

  return summary.charAt(0).toUpperCase() + summary.slice(1)
}

const HighlightCard = ({
  featured = false,
  fullRowSm = false,
  imageAlt,
  service,
  viewLabel,
}: HighlightCardProps) => {
  return (
    <Link
      className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border shadow-muted shadow-xl transition-[background-color,border-color,box-shadow,color] duration-300 hover:shadow-md"
      href={serviceHref(service.slug)}
    >
      <div className={cn('relative overflow-hidden bg-muted')}>
        <SiteImage
          alt={imageAlt}
          className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
          width={761}
          height={428}
          preload={featured}
          sizes={
            featured
              ? HIGHLIGHT_FEATURED_SIZES
              : fullRowSm
                ? HIGHLIGHT_COMPACT_FULL_ROW_SM_SIZES
                : HIGHLIGHT_COMPACT_SIZES
          }
          src={categoryImageSrc(
            service.slug === 'plumbing-and-carpentry'
              ? 'plumbing'
              : service.category
          )}
        />
        <span className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-primary-foreground/50 to-transparent" />
        <span className="absolute inset-s-4 bottom-4 inline-flex size-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-sm">
          <service.icon aria-hidden className="size-5" />
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-3 bg-background/70 p-5 transition-[background-color,color] duration-300 group-hover:bg-primary-foreground md:p-6">
        <h3 className="font-semibold text-heading text-xl leading-snug transition-colors duration-300 group-hover:text-primary">
          {service.title}
        </h3>
        <p className="line-clamp-3 text-sm leading-relaxed transition-colors duration-300 group-hover:text-white">
          {highlightSummary(service)}
        </p>
        <span className="mt-auto inline-flex items-center gap-1.5 pt-2 font-medium text-heading text-sm transition-colors duration-300 group-hover:text-primary">
          {viewLabel}
          <ArrowRight
            aria-hidden
            className="size-4 transition-transform duration-300 group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1"
          />
        </span>
      </div>
    </Link>
  )
}

const ServicesHighlights = async ({ locale }: { locale: AppLocale }) => {
  const t = await getTranslations('Highlights')
  const services = getHighlightServices(locale)

  return (
    <Container className="space-y-10">
      <div className="grid items-end gap-6 sm:grid-cols-[minmax(0,1fr)_auto]">
        <Heading
          heading={t('heading')}
          layout="left"
          paragraph={t('paragraph')}
        />
        <Button
          className="w-fit shrink-0"
          nativeButton={false}
          render={<Link href={pages.services.href} />}
          size="lg"
        >
          {t('viewAll')}
          <ArrowRight
            aria-hidden
            className="rtl:rotate-180"
            data-icon="inline-end"
          />
        </Button>
      </div>

      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-6">
        {services.map((service, index) => (
          <li
            className={cn(
              index < 2 ? 'lg:col-span-3' : 'lg:col-span-2',
              index === services.length - 1 && 'sm:col-span-2'
            )}
            key={service.slug}
          >
            <HighlightCard
              featured={index < 2}
              fullRowSm={index === services.length - 1}
              imageAlt={t('imageAlt', { title: service.title })}
              service={service}
              viewLabel={t('viewService')}
            />
          </li>
        ))}
      </ul>
    </Container>
  )
}

export default ServicesHighlights
