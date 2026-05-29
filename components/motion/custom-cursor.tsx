'use client'

import { useEffect, useRef } from 'react'
import styles from './custom-cursor.module.css'

export function CustomCursor() {
  const dot = useRef<HTMLDivElement>(null)
  const ring = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return
    let rx = 0, ry = 0, x = 0, y = 0, raf = 0
    const move = (e: MouseEvent) => {
      x = e.clientX; y = e.clientY
      if (dot.current) { dot.current.style.left = `${x}px`; dot.current.style.top = `${y}px` }
    }
    const loop = () => {
      rx += (x - rx) * 0.18; ry += (y - ry) * 0.18
      if (ring.current) { ring.current.style.left = `${rx}px`; ring.current.style.top = `${ry}px` }
      raf = requestAnimationFrame(loop)
    }
    window.addEventListener('mousemove', move)
    raf = requestAnimationFrame(loop)
    return () => { window.removeEventListener('mousemove', move); cancelAnimationFrame(raf) }
  }, [])
  return (<><div ref={dot} className={styles.dot} aria-hidden /><div ref={ring} className={styles.ring} aria-hidden /></>)
}
