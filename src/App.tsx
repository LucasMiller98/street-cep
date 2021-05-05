import Routes from './routes'
import './styles/global.css'
import { ContextProvider } from './ContextApi/Context'
import 'leaflet/dist/leaflet.css'

function App() {
  return (
    <>
      <ContextProvider>
        <Routes />
      </ContextProvider>
    </>
  );
}

export default App;
