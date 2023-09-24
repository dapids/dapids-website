import { createGlobalStyle } from 'styled-components'

export const lightTheme = {
  body: '#fefefe',
  text: '#222',
}

export const darkTheme = {
  body: '#222',
  text: '#e6e6e6',
}

export type GlobalStyle = {
  theme: typeof lightTheme & typeof darkTheme
}

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html {
    font-size: 10px;
  }

  body {
    background-color: ${({ theme }: GlobalStyle) => theme.body};
    color: ${({ theme }: GlobalStyle) => theme.text};
    font-family: 'Roboto', sans-serif;
    font-feature-settings: "kern", "liga", "pnum";
    font-size: 1rem;
    line-height: 1.5;
    margin: 0;
    -webkit-font-smoothing: antialiased;
  }

  a {
    color: ${({ theme }: GlobalStyle) => theme.text};
  }
` as any
