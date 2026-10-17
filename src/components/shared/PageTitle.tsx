import { cn } from 'cn'
import Image from 'next/image'
import Heading from '@/components/shared/Heading'
import { Container } from '@/components/ui/container'
import { getPageLink } from '@/data/links'

type PageTitleProps = {
  className?: string
  description?: string
  pathname?: string
  title?: string
}

const PageTitle = ({
  className,
  description,
  pathname,
  title,
}: PageTitleProps) => {
  const page = pathname ? getPageLink(pathname) : undefined
  const heading = title ?? page?.title
  const paragraph = description ?? page?.description

  if (!heading || !paragraph) return null

  return (
    <section className={cn(className, 'relative bg-primary-foreground')}>
      <Container className="relative z-10 py-12 md:py-16 lg:py-20 [&_p]:min-h-14 [&_p]:text-white">
        <Heading
          as="h1"
          heading={heading}
          layout="left"
          paragraph={paragraph}
          size="xl"
          variant="inverted"
        />
      </Container>
      <Image
        className={cn('absolute inset-0 w-full object-cover')}
        style={{
          height: `calc(100% + 106px)`,
          top: `-106px`,
        }}
        src="/page-title-bg.jpg"
        alt="Page Title Background"
        width={2000}
        height={500}
      />
    </section>
  )
}

export default PageTitle
