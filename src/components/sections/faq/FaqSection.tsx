'use client'

import { ChevronRight, MessageCircle, Phone, Search } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useMemo, useState } from 'react'
import Heading from '@/components/shared/Heading'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/container'
import { Input } from '@/components/ui/input'
import { contact } from '@/data/contact'
import { faqs, homepageFaqCount } from '@/data/faqs'
import { pages } from '@/data/links'

type FaqSectionProps = {
  /** Show every FAQ. Homepage leaves this off and previews the first 8. */
  showAll?: boolean
}

export default function FaqSection({ showAll = false }: FaqSectionProps) {
  const [query, setQuery] = useState('')

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
  }, [query, showAll])

  return (
    <section className="border-border border-t bg-muted/40">
      <Container className="space-y-10">
        <Heading
          eyebrow="Help And Resources"
          heading="Frequently Asked Questions"
          layout="center"
          size="xl"
        />
        <div className="grid items-stretch gap-6 lg:grid-cols-3 lg:gap-8">
          <aside className="relative order-2 flex min-h-112 overflow-hidden rounded-2xl bg-primary-foreground md:hidden lg:order-1 lg:col-span-1 lg:flex lg:min-h-full">
            <Image
              src="/faq-image.jpg"
              alt="Frequently Asked Questions Image"
              width={690}
              height={1000}
              className="absolute inset-0 size-full object-cover"
            />
            <div className="absolute bottom-0 w-full">
              <div className="relative m-4 flex flex-1 flex-col justify-between gap-6 rounded-2xl bg-primary-foreground/60 p-6 text-white backdrop-blur-[2px] md:p-8">
                <div className="space-y-2">
                  <h2 className="font-bold text-primary text-xl leading-tight md:text-3xl">
                    Still You Have Doubts ?
                  </h2>
                  <p>Contact us for any questions or inquiries.</p>
                </div>
                <div className="flex flex-col gap-3 text-white">
                  <Button
                    render={<a href={contact.phone.href} />}
                    nativeButton={false}
                  >
                    <Phone data-icon="inline-start" />
                    Call
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
                    WhatsApp
                  </Button>
                </div>
              </div>
            </div>
          </aside>

          <div className="order-1 flex flex-col gap-5 lg:order-2 lg:col-span-2">
            <div className="relative">
              <Search className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search questions"
                aria-label="Search frequently asked questions"
                className="bg-background pl-9"
              />
            </div>

            {visibleFaqs.length === 0 ? (
              <p className="rounded-2xl border border-border bg-background px-5 py-8 text-muted-foreground">
                No questions match that search. Try renovation, AC, plumbing, or
                hours.
              </p>
            ) : (
              <Accordion className="gap-3 overflow-visible rounded-none border-0">
                {visibleFaqs.map((faq) => (
                  <AccordionItem
                    key={faq.question}
                    value={faq.question}
                    className="rounded-xl border border-border bg-background px-2 last:border-b data-open:border-primary/50 data-open:bg-primary/10"
                  >
                    <AccordionTrigger className="py-4 font-medium text-base text-heading hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
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
                className="w-full sm:w-fit"
                render={<Link href={pages.faq.href} />}
                nativeButton={false}
              >
                View all questions
                <ChevronRight data-icon="inline-end" />
              </Button>
            )}
          </div>
        </div>
      </Container>
    </section>
  )
}
