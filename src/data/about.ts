import type { LucideIcon } from 'lucide-react'
import { FileBadge, HardHat, PencilRuler, SwatchBook } from 'lucide-react'

export const aboutHighlightIds = [
  'consultation',
  'customized',
  'pricing',
  'allInOne',
] as const

export type AboutHighlightId = (typeof aboutHighlightIds)[number]

export const aboutHighlightIcons: Record<AboutHighlightId, LucideIcon> = {
  allInOne: PencilRuler,
  consultation: HardHat,
  customized: FileBadge,
  pricing: SwatchBook,
}
