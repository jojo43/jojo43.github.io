import React from 'react'
import { ThemeProvider as ScThemeProvider } from 'styled-components'
import {
  Theme as MuiTheme,
  ThemeOptions,
  ThemeProvider as MuiThemeProvider,
  createMuiTheme,
} from '@material-ui/core/styles'

import { useLocalStorage } from './useLocalStorage'

type Theme = {
  theme: MuiTheme
  toggleDark: () => void
}

export const ThemeContext = React.createContext<Theme>({
  theme: createMuiTheme({}),
  toggleDark: () => {
    throw new Error('Forgot to wrap component in `ThemeProvider`')
  },
})

type Props = {
  children: React.ReactNode
}

export function ThemeProvider({ children }: Props) {
  const [dark, setDark] = useLocalStorage('dark', false)
  const toggleDark = () => setDark(!dark)

  const [themeOptions, setThemeOptions] = React.useState<ThemeOptions>({
    typography: {
      button: {
        textTransform: 'none',
      },
    },
  })
  React.useEffect(() => {
    setThemeOptions({
      ...themeOptions,
      palette: {
        ...themeOptions.palette,
        type: dark ? 'dark' : 'light',
      },
    })
  }, [dark])

  const theme = createMuiTheme(themeOptions)

  return (
    <MuiThemeProvider theme={theme}>
      <ScThemeProvider theme={theme}>
        <ThemeContext.Provider value={{ theme, toggleDark }}>
          {children}
        </ThemeContext.Provider>
      </ScThemeProvider>
    </MuiThemeProvider>
  )
}
