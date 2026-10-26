import {
  ArrowRight,
  Building2,
  CalendarDays,
  House,
  MessageCircle,
  UsersRound,
} from 'lucide-react'
import { getTranslations } from 'next-intl/server'
import { Container } from '@/components/shared/Container'
import SiteImage from '@/components/shared/SiteImage'
import { Button } from '@/components/ui/button'
import { contact } from '@/data/contact'
import { categoryHref, getCategoryById } from '@/data/services'
import { categoryImageSrc } from '@/data/services/images'
import { Link } from '@/i18n/navigation'

const PropertyMaintenanceCta = async () => {
  const common = await getTranslations('Common')
  const categories = await getTranslations('Categories')
  const categoryCopy = await getTranslations('ServiceCategories')
  const cta = await getTranslations('PropertyMaintenanceCta')
  const category = getCategoryById('uae-property')

  if (!category) return null

  const title = categoryCopy(`${category.id}.title`)

  return (
    <Container>
      <div className="relative isolate overflow-hidden rounded-4xl bg-primary-foreground shadow-xl">
        <div className="grid min-h-120 lg:grid-cols-2">
          <div className="relative min-h-72 overflow-hidden lg:min-h-full">
            <SiteImage
              alt={title}
              className="object-cover transition-transform duration-700 hover:scale-105"
              fill
              sizes="(max-width: 1024px) 100vw, 52vw"
              src={categoryImageSrc(category.id)}
            />
            <div className="absolute inset-x-5 bottom-5 flex items-center gap-3 rounded-2xl bg-background/50 p-4 shadow-lg backdrop-blur-xs sm:inset-s-6 sm:inset-x-auto sm:max-w-sm">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <Building2 aria-hidden className="size-5" />
              </span>
              <p className="font-medium text-heading text-sm">
                {categoryCopy(`${category.id}.description`)}
              </p>
            </div>
          </div>

          <div className="relative flex flex-col justify-center overflow-hidden p-7 sm:p-10 lg:p-14">
            <div className="relative space-y-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-primary">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl border border-primary/30 bg-primary/10">
                    <House aria-hidden className="size-5" />
                  </span>
                  <p className="font-semibold text-sm uppercase tracking-[0.18em]">
                    {common('servingUae')}
                  </p>
                </div>
                <div className="h-1 w-14 rounded-full bg-primary" />
              </div>

              <div className="space-y-5">
                <h2 className="max-w-xl font-heading font-semibold text-4xl leading-[1.05] sm:text-5xl lg:text-6xl">
                  <span className="text-white">{cta('titleLead')}</span>{' '}
                  <span className="text-primary">{cta('titleAccent')}</span>
                </h2>
                <p className="max-w-xl text-base text-white/75 leading-relaxed sm:text-lg">
                  {categoryCopy(`${category.id}.description`)}
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Button
                  className="sm:min-w-52"
                  nativeButton={false}
                  render={<Link href={categoryHref(category.slug)} />}
                  size="lg"
                >
                  {categories('viewServices')}
                  <ArrowRight
                    aria-hidden
                    className="rtl:rotate-180"
                    data-icon="inline-end"
                  />
                </Button>
                <Button
                  className="border-white/30 bg-transparent text-white hover:bg-white hover:text-heading sm:min-w-44"
                  nativeButton={false}
                  render={
                    <a
                      href={contact.whatsapp.href}
                      rel="noreferrer"
                      target="_blank"
                    />
                  }
                  size="lg"
                  variant="outline"
                >
                  <MessageCircle aria-hidden data-icon="inline-start" />
                  {common('whatsapp')}
                </Button>
              </div>

              <div className="grid gap-4 text-sm text-white md:grid-cols-3">
                <div className="flex items-center gap-4">
                  <UsersRound
                    aria-hidden
                    className="size-8 shrink-0 text-primary"
                    strokeWidth={1.75}
                  />
                  <p className="leading-snug">{cta('reliableTeam')}</p>
                </div>
                <div className="flex items-center gap-4 border-white/10 border-t ps-0 pt-4 sm:border-s sm:border-t-0 sm:ps-4 sm:pt-0">
                  <CalendarDays
                    aria-hidden
                    className="size-8 shrink-0 text-primary"
                    strokeWidth={1.75}
                  />
                  <p className="leading-snug">{cta('flexibleAppointments')}</p>
                </div>
                <div className="flex items-center gap-4 border-white/10 border-t ps-0 pt-4 sm:border-s sm:border-t-0 sm:ps-4 sm:pt-0">
                  <House
                    aria-hidden
                    className="size-8 shrink-0 text-primary"
                    strokeWidth={1.75}
                  />
                  <p className="leading-snug">{cta('residentialRental')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default PropertyMaintenanceCta
