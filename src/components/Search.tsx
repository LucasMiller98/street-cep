import { useEffect, useState } from 'react';

type DataSearchCode = {
  cep: string
}

function InputSearch() {

  const [search, setSearch] = useState('')

  useEffect(() => {
    
    fetch(`http://viacep.com.br/ws/${search}/json/`)
      .then(res => res.json())
      .then(data => {
        setData(data)
      })

  }, [])

  const setData = ({ cep }: DataSearchCode) => {
    setSearch(cep)
  }

  return(
    <>
      <div className='div-search-sip-code'>
        <input 
          type="search" 
          id="input-search" 
          value={search}
          placeholder='Search your zip code' 
          onChange={event => setSearch(event.target.value)}
        />
      </div>
    </>
  )
}

export default InputSearch