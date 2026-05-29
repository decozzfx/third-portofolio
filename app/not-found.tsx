import Link from 'next/link'
import { DisplayHeading } from '@/components/common/display-heading'
import { ShinyCTA } from '@/components/motion/shiny-cta'

export default function NotFound() {
  return (
    <div style={{ minHeight: '70vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '2rem' }}>
      <DisplayHeading as="h1" text="Page *not found.*" style={{ fontSize: 'clamp(2.5rem,8vw,6rem)' }} />
      <p style={{ color: 'var(--text-muted)', margin: '1rem 0 2rem' }}>The page you&apos;re looking for doesn&apos;t exist.</p>
      <Link href="/"><ShinyCTA>Back home &nbsp;→</ShinyCTA></Link>
    </div>
  )
}
