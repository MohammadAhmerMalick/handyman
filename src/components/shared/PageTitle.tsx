import Image from 'next/image'
import Heading from '@/components/shared/Heading'
import { Container } from '@/components/ui/container'
import { getPageLink } from '@/data/links'

type PageTitleProps = {
  className?: string
  pathname: string
}

const PageTitle = ({ className, pathname }: PageTitleProps) => {
  const page = getPageLink(pathname)

  if (!page?.description || !page?.title) return null

  return (
    <section className={className}>
      <Container className="relative z-10 py-12 md:py-16 lg:py-20 [&_p]:text-white">
        <Heading
          as="h1"
          heading={page.title}
          layout="left"
          paragraph={page.description}
          size="xl"
          variant="inverted"
        />
      </Container>
      <div className="absolute top-0 left-0 h-full w-full bg-primary-foreground">
        <Image
          className="absolute inset-0 size-full h-full w-full object-cover"
          src="/page-title-bg.jpg"
          alt="Page Title Background"
          width={2000}
          height={500}
        />
      </div>
    </section>
  )
}

export default PageTitle
