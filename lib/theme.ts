import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react'

const customConfig = defineConfig({
  theme: {
    tokens: {
      colors: {
        // Primary palette - high contrast brutalist
        primary: {
          black: { value: '#0A0A0A' },
          white: { value: '#FAFAFA' },
          accent: { value: '#FF3D00' },
        },
        // Secondary accents
        secondary: {
          accent: { value: '#00FF88' },
        },
        // Gray scale
        gray: {
          50: { value: '#FAFAFA' },
          100: { value: '#F5F5F5' },
          200: { value: '#E5E5E5' },
          300: { value: '#D4D4D4' },
          400: { value: '#A3A3A3' },
          500: { value: '#737373' },
          600: { value: '#525252' },
          700: { value: '#404040' },
          800: { value: '#262626' },
          900: { value: '#171717' },
          950: { value: '#0A0A0A' },
        },
        // Semantic colors
        bg: {
          light: { value: '#FAFAFA' },
          dark: { value: '#0A0A0A' },
        },
        surface: {
          light: { value: '#FFFFFF' },
          dark: { value: '#171717' },
        },
        border: {
          light: { value: '#E5E5E5' },
          dark: { value: '#262626' },
        },
      },
      fonts: {
        heading: { value: '"Space Grotesk", "Inter", system-ui, sans-serif' },
        body: { value: '"Inter", system-ui, sans-serif' },
        mono: { value: '"JetBrains Mono", monospace' },
      },
      fontSizes: {
        display: { value: 'clamp(3rem, 8vw, 6rem)' },
        h1: { value: 'clamp(2.5rem, 6vw, 4.5rem)' },
        h2: { value: 'clamp(2rem, 4vw, 3rem)' },
        h3: { value: 'clamp(1.5rem, 3vw, 2rem)' },
        h4: { value: 'clamp(1.25rem, 2vw, 1.5rem)' },
        body: { value: '1.125rem' },
        small: { value: '0.875rem' },
        xs: { value: '0.75rem' },
      },
      fontWeights: {
        normal: { value: '400' },
        medium: { value: '500' },
        semibold: { value: '600' },
        bold: { value: '700' },
        black: { value: '900' },
      },
      lineHeights: {
        tight: { value: '1.1' },
        normal: { value: '1.6' },
        relaxed: { value: '1.8' },
      },
      radii: {
        none: { value: '0' },
        sm: { value: '2px' },
        md: { value: '4px' },
        lg: { value: '8px' },
      },
      spacing: {
        section: {
          xs: { value: '3rem' },
          sm: { value: '4rem' },
          md: { value: '6rem' },
          lg: { value: '8rem' },
        },
      },
    },
    semanticTokens: {
      colors: {
        bg: {
          value: { base: '{colors.bg.light}', _dark: '{colors.bg.dark}' },
        },
        surface: {
          value: { base: '{colors.surface.light}', _dark: '{colors.surface.dark}' },
        },
        border: {
          value: { base: '{colors.border.light}', _dark: '{colors.border.dark}' },
        },
        text: {
          value: { base: '{colors.gray.900}', _dark: '{colors.gray.50}' },
        },
        textMuted: {
          value: { base: '{colors.gray.600}', _dark: '{colors.gray.400}' },
        },
        accent: {
          value: '{colors.primary.accent}',
        },
        accentHover: {
          value: '{colors.secondary.accent}',
        },
      },
    },
  },
  globalCss: {
    '*': {
      margin: 0,
      padding: 0,
      boxSizing: 'border-box',
    },
    html: {
      scrollBehavior: 'smooth',
    },
    body: {
      bg: 'bg',
      color: 'text',
      fontFamily: 'body',
      fontSize: 'body',
      lineHeight: 'normal',
      minHeight: '100vh',
    },
    '::selection': {
      bg: 'accent',
      color: 'white',
    },
    a: {
      color: 'inherit',
      textDecoration: 'none',
    },
  },
})

export const system = createSystem(defaultConfig, customConfig)
