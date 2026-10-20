import type { LucideIcon } from 'lucide-react'
import { Clock, Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import { getTranslations } from 'next-intl/server'
import type { ReactNode } from 'react'
import { contact } from '@/data/contact'

const linkClassName = 'font-medium text-base text-heading hover:underline'

type ContactDetail = {
  description: string
  icon: LucideIcon
  title: string
  value: ReactNode
}

const ContactDetails = async () => {
  const t = await getTranslations('Contact')
  const hours = await getTranslations('Hours')

  const details: ContactDetail[] = [
    {
      description: t('addressDescription', {
        address: contact.address,
        serviceArea: contact.serviceArea,
      }),
      icon: MapPin,
      title: t('addressTitle'),
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
      description: t('callDescription'),
      icon: Phone,
      title: t('callTitle'),
      value: (
        <a className={linkClassName} href={contact.phone.href}>
          {contact.phone.display}
        </a>
      ),
    },
    {
      description: t('whatsappDescription'),
      icon: MessageCircle,
      title: t('whatsappTitle'),
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
      description: t('emailDescription'),
      icon: Mail,
      title: t('emailTitle'),
      value: (
        <a className={linkClassName} href={`mailto:${contact.email}`}>
          {contact.email}
        </a>
      ),
    },
    {
      description: t('hoursDescription'),
      icon: Clock,
      title: t('hoursTitle'),
      value: (
        <div className="space-y-2 text-base text-foreground">
          <p>
            <span className="font-medium text-heading">
              {hours('saturdayThursdayLabel')}:
            </span>{' '}
            {hours('saturdayThursdayValue')}
          </p>
          <p>
            <span className="font-medium text-heading">
              {hours('fridayLabel')}:
            </span>{' '}
            {hours('fridayValue')}
          </p>
        </div>
      ),
    },
  ]

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
