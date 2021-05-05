import { useState, useEffect, FormEvent, ReactEventHandler } from 'react'
import Button from '@material-ui/core/Button'
import { FiSearch, FiSettings } from 'react-icons/fi'
import '../styles/pages/zipcode.css'
import api from '../services/SEARCH_ZIP_CODE_API'
import DehazeIcon from '@material-ui/icons/Dehaze';
import Sidebar from '../components/Sidebar';
import { useContextApi } from '../ContextApi/Context'
import InputMask from 'react-input-mask'

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
  
  const [search, setSearch] = useState('')
  const [cep, setCep] = useState('')
  const [logradouro, setLogradouro] = useState('')
  const [complemento, setComplemento] = useState('')
  const [bairro, setBairro] = useState('')
  const [localidade, setLocalidade] = useState('')
  const [ibge, setIbge] = useState('')
  const [uf, setUf] = useState('')
  const [ddd, setDdd] = useState('')
  
  useEffect(() => {
    api.get(`${search}/json`)
      .then(response => {
        setDataZipCode(response.data)
      })
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

  // if(search && !bairro || !ibge || !uf || !localidade || !logradouro) {
  //   return(
  //     <div className='div-loading-form-data'>
  //       <span>Loading...</span>
  //     </div>
  //   )
  // }

  return(
    <>

      <div className='codeContainer'>

        <header className='header-container'>
          <h1 id='zip-code'>Zip Code</h1>

          <DehazeIcon style={{ color: '#f1f1f1' }} className='dehaze-icon' onClick={() => setCurrentStateSideBarTrue()} />

          <form className='container-search'>
            <InputMask type='search' mask='99999-999' value={search} onChange={event => setSearch(event.target.value)} className='input-search' placeholder='Search here ...' />

            <FiSearch size={30} className='fiSearch' />
          </form>

        </header>
    
        <div id='content-main'>
          { !cep && !search && search === cep && (
            <h1 className='h1-zipCode-dontFound'>Type the zip code of your street!</h1>
          )}
          { cep && logradouro && bairro && ddd && ibge && localidade && (
            <section id='zipCode-content-main'>
              <h1 id='h1-zipCode-found'>The zip code {cep} was found with successful!</h1>
            </section>
          )}
          { search !== cep && (
            <h1 className='h1-zipCode-dontFound'>Postal code do not found or do not type. Pleace, type your zip code!</h1>
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
          </form>
        </div>
      </div>
      
      { isDisplayingSideBar && (
        <Sidebar />
      ) }
      
    </>
  )
}

export default ZipCodeSearch