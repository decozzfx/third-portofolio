import type { Metadata, Viewport } from 'next'
import { Provider } from '@/components/ui/provider'
import './globals.css'

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
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FAFAFA' },
    { media: '(prefers-color-scheme: dark)', color: '#0A0A0A' },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  )
}
