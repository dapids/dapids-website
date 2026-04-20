import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import './globals.css'
import type { Metadata } from 'next'
import Head from 'next/head'
import { GoogleAnalytics } from '@next/third-parties/google'

config.autoAddCss = false

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;1,300;1,400&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <body>{children}</body>
      <GoogleAnalytics gaId="G-45MY60P46E" />
    </html>
  )
}

export const metadata: Metadata = {
  description:
    'Software Engineer especially passionate about clean code, functional programming, and engineering management.',
  title: 'David Sorrentino - Software Engineer',
}
