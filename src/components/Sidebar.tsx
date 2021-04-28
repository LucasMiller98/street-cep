import '../styles/components/aside.css'
import InputSearch from './Search'

function Aside() {
  return(
    <>
      <div className='show-zip-code'>
        <h1 className='title-code'>Search your zip code</h1>
        <InputSearch />
      </div>
    </>
  )
}

export default Aside