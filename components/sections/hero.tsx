'use client'

import Link from 'next/link'
import dynamic from 'next/dynamic'
import { RevealWords } from '@/components/motion/reveal-words'
import { SectionEyebrow } from '@/components/common/section-eyebrow'
import { ShinyCTA } from '@/components/motion/shiny-cta'
import styles from './hero.module.css'

const ShaderBg = dynamic(() => import('./shader-bg').then((m) => m.ShaderBg), { ssr: false })

const WORDS = [
  { t: 'I', em: false },
  { t: 'build', em: false },
  { t: 'digital', em: true },
  { t: 'experiences', em: true },
  { t: 'that', em: false },
  { t: 'ship.', em: false },
]

const STATS = [
  { num: '4+', label: 'Years experience' },
  { num: '6', label: 'Companies' },
  { num: '20+', label: 'Technologies' },
]

export function Hero() {
  return (
    <header className={styles.hero}>
      <ShaderBg />
      <div className={styles.glow} aria-hidden="true" />
      <div className={styles.content}>
        <SectionEyebrow num="01" label="Fullstack & Frontend Engineer" />
        <RevealWords>
          <h1 className={styles.title}>
            {WORDS.map((w, i) => (
              <span key={i} className={styles.word}>
                <span
                  data-word
                  style={{
                    display: 'inline-block',
                    fontFamily: w.em
                      ? 'var(--font-instrument-serif)'
                      : 'var(--font-switzer)',
                    fontStyle: w.em ? 'italic' : 'normal',
                    fontWeight: w.em ? 400 : 700,
                  }}
                >
                  {w.t}
                </span>{' '}
              </span>
            ))}
          </h1>
        </RevealWords>
        <p className={styles.sub}>
          Moch Fathurrozi — Fullstack developer specializing in frontend, based in
          Semarang, Indonesia. React, Next.js, React Native and beyond.
        </p>
        <div className={styles.actions}>
          <Link href="/works">
            <ShinyCTA>Selected work &nbsp;→</ShinyCTA>
          </Link>
        </div>
        <div className={styles.stats}>
          {STATS.map((s) => (
            <div key={s.label} className={styles.stat}>
              <span className={styles.statNum}>{s.num}</span>
              <span className={styles.statLabel}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </header>
  )
}
