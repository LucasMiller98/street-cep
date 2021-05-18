import { useState, useEffect, FormEvent } from 'react'
import Leaflet from 'leaflet'
import Button from '@material-ui/core/Button'
import mapPin from '../images/pin.svg'
import { FiSearch } from 'react-icons/fi'
import '../styles/pages/zipcode.css'
import api from '../services/SEARCH_ZIP_CODE_API'
import DehazeIcon from '@material-ui/icons/Dehaze';
import Sidebar from '../components/Sidebar';
import { useContextApi } from '../ContextApi/Context'
import InputMask from 'react-input-mask'
import * as ReactBootStrap from 'react-bootstrap'
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
  document.title = 'ZipCode'
  
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
  const [loading, setLoading] = useState(false)
  const [position, setPosition] = useState<Number[]>([])
  
  const mapPinIcon = Leaflet.icon({
    iconUrl: mapPin,
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2],
  })

  useEffect(() => {
    api.get(`${search}/json`)
      .then(response => {
        setDataZipCode(response.data)
      })
      setLoading(true)
  }, [search])

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

  function clearDataForm() {
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

  useEffect(() => {
    if('geolocation' in navigator) {
      navigator.geolocation.watchPosition((position) => {
        setPosition([position.coords.latitude, position.coords.longitude])
      }, (error) => {
        console.log(error)
      })
    }
  }, [navigator.geolocation.watchPosition])

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
  }

  return(
    <>

      <div className='codeContainer'>

        <header className='header-container'>
          <h1 id='zip-code'>Zip Code</h1>

          <DehazeIcon style={{ color: '#f1f1f1' }} className='dehaze-icon' onClick={() => setCurrentStateSideBarTrue()} />

          <form onSubmit={handleSubmit} className='container-search'>
            <InputMask type='search' mask='99999-999' value={search} onChange={event => setSearch(event.target.value)} className='input-search' placeholder='Search here ...' />

            <FiSearch size={30} />
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
              >
                { cep ? (
                  <div>
                    <p>
                      Logradouro: { logradouro }
                    </p>
                    <p>
                      Bairro: { bairro }
                    </p>
                    <p>
                      Localidade: { localidade }
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
                      Posição: { position }
                    </p>
                  </div>
                ) : (
                  <span>Postal code do not found or do not type. Pleace, type your postal code!</span>
                )}
              </Popup>
            </Marker>
          
          </MapContainer>

          {/* { cep ? (
            <h1 id='h1-zipCode-found'>The postal code {cep} was found with successful!</h1>
          ): (
            <h1 className='h1-zipCode-dontFound'>Type the postal code of your street!</h1>
          )}

          { loading ? (
            ''
          ) : <ReactBootStrap.Spinner animation='border' /> }

          { search && !cep && (
            <h1 className='h1-zipCode-dontFound'>Postal code do not found or do not type. Pleace, type your postal code!</h1>
          ) }
          <form id='form-zipCode'>
            <label className='label-display-data-from-api' htmlFor="logradouro">Logradouro</label>
            <input className='input-display-data-from-api' disabled type="text" value={logradouro} onChange={event => setLogradouro(event.target.value)} />

            <label className='label-display-data-from-api' htmlFor="localicade">Localidade</label>
            <input className='input-display-data-from-api' disabled type="text" value={localidade} onChange={event => setLocalidade(event.target.value)} />

            <label className='label-display-data-from-api' htmlFor="bairro">Bairro</label>
            <input className='input-display-data-from-api' disabled type="text" value={bairro} onChange={event => setBairro(event.target.value)} />

            <label className='label-display-data-from-api' htmlFor="complemento">Complemento</label>
            <input className='input-display-data-from-api' disabled type="text" value={complemento} onChange={event => setComplemento(event.target.value)} />
            
            <label className='label-display-data-from-api' htmlFor="complemento">DDD</label>
            <InputMask mask='(99)' className='input-display-data-from-api' disabled type="text" value={ddd} onChange={event => setDdd(event.target.value)} />
            
            <label className='label-display-data-from-api' htmlFor="complemento">UF</label>
            <input className='input-display-data-from-api' disabled type="text" value={uf} onChange={event => setUf(event.target.value)} />

            <label className='label-display-data-from-api' htmlFor="complemento">IBGE</label>
            <input className='input-display-data-from-api' disabled type="text" value={ibge} onChange={event => setIbge(event.target.value)} />

            <Button id='button-ui-material-styles'>
              <button type='reset' onClick={clearDataForm} id='button-submit'>
                <span>Reset</span>
              </button>
            </Button>
          </form> */}
        </div>
          
      </div>
      
      { isDisplayingSideBar && (
        <Sidebar />
      ) }
      
    </>
  )
}

export default ZipCodeSearch