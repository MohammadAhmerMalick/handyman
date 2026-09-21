import type { LucideIcon } from 'lucide-react'
import {
  AirVent,
  Building2,
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

export const navLinks: SiteLink[] = [
  { href: '/', icon: Home, title: 'Home' },
  { href: '#', icon: Info, title: 'About Us' },
  { href: '#', icon: Wrench, title: 'Services' },
  { href: '#', icon: Phone, title: 'Contact Us' },
]

export const serviceLinks: SiteLink[] = [
  {
    href: '#',
    icon: Building2,
    title: 'Villa, Flat, Office & Shop Renovation',
  },
  { href: '#', icon: AirVent, title: 'Air Conditioning Services' },
  { href: '#', icon: Droplets, title: 'Plumbing & Carpentry' },
  { href: '#', icon: Paintbrush, title: 'Masonry & Painting' },
  { href: '#', icon: Hammer, title: 'Handyman & General Maintenance' },
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

export const legalLinks: SiteLink[] = [
  { href: '#', icon: Shield, title: 'Privacy Policy' },
  { href: '#', icon: FileText, title: 'Terms of Use' },
]

export const socialLinks: SocialLink[] = [
  { href: 'https://facebook.com', icon: FacebookIcon, label: 'Facebook' },
  { href: 'https://x.com', icon: X, label: 'X' },
  { href: 'https://instagram.com', icon: InstagramIcon, label: 'Instagram' },
  { href: 'https://linkedin.com', icon: LinkedinIcon, label: 'LinkedIn' },
  { href: 'https://youtube.com', icon: YoutubeIcon, label: 'YouTube' },
]

export const footerLinkGroups: FooterLinkGroup[] = [
  { icon: Link2, id: 'nav', links: navLinks, title: 'Quick Links' },
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
