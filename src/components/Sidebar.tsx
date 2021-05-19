import Button from '@material-ui/core/Button'
import { useEffect, useState } from 'react'
import { useContextApi } from '../ContextApi/Context'
import { Link } from 'react-router-dom'
import '../styles/pages/components/sidebar.css'
import { IoLanguage, MdAccountBox, FiX, FiArrowLeft , FiLogOut } from 'react-icons/all'
import * as ReactBootStrap from 'react-bootstrap'

type UseGitHubApi = {
  avatar_url: string
  name: string
}

function Sidebar() {

  const { isDisplayingSideBar, setCurrentStateSideBarToFalse } = useContextApi()
  const [avatar_url, setAvatar_url] = useState('')
  const [name, setName] = useState('')

  useEffect(() => {
    fetch(`http://api.github.com/users/lucasmiller98`)
      .then(response => response.json())
      .then(data => {
        setDatafromGitHub(data)
    })
  })

  const setDatafromGitHub = ({ avatar_url, name }: UseGitHubApi) => {
    setAvatar_url(avatar_url)
    setName(name)
  }
  
  return(
    <>
      <div className={isDisplayingSideBar ? 'sidebar-settings-container-main' : ''}>
        <FiX size={35} color='#f1f1f1' className='fiX-settings' onClick={() => setCurrentStateSideBarToFalse()} />
        <figure className='figure-myProfile'>
          { !avatar_url ? (
            <section className='loading-img-github-myProfile'>
              <ReactBootStrap.Spinner animation="border" style={{ color:'#0fdf54' }} />
            </section>
          ) : (
            <img src={avatar_url} alt='My Profile' />
          ) }
        </figure>
        <div id='container-box'>
          <section className='settings'>
            <Button className='button-ui-back'>
              <MdAccountBox size={30} color='#f1f1f1' />
              <span>{name}</span>
            </Button>
          </section>
          <section className='settings'>
            <Button className='button-ui-back'>
              <IoLanguage size={30} color='#f1f1f1' />
              <span>Languanges</span> 
            </Button>
          </section>
          <section className='settings'>
            <Link to='/home'>
              <Button className='button-ui-back'>
                <FiArrowLeft size={30} color='#f1f1f1' />
                <span>Back</span>
              </Button>
            </Link>
          </section>
          <section className='settings'>
            <Link to='/login'>
              <Button className='button-ui-back'>
                <FiLogOut size={30} color='#f1f1f1' />
                <span>Exit</span>
              </Button>
            </Link>          
          </section>
        </div>
      </div>
    </>
  )
}

export default Sidebar