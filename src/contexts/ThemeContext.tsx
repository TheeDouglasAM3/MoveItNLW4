import { createContext, ReactNode, useContext, useEffect, useState } from 'react'
import { DefaultTheme, ThemeProvider } from 'styled-components'
import light from '../styles/themes/light'
import dark from '../styles/themes/dark'

interface ThemesContextData {
  theme: DefaultTheme;
  
  toggleTheme(): void;
}

interface ThemesProviderProps {
  children: ReactNode
}

export const ThemesContext = createContext({} as ThemesContextData)

export function ThemesProvider({ children }: ThemesProviderProps) {

  const [theme, setTheme] = useState<DefaultTheme>(light);

  useEffect(() => {
    const themeLocal = localStorage.getItem('moveit-theme');

    setTheme(themeLocal === 'light' ? light : dark);
  }, [])

  const toggleTheme = () => {
    if (theme.title === 'light') {
      localStorage.setItem('moveit-theme', dark.title);
      setTheme(dark);
    } else {
      localStorage.setItem('moveit-theme', light.title);
      setTheme(light);
    }
  }

  return (
    <ThemesContext.Provider value={{
      theme,
      toggleTheme,
    }}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </ThemesContext.Provider>
  )

}

export function useTheme(): ThemesContextData {
  const context = useContext(ThemesContext);

  return context;
}