import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Container } from '@/components/ui/container'
import { catalogByCategory, serviceHref } from '@/data/services'
import { categoryIcons } from '@/data/services/icons'
import { categoryImageSrc } from '@/data/services/images'
import type { ServiceItem } from '@/data/services/types'

const serviceSummary = (description: string) => {
  const separator = ' — '
  const splitAt = description.indexOf(separator)
  const summary =
    splitAt === -1 ? description : description.slice(splitAt + separator.length)

  return summary.charAt(0).toUpperCase() + summary.slice(1)
}

const countLabel = (count: number) => {
  return count === 1 ? '1 service' : `${count} services`
}

type ServiceCardProps = {
  service: ServiceItem
}

const ServiceCard = ({ service }: ServiceCardProps) => {
  return (
    <li className="h-full">
      <Link
        className="group flex h-full gap-4 rounded-2xl border border-border bg-card p-4 text-foreground shadow-muted shadow-sm transition-[background-color,box-shadow,border-color,color] duration-500 hover:border-primary hover:bg-primary hover:text-heading hover:shadow-md md:p-5"
        href={serviceHref(service.slug)}
      >
        <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground transition-colors duration-500 group-hover:bg-primary-foreground group-hover:text-primary">
          <service.icon aria-hidden className="size-5" />
        </span>
        <span className="flex min-w-0 flex-1 flex-col gap-1.5">
          <span className="flex items-start justify-between gap-3">
            <h3 className="font-semibold text-base text-heading leading-snug duration-500 group-hover:text-black">
              {service.title}
            </h3>
            <ArrowRight
              aria-hidden
              className="mt-0.5 size-4 shrink-0 text-heading transition-transform duration-500 group-hover:translate-x-1 group-hover:text-black"
            />
          </span>
          <p className="line-clamp-2 text-sm leading-relaxed duration-500 group-hover:text-black">
            {serviceSummary(service.description)}
          </p>
        </span>
      </Link>
    </li>
  )
}

const ServicesCatalog = () => {
  return (
    <div>
      <div className="sticky top-18.5 z-40 border-border border-b bg-white/95 backdrop-blur">
        <Container className="py-3 md:py-3 lg:py-3">
          <nav aria-label="Service categories">
            <ul className="flex gap-2 overflow-x-auto scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {catalogByCategory.map(({ category }) => (
                <li className="shrink-0" key={category.id}>
                  <a
                    className="inline-flex rounded-full border border-border bg-card px-3.5 py-1.5 font-medium text-heading text-sm transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
                    href={`#${category.slug}`}
                  >
                    {category.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </Container>
      </div>

      <Container className="space-y-16 pt-8 pb-16 md:space-y-20 md:pt-12 md:pb-20 lg:pt-14 lg:pb-24">
        {catalogByCategory.map(({ category, services }, index) => {
          const Icon = categoryIcons[category.id]

          return (
            <section
              className="scroll-mt-40 space-y-5"
              id={category.slug}
              key={category.id}
            >
              <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-muted shadow-sm">
                <div className="grid md:grid-cols-[17rem_1fr]">
                  <div className="relative aspect-[2.2/1] bg-muted md:aspect-auto md:min-h-48">
                    <Image
                      alt=""
                      className="object-cover"
                      fill
                      priority={index === 0}
                      sizes="(max-width: 768px) 100vw, 272px"
                      src={categoryImageSrc(category.id)}
                    />
                    <span className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-linear-to-t from-primary-foreground/45 to-transparent" />
                    <span className="absolute bottom-4 left-4 inline-flex size-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-sm">
                      <Icon aria-hidden className="size-5" />
                    </span>
                  </div>
                  <div className="flex flex-col justify-center gap-3 p-5 md:p-8">
                    <p className="font-medium text-muted-foreground text-sm">
                      {countLabel(services.length)}
                    </p>
                    <h2 className="font-bold text-2xl md:text-3xl">
                      {category.title}
                    </h2>
                    <p className="max-w-2xl">{category.description}</p>
                  </div>
                </div>
              </div>

              <ul className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {services.map((service) => (
                  <ServiceCard key={service.slug} service={service} />
                ))}
              </ul>
            </section>
          )
        })}
      </Container>
    </div>
  )
}

export default ServicesCatalog
