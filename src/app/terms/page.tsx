import { Container } from '@/components/ui/container'
import { contact } from '@/data/contact'
import { termsSections } from '@/data/terms'

export default function TermsPage() {
  return (
    <main>
      <Container className="space-y-8">
        {termsSections.map((section) => (
          <section key={section.heading} className="space-y-3">
            <h2 className="font-semibold text-xl">{section.heading}</h2>
            <p>{section.body}</p>
          </section>
        ))}
        <section className="space-y-3">
          <h2 className="font-semibold text-xl">Contact us</h2>
          <p>
            Questions about these Terms of Use can be sent to{' '}
            <a
              href={`mailto:${contact.email}`}
              className="text-heading underline-offset-4 hover:text-primary hover:underline"
            >
              {contact.email}
            </a>
            , called on{' '}
            <a
              href={contact.phone.href}
              className="text-heading underline-offset-4 hover:text-primary hover:underline"
            >
              {contact.phone.display}
            </a>
            , or addressed to Handyman at {contact.address}.
          </p>
        </section>
      </Container>
    </main>
  )
}
