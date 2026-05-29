'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ShinyCTA } from '@/components/motion/shiny-cta'
import { MenuOverlay } from './menu-overlay'

export function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, height: 80, zIndex: 200, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 1.5rem', background: 'rgba(10,10,11,0.6)', backdropFilter: 'blur(10px)', borderBottom: '1px solid var(--border)' }}>
        <Link href="/" style={{ fontFamily: 'var(--font-instrument-serif)', fontSize: '1.4rem' }}>
          Moch Fathurrozi
        </Link>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <a href="mailto:decozzfx@gmail.com"><ShinyCTA>Start a project &nbsp;→</ShinyCTA></a>
          <button
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            style={{ background: 'none', border: 'none', color: 'var(--text)', cursor: 'pointer', fontFamily: 'var(--font-jetbrains-mono)', fontSize: '0.8rem', textTransform: 'uppercase' }}
          >
            {open ? 'Close' : 'Menu'}
          </button>
        </div>
      </nav>
      <MenuOverlay open={open} onClose={() => setOpen(false)} />
    </>
  )
}
