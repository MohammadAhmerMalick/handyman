import type { LucideIcon } from 'lucide-react'
import { FileBadge, HardHat, PencilRuler, SwatchBook } from 'lucide-react'

export type AboutHighlight = {
  body: string
  icon: LucideIcon
  title: string
}

export const aboutHighlights: AboutHighlight[] = [
  {
    body: 'Felis bibendum ut tristique et egestas quis ipsum suspendisse ultrices. Aenean vel elit scelerisque mauris pellentesque consectetur adipiscing elitpulvinar.',
    icon: HardHat,
    title: 'Earliest Consultation',
  },
  {
    body: 'Augue interdum velit euismod in pellentesque massa placerat duis ultricies. Purus gravida quis blandit turpis. Dolor sit amet consectetur adipiscing elit.',
    icon: FileBadge,
    title: 'Customized Solution',
  },
  {
    body: 'Quis vel eros donec ac odio tempor. Praesent semper feugiat nibh sed pulvinar proin gravida hendrerit. Suspendisse interdum consectetur.',
    icon: SwatchBook,
    title: 'Affordable Pricing',
  },
  {
    body: 'Pellentesque id nibh tortor id. Quis vel eros donec ac odio tempor orci. Tristique sollicitudin nibh sit amet commodo nulla facilisi nullam.',
    icon: PencilRuler,
    title: 'All-In-One Service',
  },
]
