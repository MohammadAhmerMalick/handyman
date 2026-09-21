import { cn } from 'cn'
import Link from 'next/link'
import { socialLinks } from '@/data/links'

type SocialLinksProps = {
  className?: string
  size?: number
}

const SocialLinks = ({ className, size = 20 }: SocialLinksProps) => (
  <div className={cn('flex items-center gap-4', className)}>
    {socialLinks.map((link) => (
      <Link
        aria-label={link.label}
        className="transition-colors duration-300 hover:text-primary"
        href={link.href}
        key={link.label}
        rel="noreferrer"
        target="_blank"
      >
        <link.icon size={size} />
      </Link>
    ))}
  </div>
)

export default SocialLinks
