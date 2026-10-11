import type { ServiceSeed } from '@/data/services/buildService'

export type SeedFields = Omit<ServiceSeed, 'slug' | 'title' | 'category'>

export type SeedDefinition = {
  slug: string
  title: string
} & SeedFields

export const createSeed = <C extends ServiceSeed['category']>(
  category: C,
  definition: SeedDefinition & { category?: never }
): ServiceSeed => ({
  category,
  ...definition,
})
