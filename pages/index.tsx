import { ThemeProvider } from 'styled-components'
import { BackToTop } from 'components/BackToTop'
import { Container } from 'components/Container'
import { Footer } from 'components/Footer'
import { darkTheme, lightTheme, GlobalStyle } from 'components/GlobalStyle'
import { Head } from 'components/Head'
import { Header } from 'components/Header'
import { Menu } from 'components/Menu'
import { AboutMe } from 'components/Sections/AboutMe'
import { Education } from 'components/Sections/Education'
import { Experience } from 'components/Sections/Experience'
import { ArticlesAndTalks } from 'components/Sections/ArticlesAndTalks'
import { SwitchTheme } from 'components/SwitchTheme'
import { useState } from 'react'

export async function getStaticProps() {
  return {
    props: {},
  }
}

export default function Home() {
  const [themeIsDark, setThemeIsDark] = useState(false)

  return (
    <ThemeProvider theme={themeIsDark ? darkTheme : lightTheme}>
      <GlobalStyle />

      <Head />

      <Menu />

      <Container>
        <Header />

        <AboutMe />

        <Experience />

        <Education />

        <ArticlesAndTalks />

        <Footer />
      </Container>

      <BackToTop />

      <SwitchTheme onTap={() => setThemeIsDark(!themeIsDark)}/>
    </ThemeProvider>
  )
}
