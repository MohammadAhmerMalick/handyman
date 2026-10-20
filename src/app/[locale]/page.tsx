import { getLocale, getTranslations } from 'next-intl/server'
import AboutHighlights from '@/components/sections/AboutHighlightsSection'
import AppPromotionSection from '@/components/sections/AppPromotionSection'
import FaqSection from '@/components/sections/faq/FaqSection'
import SplitContentHero from '@/components/sections/HeroSection'
import CategorySlider from '@/components/sections/home/ServiceCategorySlider'
import ServicesHighlights from '@/components/sections/home/ServicesHighlights'
import TestimonialsSection from '@/components/sections/home/TestimonialsSection'
import Section from '@/components/shared/Section'
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
      <Section background="/services-bg.png" backgroundSide="right">
        <ServicesHighlights locale={locale} />
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
