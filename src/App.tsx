import GlobalStyles from './styledComponents/styles/global'
import { ContextProvider } from './ContextApi/Context'
import { ThemeProvider } from 'styled-components'
import 'leaflet/dist/leaflet.css'
import Routes from './routes'
import './styles/global.css'
import light from './styledComponents/themes/light'
import dark from './styledComponents/themes/dark'
import { useState } from 'react'
import usePersistedState from './utils/usePersistedState'

function App() {

  const [theme, setTheme] = usePersistedState('defaultTheme', light)

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light)
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <ContextProvider>
          <GlobalStyles />
          <Routes toggleThemeProps={toggleTheme} />
        </ContextProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
