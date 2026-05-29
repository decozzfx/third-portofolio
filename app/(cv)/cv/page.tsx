import { Box } from '@chakra-ui/react'
import type { Metadata } from 'next'

import { Section } from '@/components/common/section'
import { SectionEyebrow } from '@/components/common/section-eyebrow'

export const metadata: Metadata = {
  title: 'CV',
  description: 'Curriculum Vitae of Moch Fathurrozi - Fullstack Developer',
}

export default function CvPage() {
  return (
    <>
      <Section delay={0}>
        <SectionEyebrow num="01" label="Curriculum Vitae" />
        <h1
          style={{
            fontFamily: 'var(--font-instrument-serif), Georgia, serif',
            fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
            fontWeight: 400,
            lineHeight: 1.1,
            color: 'var(--text)',
            marginTop: '1rem',
            marginBottom: '0.5rem',
          }}
        >
          Moch Fathurrozi
        </h1>
        <p
          style={{
            fontFamily: 'var(--font-jetbrains-mono), monospace',
            fontSize: '0.75rem',
            color: 'var(--text-muted)',
            textTransform: 'uppercase',
            letterSpacing: '0.12em',
            marginBottom: '2.5rem',
          }}
        >
          Fullstack Developer
        </p>
      </Section>

      <Section delay={0.1}>
        <Box
          border="1px solid"
          borderColor="border"
          bg="surface"
          overflow="hidden"
        >
          <iframe
            src="/CV - Moch Fathurrozi.pdf"
            width="100%"
            height="900px"
            style={{ border: 'none', display: 'block' }}
            title="CV — Moch Fathurrozi"
          />
        </Box>
        <p
          style={{
            marginTop: '1rem',
            fontFamily: 'var(--font-jetbrains-mono), monospace',
            fontSize: '0.72rem',
            color: 'var(--text-muted)',
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
          }}
        >
          <a
            href="/CV - Moch Fathurrozi.pdf"
            download
            style={{ color: 'var(--accent)', textDecoration: 'none' }}
          >
            Download PDF
          </a>
          {' '}— If the embed does not render, use the link above.
        </p>
      </Section>
    </>
  )
}
