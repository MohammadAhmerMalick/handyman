import { cn } from 'cn'
import { ArrowRight, Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import type { ReactNode } from 'react'
import ServiceFaqs from '@/components/sections/services/ServiceFaqs'
import SocialLinks from '@/components/shared/SocialLinks'
import { Container } from '@/components/ui/container'
import { contact } from '@/data/contact'
import {
  getRelatedServices,
  type ServiceDetail as ServiceDetailRecord,
  type ServiceItem,
  serviceHref,
} from '@/data/services'
import type { ServiceImage } from '@/data/services/types'

type ServiceColumnProps = {
  service: ServiceDetailRecord
}

type ServiceImageBlockProps = {
  className?: string
  image: ServiceImage
}

const ServiceImageBlock = ({ className, image }: ServiceImageBlockProps) => {
  return (
    <Image
      alt={image.alt}
      className={cn('w-full rounded-2xl bg-muted object-cover', className)}
      height={400}
      src={image.src}
      width={600}
    />
  )
}

const ServiceGallery = ({ service }: ServiceColumnProps) => {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {service.supportingImages.map((image, index) => (
        <ServiceImageBlock
          className={cn(
            'aspect-5/4',
            index === 0 ? 'object-left' : 'object-right'
          )}
          image={image}
          key={image.src}
        />
      ))}
    </div>
  )
}

const BulletList = ({ items, title }: { items: string[]; title: string }) => {
  if (items.length === 0) return null

  return (
    <section className="space-y-3">
      <h3 className="font-semibold text-xl">{title}</h3>
      <ul className="list-disc space-y-2 pl-5">
        {items.map((item) => (
          <li className="leading-relaxed" key={item}>
            {item}
          </li>
        ))}
      </ul>
    </section>
  )
}

const ProcessList = ({ steps }: { steps: string[] }) => {
  if (steps.length === 0) return null

  return (
    <section className="space-y-3">
      <h3 className="font-semibold text-xl">How we carry out the work</h3>
      <ol className="list-decimal space-y-2 pl-5">
        {steps.map((step) => (
          <li className="leading-relaxed" key={step}>
            {step}
          </li>
        ))}
      </ol>
    </section>
  )
}

const ServiceArticle = ({ service }: ServiceColumnProps) => {
  return (
    <article className="space-y-6 lg:col-span-2">
      <ServiceImageBlock className="aspect-2/1" image={service.heroImage} />
      <h2 className="font-bold text-3xl md:text-4xl">{service.heroTitle}</h2>
      <p className="leading-relaxed">{service.introduction}</p>
      {service.mainDescription.map((paragraph) => (
        <p className="leading-relaxed" key={paragraph}>
          {paragraph}
        </p>
      ))}
      <BulletList
        items={service.commonProblems}
        title="Common problems we help with"
      />
      <BulletList
        items={service.servicesIncluded}
        title="What this service includes"
      />
      <BulletList items={service.benefits} title="Benefits" />
      <ServiceGallery service={service} />
      <ProcessList steps={service.process} />
      <BulletList items={service.maintenanceTips} title="Maintenance tips" />
      <section className="space-y-3">
        <h3 className="font-semibold text-xl">Why choose Handyman</h3>
        <p className="leading-relaxed">{service.whyChooseUs}</p>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {service.availability}
        </p>
        {service.complianceNote ? (
          <p className="text-muted-foreground text-sm leading-relaxed">
            {service.complianceNote}
          </p>
        ) : null}
      </section>
      <section className="space-y-4">
        <h3 className="font-semibold text-xl">Frequently asked questions</h3>
        <ServiceFaqs faqs={service.faqs} />
      </section>
    </article>
  )
}

type ServiceNavLinkProps = {
  isCurrent: boolean
  item: ServiceItem
}

const ServiceNavLink = ({ isCurrent, item }: ServiceNavLinkProps) => {
  return (
    <li className="border-border border-b last:border-b-0">
      <Link
        aria-current={isCurrent ? 'page' : undefined}
        className={cn(
          'flex items-center justify-between gap-3 bg-white px-4 py-3.5 text-sm',
          isCurrent ? 'bg-primary text-black' : 'text-heading hover:bg-muted'
        )}
        href={serviceHref(item.slug)}
      >
        <span>{item.title}</span>
        <ArrowRight
          className={cn(
            'size-3 shrink-0',
            isCurrent ? 'text-black' : 'text-heading'
          )}
        />
      </Link>
    </li>
  )
}

const ServiceNav = ({ service }: ServiceColumnProps) => {
  const related = getRelatedServices(service)

  return (
    <nav aria-label="Related services">
      <h2 className="mb-3 font-semibold text-lg">Related services</h2>
      <ul className="overflow-hidden rounded-2xl border border-border bg-background">
        {related.map((item) => (
          <ServiceNavLink
            isCurrent={item.slug === service.slug}
            item={item}
            key={item.slug}
          />
        ))}
      </ul>
    </nav>
  )
}

type ContactRowProps = {
  children: ReactNode
  icon: ReactNode
}

const ContactRow = ({ children, icon }: ContactRowProps) => {
  return (
    <li className="flex items-center gap-3 text-white">
      <span className="text-primary">{icon}</span>
      <span className="wrap-break-word min-w-0">{children}</span>
    </li>
  )
}

type HoursRowProps = {
  label: string
  value: string
}

const HoursRow = ({ label, value }: HoursRowProps) => {
  return (
    <div className="flex items-start justify-between gap-4">
      <dt className="font-medium text-primary">{label}</dt>
      <dd className="text-right">{value}</dd>
    </div>
  )
}

const WorkingHours = () => {
  return (
    <>
      <h2 className="font-semibold text-lg text-primary">Working hours</h2>
      <dl className="mt-4 space-y-3 text-sm">
        <HoursRow
          label="Saturday–Thursday"
          value={contact.hours.saturdayToThursday}
        />
        <HoursRow label="Friday" value={contact.hours.friday} />
      </dl>
    </>
  )
}

const GetInTouch = () => {
  return (
    <div className="mt-6 border-white/15 border-t pt-6">
      <h2 className="font-semibold text-lg text-primary">Get in touch</h2>
      <ul className="mt-4 space-y-3 text-sm">
        <ContactRow icon={<Mail className="size-5 shrink-0" />}>
          <a className="hover:underline" href={`mailto:${contact.email}`}>
            {contact.email}
          </a>
        </ContactRow>
        <ContactRow icon={<Phone className="size-5 shrink-0" />}>
          <a className="hover:underline" href={contact.phone.href}>
            <span className="sr-only">Call </span>
            {contact.phone.display}
          </a>
        </ContactRow>
        <ContactRow icon={<MessageCircle className="size-5 shrink-0" />}>
          <a
            className="hover:underline"
            href={contact.whatsapp.href}
            rel="noreferrer"
            target="_blank"
          >
            <span className="sr-only">WhatsApp </span>
            {contact.phone.display}
          </a>
        </ContactRow>
        <ContactRow icon={<MapPin className="size-5 shrink-0" />}>
          <a
            className="hover:underline"
            href={contact.addressLink}
            rel="noreferrer"
            target="_blank"
          >
            {contact.address}
          </a>
        </ContactRow>
      </ul>
      <SocialLinks className="mt-6" />
    </div>
  )
}

const ServiceContactCard = () => {
  return (
    <section className="rounded-2xl bg-primary-foreground px-6 py-6 text-white">
      <WorkingHours />
      <GetInTouch />
    </section>
  )
}

const ServiceSidebar = ({ service }: ServiceColumnProps) => {
  return (
    <aside className="space-y-6">
      <ServiceNav service={service} />
      <ServiceImageBlock className="aspect-3/4" image={service.sidebarImage} />
      <ServiceContactCard />
    </aside>
  )
}

type ServiceDetailProps = {
  service: ServiceDetailRecord
}

const ServiceDetail = ({ service }: ServiceDetailProps) => {
  return (
    <Container>
      <div className="grid items-start gap-10 lg:grid-cols-3 lg:gap-12">
        <ServiceArticle service={service} />
        <ServiceSidebar service={service} />
      </div>
    </Container>
  )
}

export default ServiceDetail
