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
  '@id': 'https://davidsorrentino.com/#person',
  name: 'David Sorrentino',
  url: 'https://davidsorrentino.com',
  jobTitle: 'Director of Engineering',
  image: 'https://davidsorrentino.com/me.png',
  alumniOf: [
    {
      '@type': 'CollegeOrUniversity',
      name: 'University of Camerino',
    },
    {
      '@type': 'CollegeOrUniversity',
      name: 'University of Urbino',
    },
    {
      '@type': 'CollegeOrUniversity',
      name: 'Reykjavik University',
    },
  ],
  worksFor: {
    '@type': 'Organization',
    name: 'ProntoPro',
    url: 'https://www.prontopro.it',
  },
  knowsAbout: [
    'Software Engineering',
    'Engineering Management',
    'TypeScript',
    'React',
    'Clean Code',
    'System Design',
  ],
  sameAs: [
    'https://github.com/dapids',
    'https://linkedin.com/in/dapids',
    'https://medium.com/@dapids17',
    'https://twitter.com/dapidsorrentino',
    'https://instagram.com/dapids17',
    'https://threads.net/@dapids17',
  ],
}

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://davidsorrentino.com/#website',
  url: 'https://davidsorrentino.com',
  name: 'David Sorrentino',
  description:
    'Personal website of David Sorrentino, Director of Engineering and Software Engineer focused on clean code, architecture, and engineering leadership.',
  inLanguage: 'en-US',
  publisher: {
    '@id': 'https://davidsorrentino.com/#person',
  },
}

const profilePageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  '@id': 'https://davidsorrentino.com/#profile-page',
  url: 'https://davidsorrentino.com',
  name: 'David Sorrentino - Software Engineer',
  description:
    'Career timeline, background, and social profiles of David Sorrentino, Director of Engineering.',
  isPartOf: {
    '@id': 'https://davidsorrentino.com/#website',
  },
  mainEntity: {
    '@id': 'https://davidsorrentino.com/#person',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        {children}
        <Script id="person-jsonld" type="application/ld+json">
          {JSON.stringify(personJsonLd)}
        </Script>
        <Script id="website-jsonld" type="application/ld+json">
          {JSON.stringify(websiteJsonLd)}
        </Script>
        <Script id="profile-page-jsonld" type="application/ld+json">
          {JSON.stringify(profilePageJsonLd)}
        </Script>
        <GoogleAnalytics gaId="G-45MY60P46E" />
      </body>
    </html>
  )
}

export const metadata: Metadata = {
  metadataBase: new URL('https://davidsorrentino.com'),
  applicationName: 'David Sorrentino',
  title: {
    default: 'David Sorrentino - Software Engineer',
    template: '%s | David Sorrentino',
  },
  description:
    'Software Engineer especially passionate about clean code, functional programming, and engineering management.',
  keywords: [
    'David Sorrentino',
    'Software Engineer',
    'Director of Engineering',
    'Engineering Manager',
    'TypeScript',
    'React',
    'Clean Code',
    'Software Architecture',
  ],
  category: 'technology',
  authors: [{ name: 'David Sorrentino', url: 'https://davidsorrentino.com' }],
  creator: 'David Sorrentino',
  publisher: 'David Sorrentino',
  alternates: {
    canonical: '/',
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  referrer: 'origin-when-cross-origin',
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
  other: {
    'theme-color': '#fefefe',
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
