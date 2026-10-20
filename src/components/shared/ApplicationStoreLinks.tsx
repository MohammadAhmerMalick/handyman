import { cn } from 'cn'
import Link from 'next/link'
import { getTranslations } from 'next-intl/server'
import {
  AppStoreBadge,
  GooglePlayBadge,
} from '@/components/shared/ApplicationStoreBadges'

type ApplicationStoreLinksProps = {
  className?: string
}

const ApplicationStoreLinks = async ({
  className,
}: ApplicationStoreLinksProps) => {
  const t = await getTranslations('Store')

  return (
    <div className={cn('flex flex-wrap gap-3', className)}>
      <Link
        aria-label={t('appStore')}
        className="inline-flex shrink-0 transition-opacity duration-300 hover:opacity-80"
        href="#"
      >
        <AppStoreBadge aria-hidden className="h-10 w-auto" />
      </Link>
      <Link
        aria-label={t('googlePlay')}
        className="inline-flex shrink-0 transition-opacity duration-300 hover:opacity-80"
        href="#"
      >
        <GooglePlayBadge aria-hidden className="h-10 w-auto" />
      </Link>
    </div>
  )
}

export { ApplicationStoreLinks }
