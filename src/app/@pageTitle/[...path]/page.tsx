import PageTitle from '@/components/shared/PageTitle'
import { pageLinks } from '@/data/links'

type PageTitleSlotProps = {
  params: Promise<{ path: string[] }>
}

export function generateStaticParams() {
  return pageLinks
    .filter((link) => link.href !== '/')
    .map((link) => ({
      path: link.href.slice(1).split('/'),
    }))
}

export const dynamicParams = false

export default async function PageTitleSlot({ params }: PageTitleSlotProps) {
  const { path } = await params

  return <PageTitle pathname={`/${path.join('/')}`} />
}
