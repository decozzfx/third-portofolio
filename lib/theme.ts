import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react'

const customConfig = defineConfig({
  theme: {
    tokens: {
      colors: {
        bg: { value: '#0A0A0B' },
        surface: { value: '#141416' },
        surfaceAlt: { value: '#1B1B1E' },
        border: { value: 'rgba(255,255,255,0.08)' },
        text: { value: '#FAFAFA' },
        textMuted: { value: '#8A8A8E' },
        accent: { value: '#FF3D00' },
        accentSoft: { value: 'rgba(255,61,0,0.12)' },
      },
      fonts: {
        heading: { value: 'var(--font-instrument-serif), Georgia, serif' },
        body: { value: 'var(--font-switzer), system-ui, sans-serif' },
        mono: { value: 'var(--font-jetbrains-mono), monospace' },
      },
      fontSizes: {
        display: { value: 'clamp(3rem, 9vw, 7rem)' },
        h1: { value: 'clamp(2.5rem, 6vw, 4.5rem)' },
        h2: { value: 'clamp(2rem, 4vw, 3.25rem)' },
        h3: { value: 'clamp(1.5rem, 3vw, 2rem)' },
        body: { value: '1.0625rem' },
        small: { value: '0.875rem' },
        xs: { value: '0.75rem' },
      },
      radii: {
        none: { value: '0' },
        sm: { value: '4px' },
        md: { value: '10px' },
        lg: { value: '18px' },
      },
    },
    semanticTokens: {
      colors: {
        bg: { value: '{colors.bg}' },
        surface: { value: '{colors.surface}' },
        surfaceAlt: { value: '{colors.surfaceAlt}' },
        border: { value: '{colors.border}' },
        text: { value: '{colors.text}' },
        textMuted: { value: '{colors.textMuted}' },
        accent: { value: '{colors.accent}' },
        accentSoft: { value: '{colors.accentSoft}' },
      },
    },
  },
  globalCss: {
    'html, body': { bg: 'bg', color: 'text' },
  },
})

export const system = createSystem(defaultConfig, customConfig)
