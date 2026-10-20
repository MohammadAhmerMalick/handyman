import { Check, ChevronRight, MessageCircle, Phone } from 'lucide-react'
import { getTranslations } from 'next-intl/server'
import { Container } from '@/components/shared/Container'
import { Button } from '@/components/ui/button'
import { contact } from '@/data/contact'

const HeroSection = async () => {
  const t = await getTranslations('Hero')
  const common = await getTranslations('Common')

  return (
    <div className="relative flex h-screen max-h-240 min-h-max items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0 bg-black">
        <video
          src="/hero-video.webm"
          autoPlay
          muted
          loop
          className="size-full object-cover"
        />
      </div>
      <Container className="relative md:pt-36">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div className="flex flex-col space-y-4">
            <div className="inline-flex w-fit items-center rounded-full border border-transparent bg-primary px-2.5 py-0.5 font-semibold text-primary-foreground text-xs transition-colors hover:bg-primary/80 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
              <span>{t('badge')}</span>
              <ChevronRight className="ms-1 h-3.5 w-3.5 rtl:rotate-180" />
            </div>
            <h1 className="font-bold text-3xl text-primary sm:text-4xl md:text-5xl">
              {t('heading')}
            </h1>
            <p className="max-w-150 text-white md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {t('intro', { address: contact.address })}
            </p>
            <div className="flex flex-col gap-3 min-[400px]:flex-row">
              <Button
                size="lg"
                render={<a href={contact.phone.href} />}
                nativeButton={false}
              >
                <Phone className="h-4 w-4" data-icon="inline-start" />
                {t('call', { phone: contact.phone.display })}
              </Button>
              <Button
                size="lg"
                variant="outline"
                render={
                  <a
                    href={contact.whatsapp.href}
                    target="_blank"
                    rel="noreferrer"
                  />
                }
                nativeButton={false}
              >
                <MessageCircle className="h-4 w-4" data-icon="inline-start" />
                {common('whatsapp')}
              </Button>
            </div>
            <div className="flex items-center space-x-4 pt-4 text-sm">
              <div className="flex -space-x-2 rtl:space-x-reverse">
                <p className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-muted text-muted-foreground ring-2 ring-background">
                  JL
                </p>
                <p className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-muted text-muted-foreground ring-2 ring-background">
                  SD
                </p>
                <p className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-muted text-muted-foreground ring-2 ring-background">
                  TK
                </p>
                <p className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground ring-2 ring-background">
                  +8
                </p>
              </div>
              <p className="text-white">{t('trusted')}</p>
            </div>
            <div className="grid grid-cols-2 gap-4 pt-6 text-white">
              {(
                [
                  'highlightRenovation',
                  'highlightAc',
                  'highlightPlumbing',
                  'highlightMaintenance',
                ] as const
              ).map((key) => (
                <div className="flex items-start gap-2" key={key}>
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Check className="h-4 w-4" />
                  </div>
                  <p className="text-sm">{t(key)}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default HeroSection
