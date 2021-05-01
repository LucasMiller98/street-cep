import { useState, useEffect } from 'react'
import { FiSearch } from 'react-icons/fi'
import '../styles/pages/zipcode.css'
import api from '../services/SEARCH_ZIP_CODE_API'
import DehazeIcon from '@material-ui/icons/Dehaze';

function ZipCodeSearch() {
  const [search, setSearch] = useState('')
  
  useEffect(() => {
    api.get(`${search}/json/`)
      .then((response) => {
        console.log(response.data)
      })
  })
  
  return(
    <>

      <div className='codeContainer'>
        <header className='header-container'>
          <h1 id='zip-code'>Zip Code</h1>
          <DehazeIcon style={{ color: '#f1f1f1' }} className='dehaze-icon' />
          <div className='container-search'>
            <input 
              type="search" 
              className='input-search' 
              value={search}
              placeholder='Search here ...' 
              onChange={event => setSearch(event.target.value)}
            />
            <FiSearch size={30} className='fiSearch' onClick={() => {}} />
          </div>
        </header>

        
      </div>
    </>
  )
}

export default ZipCodeSearch