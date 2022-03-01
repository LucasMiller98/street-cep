import { ThemeProvider as ThemeProviderMaterial } from '@material-ui/core'
import GlobalStyles from './styledComponents/styles/global'
import usePersistedState from './utils/usePersistedState'
import { ContextProvider } from './ContextApi/Context'
import { ThemeProvider } from 'styled-components'
import 'leaflet/dist/leaflet.css'
import AllRoutes from './routes'
import './styles/global.css'
import light from './styledComponents/themes/light'
import dark from './styledComponents/themes/dark'

function App() {

  const [theme, setTheme] = usePersistedState('defaultTheme', light)

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light)
  }

  return (
    <>
      {/* <ThemeProviderMaterial theme={light}> */}
        <ThemeProvider theme={theme}>
          <ContextProvider>
            <GlobalStyles />
            <AllRoutes toggleThemeProps={toggleTheme} />
          </ContextProvider>
        </ThemeProvider>
      {/* </ThemeProviderMaterial> */}
    </>
  );
}

export default App;
