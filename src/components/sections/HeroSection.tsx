import { Check, ChevronRight, MessageCircle, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/container'
import { contact } from '@/data/contact'

const HeroSection = () => {
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
        <div className="grid items-center gap-8 md:grid-cols-2">
          {/* Left content */}
          <div className="flex flex-col space-y-4">
            <div className="inline-flex w-fit items-center rounded-full border border-transparent bg-primary px-2.5 py-0.5 font-semibold text-primary-foreground text-xs transition-colors hover:bg-primary/80 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
              <span>Serving the UAE</span>
              <ChevronRight className="ml-1 h-3.5 w-3.5" />
            </div>
            <h1 className="font-bold text-3xl text-primary sm:text-4xl md:text-5xl">
              Honest renovation and maintenance you can trust.
            </h1>
            <p className="max-w-150 text-white md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              From villas and flats to offices and shops, Handyman handles
              renovation, air conditioning, plumbing, carpentry, masonry,
              painting, and general maintenance — based in Marina, Dubai.
            </p>
            <div className="flex flex-col gap-3 min-[400px]:flex-row">
              <Button
                size="lg"
                render={<a href={contact.phone.href} />}
                nativeButton={false}
              >
                <Phone className="h-4 w-4" data-icon="inline-start" />
                Call {contact.phone.display}
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
                WhatsApp
              </Button>
            </div>
            <div className="flex items-center space-x-4 pt-4 text-sm">
              <div className="flex -space-x-2">
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
              <p className="text-white">
                Trusted by homeowners and businesses across the UAE
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 pt-6 text-white">
              <div className="flex items-start gap-2">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Check className="h-4 w-4" />
                </div>
                <p className="text-sm">Villa, flat, office & shop renovation</p>
              </div>
              <div className="flex items-start gap-2">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Check className="h-4 w-4" />
                </div>
                <p className="text-sm">Air conditioning services</p>
              </div>
              <div className="flex items-start gap-2">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Check className="h-4 w-4" />
                </div>
                <p className="text-sm">Plumbing & carpentry</p>
              </div>
              <div className="flex items-start gap-2">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Check className="h-4 w-4" />
                </div>
                <p className="text-sm">Masonry, painting & maintenance</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default HeroSection
