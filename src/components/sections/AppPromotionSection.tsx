import { BadgeCheck, Download, Eye, Star, StarHalf } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { ApplicationStoreLinks } from '@/components/shared/ApplicationStoreLinks'
import Heading from '@/components/shared/Heading'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Container } from '@/components/ui/container'

const placeholder = 'https://placehold.co/280x580'

const AppPromotionSection = () => {
  return (
    <section>
      <Container>
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-12">
          <div className="order-2 flex flex-col gap-6 md:order-1">
            <div className="flex items-center gap-1 text-sm">
              <div className="flex">
                <Star className="size-4 fill-current text-primary" />
                <Star className="size-4 fill-current text-primary" />
                <Star className="size-4 fill-current text-primary" />
                <Star className="size-4 fill-current text-primary" />
                <StarHalf className="size-4 fill-current text-primary" />
              </div>
              <span className="text-muted-foreground">
                4.8/5 from 2,945 reviews
              </span>
            </div>

            <Heading
              as="h2"
              heading="Your life, organized and simplified"
              layout="left"
              paragraph="Our app helps you organize tasks, manage projects, and achieve your goals with a beautifully designed, distraction-free interface."
              size="xl"
              variant="accent"
            />

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button size="lg" render={<Link href="/" />} nativeButton={false}>
                <Download data-icon="inline-start" />
                Download App
              </Button>
              <Button
                variant="outline"
                size="lg"
                render={<Link href="/" />}
                nativeButton={false}
              >
                <Eye data-icon="inline-start" />
                See Features
              </Button>
            </div>

            <div className="flex flex-col gap-3 pt-2">
              <h3 className="font-semibold text-lg">Why users love our app</h3>
              <div className="grid gap-2">
                <div className="flex items-center gap-2">
                  <BadgeCheck className="size-4 text-primary" />
                  <span className="text-sm">
                    Intuitive interface with minimal learning curve
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <BadgeCheck className="size-4 text-primary" />
                  <span className="text-sm">
                    Seamless cross-device syncing and offline support
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <BadgeCheck className="size-4 text-primary" />
                  <span className="text-sm">
                    Advanced organizational tools with zero complexity
                  </span>
                </div>
              </div>
            </div>

            <ApplicationStoreLinks className="gap-4 pt-2" />
          </div>

          <div className="relative order-1 flex justify-center md:order-2 md:h-150">
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-1/2 left-1/2 h-75 w-75 -translate-x-1/2 -translate-y-1/2 rounded-full bg-linear-to-r from-primary/20 to-primary/10 opacity-70 blur-[100px] md:h-125 md:w-125" />
            </div>

            <div className="relative mt-4 max-w-70 md:mt-0 md:max-w-full">
              <div className="relative z-30 overflow-hidden rounded-4xl border-8 border-primary-foreground shadow-md">
                <Image
                  src={placeholder}
                  alt="App screenshot showing task management interface"
                  width={280}
                  height={580}
                  className="h-auto max-w-full bg-muted object-cover"
                  unoptimized
                />
              </div>

              <div className="absolute top-24 -right-20 z-20 hidden rotate-6 transform overflow-hidden rounded-4xl border-8 border-primary-foreground shadow-md md:-right-32 md:block">
                <Image
                  src={placeholder}
                  alt="App screenshot showing calendar interface"
                  width={240}
                  height={520}
                  className="h-auto max-w-full bg-muted object-cover"
                  unoptimized
                />
              </div>

              <Card
                className="absolute top-16 -left-8 z-40 hidden sm:block md:-left-16"
                size="sm"
              >
                <CardContent className="flex items-center gap-2">
                  <div className="flex size-10 items-center justify-center rounded-full bg-primary/20">
                    <Download className="size-5 text-primary" />
                  </div>
                  <div>
                    <h5 className="font-medium text-xs">Daily Reminder</h5>
                    <p className="text-muted-foreground text-xs">
                      Complete your tasks
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card
                className="absolute -right-12 -bottom-6 z-40 hidden sm:block"
                size="sm"
              >
                <CardContent className="flex flex-col">
                  <h5 className="mb-1 font-medium text-xs">Weekly Progress</h5>
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
    </section>
  )
}

export default AppPromotionSection
