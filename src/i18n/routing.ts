import { defineRouting } from 'next-intl/routing'

export const routing = defineRouting({
  defaultLocale: 'en',
  localePrefix: 'as-needed',
  locales: ['en', 'ar', 'ur', 'hi', 'zh', 'fr'],
})

export type AppLocale = (typeof routing.locales)[number]
