export const faqIds = [
  'coverage',
  'workTypes',
  'renovate',
  'ac',
  'plumbing',
  'painting',
  'hours',
  'quote',
  'base',
  'whatsapp',
  'emergency',
  'kitchens',
  'otherTrades',
  'email',
] as const

export type FaqId = (typeof faqIds)[number]

export const homepageFaqCount = 8
