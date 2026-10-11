'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import type { ServiceFaq } from '@/data/services/types'

type ServiceFaqsProps = {
  faqs: ServiceFaq[]
}

const ServiceFaqs = ({ faqs }: ServiceFaqsProps) => {
  const firstQuestion = faqs[0]?.question

  if (faqs.length === 0) return null

  return (
    <Accordion
      className="gap-4 overflow-visible rounded-none border-0"
      defaultValue={firstQuestion ? [firstQuestion] : []}
    >
      {faqs.map((faq) => (
        <AccordionItem key={faq.question} value={faq.question}>
          <AccordionTrigger>{faq.question}</AccordionTrigger>
          <AccordionContent>
            <p>{faq.answer}</p>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}

export default ServiceFaqs
