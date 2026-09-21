'use client'

import { useEffect, useState } from 'react'

export function useScrolledPast(threshold: number, hysteresis = 0) {
  const [isPast, setIsPast] = useState(false)

  useEffect(() => {
    const exitAt = Math.max(0, threshold - hysteresis)

    const update = () => {
      const y = window.scrollY
      setIsPast((prev) => (prev ? y > exitAt : y > threshold))
    }

    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [hysteresis, threshold])

  return isPast
}

export function scrollToTop() {
  window.scrollTo({ behavior: 'smooth', top: 0 })
}
