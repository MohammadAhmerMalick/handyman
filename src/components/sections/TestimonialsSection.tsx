import { Quote } from 'lucide-react'
import { getTranslations } from 'next-intl/server'
import { Container } from '@/components/shared/Container'
import Heading from '@/components/shared/Heading'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { getServiceItemBySlug, serviceHref } from '@/data/services'
import { type Testimonial, testimonials } from '@/data/testimonials'
import { Link } from '@/i18n/navigation'
import type { AppLocale } from '@/i18n/routing'

type TestimonialCardProps = {
  locale: AppLocale
  serviceLabel: string
  testimonial: Testimonial
}

const TestimonialCard = async ({
  locale,
  serviceLabel,
  testimonial,
}: TestimonialCardProps) => {
  const t = await getTranslations('Testimonials')
  const service = getServiceItemBySlug(testimonial.serviceSlug, locale)

  return (
    <figure className="flex h-full flex-col rounded-2xl border border-border bg-background/70 p-6 shadow-md shadow-muted md:p-7">
      <Quote
        aria-hidden
        className="size-10 fill-primary text-heading"
        strokeWidth={1.75}
      />
      <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed">
        <p>“{t(`items.${testimonial.id}.quote`)}”</p>
      </blockquote>
      <figcaption className="mt-6">
        <div className="flex items-center gap-3">
          <p className="flex size-12 items-center justify-center rounded-full border-2 border-primary bg-primary-foreground font-semibold text-primary text-xl">
            {testimonial.name.charAt(0)}
            {t(`items.${testimonial.id}.role`).charAt(0)}
          </p>
          <div className="min-w-0">
            <p className="font-semibold text-heading leading-tight">
              {testimonial.name}
            </p>
            <p className="mt-0.5 text-muted-foreground text-sm">
              {t(`items.${testimonial.id}.role`)}
            </p>
          </div>
        </div>
        <p className="mt-5 border-border border-t pt-4 text-sm">
          <span className="font-semibold text-heading">{serviceLabel}</span>
          <Link
            className="transition-colors hover:text-primary"
            href={serviceHref(testimonial.serviceSlug)}
          >
            {service?.title ?? testimonial.serviceTitle}
          </Link>
        </p>
      </figcaption>
    </figure>
  )
}

const TestimonialsSection = async ({ locale }: { locale: AppLocale }) => {
  const t = await getTranslations('Testimonials')

  return (
    <Container>
      <Carousel
        aria-label={t('label')}
        className="w-full"
        opts={{ align: 'start', loop: true }}
      >
        <div className="mb-8 grid items-end gap-4 sm:grid-cols-[minmax(0,1fr)_auto]">
          <Heading
            eyebrow={t('eyebrow')}
            heading={t('heading')}
            layout="left"
            paragraph={t('paragraph')}
            size="xl"
          />
          <div className="flex shrink-0 gap-2">
            <CarouselPrevious
              className="translate-none static size-9 rounded-2xl disabled:opacity-40"
              size="icon"
            />
            <CarouselNext
              className="translate-none static size-9 rounded-2xl disabled:opacity-40"
              size="icon"
            />
          </div>
        </div>

        <CarouselContent className="-ms-6">
          {testimonials.map((testimonial) => (
            <CarouselItem
              className="flex basis-full py-2 ps-6 sm:basis-1/2 lg:basis-1/3"
              key={testimonial.id}
            >
              <TestimonialCard
                locale={locale}
                serviceLabel={t('service')}
                testimonial={testimonial}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </Container>
  )
}

export default TestimonialsSection
