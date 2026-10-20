import { getTranslations } from 'next-intl/server'
import { Container } from '@/components/shared/Container'
import { contact } from '@/data/contact'
import { generatePageMetadata } from '@/lib/pageMetadata'

export const generateMetadata = () => generatePageMetadata('terms')

type LegalSection = {
  body: string
  heading: string
}

const TermsPage = async () => {
  const t = await getTranslations('Legal')
  const terms = await getTranslations('Terms')
  const sections = terms.raw('sections') as LegalSection[]

  return (
    <Container className="space-y-8">
      {sections.map((section) => (
        <section key={section.heading} className="space-y-3">
          <h2 className="font-semibold text-xl">{section.heading}</h2>
          <p>{section.body}</p>
        </section>
      ))}
      <section className="space-y-3">
        <h2 className="font-semibold text-xl">{t('contactHeading')}</h2>
        <p>
          {t('termsContact', {
            address: contact.address,
            email: contact.email,
            phone: contact.phone.display,
          })}
        </p>
      </section>
    </Container>
  )
}

export default TermsPage
