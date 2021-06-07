import { useState, FormEvent } from 'react'
import Leaflet from 'leaflet'
import mapPin from '../images/pin.svg'
import { FiSearch } from 'react-icons/fi'
import '../styles/pages/zipcode.css'
import api from '../services/SEARCH_ZIP_CODE_API'
import DehazeIcon from '@material-ui/icons/Dehaze';
import Sidebar from '../components/Sidebar';
import { useContextApi } from '../ContextApi/Context'
import InputMask from 'react-input-mask'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

type SetDataZip = {
  cep: string, 
  logradouro: string, 
  complemento: string, 
  bairro: string, 
  localidade: string
  uf: string
  ibge: string
  ddd: string
}

function ZipCodeSearch() {
  document.title = 'Search a potal code'
  
  const { isDisplayingSideBar, setCurrentStateSideBarTrue } = useContextApi()
  const latitude = -8.1309176
  const longitude = -35.0344038
  
  const [search, setSearch] = useState('')
  const [cep, setCep] = useState('')
  const [logradouro, setLogradouro] = useState('')
  const [complemento, setComplemento] = useState('')
  const [bairro, setBairro] = useState('')
  const [localidade, setLocalidade] = useState('')
  const [ibge, setIbge] = useState('')
  const [uf, setUf] = useState('')
  const [ddd, setDdd] = useState('')
  const [position, setPosition] = useState<Number[]>([])
  
  const mapPinIcon = Leaflet.icon({
    iconUrl: mapPin,
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2],
  })

  const getApi = async () => {
    const response = await api.get(`${search}/json`)
    return await response.data
  }

  function setDataZipCode({ cep, logradouro, complemento, bairro, localidade, uf, ddd, ibge }: SetDataZip) {
    setIbge(ibge)
    setDdd(ddd)
    setUf(uf)
    setCep(cep)
    setLogradouro(logradouro)
    setComplemento(complemento)
    setBairro(bairro)
    setLocalidade(localidade)
  }

  function clearData() {
    setBairro('')
    setCep('')
    setComplemento('')
    setSearch('')
    setIbge('')
    setDdd('')
    setLogradouro('')
    setLocalidade('')
    setUf('')
  }

  if('geolocation' in navigator) {
    navigator.geolocation.watchPosition((position) => {
      setPosition([position.coords.latitude, position.coords.longitude])
    }, (error) => {
      console.error(error)
    })
  }

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    const inputSearch = document.getElementsByTagName('input')[0].value
    const removeDash = inputSearch.replace(/_|-/g, '')

    if(removeDash.length < 8) {
      alert('Type your postal code!')
      clearData()
    }else{
      alert('Postal code found!')
      getApi().then(response => {
        setDataZipCode(response)
      })
    }
  }

  return(
    <>
      <div className='codeContainer'>

        <header className='header-container'>
          <h1 id='zip-code'>Zip Code</h1>

          <DehazeIcon style={{ color: '#f1f1f1' }} className='dehaze-icon' onClick={() => setCurrentStateSideBarTrue()} />

          <form onSubmit={handleSubmit} className='container-search'>
            <InputMask type='search' mask='99999-999' value={search} onChange={event => setSearch(event.target.value)} className='input-search' id='test' placeholder='Search here ...' />
            <button type='submit'>
              <FiSearch size={30} style={{ marginRight: '1rem' }} />
            </button>
          </form>

        </header>
    
        <div id='content-main'>

          <MapContainer
            center={[latitude, longitude]}
            zoom={15}
            style={{ width: '100vw', height: '100vh' }}
          >
              <TileLayer url='https://a.tile.openstreetmap.org/{z}/{x}/{y}.png' />
            <Marker
              icon={mapPinIcon}
              position={[latitude, longitude]}
            >
              <Popup
                closeButton={false}
                minWidth={240}
                maxWidth={240}
                className='map-popup'
                // onOpen={handleSubmit}
              >
                { cep ? (
                  <section>
                    <p>
                      Logradouro: { logradouro }
                    </p>
                    <p>
                      Bairro: { bairro }
                    </p>
                    <p>
                      Localidade: { localidade }
                    </p>
                    <p>
                      UF: ({ uf })
                    </p>
                    { complemento && (
                      <p>
                        Complemento: { complemento }
                      </p>
                    ) }
                    <p>
                      DDD: ({ ddd })
                    </p>
                    <p>
                      IBGE: { ibge }
                    </p>
                    <p>
                      Posição: { position }
                    </p>
                  </section>
                ) : (
                  <p>Postal code do not found or do not type. Pleace, type your postal code!</p>
                )}
              </Popup>
            </Marker>
          
          </MapContainer>

        </div>
          
      </div>
      
      { isDisplayingSideBar && (
        <Sidebar />
      ) }
      
    </>
  )
}

export default ZipCodeSearch