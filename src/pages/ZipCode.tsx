import '../styles/pages/zipcode.css'

function ZipCode() {
  return(
    <>
      <div className='codeContainer'>
        <h1>Search your zip code</h1>
        <input 
          type="search" 
          className='input-search' 
          placeholder='Search here ...' 
        />
      </div>
    </>
  )
}

export default ZipCode