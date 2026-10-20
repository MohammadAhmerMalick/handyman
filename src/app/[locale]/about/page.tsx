import AboutHighlightsSection from '@/components/sections/AboutHighlightsSection'
import Section from '@/components/shared/Section'
import { generatePageMetadata } from '@/lib/pageMetadata'

export const generateMetadata = () => generatePageMetadata('about')

const AboutPage = () => {
  return (
    <Section background="/about-figure.png" backgroundSide="right">
      <AboutHighlightsSection />
    </Section>
  )
}

export default AboutPage
