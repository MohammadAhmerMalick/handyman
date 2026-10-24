import { cn } from 'cn'
import { ArrowRight, Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import { getTranslations } from 'next-intl/server'
import type { ReactNode } from 'react'
import ServiceFaqs from '@/components/sections/services/ServiceFaqs'
import { Container } from '@/components/shared/Container'
import Heading from '@/components/shared/Heading'
import SiteImage from '@/components/shared/SiteImage'
import SocialLinks from '@/components/shared/SocialLinks'
import { contact } from '@/data/contact'
import {
  getRelatedServices,
  type ServiceDetail as ServiceDetailRecord,
  type ServiceItem,
  serviceHref,
} from '@/data/services'
import type { ServiceImage } from '@/data/services/types'
import { Link } from '@/i18n/navigation'
import type { AppLocale } from '@/i18n/routing'

type ServiceColumnProps = {
  locale: AppLocale
  service: ServiceDetailRecord
}

type ServiceImageBlockProps = {
  className?: string
  image: ServiceImage
}

const ServiceImageBlock = ({ className, image }: ServiceImageBlockProps) => {
  return (
    <SiteImage
      alt={image.alt}
      className={cn('w-full rounded-2xl bg-muted object-cover', className)}
      height={400}
      src={image.src}
      width={600}
    />
  )
}

const ServiceGallery = async ({ service }: ServiceColumnProps) => {
  const t = await getTranslations('Service')
  const categories = await getTranslations('ServiceCategories')
  const categoryTitle = categories(`${service.category}.title`)

  const [onSite, finished] = service.supportingImages

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <ServiceImageBlock
        className="aspect-5/4 object-left"
        image={{
          ...onSite,
          alt: t('altOnSite', {
            category: categoryTitle,
            title: service.title,
          }),
        }}
      />
      <ServiceImageBlock
        className="aspect-5/4 object-right"
        image={{
          ...finished,
          alt: t('altFinished', {
            category: categoryTitle,
            title: service.title,
          }),
        }}
      />
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

const ProcessList = ({ steps, title }: { steps: string[]; title: string }) => {
  if (steps.length === 0) return null

  return (
    <section className="space-y-3">
      <h3 className="font-semibold text-xl">{title}</h3>
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

const ServiceArticle = async ({ locale, service }: ServiceColumnProps) => {
  const t = await getTranslations('Service')
  const categories = await getTranslations('ServiceCategories')
  const categoryTitle = categories(`${service.category}.title`)

  return (
    <article className="space-y-6 lg:col-span-2">
      <ServiceImageBlock
        className="aspect-2/1"
        image={{
          ...service.heroImage,
          alt: t('altHero', { category: categoryTitle, title: service.title }),
        }}
      />
      <Heading
        heading={service.heroTitle}
        layout="left"
        paragraph={service.introduction}
      />
      {service.mainDescription.map((paragraph) => (
        <p className="leading-relaxed" key={paragraph}>
          {paragraph}
        </p>
      ))}
      <BulletList items={service.commonProblems} title={t('commonProblems')} />
      <BulletList items={service.servicesIncluded} title={t('includes')} />
      <BulletList items={service.benefits} title={t('benefits')} />
      <ServiceGallery locale={locale} service={service} />
      <ProcessList steps={service.process} title={t('process')} />
      <BulletList items={service.maintenanceTips} title={t('tips')} />
      <section className="space-y-3">
        <h3 className="font-semibold text-xl">{t('whyChoose')}</h3>
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
        <h3 className="font-semibold text-xl">{t('faqs')}</h3>
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
            'size-3 shrink-0 rtl:rotate-180',
            isCurrent ? 'text-black' : 'text-heading'
          )}
        />
      </Link>
    </li>
  )
}

const ServiceNav = async ({ locale, service }: ServiceColumnProps) => {
  const t = await getTranslations('Service')
  const related = getRelatedServices(service, locale)

  return (
    <nav aria-label={t('navLabel')}>
      <h2 className="mb-3 font-semibold text-lg">{t('related')}</h2>
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
      <dd className="text-end">{value}</dd>
    </div>
  )
}

const WorkingHours = async () => {
  const t = await getTranslations('Service')
  const hours = await getTranslations('Hours')

  return (
    <>
      <h2 className="font-semibold text-lg text-primary">
        {t('workingHours')}
      </h2>
      <dl className="mt-4 space-y-3 text-sm">
        <HoursRow
          label={hours('saturdayThursdayLabel')}
          value={hours('saturdayThursdayValue')}
        />
        <HoursRow label={hours('fridayLabel')} value={hours('fridayValue')} />
      </dl>
    </>
  )
}

const GetInTouch = async () => {
  const t = await getTranslations('Service')

  return (
    <div className="mt-6 border-white/15 border-t pt-6">
      <h2 className="font-semibold text-lg text-primary">{t('getInTouch')}</h2>
      <ul className="mt-4 space-y-3 text-sm">
        <ContactRow icon={<Mail className="size-5 shrink-0" />}>
          <a className="hover:underline" href={`mailto:${contact.email}`}>
            {contact.email}
          </a>
        </ContactRow>
        <ContactRow icon={<Phone className="size-5 shrink-0" />}>
          <a className="hover:underline" href={contact.phone.href}>
            <span className="sr-only">{t('call')}</span>
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
            <span className="sr-only">{t('whatsapp')}</span>
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

const ServiceSidebar = async ({ locale, service }: ServiceColumnProps) => {
  const t = await getTranslations('Service')
  const categories = await getTranslations('ServiceCategories')
  const categoryTitle = categories(`${service.category}.title`)

  return (
    <aside className="space-y-6">
      <ServiceNav locale={locale} service={service} />
      <ServiceImageBlock
        className="aspect-3/4"
        image={{
          ...service.sidebarImage,
          alt: t('altSidebar', {
            category: categoryTitle,
            title: service.title,
          }),
        }}
      />
      <ServiceContactCard />
    </aside>
  )
}

type ServiceDetailProps = {
  locale: AppLocale
  service: ServiceDetailRecord
}

const ServiceDetail = ({ locale, service }: ServiceDetailProps) => {
  return (
    <Container>
      <div className="grid items-start gap-10 lg:grid-cols-3 lg:gap-12">
        <ServiceArticle locale={locale} service={service} />
        <ServiceSidebar locale={locale} service={service} />
      </div>
    </Container>
  )
}

export default ServiceDetail
