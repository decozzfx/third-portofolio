'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/**
 * Reveals direct children of the returned ref: opacity 0 + scale .85 -> 1,
 * staggered, once on scroll-in. Respects reduced motion.
 */
export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
  options?: { stagger?: number; selector?: string },
) {
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const targets = options?.selector
      ? el.querySelectorAll(options.selector)
      : el.children

    const ctx = gsap.context(() => {
      gsap.fromTo(
        targets,
        { opacity: 0, scale: 0.85 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: 'power3.out',
          stagger: options?.stagger ?? 0.08,
          scrollTrigger: { trigger: el, start: 'top 80%', once: true },
        },
      )
    }, el)

    return () => ctx.revert()
  }, [options?.stagger, options?.selector])

  return ref
}
