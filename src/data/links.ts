import type { LucideIcon } from 'lucide-react'
import {
  AirVent,
  Building2,
  CircleHelp,
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
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  X,
  YoutubeIcon,
} from '@/components/ui/brand-icons'
import { contact } from '@/data/contact'

export type SiteLink = {
  description?: string
  external?: boolean
  href: string
  icon: LucideIcon
  title: string
}

export type SocialLink = {
  href: string
  icon: typeof FacebookIcon
  label: string
}

export type FooterLinkGroup = {
  icon: LucideIcon
  id: 'contact' | 'nav' | 'services'
  links: SiteLink[]
  title: string
}

export const pages = {
  about: {
    description:
      'Dummy about copy for layout. Replace with the real Handyman story later.',
    href: '/about',
    icon: Info,
    title: 'About Us',
  },
  contact: {
    description:
      'Call or WhatsApp for the fastest reply. Based in Marina, Dubai.',
    href: '/contact',
    icon: Phone,
    title: 'Contact Us',
  },
  faq: {
    description:
      'Answers about coverage, trades, hours, and how to ask for a quote.',
    href: '/faq',
    icon: CircleHelp,
    title: 'FAQs',
  },
  home: {
    description: 'Renovation, maintenance, and trade services across the UAE.',
    href: '/',
    icon: Home,
    title: 'Home',
  },
  privacy: {
    description:
      'Dummy policy for layout only. Replace when the legal company name and trade license are known.',
    href: '/privacy',
    icon: Shield,
    title: 'Privacy Policy',
  },
  services: {
    description:
      'Renovation and maintenance trades across the UAE. No fixed prices — ask for a quote by call or WhatsApp.',
    href: '/services',
    icon: Wrench,
    title: 'Services',
  },
  terms: {
    description:
      'Dummy terms for layout only. Replace when the legal company name and trade license are known.',
    href: '/terms',
    icon: FileText,
    title: 'Terms of Use',
  },
} satisfies Record<string, SiteLink>

export const navLinks: SiteLink[] = [
  pages.home,
  pages.about,
  pages.services,
  pages.contact,
]

export const legalLinks: SiteLink[] = [pages.privacy, pages.terms]

export const serviceLinks: SiteLink[] = [
  {
    href: pages.services.href,
    icon: Building2,
    title: 'Villa, Flat, Office & Shop Renovation',
  },
  {
    href: pages.services.href,
    icon: AirVent,
    title: 'Air Conditioning Services',
  },
  {
    href: pages.services.href,
    icon: Droplets,
    title: 'Plumbing & Carpentry',
  },
  {
    href: pages.services.href,
    icon: Paintbrush,
    title: 'Masonry & Painting',
  },
  {
    href: pages.services.href,
    icon: Hammer,
    title: 'Handyman & General Maintenance',
  },
]

export const contactLinks: SiteLink[] = [
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
]

export const pageLinks: SiteLink[] = [...navLinks, pages.faq, ...legalLinks]

export function getPageLink(pathname: string) {
  if (!pathname) return

  const href =
    pathname.length > 1 && pathname.endsWith('/')
      ? pathname.slice(0, -1)
      : pathname

  return pageLinks.find((link) => link.href === href)
}

export const socialLinks: SocialLink[] = [
  { href: 'https://facebook.com', icon: FacebookIcon, label: 'Facebook' },
  { href: 'https://x.com', icon: X, label: 'X' },
  { href: 'https://instagram.com', icon: InstagramIcon, label: 'Instagram' },
  { href: 'https://linkedin.com', icon: LinkedinIcon, label: 'LinkedIn' },
  { href: 'https://youtube.com', icon: YoutubeIcon, label: 'YouTube' },
]

const footerNavLinks: SiteLink[] = [
  pages.home,
  pages.about,
  pages.services,
  pages.faq,
  pages.contact,
]

export const footerLinkGroups: FooterLinkGroup[] = [
  { icon: Link2, id: 'nav', links: footerNavLinks, title: 'Quick Links' },
  {
    icon: Wrench,
    id: 'services',
    links: serviceLinks,
    title: 'Our Services',
  },
  {
    icon: Phone,
    id: 'contact',
    links: contactLinks,
    title: 'Quick Contact',
  },
]
