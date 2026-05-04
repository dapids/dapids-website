'use client'
import { BackToTop } from 'components/BackToTop'
import { Container } from 'components/Container'
import { Footer } from 'components/Footer'
import { Header } from 'components/Header'
import { AboutMe } from 'components/Sections/AboutMe'
import { Experience } from 'components/Sections/Experience'

export default function Home() {
  return (
    <>
      <Container>
        <header>
          <Header />
        </header>

        <main>
          <AboutMe />

          <Experience />
        </main>

        <footer>
          <Footer />
        </footer>
      </Container>

      <BackToTop />
    </>
  )
}
