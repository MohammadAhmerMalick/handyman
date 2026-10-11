import PageTitle from '@/components/shared/PageTitle'
import { pageLinks } from '@/data/links'

type PageTitleSlotProps = {
  params: Promise<{ path: string[] }>
}

export const generateStaticParams = () => {
  return pageLinks
    .filter((link) => link.href !== '/')
    .map((link) => ({
      path: link.href.slice(1).split('/'),
    }))
}

export const dynamicParams = false

const PageTitleSlot = async ({ params }: PageTitleSlotProps) => {
  const { path } = await params

  return <PageTitle pathname={`/${path.join('/')}`} />
}

export default PageTitleSlot
