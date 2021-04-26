import { MapContainer, TileLayer, Marker, Popup  } from 'react-leaflet'
import { FiLogOut, FiX } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import '../../styles/pages/home.css'
import { Helmet } from 'react-helmet'
import { useEffect, useState } from 'react'
import InputSearch from '../../components/Search'

type UserFromGitHub = {
  login: string
  name: string
  avatar_url: string
  followers: number
  following: number
}

function HomeMap() {

  const [login, setLogin] = useState('')
  const [name, setName] = useState('')
  const [avatar, setAvatar] = useState('')
  const [followers, setFollowers] = useState(0)
  const [following, setFollowing] = useState(0)
  const [isShowPopup, setIsShowPopup] = useState(false)

  useEffect(() => {
    fetch(`http://api.github.com/users/lucasmiller98`)
      .then(res => res.json())
      .then(data => {
        setData(data)
      })

  }, [])

  function setData({ avatar_url, name, login, followers, following }: UserFromGitHub) { 
    setLogin(login)
    setName(name)
    setAvatar(avatar_url)
    setFollowers(followers)
    setFollowing(following)
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

        <button type='button' className='my--profile--github' onClick={() => setIsShowPopup(true)}>
          <img src={avatar} alt="My Profile" className='profile-gitHub' /> 
        </button>

        { isShowPopup && (
          <div style={{ display: 'flex' }} className='popup-container'>
            <div className='popup'>
              <button className='close' onClick={() => setIsShowPopup(false)}>
                <FiX size={25} color='#131313' id='closePopup' />
              </button>

              <section className='account-user'>
                <span className='span-account-user'>
                  User name: {login}
                </span>
                <span className='span-account-user'>
                  Name: {name}
                </span>
                <span className='span-account-user'>
                  Followers: {followers}
                </span>
                <span className='span-account-user'>
                  Following: {following}
                </span>
              </section>

              <Link to='/login' className='exit-anchor'>
                <FiLogOut title='Exit' size={30} className='fiLogOut' />
                <span className='exit-span-anchor'>Exit</span> 
              </Link>
            </div>
          </div>
        )}

        { !isShowPopup && (
          <div className='popup-container'>
            <div className='popup'>
              <button className='close'>
                <FiX size={25} color='#131313' id='closePopup' />
              </button>

              <section className='account-user'>
                <span className='span-account-user'>
                  User name: {login}
                </span>
                <span className='span-account-user'>
                  Name: {name}
                </span>
                <span className='span-account-user'>
                  Followers: {followers}
                </span>
                <span className='span-account-user'>
                  Following: {following}
                </span>
              </section>

              <Link to='/login' className='exit-anchor'>
                <FiLogOut title='Exit' size={30} className='fiLogOut' />
                <span className='exit-span-anchor'>Exit</span> 
              </Link>
            </div>
          </div>
        )}
       
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


// import api from '../../services/API_GITHUB'

// api.get(`users/lucasmiller98`)
    //   .then(res => {
    //     setData(res.request)
    //   })
