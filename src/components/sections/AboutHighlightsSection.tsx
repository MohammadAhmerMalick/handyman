import { Phone } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import Heading from '@/components/shared/Heading'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/container'
import { aboutHighlights } from '@/data/about'
import { contact } from '@/data/contact'
import { pages } from '@/data/links'

const AboutHighlightsSection = () => {
  return (
    <section
      className="bg-center bg-cover bg-no-repeat"
      style={{ backgroundImage: 'url(/about-bg.png)' }}
    >
      <Container className="space-y-12">
        <Heading
          eyebrow="24/7 hassle-free"
          heading="Home And Businesses  Installation Services"
          layout="center"
          size="xl"
        />
        <div className="grid items-stretch gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="relative min-h-80 overflow-hidden bg-muted lg:min-h-full">
            <Image
              src="/about-installation.jpg"
              alt="Wall-mounted air conditioner and open toolbox in a Dubai apartment"
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="size-full rounded-2xl object-cover"
              width={705}
              height={530}
            />
          </div>

          <div className="flex flex-col justify-center gap-8">
            <ul className="space-y-7">
              {aboutHighlights.map((item) => (
                <li key={item.title} className="group flex gap-4">
                  <span className="flex size-16 shrink-0 items-center justify-center rounded-full bg-muted duration-500 group-hover:bg-primary">
                    <item.icon
                      className="size-8 text-heading duration-300 group-hover:scale-110"
                      strokeWidth={1.5}
                    />
                  </span>
                  <div className="space-y-1.5">
                    <h3 className="font-semibold text-lg">{item.title}</h3>
                    <p className="text-sm leading-relaxed">{item.body}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap items-center gap-6">
              <Button
                className="h-12 bg-primary-foreground px-8 text-white hover:bg-primary-foreground/90"
                nativeButton={false}
                render={<Link href={pages.services.href} />}
                size="lg"
              >
                Read More
              </Button>

              <a className="flex items-center gap-3" href={contact.phone.href}>
                <Phone className="size-8 text-primary" strokeWidth={1.75} />
                <span>
                  <span className="block font-bold text-heading text-lg tracking-tight">
                    {contact.phone.display}
                  </span>
                  <span className="block text-muted-foreground text-sm">
                    Call For Booking
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default AboutHighlightsSection
