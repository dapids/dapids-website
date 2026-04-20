'use client'
import { BackToTop } from 'components/BackToTop'
import { Container } from 'components/Container'
import { Footer } from 'components/Footer'
import { Header } from 'components/Header'
import { AboutMe } from 'components/Sections/AboutMe'
import { Experience } from 'components/Sections/Experience'
import React from 'react'

export default function Home() {
  return (
    <React.StrictMode>
      <Container>
        <Header />

        <AboutMe />

        <Experience />

        <Footer />
      </Container>

      <BackToTop />
    </React.StrictMode>
  )
}
