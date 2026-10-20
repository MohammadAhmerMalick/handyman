import { getTranslations } from 'next-intl/server'
import { Container } from '@/components/shared/Container'
import { contact } from '@/data/contact'
import { generatePageMetadata } from '@/lib/pageMetadata'

export const generateMetadata = () => generatePageMetadata('privacy')

type LegalSection = {
  body: string
  heading: string
}

const PrivacyPage = async () => {
  const t = await getTranslations('Legal')
  const privacy = await getTranslations('Privacy')
  const sections = privacy.raw('sections') as LegalSection[]

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
          {t('privacyContact', {
            address: contact.address,
            email: contact.email,
            phone: contact.phone.display,
          })}
        </p>
      </section>
    </Container>
  )
}

export default PrivacyPage
