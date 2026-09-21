import { MapPin, Phone } from 'lucide-react'
import SocialLinks from '@/components/shared/SocialLinks'
import { Container } from '@/components/ui/container'
import { contact } from '@/data/contact'

const TopBar = () => {
  return (
    <div className="hidden bg-primary sm:block">
      <Container className="relative z-60 flex items-center justify-between py-2 font-medium text-black md:py-2 lg:py-2">
        <SocialLinks className="text-sm [&>a]:hover:text-black" size={18} />

        <div className="flex items-center gap-2 text-sm">
          <p className="flex items-center gap-2">
            <MapPin className="size-4" /> {contact.address}
          </p>
          |
          <p className="flex items-center gap-2">
            <Phone className="size-4" /> {contact.phone.display}
          </p>
        </div>
      </Container>
    </div>
  )
}

export default TopBar
