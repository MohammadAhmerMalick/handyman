import { cn } from 'cn'
import { Clock } from 'lucide-react'
import { getLocale, getTranslations } from 'next-intl/server'
import { Fragment } from 'react'
import { ApplicationStoreLinks } from '@/components/shared/ApplicationStoreLinks'
import { Container } from '@/components/shared/Container'
import Logo from '@/components/shared/Logo'
import SocialLinks from '@/components/shared/SocialLinks'
import { contact } from '@/data/contact'
import {
  type FooterLinkGroup,
  footerLinkGroups,
  legalLinks,
  pages,
} from '@/data/links'
import { getHighlightServices, serviceHref } from '@/data/services'
import { Link } from '@/i18n/navigation'
import type { AppLocale } from '@/i18n/routing'

const FooterBrand = async () => {
  const t = await getTranslations('Footer')
  const hours = await getTranslations('Hours')

  return (
    <div className="lg:col-span-2">
      <Link href={pages.home.href} className="flex items-center space-x-2">
        <Logo />
      </Link>
      <p className="mt-4">
        {t('blurb', {
          address: contact.address,
          serviceArea: contact.serviceArea,
        })}
      </p>
      <div className="mt-4 flex gap-2">
        <Clock className="mt-1 size-4 shrink-0 text-primary" />
        <div>
          <p>
            <span className="text-primary">
              {hours('saturdayThursdayLabel')}:
            </span>
            <br />
            {hours('saturdayThursdayValue')}
          </p>
          <p className="mt-2">
            <span className="text-primary">{hours('fridayLabel')}:</span>
            <br />
            {hours('fridayValue')}
          </p>
        </div>
      </div>
    </div>
  )
}

const FooterLinkColumn = async ({ group }: { group: FooterLinkGroup }) => {
  const t = await getTranslations('Footer')
  const nav = await getTranslations('Nav')
  const pagesT = await getTranslations('Pages')
  const common = await getTranslations('Common')
  const locale = (await getLocale()) as AppLocale
  const highlights = getHighlightServices(locale)

  const title =
    group.id === 'nav'
      ? t('quickLinks')
      : group.id === 'services'
        ? t('ourServices')
        : t('quickContact')

  const links =
    group.id === 'services'
      ? highlights.map((service) => ({
          external: false,
          href: serviceHref(service.slug),
          icon: service.icon,
          title: service.title,
        }))
      : group.links.map((link) => {
          if (link.id) {
            return {
              ...link,
              title:
                link.id === 'home' ||
                link.id === 'about' ||
                link.id === 'services' ||
                link.id === 'contact'
                  ? nav(link.id)
                  : pagesT(`${link.id}.title`),
            }
          }
          if (link.href === contact.whatsapp.href) {
            return { ...link, title: common('whatsapp') }
          }
          return link
        })

  return (
    <div className={cn(group.id === 'nav' ? 'lg:col-span-1' : 'lg:col-span-2')}>
      <h3 className="flex items-center gap-2 font-semibold text-lg text-primary">
        <group.icon className="size-5 shrink-0" />
        {title}
      </h3>
      <ul className="mt-4 space-y-2">
        {links.map((link) => {
          const className =
            'flex items-center gap-2 font-normal transition-colors duration-300 hover:text-primary'
          const content = (
            <>
              <link.icon className="mt-0.5 size-4 shrink-0 text-primary" />
              <span className="wrap-break-word">{link.title}</span>
            </>
          )
          const isExternal =
            link.external ||
            link.href.startsWith('tel:') ||
            link.href.startsWith('mailto:')

          return (
            <li key={link.href}>
              {isExternal ? (
                <a
                  className={className}
                  href={link.href}
                  {...(link.external
                    ? { rel: 'noreferrer', target: '_blank' }
                    : {})}
                >
                  {content}
                </a>
              ) : (
                <Link className={className} href={link.href}>
                  {content}
                </Link>
              )}
            </li>
          )
        })}
      </ul>

      {group.id === 'contact' && (
        <>
          <SocialLinks className="mt-6" />
          <ApplicationStoreLinks className="mt-6" />
        </>
      )}
    </div>
  )
}

const FooterLegal = async () => {
  const t = await getTranslations('Footer')
  const pagesT = await getTranslations('Pages')

  return (
    <div className="mt-4 flex flex-col items-center justify-between gap-2 border-primary border-t pt-4 md:mt-16 md:flex-row">
      <p className="text-center md:text-start">
        {t('copyright', { year: new Date().getFullYear() })}
      </p>
      <div className="flex gap-4">
        {legalLinks.map((link, index) => (
          <Fragment key={link.href}>
            {index > 0 ? <span className="text-primary"> | </span> : null}
            <Link
              href={link.href}
              className="inline-flex items-center gap-2 font-normal transition-colors duration-300 hover:text-primary"
            >
              <link.icon className="size-4 text-primary" />
              {link.id ? pagesT(`${link.id}.title`) : link.title}
            </Link>
          </Fragment>
        ))}
      </div>
    </div>
  )
}

const Footer = () => {
  return (
    <footer className="border-primary border-t bg-primary-foreground text-white">
      <Container className="pt-12 pb-4 md:pb-4 lg:pt-16 lg:pb-4">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7">
          <FooterBrand />
          {footerLinkGroups.map((group) => (
            <FooterLinkColumn key={group.id} group={group} />
          ))}
        </div>
        <FooterLegal />
      </Container>
    </footer>
  )
}

export default Footer
