import { MapContainer, TileLayer, Marker, Popup  } from 'react-leaflet'
import { FiLogOut, FiXCircle, FiArrowRight } from 'react-icons/fi'
import Leaflet from 'leaflet'
import mapIcon from '../../images/pin.svg'
import { useEffect, useState } from 'react'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'
import '../../styles/pages/home.css'
import * as ReactBootStrap from 'react-bootstrap'

type UserFromGitHub = {
  login: string
  name: string
  avatar_url: string
  followers: number
  following: number
}

function HomeMap() {
  document.title = 'Home'

  const [login, setLogin] = useState('')
  const [name, setName] = useState('')
  const [avatar, setAvatar] = useState('')
  const [followers, setFollowers] = useState(0)
  const [following, setFollowing] = useState(0)
  const [isShowPopup, setIsShowPopup] = useState(false)
  
  const mapPinIcon = Leaflet.icon({
    iconUrl: mapIcon,
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2],
  })

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
      <div className='homeContainer'>
        <header id='header'>
          <h1>Welcome</h1>
        </header>
        <button type='button' className='my--profile--github' onClick={() => setIsShowPopup(true)}>
          { !avatar ? (
            <div className='div-loading-avatar'>
              <ReactBootStrap.Spinner animation='border' />
            </div>
          ) : (
            <img src={avatar} alt="My Profile" className='profile-gitHub' /> 
          ) }
        </button>

        <div className={isShowPopup ? 'popup-container': 'popup-container-none'}>
            
          <div className='popup'>
            <div className='myProfile-github'>
              <img src={avatar} alt='My Profile' className='profile-gitHub-popup' />
            </div>
            <button className='close' onClick={() => setIsShowPopup(false)}>
              <FiXCircle size={35} color='#131313' />
            </button>

            <section className='account-user' id='section-user'>
              <Button className='button-ui' title='GitHub profile'>
                <a className='link-github' target='_blank' rel='noreferrer' href="https://github.com/LucasMiller98">User name: {login}</a>
              </Button>
              <Button className='button-ui' title='GitHub profile'>
                <a className='link-github' target='_blank' rel='noreferrer' href="https://github.com/LucasMiller98">Name: {name}</a>
              </Button>
              <Button className='button-ui' title='GitHub profile'>
                <a className='link-github' target='_blank' rel='noreferrer' href="https://github.com/LucasMiller98">Followers: {followers}</a>
              </Button>
              <Button className='button-ui' title='GitHub profile'>
                <a className='link-github' target='_blank' rel='noreferrer' href="https://github.com/LucasMiller98">Following: {following}</a>
              </Button>
            </section>

            <Link to='/' style={{ textDecoration: 'none' }}>
              <Button className='exit-anchor link-login-anhor'>
                <FiLogOut title='Exit' size={23} className='fiLogOut' />
                <span className='exit-span-anchor'>Exit</span>
              </Button>
            </Link>
          </div>
        </div>

        <MapContainer 
          center={[-8.1256917,-35.027856]} 
          zoom={15} 
          style={{ width: '100vw', height: '100vh' }}
        >
          <TileLayer url='https://a.tile.openstreetmap.org/{z}/{x}/{y}.png' />
         

          <Marker 
            icon={mapPinIcon}
            position={[-8.1256917,-35.027856]}
          >
            <Popup 
              closeButton={false} 
              minWidth={240}
              autoClose
              maxWidth={240}
              className='map-popup'>
              You are here!
            </Popup>
          </Marker>
        </MapContainer>

        <Link to='/zipcode-app' className='link-to-cep-page' title='mais informações'>
          <FiArrowRight size={35} />
        </Link>
        
      </div>
    </>
  )
}

export default HomeMap