import { ArrowRight, MessageCircle, ShieldCheck } from 'lucide-react'
import { getTranslations } from 'next-intl/server'
import { Container } from '@/components/shared/Container'
import SiteImage from '@/components/shared/SiteImage'
import { Button } from '@/components/ui/button'
import { contact } from '@/data/contact'
import { Link } from '@/i18n/navigation'

const HomeBanner = async () => {
  const t = await getTranslations('HomeBanner')
  const common = await getTranslations('Common')
  const categories = await getTranslations('Categories')

  return (
    <Container>
      <section className="relative isolate flex min-h-130 items-center overflow-hidden rounded-4xl border-2 border-primary/50 bg-primary-foreground shadow-xl">
        <SiteImage
          alt={t('imageAlt')}
          className="object-cover object-center"
          fill
          sizes="(max-width: 1280px) 100vw, 1200px"
          src="/Banner.png"
        />

        <div aria-hidden className="absolute inset-0 bg-black/30" />
        <div
          aria-hidden
          className="absolute inset-0 bg-linear-to-r from-black/90 via-black/65 to-black/10 rtl:bg-linear-to-l"
        />

        <div className="relative z-10 max-w-2xl space-y-7 px-7 py-16 sm:px-12 lg:px-16">
          <div className="flex items-center gap-3 text-primary">
            <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl border border-primary/30 bg-primary/10 backdrop-blur-sm">
              <ShieldCheck aria-hidden className="size-5" />
            </span>
            <p className="font-semibold text-sm uppercase tracking-[0.18em]">
              {t('eyebrow')}
            </p>
          </div>

          <div className="space-y-5">
            <h2 className="font-heading font-semibold text-4xl leading-[1.05] sm:text-5xl lg:text-6xl">
              <span className="text-white">{t('titleLead')}</span>{' '}
              <span className="text-primary">{t('titleAccent')}</span>
            </h2>
            <p className="max-w-xl text-base text-white/80 leading-relaxed sm:text-lg">
              {t('description')}
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button
              className="sm:min-w-48"
              nativeButton={false}
              render={
                <a
                  href={contact.whatsapp.href}
                  rel="noreferrer"
                  target="_blank"
                />
              }
              size="lg"
            >
              <MessageCircle aria-hidden data-icon="inline-start" />
              {common('whatsapp')}
            </Button>
            <Button
              className="border-white/40 bg-black/20 text-white backdrop-blur-sm hover:bg-white hover:text-heading sm:min-w-48"
              nativeButton={false}
              render={<Link href="/services" />}
              size="lg"
              variant="outline"
            >
              {categories('viewServices')}
              <ArrowRight
                aria-hidden
                className="rtl:rotate-180"
                data-icon="inline-end"
              />
            </Button>
          </div>
        </div>
      </section>
    </Container>
  )
}

export default HomeBanner
