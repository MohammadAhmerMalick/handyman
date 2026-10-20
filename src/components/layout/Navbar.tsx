'use client'

import { cn } from 'cn'
import { MessageCircle } from 'lucide-react'
import { useTranslations } from 'next-intl'
import LocaleSwitcher from '@/components/layout/LocaleSwitcher'
import NavigationSheet from '@/components/layout/navbar/NavigationSheet'
import NavMenu from '@/components/layout/navbar/NavMenu'
import { Container } from '@/components/shared/Container'
import Logo from '@/components/shared/Logo'
import { Button } from '@/components/ui/button'
import { contact } from '@/data/contact'
import { pages } from '@/data/links'
import { useScrolledPast } from '@/hooks/useScrolledPast'
import { Link } from '@/i18n/navigation'

const Navbar = () => {
  const t = useTranslations('Nav')
  // 40px hysteresis > the ~32px height drop so shrinking cannot bounce scrollY back across 50
  const isCompact = useScrolledPast(50, 40)

  return (
    <header
      className={cn(
        'sticky top-0 right-0 left-0 z-50 border-primary border-b bg-linear-to-b from-black shadow-xl backdrop-blur-xs duration-300 [overflow-anchor:none]',
        isCompact ? 'bg-black/60' : 'bg-linear-to-b from-black to-black/10'
      )}
    >
      <Container
        className={cn(
          'flex items-center justify-between gap-4 duration-300',
          isCompact ? 'py-2 md:py-2 lg:py-2' : 'py-4 md:py-6 lg:py-6'
        )}
      >
        <Link href={pages.home.href} className="block w-60">
          <Logo
            className={cn(
              'w-48 duration-300',
              isCompact ? 'w-md-52' : 'w-md-60'
            )}
          />
        </Link>

        <nav>
          <NavMenu className="hidden lg:block" />
        </nav>

        <div className="flex items-center gap-3">
          <LocaleSwitcher className="hidden lg:flex" />
          <Button
            size="lg"
            className="hidden lg:flex"
            render={
              <a
                href={contact.whatsapp.href}
                target="_blank"
                rel="noreferrer"
              />
            }
            nativeButton={false}
          >
            <MessageCircle className="size-5" data-icon="inline-center" />
            {t('getQuote')}
          </Button>

          <div className="lg:hidden">
            <NavigationSheet />
          </div>
        </div>
      </Container>
    </header>
  )
}

export default Navbar
