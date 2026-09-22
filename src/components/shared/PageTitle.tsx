import { cn } from 'cn'
import Image from 'next/image'
import Heading from '@/components/shared/Heading'
import { Container } from '@/components/ui/container'
import { navbarHeight } from '@/data/constants'
import { getPageLink } from '@/data/links'

type PageTitleProps = {
  className?: string
  pathname: string
}

const PageTitle = ({ className, pathname }: PageTitleProps) => {
  const page = getPageLink(pathname)

  if (!page?.description || !page?.title) return null

  return (
    <section className={cn(className, 'relative bg-primary-foreground')}>
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
      <Image
        className={cn('absolute inset-0 w-full object-cover')}
        style={{
          height: `calc(100% + ${navbarHeight.desktop.expanded}px)`,
          top: `-${navbarHeight.desktop.expanded}px`,
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
