'use client'

import { cn } from 'cn'
import { Newspaper } from 'lucide-react'
import Logo from '@/components/shared/Logo'
import NavigationSheet from '@/components/shared/navbar/NavigationSheet'
import NavMenu from '@/components/shared/navbar/NavMenu'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/container'
import { useScrolledPast } from '@/hooks/useScrolledPast'

const Navbar = () => {
  // 40px hysteresis > the ~32px height drop so shrinking cannot bounce scrollY back across 50
  const isCompact = useScrolledPast(50, 40)

  return (
    <nav
      className={cn(
        'sticky top-0 right-0 left-0 z-50 border-primary border-b bg-linear-to-b from-black shadow-xl backdrop-blur-xs duration-300 [overflow-anchor:none]',
        isCompact ? 'bg-black/60' : 'bg-linear-to-b from-black to-black/10'
      )}
    >
      <Container
        className={cn(
          'flex items-center justify-between gap-4 duration-300',
          isCompact ? 'py-2 md:py-2 lg:py-2' : 'py-6 md:py-6 lg:py-6'
        )}
      >
        <div className="w-60">
          <Logo className={cn('duration-300', isCompact ? 'w-52' : 'w-60')} />
        </div>

        {/* Desktop Menu */}
        <NavMenu className="hidden md:block" />

        <div className="flex items-center gap-3">
          <Button size="lg">
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
