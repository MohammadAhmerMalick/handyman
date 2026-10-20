import { type AppLocale, routing } from '@/i18n/routing'

export const rtlLocales = ['ar', 'ur'] as const

export const isRtlLocale = (locale: string) => {
  return (rtlLocales as readonly string[]).includes(locale)
}

export const ogLocales: Record<AppLocale, string> = {
  ar: 'ar_AE',
  en: 'en_AE',
  fr: 'fr_AE',
  hi: 'hi_AE',
  ur: 'ur_AE',
  zh: 'zh_CN',
}

export const hrefLangTags: Record<AppLocale, string> = {
  ar: 'ar',
  en: 'en',
  fr: 'fr',
  hi: 'hi',
  ur: 'ur',
  zh: 'zh-Hans',
}

export const localeFontClass: Record<
  AppLocale,
  'arabic' | 'chinese' | 'devanagari' | 'latin'
> = {
  ar: 'arabic',
  en: 'latin',
  fr: 'latin',
  hi: 'devanagari',
  ur: 'arabic',
  zh: 'chinese',
}

export const allLocales = routing.locales
