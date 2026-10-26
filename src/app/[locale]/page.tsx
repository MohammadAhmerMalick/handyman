import { getLocale, getTranslations } from 'next-intl/server'
import AboutHighlights from '@/components/sections/AboutHighlightsSection'
import AppPromotionSection from '@/components/sections/AppPromotionSection'
import FaqSection from '@/components/sections/FaqSection'
import SplitContentHero from '@/components/sections/HeroSection'
import HomeBanner from '@/components/sections/HomeBanner'
import PropertyMaintenanceCta from '@/components/sections/services/PropertyMaintenanceCta'
import CategorySlider from '@/components/sections/services/ServiceCategorySlider'
import ServicesHighlights from '@/components/sections/services/ServicesHighlights'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import Section from '@/components/shared/Section'
import SiteImage from '@/components/shared/SiteImage'
import type { AppLocale } from '@/i18n/routing'
import { generatePageMetadata } from '@/lib/pageMetadata'

export const generateMetadata = () => generatePageMetadata('home')

const Home = async () => {
  const locale = (await getLocale()) as AppLocale
  const t = await getTranslations('Testimonials')

  return (
    <>
      <div className="-mt-22.25 sm:-mt-35.25">
        <SplitContentHero />
      </div>
      <Section background="/about-figure.png" backgroundSide="right">
        <AboutHighlights />
      </Section>
      <Section background="/categories-bg.png" backgroundSide="left" banded>
        <CategorySlider />
      </Section>
      <div className="relative overflow-hidden bg-primary-foreground">
        <SiteImage
          alt="Property Maintenance"
          className="absolute inset-0 scale-105 object-cover blur-xs"
          fill
          sizes="(max-width: 1024px) 100vw, 52vw"
          src="/services/categories/uae-property.jpg"
        />
        <Section className="min-h-lvh bg-black/70">
          <PropertyMaintenanceCta />
        </Section>
      </div>
      <Section background="/services-bg.png" backgroundSide="right">
        <ServicesHighlights locale={locale} />
      </Section>
      <Section>
        <HomeBanner />
      </Section>
      <Section
        aria-label={t('label')}
        background="/testimonials-bg.png"
        backgroundSide="left"
        banded
      >
        <TestimonialsSection locale={locale} />
      </Section>
      <Section background="/app-promo-bg.png" backgroundSide="left">
        <AppPromotionSection />
      </Section>
      <Section background="/faq-bg.png" backgroundSide="right" banded>
        <FaqSection />
      </Section>
    </>
  )
}

export default Home
