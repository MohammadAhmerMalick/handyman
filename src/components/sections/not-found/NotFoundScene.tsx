import { AirVent, ArrowRight, House } from 'lucide-react'
import { Container } from '@/components/shared/Container'
import SiteImage from '@/components/shared/SiteImage'
import { Button } from '@/components/ui/button'
import { Link } from '@/i18n/navigation'

type NotFoundCheck = {
  label: string
  value: string
}

type NotFoundSceneProps = {
  checks: NotFoundCheck[]
  description: string
  eyebrow: string
  home: string
  imageAlt: string
  services: string
  ticket: string
  title: string
}

const NotFoundScene = ({
  checks,
  description,
  eyebrow,
  home,
  imageAlt,
  services,
  ticket,
  title,
}: NotFoundSceneProps) => {
  return (
    <section className="relative isolate -mt-23 flex min-h-[calc(100svh)] flex-1 items-center overflow-hidden bg-primary-foreground sm:-mt-26.25 sm:min-h-[calc(100svh-40px)]">
      <SiteImage
        alt={imageAlt}
        className="object-cover object-[74%_28%] md:object-[center_30%]"
        fill
        preload
        sizes="100vw"
        src="/Banner.png"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-linear-to-t from-black/75 via-black/30 to-black/65 md:bg-linear-to-r md:from-black/75 md:via-black/35 md:to-transparent rtl:md:bg-linear-to-l"
      />

      <Container className="relative z-10 flex w-full flex-col gap-8 py-8 md:flex-row md:items-center md:justify-between md:gap-12 md:py-14">
        <div className="mt-23 max-w-xl space-y-6 md:mt-0">
          <div className="flex items-center gap-3 text-primary">
            <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl border border-primary/30 bg-primary/10 backdrop-blur-sm">
              <AirVent aria-hidden className="size-5" />
            </span>
            <p className="font-semibold text-sm uppercase tracking-[0.18em]">
              {eyebrow}
            </p>
          </div>

          <div className="space-y-5">
            <h1 className="font-heading font-semibold text-4xl text-white leading-[1.05] sm:text-5xl lg:text-6xl">
              {title}
            </h1>
            <p className="max-w-xl text-base text-white/80 leading-relaxed sm:text-lg">
              {description}
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button
              className="sm:min-w-48"
              nativeButton={false}
              render={<Link href="/" />}
              size="lg"
            >
              <House aria-hidden data-icon="inline-start" />
              {home}
            </Button>
            <Button
              className="border-white/40 bg-black/20 text-white backdrop-blur-sm hover:bg-white hover:text-heading sm:min-w-48"
              nativeButton={false}
              render={<Link href="/services" />}
              size="lg"
              variant="outline"
            >
              {services}
              <ArrowRight
                aria-hidden
                className="rtl:rotate-180"
                data-icon="inline-end"
              />
            </Button>
          </div>
        </div>

        <div className="flex md:justify-end">
          <div className="relative w-full max-w-sm md:w-80 md:rotate-2 md:rtl:-rotate-2">
            <div
              aria-hidden
              className="absolute -top-3.5 left-10 z-10 h-7 w-28 -rotate-2 rounded-sm bg-primary shadow-md"
            />
            <div className="relative overflow-hidden rounded-4xl border border-white/15 bg-primary-foreground/80 p-6 text-white shadow-2xl backdrop-blur-md">
              <p className="font-semibold text-primary text-xs uppercase tracking-[0.22em]">
                {ticket}
              </p>
              <p className="relative mt-3 font-heading font-semibold text-7xl text-primary leading-none sm:text-8xl">
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(to_right,transparent_0_14px,var(--primary)_15px_16px),repeating-linear-gradient(to_bottom,transparent_0_14px,var(--primary)_15px_16px)] opacity-30"
                />
                <span className="relative">404</span>
              </p>
              <ul className="mt-5 space-y-2.5 border-white/15 border-t pt-4">
                {checks.map((check) => (
                  <li
                    className="flex items-center justify-between gap-4 text-sm"
                    key={check.label}
                  >
                    <span className="text-white/60">{check.label}</span>
                    <span className="font-medium text-white">
                      {check.value}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default NotFoundScene
