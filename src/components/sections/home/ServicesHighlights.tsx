import { cn } from 'cn'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/container'
import { pages } from '@/data/links'
import { highlightServices, serviceHref } from '@/data/services'
import { categoryImageSrc } from '@/data/services/images'
import type { ServiceItem } from '@/data/services/types'

type HighlightCardProps = {
  featured?: boolean
  service: ServiceItem
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

const HighlightCard = ({ featured = false, service }: HighlightCardProps) => {
  return (
    <Link
      className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-muted shadow-sm transition-shadow duration-300 hover:shadow-md"
      href={serviceHref(service.slug)}
    >
      <div
        className={cn(
          'relative overflow-hidden bg-muted',
          featured ? 'aspect-video' : 'aspect-16/10'
        )}
      >
        <Image
          alt=""
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          fill
          priority={featured}
          sizes={
            featured
              ? '(max-width: 1024px) 100vw, 40vw'
              : '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
          }
          src={categoryImageSrc(
            service.slug === 'plumbing-and-carpentry'
              ? 'plumbing'
              : service.category
          )}
        />
        <span className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-primary-foreground/50 to-transparent" />
        <span className="absolute bottom-4 left-4 inline-flex size-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-sm">
          <service.icon aria-hidden className="size-5" />
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5 md:p-6">
        <h3 className="font-semibold text-heading text-xl leading-snug transition-colors group-hover:text-primary">
          {service.title}
        </h3>
        <p className="line-clamp-3 text-sm leading-relaxed">
          {highlightSummary(service)}
        </p>
        <span className="mt-auto inline-flex items-center gap-1.5 pt-2 font-medium text-heading text-sm transition-colors group-hover:text-primary">
          View service
          <ArrowRight
            aria-hidden
            className="size-4 transition-transform duration-300 group-hover:translate-x-1"
          />
        </span>
      </div>
    </Link>
  )
}

const ServicesHighlights = () => {
  return (
    <section className="border-border border-t bg-white">
      <Container className="space-y-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl space-y-3">
            <h2 className="font-bold text-3xl md:text-4xl">Our services</h2>
            <p className="md:text-lg">
              Core trades for homes and businesses across the UAE. See the full
              list on our services page.
            </p>
          </div>
          <Button
            className="w-fit shrink-0"
            nativeButton={false}
            render={<Link href={pages.services.href} />}
            variant="outline"
          >
            View all services
            <ArrowRight aria-hidden data-icon="inline-end" />
          </Button>
        </div>

        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-6">
          {highlightServices.map((service, index) => (
            <li
              className={cn(
                index < 2 ? 'lg:col-span-3' : 'lg:col-span-2',
                index === highlightServices.length - 1 && 'sm:col-span-2'
              )}
              key={service.slug}
            >
              <HighlightCard featured={index < 2} service={service} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}

export default ServicesHighlights
