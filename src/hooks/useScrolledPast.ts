'use client'

import { useEffect, useState } from 'react'

/**
 * Hook to check if the user has scrolled past a threshold
 * @param threshold The threshold to trigger the event
 * @param hysteresis The hysteresis to apply to the threshold
 * @returns True if the user has scrolled past the threshold
 */
export const useScrolledPast = (threshold: number, hysteresis = 0) => {
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

export const scrollToTop = () => {
  window.scrollTo({ behavior: 'smooth', top: 0 })
}
