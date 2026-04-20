import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import './globals.css'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import Script from 'next/script'
import { GoogleAnalytics } from '@next/third-parties/google'

config.autoAddCss = false

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  style: ['normal', 'italic'],
  display: 'swap',
})

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'David Sorrentino',
  url: 'https://davidsorrentino.com',
  jobTitle: 'Director of Engineering',
  sameAs: [
    'https://github.com/dapids',
    'https://linkedin.com/in/dapids',
    'https://medium.com/@dapids17',
    'https://twitter.com/dapidsorrentino',
    'https://instagram.com/dapids17',
    'https://threads.net/@dapids17',
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        {children}
        <Script id="person-jsonld" type="application/ld+json">
          {JSON.stringify(personJsonLd)}
        </Script>
        <GoogleAnalytics gaId="G-45MY60P46E" />
      </body>
    </html>
  )
}

export const metadata: Metadata = {
  metadataBase: new URL('https://davidsorrentino.com'),
  title: {
    default: 'David Sorrentino - Software Engineer',
    template: '%s | David Sorrentino',
  },
  description:
    'Software Engineer especially passionate about clean code, functional programming, and engineering management.',
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://davidsorrentino.com',
    siteName: 'David Sorrentino',
    title: 'David Sorrentino - Software Engineer',
    description:
      'Software Engineer especially passionate about clean code, functional programming, and engineering management.',
    images: [
      {
        url: '/me.png',
        width: 1200,
        height: 630,
        alt: 'David Sorrentino',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@dapidsorrentino',
    title: 'David Sorrentino - Software Engineer',
    description:
      'Software Engineer especially passionate about clean code, functional programming, and engineering management.',
    images: ['/me.png'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png' }],
  },
}
