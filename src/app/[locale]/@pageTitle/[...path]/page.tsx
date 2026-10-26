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

/** Unknown paths stay renderable so the locale 404 can replace the page. */
export const dynamicParams = true

const PageTitleSlot = async ({ params }: PageTitleSlotProps) => {
  const { path } = await params

  return <PageTitle pathname={`/${path.join('/')}`} />
}

export default PageTitleSlot
