import FaqSection from '@/components/sections/faq/FaqSection'
import Section from '@/components/shared/Section'

const FaqPage = () => {
  return (
    <Section background="/faq-bg.png" backgroundSide="right">
      <FaqSection showAll />
    </Section>
  )
}

export default FaqPage
