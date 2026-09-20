import { cn } from 'cn'
import type { LucideIcon } from 'lucide-react'
import {
  AirVent,
  Building2,
  Clock,
  Droplets,
  FileText,
  Hammer,
  Home,
  Info,
  Link2,
  Mail,
  MapPin,
  MessageCircle,
  Paintbrush,
  Phone,
  Shield,
  Wrench,
} from 'lucide-react'
import Link from 'next/link'
import Logo from '@/components/shared/Logo'
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
} from '@/components/ui/brand-icons'
import { Container } from '@/components/ui/container'
import { contact } from '@/data/contact'

type FooterLink = {
  external?: boolean
  href: string
  icon?: LucideIcon
  title: string
}

type FooterLinkGroup = {
  icon: LucideIcon
  links: FooterLink[]
  title: string
}

type SocialLink = {
  href: string
  icon: typeof FacebookIcon
  label: string
}

const footerLinks: FooterLinkGroup[] = [
  {
    icon: Link2,
    links: [
      { href: '/', icon: Home, title: 'Home' },
      { href: '#', icon: Info, title: 'About Us' },
      { href: '#', icon: Wrench, title: 'Services' },
      { href: '#', icon: Phone, title: 'Contact Us' },
    ],
    title: 'Quick Links',
  },
  {
    icon: Wrench,
    links: [
      {
        href: '#',
        icon: Building2,
        title: 'Villa, Flat, Office & Shop Renovation',
      },
      { href: '#', icon: AirVent, title: 'Air Conditioning Services' },
      { href: '#', icon: Droplets, title: 'Plumbing & Carpentry' },
      { href: '#', icon: Paintbrush, title: 'Masonry & Painting' },
      {
        href: '#',
        icon: Hammer,
        title: 'Handyman & General Maintenance',
      },
    ],
    title: 'Our Services',
  },
  {
    icon: Phone,
    links: [
      {
        href: contact.phone.href,
        icon: Phone,
        title: contact.phone.display,
      },
      {
        external: true,
        href: contact.whatsapp.href,
        icon: MessageCircle,
        title: 'WhatsApp',
      },
      { href: `mailto:${contact.email}`, icon: Mail, title: contact.email },
      {
        external: true,
        href: contact.addressLink,
        icon: MapPin,
        title: contact.address,
      },
    ],
    title: 'Quick Contact',
  },
]

const socialLinks: SocialLink[] = [
  { href: 'https://facebook.com', icon: FacebookIcon, label: 'Facebook' },
  { href: 'https://twitter.com', icon: TwitterIcon, label: 'Twitter' },
  { href: 'https://instagram.com', icon: InstagramIcon, label: 'Instagram' },
  { href: 'https://linkedin.com', icon: LinkedinIcon, label: 'LinkedIn' },
]

const FooterSocialLinks = () => (
  <div className="mt-6 flex gap-4">
    {socialLinks.map((link) => (
      <Link
        key={link.label}
        href={link.href}
        className="transition-colors duration-300 hover:text-primary"
        aria-label={link.label}
        target="_blank"
        rel="noreferrer"
      >
        <link.icon className="size-5" />
      </Link>
    ))}
  </div>
)

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
  <div
    className={cn(
      group.title === 'Quick Links' ? 'lg:col-span-1' : 'lg:col-span-2'
    )}
  >
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
            {link.icon ? (
              <link.icon className="mt-0.5 size-4 shrink-0 text-primary" />
            ) : null}
            <span className="wrap-break-word">{link.title}</span>
          </Link>
        </li>
      ))}
    </ul>

    {group.title === 'Quick Contact' && <FooterSocialLinks />}
  </div>
)

const FooterLegal = () => (
  <div className="mt-4 flex flex-col items-center justify-between gap-2 border-primary border-t pt-4 md:mt-16 md:flex-row">
    <p className="text-center md:text-left">
      <span className="text-primary">&copy;</span> {new Date().getFullYear()}{' '}
      Handyman. All rights reserved.
    </p>
    <div className="flex gap-4">
      <Link
        href="#"
        className="inline-flex items-center gap-2 font-normal transition-colors duration-300 hover:text-primary"
      >
        <Shield className="size-4 text-primary" />
        Privacy Policy
      </Link>
      <span className="text-primary"> | </span>
      <Link
        href="#"
        className="inline-flex items-center gap-2 font-normal transition-colors duration-300 hover:text-primary"
      >
        <FileText className="size-4 text-primary" />
        Terms of Use
      </Link>
    </div>
  </div>
)

const Footer = () => {
  return (
    <footer className="border-primary border-t bg-primary-foreground text-white">
      <Container className="pt-12 pb-4 md:pb-4 lg:pt-16 lg:pb-4">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7">
          <FooterBrand />
          {footerLinks.map((group) => (
            <FooterLinkColumn key={group.title} group={group} />
          ))}
        </div>
        <FooterLegal />
      </Container>
    </footer>
  )
}

export default Footer
