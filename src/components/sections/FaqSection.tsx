'use client'

import { ChevronRight, MessageCircle, Phone, Search } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { useMemo, useState } from 'react'
import { Container } from '@/components/shared/Container'
import Heading from '@/components/shared/Heading'
import SiteImage from '@/components/shared/SiteImage'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { contact } from '@/data/contact'
import { faqIds, homepageFaqCount } from '@/data/faqs'
import { pages } from '@/data/links'
import { Link } from '@/i18n/navigation'

type FaqSectionProps = {
  showAll?: boolean
}

const FaqSection = ({ showAll = false }: FaqSectionProps) => {
  const t = useTranslations('Faq')
  const hours = useTranslations('Hours')
  const common = useTranslations('Common')
  const [query, setQuery] = useState('')

  const faqs = useMemo(() => {
    const vars = {
      address: contact.address,
      email: contact.email,
      friday: hours('fridayValue'),
      phone: contact.phone.display,
      saturdayThursday: hours('saturdayThursdayValue'),
      serviceArea: contact.serviceArea,
    }

    return faqIds.map((id) => ({
      answer: t(`items.${id}.answer`, vars),
      id,
      question: t(`items.${id}.question`),
    }))
  }, [hours, t])

  const visibleFaqs = useMemo(() => {
    const trimmed = query.trim().toLowerCase()
    const pool =
      showAll || trimmed.length > 0 ? faqs : faqs.slice(0, homepageFaqCount)

    if (!trimmed) return pool

    return pool.filter(
      (faq) =>
        faq.question.toLowerCase().includes(trimmed) ||
        faq.answer.toLowerCase().includes(trimmed)
    )
  }, [faqs, query, showAll])

  return (
    <Container className="space-y-10">
      <Heading
        eyebrow={t('eyebrow')}
        heading={t('heading')}
        layout="center"
        size="xl"
      />
      <div className="grid items-stretch gap-6 lg:grid-cols-3 lg:gap-8">
        <aside className="relative order-2 flex min-h-112 overflow-hidden rounded-2xl bg-primary-foreground md:hidden lg:order-1 lg:col-span-1 lg:flex lg:min-h-full">
          <SiteImage
            src="/faq-image.jpg"
            alt={t('imageAlt')}
            width={690}
            height={1000}
            className="absolute inset-0 size-full object-cover"
          />
          <div className="absolute bottom-0 w-full">
            <div className="relative m-4 flex flex-1 flex-col justify-between gap-6 rounded-2xl bg-primary-foreground/60 p-6 text-white backdrop-blur-[2px] md:p-8">
              <div className="space-y-2">
                <h2 className="font-bold text-primary text-xl leading-tight md:text-3xl">
                  {t('sidebarHeading')}
                </h2>
                <p>{t('sidebarParagraph')}</p>
              </div>
              <div className="flex flex-col gap-3 text-white">
                <Button
                  render={<a href={contact.phone.href} />}
                  nativeButton={false}
                >
                  <Phone data-icon="inline-start" />
                  {t('call')}
                </Button>
                <Button
                  variant="outline"
                  className="border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-white"
                  render={
                    <a
                      href={contact.whatsapp.href}
                      target="_blank"
                      rel="noreferrer"
                    />
                  }
                  nativeButton={false}
                >
                  <MessageCircle data-icon="inline-start" />
                  {common('whatsapp')}
                </Button>
              </div>
            </div>
          </div>
        </aside>

        <div className="order-1 flex flex-col gap-5 lg:order-2 lg:col-span-2">
          <div className="relative">
            <Search className="pointer-events-none absolute inset-s-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder={t('searchPlaceholder')}
              aria-label={t('searchLabel')}
              className="bg-background ps-9"
            />
          </div>

          {visibleFaqs.length === 0 ? (
            <p className="rounded-2xl border border-border bg-background px-5 py-8 text-muted-foreground">
              {t('empty')}
            </p>
          ) : (
            <Accordion className="gap-3 overflow-visible rounded-none border-0">
              {visibleFaqs.map((faq) => (
                <AccordionItem key={faq.id} value={faq.id}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>
                    <p>{faq.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          )}

          {showAll ? null : (
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-fit"
              render={<Link href={pages.faq.href} />}
              nativeButton={false}
            >
              {t('viewAll')}
              <ChevronRight data-icon="inline-end" className="rtl:rotate-180" />
            </Button>
          )}
        </div>
      </div>
    </Container>
  )
}

export default FaqSection
