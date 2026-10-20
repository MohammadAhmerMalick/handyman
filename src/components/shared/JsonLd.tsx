import { contact } from '@/data/contact'

const localBusiness = {
  '@context': 'https://schema.org',
  '@type': 'HomeAndConstructionBusiness',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'AE',
    addressLocality: 'Dubai',
    addressRegion: 'Dubai',
    streetAddress: contact.address,
  },
  areaServed: contact.serviceArea,
  email: contact.email,
  name: 'Handyman',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      closes: '21:00',
      dayOfWeek: [
        'Saturday',
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
      ],
      opens: '08:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      closes: '11:00',
      dayOfWeek: 'Friday',
      opens: '09:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      closes: '21:00',
      dayOfWeek: 'Friday',
      opens: '16:00',
    },
  ],
  telephone: contact.phone.display,
  url: 'https://handyman.ae',
}

const JsonLd = () => {
  return (
    <script
      dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      type="application/ld+json"
    />
  )
}

export default JsonLd
