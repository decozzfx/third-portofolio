import type { Metadata, Viewport } from 'next'
import { Instrument_Serif, JetBrains_Mono, Inter } from 'next/font/google'
import { Provider } from '@/components/ui/provider'
import { Grain } from '@/components/common/grain'
import './globals.css'

const instrumentSerif = Instrument_Serif({
  weight: '400',
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-instrument-serif',
})
const jetbrainsMono = JetBrains_Mono({
  weight: ['400', '500'],
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
})
const switzer = Inter({
  subsets: ['latin'],
  variable: '--font-switzer',
})

export const metadata: Metadata = {
  title: {
    default: 'Moch Fathurrozi - Fullstack Developer',
    template: '%s | Moch Fathurrozi',
  },
  description:
    'Fullstack Developer based in Yogyakarta, Indonesia. Building digital experiences with modern web technologies.',
  keywords: [
    'Moch Fathurrozi',
    'decozzfx',
    'Fullstack Developer',
    'Web Developer',
    'React',
    'Next.js',
    'TypeScript',
    'Yogyakarta',
    'Indonesia',
  ],
  authors: [{ name: 'Moch Fathurrozi' }],
  creator: 'Moch Fathurrozi',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://decozzfx.dev',
    siteName: 'Moch Fathurrozi',
    title: 'Moch Fathurrozi - Fullstack Developer',
    description:
      'Fullstack Developer based in Yogyakarta, Indonesia. Building digital experiences with modern web technologies.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Moch Fathurrozi - Fullstack Developer',
    description:
      'Fullstack Developer based in Yogyakarta, Indonesia. Building digital experiences with modern web technologies.',
    creator: '@decozzfx',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0A0A0B',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${instrumentSerif.variable} ${jetbrainsMono.variable} ${switzer.variable}`}
    >
      <body style={{ fontFamily: 'var(--font-switzer), system-ui, sans-serif' }}>
        <Provider>
          <Grain />
          {children}
        </Provider>
      </body>
    </html>
  )
}
