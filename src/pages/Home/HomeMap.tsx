import { MapContainer, TileLayer, Marker, Popup  } from 'react-leaflet'
import { FiLogOut } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import '../../styles/pages/home.css'
import { Helmet } from 'react-helmet'
import { useEffect, useState } from 'react'
// import api from '../../services/API_GITHUB'
import InputSearch from '../../components/Search'

type UserFromGitHub = {
  userName: string
  name: string
  avatar_url: string
  followers: number
  following: number
  public_repos: string
}

function HomeMap() {

  const [userName, setUserName] = useState('')
  const [name, setName] = useState('')
  const [avatar, setAvatar] = useState('')

  useEffect(() => {
    fetch(`http://api.github.com/users/lucasmiller98`)
      .then(res => res.json())
      .then(data => {
        setData(data)
      })
    
    // api.get(`users/lucasmiller98`)
    //   .then(res => {
    //     setData(res.request)
    //   })

  }, [])

  function setData({ avatar_url }: UserFromGitHub) { 
    setUserName(userName)
    setName(name)
    setAvatar(avatar_url)
  }
  
  return(
    <>
      <Helmet>
        <title>Home | ZipCode</title>
      </Helmet>
      <div className='homeContainer'>
        <header id='header-search'>
          
          <InputSearch />
        </header>
        <img src={avatar} alt="My Profile" className='profile-gitHub' /> 
        <Link to='/login' className='exit-anchor'>
          <span>Exit</span> 
          <FiLogOut title='Exit' size={40} color='#133499' />
        </Link>
       
        <MapContainer 
          center={[-8.1256917,-35.027856]} 
          zoom={15} 
          style={{ width: '100vw', height: '100vh' }}
        >
          <TileLayer url='https://a.tile.openstreetmap.org/{z}/{x}/{y}.png' />
         

          <Marker 
            // icon={ImageMarker}
            position={[-8.1256917,-35.027856]}
          >
            <Popup closeButton={true} className='map-popup'>
              Hello World
            </Popup>
          </Marker>
        </MapContainer>
        
      </div>
    </>
  )
}

export default HomeMap
