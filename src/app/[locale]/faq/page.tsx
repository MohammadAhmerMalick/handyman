import FaqSection from '@/components/sections/faq/FaqSection'
import Section from '@/components/shared/Section'
import { generatePageMetadata } from '@/lib/pageMetadata'

export const generateMetadata = () => generatePageMetadata('faq')

const FaqPage = () => {
  return (
    <Section background="/faq-bg.png" backgroundSide="right">
      <FaqSection showAll />
    </Section>
  )
}

export default FaqPage
