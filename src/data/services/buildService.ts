import { contact } from '@/data/contact'
import {
  serviceHeroImage,
  serviceSidebarImage,
  serviceSupportingImages,
} from '@/data/services/images'
import type {
  ServiceCategoryId,
  ServiceDetail,
  ServiceFaq,
} from '@/data/services/types'

export type ServiceSeed = {
  angle: string
  benefits: string[]
  category: ServiceCategoryId
  complianceNote?: string
  includes: string[]
  keywords?: string[]
  outcome: string
  problems: string[]
  process?: string[]
  related?: string[]
  slug: string
  tips: string[]
  title: string
  whenNeeded: string
}

const availabilityCopy = `Available during Handyman working hours: Saturday–Thursday ${contact.hours.saturdayToThursday}; Friday ${contact.hours.friday}. Contact by phone or WhatsApp to arrange a visit.`

const hashString = (value: string) => {
  let hash = 0
  for (let index = 0; index < value.length; index += 1) {
    hash = (hash << 5) - hash + value.charCodeAt(index)
    hash |= 0
  }
  return Math.abs(hash)
}

const joinList = (items: string[]) => {
  if (items.length === 0) return ''
  if (items.length === 1) return items[0]
  if (items.length === 2) return `${items[0]} and ${items[1]}`
  return `${items.slice(0, -1).join(', ')}, and ${items.at(-1)}`
}

const defaultProcess = (seed: ServiceSeed): string[] => {
  return [
    `Discuss the issue and confirm that ${seed.title.toLowerCase()} is the right scope for your property.`,
    'Inspect the affected area, note access requirements, and agree the practical approach before work begins.',
    `Carry out ${joinList(seed.includes.slice(0, 3)).toLowerCase()}, keeping the workspace as tidy as conditions allow.`,
    'Review the finished work with you, share simple aftercare advice, and note any follow-up items that sit outside this visit.',
  ]
}

const buildFaqs = (seed: ServiceSeed): ServiceFaq[] => {
  const variant = hashString(seed.slug) % 3
  const titleLower = seed.title.toLowerCase()
  const includes = joinList(seed.includes)
  const problems = joinList(seed.problems.slice(0, 3))

  const faqSets: ServiceFaq[][] = [
    [
      {
        answer: `${seed.title} typically covers ${includes}. The exact scope is confirmed after we see the site conditions and discuss what you need completed.`,
        question: `What does ${titleLower} include?`,
      },
      {
        answer: `${seed.whenNeeded} Arranging the work promptly helps avoid secondary damage and keeps the property comfortable to use.`,
        question: `When should I arrange ${titleLower}?`,
      },
      {
        answer: `We start with a clear look at the issue, then complete the agreed tasks with suitable tools and materials. For ${titleLower}, the focus is ${seed.angle}.`,
        question: 'How is the work carried out?',
      },
      {
        answer:
          'Clear access to the work area, move fragile items nearby, and note any building rules for tools, parking, or quiet hours. If you have product manuals or previous repair notes, keep them handy.',
        question: 'How should I prepare for the appointment?',
      },
      {
        answer:
          'Cost depends on access, materials, the condition of existing fittings, and whether related repairs are needed once the area is opened up. We provide a quote rather than fixed catalogue prices.',
        question: 'What factors affect the cost?',
      },
    ],
    [
      {
        answer: `Customers often ask for help with ${problems}. ${seed.title} is planned around those practical issues and the result you want afterwards.`,
        question: `Which problems does ${titleLower} usually solve?`,
      },
      {
        answer:
          'Yes. Many visits combine related tasks in the same area so you only need one appointment. Tell us about other pending jobs when you get in touch and we will advise what can sensibly be grouped.',
        question: 'Can this service be combined with other maintenance work?',
      },
      {
        answer: `We confirm the brief, protect surrounding finishes where practical, complete the included work, and check that ${seed.outcome}.`,
        question: `How do you approach ${titleLower} on site?`,
      },
      {
        answer: `Useful habits include ${joinList(seed.tips).toLowerCase()}. Following these tips helps the work last longer between visits.`,
        question: 'How can I maintain the repaired or installed item?',
      },
      {
        answer: `Handyman is based in ${contact.address} and serves properties across the ${contact.serviceArea}. Share your location when you enquire so we can confirm travel for your visit.`,
        question: 'Do you work across the UAE?',
      },
    ],
    [
      {
        answer: `${seed.whenNeeded} Whether you manage a flat, villa, or workplace, we adapt the method to the space and the materials already installed.`,
        question: `Is ${titleLower} suitable for my property?`,
      },
      {
        answer: `Expect a focused visit covering ${includes.toLowerCase()}. We keep you informed if we find related issues that need a wider decision before continuing.`,
        question: 'What should I expect during the visit?',
      },
      {
        answer: `Call or WhatsApp ${contact.phone.display}, or email ${contact.email}. Describe the work, send clear photos if you can, and mention preferred times within our working hours.`,
        question: 'How do I ask for a quote?',
      },
      {
        answer: `A successful visit should mean ${seed.outcome}. We also leave you with practical aftercare notes suited to the materials used.`,
        question: `What outcome should I expect from ${titleLower}?`,
      },
      {
        answer:
          'Some jobs use parts or consumables that need selecting on site. We discuss material options before purchasing so you know what is included in the quote.',
        question: 'Are materials included?',
      },
    ],
  ]

  const faqs = faqSets[variant].slice(0, 5)
  if (seed.complianceNote) {
    faqs.push({
      answer: seed.complianceNote,
      question:
        'Are there any licensing or specialist limits I should know about?',
    })
  }
  return faqs
}

export const buildService = (seed: ServiceSeed): ServiceDetail => {
  const titleLower = seed.title.toLowerCase()
  const includes = joinList(seed.includes)
  const problems = joinList(seed.problems)
  const benefits = seed.benefits
  const process = seed.process ?? defaultProcess(seed)
  const pattern = hashString(seed.slug) % 2

  const introduction =
    pattern === 0
      ? `${seed.title} helps UAE property owners deal with ${seed.angle}. ${seed.whenNeeded} Handyman approaches each visit with a clear brief, tidy working habits, and practical advice for looking after the finished work.`
      : `When you need ${titleLower}, the priority is a reliable fix that suits how you use the space. ${seed.whenNeeded} Our team focuses on ${seed.angle}, then explains the aftercare that keeps the result stable.`

  const mainDescription =
    pattern === 0
      ? [
          `${seed.title} is commonly requested when households notice ${problems}. Left alone, small faults can stain finishes, waste water or energy, or make rooms harder to use day to day.`,
          `During the visit we typically handle ${includes}. The sequence depends on access, the condition of existing fittings, and whether surrounding surfaces need protection while we work.`,
          `Customers choose professional help for ${titleLower} when they want ${seed.outcome}. That matters in busy Marina apartments, family villas, and commercial spaces where downtime needs to stay short.`,
        ]
      : [
          `From first contact we clarify what ${titleLower} should achieve for your property. Typical triggers include ${problems}, each of which needs a slightly different on-site approach.`,
          `The practical work usually covers ${includes}. We confirm materials and method before starting so you understand the scope, especially where finishes or fixtures may need matching.`,
          `The aim is straightforward: ${seed.outcome}. You also receive simple maintenance guidance so the improvement lasts between scheduled visits.`,
        ]

  const whyChooseUs = `Handyman is based in ${contact.address} and works across the ${contact.serviceArea}. For ${titleLower}, you can reach us by phone or WhatsApp on ${contact.phone.display}, or by email at ${contact.email}. We quote on the job rather than publishing fixed prices, and we stick to the working hours listed on this site.`

  const keywords = seed.keywords ?? [
    seed.title,
    `${seed.title} UAE`,
    `${seed.title} Dubai`,
    'handyman services',
    'property maintenance',
  ]

  return {
    availability: availabilityCopy,
    benefits,
    category: seed.category,
    commonProblems: seed.problems,
    complianceNote: seed.complianceNote,
    faqs: buildFaqs(seed),
    heroDescription: introduction,
    heroImage: serviceHeroImage(seed.category, seed.title),
    heroTitle: seed.title,
    introduction,
    keywords,
    mainDescription,
    maintenanceTips: seed.tips,
    metaDescription: `${seed.title} across the UAE. ${seed.angle.charAt(0).toUpperCase()}${seed.angle.slice(1)}. Based in Marina, Dubai — call or WhatsApp for a quote.`,
    metaTitle: `${seed.title} | Handyman UAE`,
    process,
    published: true,
    relatedServices: seed.related ?? [],
    serviceAreas: contact.serviceArea,
    servicesIncluded: seed.includes,
    shortDescription: `${seed.title} for homes and workplaces across the UAE — ${seed.angle}.`,
    sidebarImage: serviceSidebarImage(seed.category, seed.title),
    slug: seed.slug,
    supportingImages: serviceSupportingImages(seed.category, seed.title),
    title: seed.title,
    whyChooseUs,
  }
}
