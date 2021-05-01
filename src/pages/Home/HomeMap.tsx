import { MapContainer, TileLayer, Marker, Popup  } from 'react-leaflet'
import { FiLogOut, FiXCircle, FiArrowRight } from 'react-icons/fi'
import { useHistory } from 'react-router-dom'
import { MouseEventHandler, useEffect, useState } from 'react'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import '../../styles/pages/home.css'

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
        <header id='header'>
          <h1>Welcome</h1>
        </header>
        <button type='button' className='my--profile--github' onClick={() => setIsShowPopup(true)}>
          <img src={avatar} alt="My Profile" className='profile-gitHub' /> 
        </button>

        { isShowPopup && (
          <div style={{ display: 'flex' }} className='popup-container'>
            
            <div className='popup'>
              <div className='myProfile-github'>
                <img src={avatar} alt='My Profile' className='profile-gitHub-popup' />
              </div>
              <button className='close' onClick={() => setIsShowPopup(false)}>
                <FiXCircle size={25} color='#131313' />
              </button>

              <section className='account-user'>
                <Button className='button-ui' title='GitHub profile'>
                  <a target='_blank' href="https://github.com/LucasMiller98">User name: {login}</a>
                </Button>
                <Button className='button-ui' title='GitHub profile'>
                  <a target='_blank' href="https://github.com/LucasMiller98">Name: {name}</a>
                </Button>
                <Button className='button-ui' title='GitHub profile'>
                  <a target='_blank' href="https://github.com/LucasMiller98">Followers: {followers}</a>
                </Button>
                <Button className='button-ui' title='GitHub profile'>
                  <a target='_blank' href="https://github.com/LucasMiller98">Following: {following}</a>
                </Button>
              </section>

              <Link to='/login' style={{ textDecoration: 'none' }}>
                <Button className='exit-anchor link-login-anhor'>
                  <FiLogOut title='Exit' size={30} className='fiLogOut' />
                  <span className='exit-span-anchor'>EXIT</span>
                </Button>
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

        <Link to='/zipcode-app' className='link-to-cep-page' title='mais informações'>
          <FiArrowRight size={35} />
        </Link>
        
      </div>
    </>
  )
}

export default HomeMap