'use client'

import { useRef, useState } from 'react'
import Link from 'next/link'
import type { Work } from '@/types'
import { TextRoll } from '@/components/motion/text-roll'
import styles from './works-list.module.css'

export function WorksList({ works }: { works: Work[] }) {
  const previewRef = useRef<HTMLImageElement>(null)
  const [src, setSrc] = useState<string>('')
  const [visible, setVisible] = useState(false)

  const move = (e: React.MouseEvent) => {
    const el = previewRef.current
    if (!el) return
    el.style.left = `${e.clientX}px`
    el.style.top = `${e.clientY}px`
  }

  return (
    <>
      <ul className={styles.list} onMouseMove={move}>
        {works.map((w, i) => (
          <li key={w.slug} className={styles.item}>
            <Link
              href={`/works/${w.slug}`}
              className={styles.link}
              onMouseEnter={() => { setSrc(w.images[0]); setVisible(true) }}
              onMouseLeave={() => setVisible(false)}
            >
              <span className={styles.num}>{String(i + 1).padStart(2, '0')}</span>
              <span className={styles.name}><TextRoll text={w.title} /></span>
              <span className={styles.tag}>{w.platform}</span>
              <span className={styles.year}>{w.year}</span>
              <span className={styles.arrow} aria-hidden="true">↗</span>
            </Link>
          </li>
        ))}
      </ul>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        ref={previewRef}
        src={src}
        alt=""
        aria-hidden="true"
        className={`${styles.preview} ${visible ? styles.visible : ''}`}
      />
    </>
  )
}
