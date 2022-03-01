import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import { toast, ToastContainer } from 'react-toastify'
import { useContextApi } from '../ContextApi/hooks/useContextApi'
import DehazeIcon from '@material-ui/icons/Dehaze';
import api from '../services/SEARCH_ZIP_CODE_API'
import 'react-toastify/dist/ReactToastify.css'
import { Container } from '@material-ui/core'
import Sidebar from '../components/Sidebar';
import { useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import InputMask from 'react-input-mask'
import mapPin from '../images/pin.svg'
import '../styles/pages/zipcode.css'
import Leaflet from 'leaflet'
import GitHubApi from './types/types'
import { StyledHeaderContainer } from './styles/styles' 
import { useFormik } from 'formik'
 
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

  const formik = useFormik({
    initialValues: {
      searchField: '',
    },
    onSubmit: async values => {
      const { data } = await api.get<GitHubApi>(`${values.searchField}/json`)

      try{
        const inputSearch = document.getElementsByTagName('input')[0].value
        const removeDash = inputSearch.replace(/_|-/g, '')

        if(removeDash.length <= 8 && !data.cep) {
          clearData()
          throw new Error(`🔥The postal code wasn't found!`)
        }else{
          toast.success('🚀The postal code was found with successful!', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined
          })

          setComplemento(data.complemento)
          setLocalidade(data.localidade)
          setLogradouro(data.logradouro)
          setBairro(data.bairro)
          setIbge(data.ibge)
          setCep(data.cep)
          setDdd(data.ddd)
          setUf(data.uf)
        }

      }catch(error: any) {
        toast.error(`🤦‍♂️${error.message}`, {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
      }
    }
  })

  return(
    <>
      <ToastContainer 
        position='top-right'
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeButton
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    
      <div className='codeContainer'>
{/* className='header-container' */}
        <StyledHeaderContainer maxWidth='xl' className='header-container'>
          <h1 id='zip-code'>Zip Code</h1>

          <DehazeIcon style={{ color: '#f1f1f1' }} className='dehaze-icon' onClick={() => setCurrentStateSideBarTrue()} />

          <form onSubmit={formik.handleSubmit} className='container-search'>
            <InputMask 
              id='test' placeholder='Search here ...' 
              value={formik.values.searchField} 
              onChange={formik.handleChange} 
              className='input-search' 
              name='searchField'
              mask='99999-999' 
              type='search' 
            />
            <button type='submit'>
              <FiSearch size={30} style={{ marginRight: '1rem' }} />
            </button>
          </form>

        </StyledHeaderContainer>
    
        <Container maxWidth='xl' id='content-main'>

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
                  <section>
                    <p>
                      Public place: { logradouro }
                    </p>
                    <p>
                      Neighborhood: { bairro }
                    </p>
                    <p>
                      Location: { localidade }
                    </p>
                    <p>
                      Federal unit: ({ uf })
                    </p>
                    { complemento && (
                      <p>
                        Complement: { complemento }
                      </p>
                    ) }
                    <p>
                      DDD: ({ ddd })
                    </p>
                    <p>
                      IBGE: { ibge }
                    </p>
                    <p>
                      Your current position: { position }
                    </p>
                  </section>
                ) : (
                  <p>Postal code do not found or do not type. Pleace, type your postal code!</p>
                )}
              </Popup>
            </Marker>
          
          </MapContainer>

        </Container>
          
      </div>
      
      { isDisplayingSideBar && (
        <Sidebar />
      ) }
      
    </>
  )
}

export default ZipCodeSearch