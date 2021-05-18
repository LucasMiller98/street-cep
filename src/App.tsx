import { ContextProvider } from './ContextApi/Context'
import Routes from './routes'
import 'leaflet/dist/leaflet.css'
import './styles/global.css'

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
