'use client'

import { cn } from 'cn'
import { ChevronUp } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { scrollToTop, useScrolledPast } from '@/hooks/useScrolledPast'

const ScrollToTop = () => {
  const isVisible = useScrolledPast(500, 100)

  return (
    <Button
      type="button"
      size="icon-lg"
      aria-label="Scroll to top"
      aria-hidden={!isVisible}
      tabIndex={isVisible ? 0 : -1}
      onClick={scrollToTop}
      className={cn(
        'fixed right-4 bottom-4 z-50 cursor-pointer border-2 border-primary shadow-lg transition-all duration-300 hover:bg-primary-foreground hover:text-primary md:right-6 md:bottom-6',
        isVisible
          ? 'translate-y-0 opacity-100'
          : 'pointer-events-none translate-y-3 opacity-0'
      )}
    >
      <ChevronUp className="size-5" />
    </Button>
  )
}

export default ScrollToTop
