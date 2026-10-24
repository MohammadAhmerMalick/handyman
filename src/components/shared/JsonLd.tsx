import { contact } from '@/data/contact'
import { getSiteUrl } from '@/lib/siteUrl'

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
}

const JsonLd = () => {
  const schema = { ...localBusiness, url: getSiteUrl().toString() }

  return (
    <script
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      type="application/ld+json"
    />
  )
}

export default JsonLd
