'use client'

import { cn } from 'cn'
import { useLocale, useTranslations } from 'next-intl'
import { useTransition } from 'react'
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
  const [isPending, startTransition] = useTransition()

  const switchLocale = (nextLocale: AppLocale) => {
    if (nextLocale === locale) return

    startTransition(() => {
      router.replace(pathname, { locale: nextLocale })
    })
  }

  return (
    <label className={cn('inline-flex items-center', className)}>
      <span className="sr-only">{t('label')}</span>
      <select
        className="h-9 cursor-pointer rounded-md border border-white/20 bg-black/30 px-2 text-sm text-white outline-none transition-colors hover:border-primary focus-visible:border-primary"
        disabled={isPending}
        onChange={(event) => switchLocale(event.target.value as AppLocale)}
        value={locale}
      >
        {routing.locales.map((item) => (
          <option
            className="bg-primary-foreground text-white"
            key={item}
            value={item}
          >
            {t(item)}
          </option>
        ))}
      </select>
    </label>
  )
}

export default LocaleSwitcher
