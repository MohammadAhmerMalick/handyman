export type Faq = {
  answer: string
  question: string
}

/** Handyman FAQs. Homepage shows the first slice; a dedicated page can show all. */
export const faqs: Faq[] = [
  {
    answer: 'We work across the UAE and are based in Marina, Dubai.',
    question: 'Which areas do you cover?',
  },
  {
    answer:
      'Villa, flat, office, and shop renovation, air conditioning, plumbing and carpentry, masonry and painting, and general handyman maintenance. The services page lists the wider catalog, including electrical, tiling, gypsum, waterproofing, kitchens and bathrooms, and flooring.',
    question: 'What kind of work do you take on?',
  },
  {
    answer:
      'Yes. We take full renovations for homes and commercial spaces across the UAE.',
    question: 'Do you renovate villas, flats, offices, and shops?',
  },
  {
    answer:
      'Yes. We install, service, and repair residential and commercial air conditioning.',
    question: 'Do you service and repair air conditioning?',
  },
  {
    answer:
      'Yes. That covers pipes, fixtures, leaks, cabinetry, doors, and general woodwork.',
    question: 'Can you handle plumbing and carpentry?',
  },
  {
    answer:
      'Yes. Brickwork, plaster touch-ups, and interior and exterior painting.',
    question: 'Do you do painting and masonry?',
  },
  {
    answer:
      'Saturday to Thursday, 8:00am–9:00pm. Friday, 9:00am–11:00am and 4:00pm–9:00pm.',
    question: 'What are your working hours?',
  },
  {
    answer:
      'Call or WhatsApp +971 54 514 9849 and describe the job. We do not list prices on the site; every job is quoted.',
    question: 'How do I ask for a quote?',
  },
  {
    answer: 'Marina, Dubai, UAE. We travel for jobs across the UAE.',
    question: 'Where are you based?',
  },
  {
    answer: 'Yes. WhatsApp uses the same number: +971 54 514 9849.',
    question: 'Can I message you on WhatsApp?',
  },
  {
    answer: 'No. Visits and calls follow the published hours only.',
    question: 'Do you offer a 24-hour or emergency call-out?',
  },
  {
    answer:
      'Yes. Kitchen and bathroom renovation is part of the catalog, along with tiling, waterproofing, and related finishes.',
    question: 'Do you work on kitchens and bathrooms?',
  },
  {
    answer:
      'Electrical, tiling, gypsum and false ceilings, waterproofing, flooring, aluminum and glass, welding and fabrication, furniture assembly, appliance installation, CCTV and smart locks, plastering, wallpaper, and outdoor villa maintenance.',
    question: 'What other trades can you arrange?',
  },
  {
    answer:
      'Email mohammadahmermalick@gmail.com, or call and WhatsApp during opening hours.',
    question: 'How do I reach you by email?',
  },
]

export const homepageFaqCount = 8
