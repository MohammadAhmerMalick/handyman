import { Phone } from 'lucide-react'
import { getTranslations } from 'next-intl/server'
import { Container } from '@/components/shared/Container'
import Heading from '@/components/shared/Heading'
import SiteImage from '@/components/shared/SiteImage'
import { Button } from '@/components/ui/button'
import { aboutHighlightIcons, aboutHighlightIds } from '@/data/about'
import { contact } from '@/data/contact'
import { pages } from '@/data/links'
import { Link } from '@/i18n/navigation'

const AboutHighlightsSection = async () => {
  const t = await getTranslations('About')

  return (
    <Container className="space-y-12">
      <Heading
        eyebrow={t('eyebrow')}
        heading={t('heading')}
        layout="center"
        size="xl"
      />
      <div className="grid items-stretch gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="relative min-h-80 overflow-hidden bg-muted lg:min-h-full">
          <SiteImage
            src="/about-installation.jpg"
            alt={t('imageAlt')}
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="size-full rounded-2xl object-cover"
            width={705}
            height={530}
          />
        </div>

        <div className="flex flex-col justify-center gap-8">
          <ul className="space-y-7">
            {aboutHighlightIds.map((id) => {
              const Icon = aboutHighlightIcons[id]

              return (
                <li key={id} className="group flex gap-4">
                  <span className="flex size-16 shrink-0 items-center justify-center rounded-full bg-muted duration-500 group-hover:bg-primary">
                    <Icon
                      className="size-8 text-heading duration-300 group-hover:scale-110"
                      strokeWidth={1.5}
                    />
                  </span>
                  <div className="space-y-1.5">
                    <h3 className="font-semibold text-lg">
                      {t(`items.${id}.title`)}
                    </h3>
                    <p className="text-sm leading-relaxed">
                      {t(`items.${id}.body`)}
                    </p>
                  </div>
                </li>
              )
            })}
          </ul>

          <div className="flex flex-wrap items-center gap-6">
            <Button
              className="h-12 bg-primary-foreground px-8 text-white hover:bg-primary-foreground/90"
              nativeButton={false}
              render={<Link href={pages.services.href} />}
              size="lg"
            >
              {t('readMore')}
            </Button>

            <a className="flex items-center gap-3" href={contact.phone.href}>
              <Phone className="size-8 text-primary" strokeWidth={1.75} />
              <span>
                <span className="block font-bold text-heading text-lg tracking-tight">
                  {contact.phone.display}
                </span>
                <span className="block text-muted-foreground text-sm">
                  {t('booking')}
                </span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default AboutHighlightsSection
