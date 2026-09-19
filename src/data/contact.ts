const PHONE_RAW = '971545149849'

export const contact = {
  address: 'Marina, Dubai, UAE',
  email: 'mohammadahmermalick@gmail.com',
  hours: {
    friday: '9:00am–11:00am and 4:00pm–9:00pm',
    saturdayToThursday: '8:00am–9:00pm',
  },
  phone: {
    display: '+971 54 514 9849',
    href: `tel:+${PHONE_RAW}`,
    raw: PHONE_RAW,
  },
  serviceArea: 'UAE',
  whatsapp: {
    href: `https://wa.me/${PHONE_RAW}`,
  },
} as const
