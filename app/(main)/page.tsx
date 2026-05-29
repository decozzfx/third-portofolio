'use client'

import { Box } from '@chakra-ui/react'
import { Hero } from '@/components/sections/hero'
import { SectionEyebrow } from '@/components/common/section-eyebrow'
import { DisplayHeading } from '@/components/common/display-heading'
import { WorksList } from '@/components/sections/works-list'
import { HowIWork } from '@/components/sections/how-i-work'
import { ContactCTA } from '@/components/sections/contact-cta'
import { useScrollReveal } from '@/lib/motion/use-scroll-reveal'
import { getFeaturedWorks } from '@/lib/works'

const PARTNERSHIPS = [
  { role: 'Frontend Engineer · PT Veritask', detail: 'Legal AI Platform — Next.js 15, React 19, TypeScript' },
  { role: 'Frontend Engineer · PT MFI', detail: 'React Native, Next.js, Tailwind CSS' },
  { role: 'Frontend Engineer · PT Xprogroup', detail: 'Next.js, Tailwind CSS, Rizzui' },
  { role: 'Frontend Engineer · Ismaya Group', detail: 'React Native, Next.js, Material UI' },
  { role: 'Frontend Engineer · PT Javan Cipta Solusi', detail: 'Next.js, Tailwind CSS, Material UI' },
  { role: 'Frontend Engineer · PT Infosys Solusi Terpadu', detail: 'React.js, Tailwind CSS, Material UI' },
]

const SKILLS = [
  'React.js','Next.js','Astro','Remix','Solid','Svelte','React Native','Flutter',
  'Express.js','NestJs','AdonisJs','Hono','TypeScript','JavaScript','Tailwind CSS',
  'PostgreSQL','MySQL','MongoDB','Git','AI/LLM Integration',
]

export default function HomePage() {
  const aboutRef = useScrollReveal<HTMLDivElement>()
  const expRef = useScrollReveal<HTMLDivElement>({ selector: '[data-row]' })
  const skillRef = useScrollReveal<HTMLDivElement>({ selector: '[data-chip]', stagger: 0.03 })
  const featured = getFeaturedWorks().slice(0, 4)

  return (
    <>
      <Hero />

      <Box as="section" py="6rem" ref={aboutRef}>
        <SectionEyebrow num="02" label="About" />
        <DisplayHeading as="h2" text="A developer who *cares* about the last pixel." style={{ fontSize: 'clamp(2rem,4vw,3.25rem)', marginBottom: '1.5rem' }} />
        <p style={{ color: 'var(--text-muted)', maxWidth: '60ch', fontSize: '1.0625rem', lineHeight: 1.7 }}>
          A Fullstack Developer specializing in Frontend with React.js, Next.js, Astro,
          Remix, Solid and Svelte. Mobile with React Native and Flutter; backend with
          Express.js, NestJs, AdonisJs and Hono. 4+ years building responsive,
          user-friendly interfaces, REST APIs and database-backed apps, with hands-on
          AI/LLM integration experience.
        </p>
      </Box>

      <Box as="section" py="6rem">
        <SectionEyebrow num="03" label="Partnerships" />
        <div ref={expRef}>
          {PARTNERSHIPS.map((p) => (
            <div key={p.role} data-row style={{ padding: '1.1rem 0', borderTop: '1px solid var(--border)' }}>
              <p style={{ fontWeight: 600 }}>{p.role}</p>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{p.detail}</p>
            </div>
          ))}
        </div>
      </Box>

      <Box as="section" py="6rem">
        <SectionEyebrow num="04" label="Skills" />
        <div ref={skillRef} style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
          {SKILLS.map((s) => (
            <span
              key={s}
              data-chip
              style={{
                border: '1px solid var(--border)', padding: '0.4rem 0.8rem',
                fontFamily: 'var(--font-jetbrains-mono)', fontSize: '0.72rem',
                textTransform: 'uppercase', letterSpacing: '0.05em',
              }}
            >
              {s}
            </span>
          ))}
        </div>
      </Box>

      <Box as="section" py="6rem">
        <SectionEyebrow num="05" label="Selected Work" />
        <WorksList works={featured} />
      </Box>

      <HowIWork />

      <ContactCTA />
    </>
  )
}
