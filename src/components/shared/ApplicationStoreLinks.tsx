import { cn } from 'cn'
import Link from 'next/link'
import {
  AppStoreBadge,
  GooglePlayBadge,
} from '@/components/shared/ApplicationStoreBadges'

type ApplicationStoreLinksProps = {
  className?: string
}

const ApplicationStoreLinks = ({ className }: ApplicationStoreLinksProps) => {
  return (
    <div className={cn('flex flex-wrap gap-3', className)}>
      <Link
        aria-label="Download on the App Store"
        className="inline-flex shrink-0 transition-opacity duration-300 hover:opacity-80"
        href="#"
      >
        <AppStoreBadge aria-hidden className="h-10 w-auto" />
      </Link>
      <Link
        aria-label="Get it on Google Play"
        className="inline-flex shrink-0 transition-opacity duration-300 hover:opacity-80"
        href="#"
      >
        <GooglePlayBadge aria-hidden className="h-10 w-auto" />
      </Link>
    </div>
  )
}

export { ApplicationStoreLinks }
