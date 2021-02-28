import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --white:#FFF;
    --background: ${props => props.theme.colors.background};
    --gray-line: #DCDDE0;
    --text: ${props => props.theme.colors.text};
    --text-highlight: #B3B9FF;
    --title: ${props => props.theme.colors.title};
    --backBox: ${props => props.theme.colors.backBox};
    --back: ${props => props.theme.colors.back};
    --background-overlay: ${props => props.theme.colors.backgroundOverlay};
    --red: #E83F5B;
    --green: #4CD62B;
    --blue: #5965E0;
    --blue-dark: #4953B8;
    --blue-twitter: #2AA9E0;
  }

  @media(max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media(max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }

  body {
    background: var(--background);
    color: var(--text);
  }

  body, input, textarea, button {
    font: 400 1rem "Inter", sans-serif;
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`