'use client'

import { cn } from 'cn'
import { Check, Languages } from 'lucide-react'
import { useLocale, useTranslations } from 'next-intl'
import { useState, useTransition } from 'react'
import { buttonVariants } from '@/components/ui/button'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { persistLocaleCookie } from '@/i18n/localeCookie'
import { usePathname, useRouter } from '@/i18n/navigation'
import { type AppLocale, routing } from '@/i18n/routing'

type LocaleSwitcherProps = {
  className?: string
}

const LocaleSwitcher = ({ className }: LocaleSwitcherProps) => {
  const t = useTranslations('LocaleSwitcher')
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [isPending, startTransition] = useTransition()

  const switchLocale = (nextLocale: AppLocale) => {
    setOpen(false)
    if (nextLocale === locale) return

    startTransition(() => {
      persistLocaleCookie(nextLocale)
      router.replace(pathname, { locale: nextLocale })
    })
  }

  return (
    <Popover onOpenChange={setOpen} open={open}>
      <PopoverTrigger
        aria-label={`${t('label')}: ${t(locale)}`}
        className={cn(
          buttonVariants({ size: 'icon', variant: 'outline' }),
          'border-white/20 bg-black/30 text-white hover:border-primary hover:bg-black/40 hover:text-white aria-expanded:border-primary aria-expanded:bg-black/40 aria-expanded:text-white lg:w-auto lg:gap-1.5 lg:px-3',
          className
        )}
        disabled={isPending}
      >
        <Languages />
        <span className="hidden lg:inline">{t(locale)}</span>
      </PopoverTrigger>
      <PopoverContent
        align="end"
        className="w-44 gap-0.5 bg-white/95 p-1.5 backdrop-blur-xs"
      >
        {routing.locales.map((item) => {
          const selected = item === locale

          return (
            <button
              className={cn(
                'flex w-full cursor-pointer items-center justify-between gap-2 rounded-2xl px-3 py-2 text-start font-medium text-sm outline-none hover:bg-white hover:text-accent-foreground hover:shadow hover:shadow-muted focus-visible:bg-accent focus-visible:text-accent-foreground',
                selected && 'bg-primary text-black shadow hover:bg-primary'
              )}
              disabled={isPending}
              key={item}
              onClick={() => switchLocale(item)}
              type="button"
            >
              <span>{t(item)}</span>
              {selected ? <Check className="size-4 shrink-0" /> : null}
            </button>
          )
        })}
      </PopoverContent>
    </Popover>
  )
}

export default LocaleSwitcher
