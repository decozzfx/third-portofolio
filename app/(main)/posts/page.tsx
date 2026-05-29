import type { Metadata } from 'next'
import { SectionEyebrow } from '@/components/common/section-eyebrow'
import { DisplayHeading } from '@/components/common/display-heading'

export const metadata: Metadata = {
  title: 'Posts',
  description: 'Blog posts and articles by Moch Fathurrozi',
}

export default function PostsPage() {
  return (
    <div style={{ paddingTop: '2rem' }}>
      <SectionEyebrow num="01" label="Writing" />
      <DisplayHeading as="h1" text="Notes & *thoughts.*" style={{ fontSize: 'clamp(2.5rem,6vw,4.5rem)' }} />
      <p style={{ color: 'var(--text-muted)', marginTop: '1.5rem' }}>Coming soon.</p>
    </div>
  )
}
