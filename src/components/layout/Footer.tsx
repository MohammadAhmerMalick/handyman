import { cn } from 'cn'
import { Clock } from 'lucide-react'
import Link from 'next/link'
import { Fragment } from 'react'
import Logo from '@/components/shared/Logo'
import SocialLinks from '@/components/shared/SocialLinks'
import { Container } from '@/components/ui/container'
import { contact } from '@/data/contact'
import {
  type FooterLinkGroup,
  footerLinkGroups,
  legalLinks,
} from '@/data/links'

const FooterBrand = () => (
  <div className="lg:col-span-2">
    <Link href="/" className="flex items-center space-x-2">
      <Logo />
    </Link>
    <p className="mt-4">
      Renovation, air conditioning, plumbing, and maintenance across the UAE.
      Based in Marina, Dubai.
    </p>
    <div className="mt-4 flex gap-2">
      <Clock className="mt-1 size-4 shrink-0 text-primary" />
      <div>
        <p>
          <span className="text-primary">Saturday–Thursday:</span>
          <br />
          {contact.hours.saturdayToThursday}
        </p>
        <p className="mt-2">
          <span className="text-primary">Friday:</span>
          <br />
          {contact.hours.friday}
        </p>
      </div>
    </div>
  </div>
)

const FooterLinkColumn = ({ group }: { group: FooterLinkGroup }) => (
  <div className={cn(group.id === 'nav' ? 'lg:col-span-1' : 'lg:col-span-2')}>
    <h3 className="flex items-center gap-2 font-semibold text-lg text-primary">
      <group.icon className="size-5 shrink-0" />
      {group.title}
    </h3>
    <ul className="mt-4 space-y-2">
      {group.links.map((link) => (
        <li key={link.title}>
          <Link
            href={link.href}
            className="flex items-center gap-2 font-normal transition-colors duration-300 hover:text-primary"
            {...(link.external ? { rel: 'noreferrer', target: '_blank' } : {})}
          >
            <link.icon className="mt-0.5 size-4 shrink-0 text-primary" />
            <span className="wrap-break-word">{link.title}</span>
          </Link>
        </li>
      ))}
    </ul>

    {group.id === 'contact' && <SocialLinks className="mt-6" />}
  </div>
)

const FooterLegal = () => (
  <div className="mt-4 flex flex-col items-center justify-between gap-2 border-primary border-t pt-4 md:mt-16 md:flex-row">
    <p className="text-center md:text-left">
      <span className="text-primary">&copy;</span> {new Date().getFullYear()}{' '}
      Handyman. All rights reserved.
    </p>
    <div className="flex gap-4">
      {legalLinks.map((link, index) => (
        <Fragment key={link.title}>
          {index > 0 ? <span className="text-primary"> | </span> : null}
          <Link
            href={link.href}
            className="inline-flex items-center gap-2 font-normal transition-colors duration-300 hover:text-primary"
          >
            <link.icon className="size-4 text-primary" />
            {link.title}
          </Link>
        </Fragment>
      ))}
    </div>
  </div>
)

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
