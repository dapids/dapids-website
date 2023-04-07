import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html {
    font-size: 10px;
  }

  body {
    background-color: #222;
    color: #e6e6e6;
    font-family: 'Roboto', sans-serif;
    font-feature-settings: "kern", "liga", "pnum";
    font-size: 1rem;
    line-height: 1.5;
    margin: 0;
    -webkit-font-smoothing: antialiased;
  }
` as any
