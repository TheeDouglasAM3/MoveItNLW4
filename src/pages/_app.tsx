import GlobalStyle from '../styles/global'
import { ThemesProvider } from '../contexts/ThemeContext'

function MyApp({ Component, pageProps }) {

  return (
    <ThemesProvider>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemesProvider>
  )
}

export default MyApp
