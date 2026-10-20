'use client'

import { Menu, MessageCircle } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { useState } from 'react'
import NavMenu from '@/components/layout/navbar/NavMenu'
import Logo from '@/components/shared/Logo'
import SocialLinks from '@/components/shared/SocialLinks'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { contact } from '@/data/contact'
import { contactLinks, pages } from '@/data/links'
import { Link } from '@/i18n/navigation'

const NavigationSheet = () => {
  const t = useTranslations('Nav')
  const tFooter = useTranslations('Footer')
  const tCommon = useTranslations('Common')
  const [open, setOpen] = useState(false)

  const close = () => setOpen(false)

  return (
    <Sheet onOpenChange={setOpen} open={open}>
      <SheetTrigger
        aria-label={open ? t('closeMenu') : t('openMenu')}
        render={<Button size="icon" />}
      >
        <Menu />
      </SheetTrigger>
      <SheetContent className="overflow-y-auto border-primary/30 bg-primary-foreground px-0 pt-0 pb-0 text-white [&_[data-slot=sheet-close]]:end-4 [&_[data-slot=sheet-close]]:top-5 [&_[data-slot=sheet-close]]:border [&_[data-slot=sheet-close]]:border-white/15 [&_[data-slot=sheet-close]]:bg-white/10 [&_[data-slot=sheet-close]]:text-white [&_[data-slot=sheet-close]]:hover:bg-white/20 [&_[data-slot=sheet-close]]:hover:text-white">
        <SheetTitle className="sr-only">{t('menu')}</SheetTitle>
        <div className="border-primary/30 border-b px-5 pe-16 pt-5 pb-5">
          <Link className="block w-fit" href={pages.home.href} onClick={close}>
            <Logo className="h-auto w-44" />
          </Link>
        </div>
        <NavMenu
          className="px-3 pt-3"
          onNavigate={close}
          orientation="vertical"
        />
        <div className="mt-2 border-white/10 border-t px-5 pt-5 pb-6">
          <h2 className="font-semibold text-primary text-sm">
            {tFooter('quickContact')}
          </h2>
          <ul className="mt-3 space-y-2.5">
            {contactLinks.map((link) => (
              <li key={link.title}>
                {link.external ||
                link.href.startsWith('tel:') ||
                link.href.startsWith('mailto:') ? (
                  <a
                    className="flex items-start gap-2.5 text-sm text-white/80 transition-colors duration-300 hover:text-primary"
                    href={link.href}
                    onClick={close}
                    {...(link.external
                      ? { rel: 'noreferrer', target: '_blank' }
                      : {})}
                  >
                    <link.icon className="mt-0.5 size-4 shrink-0 text-primary" />
                    <span className="wrap-break-word">
                      {link.href === contact.whatsapp.href
                        ? tCommon('whatsapp')
                        : link.title}
                    </span>
                  </a>
                ) : (
                  <Link
                    className="flex items-start gap-2.5 text-sm text-white/80 transition-colors duration-300 hover:text-primary"
                    href={link.href}
                    onClick={close}
                  >
                    <link.icon className="mt-0.5 size-4 shrink-0 text-primary" />
                    <span className="wrap-break-word">
                      {link.href === contact.whatsapp.href
                        ? tCommon('whatsapp')
                        : link.title}
                    </span>
                  </Link>
                )}
              </li>
            ))}
          </ul>
          <SocialLinks
            className="mt-5 text-white/80 [&>a]:flex [&>a]:size-9 [&>a]:items-center [&>a]:justify-center [&>a]:rounded-full [&>a]:bg-white/10 [&>a]:hover:bg-primary [&>a]:hover:text-primary-foreground"
            onNavigate={close}
            size={16}
          />
          <Button
            className="mt-5 w-full"
            nativeButton={false}
            render={
              <a
                href={contact.whatsapp.href}
                onClick={close}
                rel="noreferrer"
                target="_blank"
              />
            }
            size="lg"
          >
            <MessageCircle className="size-5" data-icon="inline-center" />
            {t('getQuote')}
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default NavigationSheet
