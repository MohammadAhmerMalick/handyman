'use client'

import { Search, Wrench } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useDeferredValue, useMemo, useState } from 'react'
import Heading from '@/components/shared/Heading'
import { Button } from '@/components/ui/button'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { Container } from '@/components/ui/container'
import { Input } from '@/components/ui/input'
import {
  catalogByCategory,
  categoryHref,
  type ServiceCategoryId,
} from '@/data/services'
import { categoryImageSrc } from '@/data/services/images'

type CategoryCardData = {
  description: string
  href: string
  id: ServiceCategoryId
  imageSrc: string
  serviceCount: number
  title: string
}

const categoryCards: CategoryCardData[] = catalogByCategory.map(
  ({ category, services }) => ({
    description: category.description,
    href: categoryHref(category.slug),
    id: category.id,
    imageSrc: categoryImageSrc(category.id),
    serviceCount: services.length,
    title: category.title,
  })
)

type CategoryCardProps = {
  category: CategoryCardData
}

const CategoryCard = ({ category }: CategoryCardProps) => {
  const countLabel =
    category.serviceCount === 1
      ? `${category.title} Service`
      : `${category.serviceCount} ${category.title} Services`

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border shadow-md shadow-muted backdrop-blur-xs">
      <Link
        aria-label={`View ${category.title} services`}
        className="relative block aspect-16/10 overflow-hidden bg-muted"
        href={category.href}
      >
        <Image
          width={400}
          height={220}
          src={category.imageSrc}
          alt={`${category.title} category image`}
          sizes="(max-width: 768px) 90vw, (max-width: 1200px) 45vw, 30vw"
          className="size-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
        />
      </Link>

      <div className="flex flex-1 flex-col gap-3 p-5 md:p-6">
        <span className="inline-flex w-fit items-center gap-1 rounded-xl bg-muted px-3 py-1.5 font-medium text-xs">
          <Wrench aria-hidden className="size-3.5 shrink-0" />
          {countLabel}
        </span>

        <div className="space-y-2">
          <h3 className="font-semibold text-heading text-lg leading-snug">
            <Link
              className="transition-colors hover:text-primary"
              href={category.href}
            >
              {category.title}
            </Link>
          </h3>
          <p className="line-clamp-3 text-sm leading-relaxed">
            {category.description}
          </p>
        </div>

        <Button
          nativeButton={false}
          render={<Link href={category.href} />}
          className="mt-auto w-full"
        >
          View services
        </Button>
      </div>
    </article>
  )
}

const ServiceCategorySlider = () => {
  const [query, setQuery] = useState('')
  const deferredQuery = useDeferredValue(query)

  const filteredCategories = useMemo(() => {
    const normalizedQuery = deferredQuery.trim().toLowerCase()

    return categoryCards.filter((category) => {
      return (
        normalizedQuery.length === 0 ||
        category.title.toLowerCase().includes(normalizedQuery) ||
        category.description.toLowerCase().includes(normalizedQuery)
      )
    })
  }, [deferredQuery])

  return (
    <Container className="space-y-8">
      <Heading
        heading="Browse by category"
        layout="left"
        paragraph="Explore our maintenance and trade categories, then open the full service list for that area of work."
      />

      <Carousel
        className="w-full"
        key={deferredQuery}
        opts={{ align: 'start', loop: false }}
      >
        <div className="mb-4 flex items-center gap-3">
          <div className="relative min-w-0 flex-1 sm:max-w-80">
            <label className="sr-only" htmlFor="category-slider-search">
              Search categories
            </label>
            <Search
              aria-hidden
              className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2"
            />
            <Input
              className="h-10 rounded-3xl border-border bg-background pl-9"
              id="category-slider-search"
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search categories..."
              type="search"
              value={query}
            />
          </div>

          <div className="ml-auto flex shrink-0 items-center gap-2">
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

        {filteredCategories.length === 0 ? (
          <p className="rounded-2xl border border-border bg-background px-5 py-10 text-center text-muted-foreground">
            No categories match your search. Try another term.
          </p>
        ) : (
          <CarouselContent className="-ml-6">
            {filteredCategories.map((category) => (
              <CarouselItem
                className="basis-full py-2 pl-6 sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"
                key={category.id}
              >
                <CategoryCard category={category} />
              </CarouselItem>
            ))}
          </CarouselContent>
        )}
      </Carousel>
    </Container>
  )
}

export default ServiceCategorySlider
