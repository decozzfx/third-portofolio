'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

/** Animates descendant [data-word] spans in (up + fade), staggered. */
export function RevealWords({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const words = el.querySelectorAll('[data-word]')
    gsap.fromTo(
      words,
      { yPercent: 110, opacity: 0 },
      { yPercent: 0, opacity: 1, duration: 0.9, ease: 'power3.out', stagger: 0.08, delay: 0.1 },
    )
  }, [])
  return <div ref={ref}>{children}</div>
}
