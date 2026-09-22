import ContactDetails from '@/components/sections/contact/ContactDetails'
import ContactForm from '@/components/sections/contact/ContactForm'
import { Container } from '@/components/ui/container'

export default function ContactPage() {
  return (
    <main>
      <Container>
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
          <ContactForm />
          <ContactDetails />
        </div>
      </Container>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31505.267600812662!2d55.115517796097656!3d25.08468009623417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6b5402c126e3%3A0xb9511e6655c46d7c!2sDubai%20Marina%20-%20Dubai!5e1!3m2!1sen!2sae!4v1790103778933!5m2!1sen!2sae"
        height="800"
        style={{ border: '0' }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
        title="Dubai Marina on Google Maps"
        className="w-full"
      />
    </main>
  )
}
