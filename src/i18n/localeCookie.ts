import type { AppLocale } from '@/i18n/routing'

/** Matches next-intl default `localeCookie.name` in routing config. */
const LOCALE_COOKIE_NAME = 'NEXT_LOCALE'

/**
 * Persist an explicit locale choice for middleware on the next full request.
 * Required for the default locale with `localePrefix: 'as-needed'`: unprefixed
 * URLs do not update `NEXT_LOCALE` on client navigation, so a stale cookie
 * would otherwise win on refresh.
 */
export const persistLocaleCookie = (locale: AppLocale) => {
  if (typeof document === 'undefined') {
    return
  }

  document.cookie = `${LOCALE_COOKIE_NAME}=${locale}; path=/; SameSite=Lax`
}
