import { StyleSheetManager, ThemeProvider } from 'styled-components'
import { BackToTop } from 'components/BackToTop'
import { Container } from 'components/Container'
import { Footer } from 'components/Footer'
import { darkTheme, lightTheme, GlobalStyle } from 'components/GlobalStyle'
import { Header } from 'components/Header'
import { Menu } from 'components/Menu'
import { AboutMe } from 'components/Sections/AboutMe'
import { Education } from 'components/Sections/Education'
import { Experience } from 'components/Sections/Experience'
import { ArticlesAndTalks } from 'components/Sections/ArticlesAndTalks'
import { SwitchTheme } from 'components/SwitchTheme'
import React, { useState } from 'react'

export async function getStaticProps() {
  return {
    props: {},
  }
}

const shouldForwardProp = (prop: string) => ![
  'active',
  'align',
  'first',
  'last',
  'scrolled',
  'small',
].includes(prop)

export default function Home() {
  const [themeIsDark, setThemeIsDark] = useState(false)

  return (
    <React.StrictMode>
      <StyleSheetManager shouldForwardProp={shouldForwardProp}>
        <ThemeProvider theme={themeIsDark ? darkTheme : lightTheme}>
          <GlobalStyle />

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
      </StyleSheetManager>
    </React.StrictMode>
  )
}
