import { Newspaper } from 'lucide-react'
import Logo from '@/components/shared/Logo'
import NavigationSheet from '@/components/shared/navbar/NavigationSheet'
import NavMenu from '@/components/shared/navbar/NavMenu'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/container'

const Navbar = () => {
  return (
    <nav className="fixed top-0 right-0 left-0 z-50 border-primary border-b bg-linear-to-b from-black to-black/0 shadow-xl backdrop-blur-xs">
      <Container className="flex items-center justify-between gap-4 py-6 md:py-6 lg:py-6">
        <Logo />

        {/* Desktop Menu */}
        <NavMenu className="hidden md:block" />

        <div className="flex items-center gap-3">
          <Button size="xl">
            <Newspaper className="size-5" data-icon="inline-center" />
            Get Quote
          </Button>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <NavigationSheet />
          </div>
        </div>
      </Container>
    </nav>
  )
}

export default Navbar
