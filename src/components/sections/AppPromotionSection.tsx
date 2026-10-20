import { BadgeCheck, Download, Eye, Star, StarHalf } from 'lucide-react'
import Image from 'next/image'
import { getTranslations } from 'next-intl/server'
import { ApplicationStoreLinks } from '@/components/shared/ApplicationStoreLinks'
import { Container } from '@/components/shared/Container'
import Heading from '@/components/shared/Heading'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Link } from '@/i18n/navigation'

const AppPromotionSection = async () => {
  const t = await getTranslations('AppPromo')

  return (
    <Container>
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
        <div className="order-2 flex flex-col gap-6 lg:order-1">
          <div className="flex items-center gap-1 text-sm">
            <div className="flex">
              <Star className="size-4 fill-current text-primary" />
              <Star className="size-4 fill-current text-primary" />
              <Star className="size-4 fill-current text-primary" />
              <Star className="size-4 fill-current text-primary" />
              <StarHalf className="size-4 fill-current text-primary" />
            </div>
            <span className="text-muted-foreground">{t('rating')}</span>
          </div>

          <Heading
            as="h2"
            heading={t('heading')}
            layout="left"
            paragraph={t('paragraph')}
            size="xl"
            variant="accent"
          />

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button size="lg" render={<Link href="/" />} nativeButton={false}>
              <Download data-icon="inline-start" />
              {t('download')}
            </Button>
            <Button
              variant="outline"
              size="lg"
              render={<Link href="/" />}
              nativeButton={false}
            >
              <Eye data-icon="inline-start" />
              {t('seeFeatures')}
            </Button>
          </div>

          <Card className="bg-transparent shadow-muted shadow-xl backdrop-blur-xs">
            <CardContent>
              <div className="flex flex-col gap-3">
                <h3 className="font-semibold text-lg">{t('whyLove')}</h3>
                <div className="grid gap-2">
                  <div className="flex items-center gap-2">
                    <BadgeCheck className="size-4 text-primary" />
                    <span className="text-sm">{t('featureUi')}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BadgeCheck className="size-4 text-primary" />
                    <span className="text-sm">{t('featureOffline')}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BadgeCheck className="size-4 text-primary" />
                    <span className="text-sm">{t('featureOrg')}</span>
                  </div>
                </div>
              </div>

              <ApplicationStoreLinks className="gap-4 pt-8" />
            </CardContent>
          </Card>
        </div>

        <div className="relative order-1 flex justify-center lg:order-2 lg:h-150">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-1/2 left-1/2 h-75 w-75 -translate-x-1/2 -translate-y-1/2 rounded-full bg-linear-to-r from-primary/20 to-primary/10 opacity-70 blur-[100px] lg:h-125 lg:w-125" />
          </div>

          <div className="relative mt-4 lg:mt-0 lg:max-w-full">
            <div className="relative z-30 max-w-70 overflow-hidden rounded-4xl border-8 border-primary-foreground shadow-lg">
              <Image
                src="/app-promo/tasks-hd.png"
                alt={t('tasksAlt')}
                width={280}
                height={580}
                className="w-full bg-muted"
              />
            </div>

            <div className="absolute -inset-e-20 top-24 z-20 hidden max-w-70 rotate-6 overflow-hidden rounded-4xl border-8 border-primary-foreground shadow-lg lg:-end-32 lg:block">
              <Image
                src="/app-promo/calendar-hd.png"
                alt={t('calendarAlt')}
                height={580}
                width={280}
                className="w-full bg-muted"
              />
            </div>

            <Card
              className="absolute -inset-s-8 top-4/6 z-40 hidden bg-white/70 backdrop-blur-sm sm:block lg:-start-16"
              size="sm"
            >
              <CardContent className="flex items-center gap-2">
                <div className="flex size-10 items-center justify-center rounded-full bg-primary/20">
                  <Download className="size-5 text-primary" />
                </div>
                <div>
                  <h5 className="font-medium text-xs">{t('dailyReminder')}</h5>
                  <p className="text-muted-foreground text-xs">
                    {t('completeTasks')}
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card
              className="absolute -end-12 -bottom-6 z-40 hidden bg-white/70 backdrop-blur-sm sm:block"
              size="sm"
            >
              <CardContent className="flex flex-col">
                <h5 className="mb-1 font-medium text-xs">
                  {t('weeklyProgress')}
                </h5>
                <p className="font-semibold text-lg">87%</p>
                <div className="mt-1 h-2 w-24 rounded-full bg-muted">
                  <div className="h-2 w-[87%] rounded-full bg-primary" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default AppPromotionSection
