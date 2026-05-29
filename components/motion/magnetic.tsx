'use client'

import { useRef } from 'react'

export function Magnetic({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)
  const onMove = (e: React.MouseEvent) => {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    el.style.transform = `translate(${(e.clientX - (r.left + r.width / 2)) * 0.3}px, ${(e.clientY - (r.top + r.height / 2)) * 0.3}px)`
  }
  const reset = () => { if (ref.current) ref.current.style.transform = 'translate(0,0)' }
  return (
    <div ref={ref} onMouseMove={onMove} onMouseLeave={reset} style={{ display: 'inline-block', transition: 'transform 0.3s var(--ease-out)' }}>
      {children}
    </div>
  )
}
