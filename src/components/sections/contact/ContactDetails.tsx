import type { LucideIcon } from 'lucide-react'
import { Clock, Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import type { ReactNode } from 'react'
import { contact } from '@/data/contact'

const linkClassName = 'font-medium text-base text-heading hover:underline'

type ContactDetail = {
  description: string
  icon: LucideIcon
  title: string
  value: ReactNode
}

const details: ContactDetail[] = [
  {
    description: `Based in Marina, Dubai. Service area: ${contact.serviceArea}.`,
    icon: MapPin,
    title: 'Address',
    value: (
      <address className="not-italic">
        <a
          className={linkClassName}
          href={contact.addressLink}
          rel="noreferrer"
          target="_blank"
        >
          {contact.address}
        </a>
      </address>
    ),
  },
  {
    description: 'Call during opening hours.',
    icon: Phone,
    title: 'Call',
    value: (
      <a className={linkClassName} href={contact.phone.href}>
        {contact.phone.display}
      </a>
    ),
  },
  {
    description: 'Message us on WhatsApp.',
    icon: MessageCircle,
    title: 'WhatsApp',
    value: (
      <a
        className={linkClassName}
        href={contact.whatsapp.href}
        rel="noreferrer"
        target="_blank"
      >
        {contact.phone.display}
      </a>
    ),
  },
  {
    description: 'Send us an email.',
    icon: Mail,
    title: 'Email',
    value: (
      <a className={linkClassName} href={`mailto:${contact.email}`}>
        {contact.email}
      </a>
    ),
  },
  {
    description: 'Opening hours only.',
    icon: Clock,
    title: 'Hours',
    value: (
      <div className="space-y-2 text-base text-foreground">
        <p>
          <span className="font-medium text-heading">Saturday–Thursday:</span>{' '}
          {contact.hours.saturdayToThursday}
        </p>
        <p>
          <span className="font-medium text-heading">Friday:</span>{' '}
          {contact.hours.friday}
        </p>
      </div>
    ),
  },
]

const ContactDetails = () => {
  return (
    <div className="divide-y divide-border">
      {details.map((detail) => (
        <div className="flex gap-x-6 py-6 first:pt-0" key={detail.title}>
          <detail.icon className="mt-1 size-6 shrink-0 text-primary" />
          <div>
            <h2 className="font-semibold text-lg">{detail.title}</h2>
            <p className="mt-1 text-muted-foreground text-sm">
              {detail.description}
            </p>
            <div className="mt-2">{detail.value}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ContactDetails
