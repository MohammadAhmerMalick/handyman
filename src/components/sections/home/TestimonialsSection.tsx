import { Quote } from 'lucide-react'
import Link from 'next/link'
import Heading from '@/components/shared/Heading'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { Container } from '@/components/ui/container'
import { serviceHref } from '@/data/services'
import { type Testimonial, testimonials } from '@/data/testimonials'

type TestimonialCardProps = {
  testimonial: Testimonial
}

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  return (
    <figure className="flex h-full flex-col rounded-2xl border border-border p-6 shadow-md shadow-muted backdrop-blur-xs md:p-7">
      <Quote
        aria-hidden
        className="size-10 fill-primary text-heading"
        strokeWidth={1.75}
      />
      <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed">
        <p>“{testimonial.quote}”</p>
      </blockquote>
      <figcaption className="mt-6">
        <div className="flex items-center gap-3">
          <p className="flex size-12 items-center justify-center rounded-full border-2 border-primary bg-primary-foreground font-semibold text-primary text-xl">
            {testimonial.name.charAt(0)}
            {testimonial.role.charAt(0)}
          </p>
          <div className="min-w-0">
            <p className="font-semibold text-heading leading-tight">
              {testimonial.name}
            </p>
            <p className="mt-0.5 text-muted-foreground text-sm">
              {testimonial.role}
            </p>
          </div>
        </div>
        <p className="mt-5 border-border border-t pt-4 text-sm">
          <span className="font-semibold text-heading">Service: </span>
          <Link
            className="transition-colors hover:text-primary"
            href={serviceHref(testimonial.serviceSlug)}
          >
            {testimonial.serviceTitle}
          </Link>
        </p>
      </figcaption>
    </figure>
  )
}

const TestimonialsSection = () => {
  return (
    <Container>
      <Carousel
        aria-label="Customer reviews"
        className="w-full"
        opts={{ align: 'start', loop: true }}
      >
        <div className="mb-8 grid items-end gap-4 sm:grid-cols-[minmax(0,1fr)_auto]">
          <Heading
            eyebrow="Testimonials"
            heading="What our customers say"
            layout="left"
            paragraph="Homeowners and workplaces across the UAE, after renovation, air conditioning, plumbing, and day-to-day maintenance."
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

        <CarouselContent className="-ml-6">
          {testimonials.map((testimonial) => (
            <CarouselItem
              className="flex basis-full py-2 pl-6 sm:basis-1/2 lg:basis-1/3"
              key={testimonial.id}
            >
              <TestimonialCard testimonial={testimonial} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </Container>
  )
}

export default TestimonialsSection
