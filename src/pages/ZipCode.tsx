import { useState } from 'react'
import '../styles/pages/zipcode.css'

function ZipCode() {
  const [search, setSearch] = useState('')
  
  return(
    <>
      <div className='codeContainer'>
        <div className='container-search'>
          <h1>Search your zip code</h1>
          <input 
            type="search" 
            className='input-search' 
            value={search}
            placeholder='Search here ...' 
            onChange={event => setSearch(event.target.value)}
          />
        </div>
      </div>
    </>
  )
}

export default ZipCode