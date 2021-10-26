import { MdAccountBox, FiX, FiArrowLeft , FiLogOut } from 'react-icons/all'
import { useContextApi } from '../ContextApi/hooks/useContextApi'
import * as ReactBootStrap from 'react-bootstrap'
import '../styles/pages/components/sidebar.css'
import Button from '@material-ui/core/Button'
import GitHubApiTypes from '../pages/types/types'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import apiGitHub from '../services/apiGitHub'

function Sidebar() {

  const { isDisplayingSideBar, setCurrentStateSideBarToFalse } = useContextApi()
  const [avatar_url, setAvatar_url] = useState('')
  const [name, setName] = useState('')

  
  useEffect(() => {
    const consumerApi = async () => {
      const { data } = await apiGitHub.get<GitHubApiTypes>('/users/lucasmiller98')
      setAvatar_url(data.avatar_url)
      setName(data.name)
    }
    
    consumerApi()
  }, [])
  
  return(
    <>
      <div className={isDisplayingSideBar ? 'sidebar-settings-container-main' : ''}>
        <FiX size={33} color='#f1f1f1' className='fiX-settings' onClick={() => setCurrentStateSideBarToFalse()} />
        <figure className='figure-myProfile'>
          { !avatar_url ? (
            <section className='loading-img-github-myProfile'>
              <ReactBootStrap.Spinner animation="border" style={{ color:'#0fdf54' }} />
            </section>
          ) : (
            <img src={avatar_url} alt='My Profile' />
          ) }
        </figure>
        <div>
          <section className='settings'>
            <Button className='button-ui-back'>
              <MdAccountBox size={25} color='#f1f1f1' />
              <span className='span-user'>{name}</span>
            </Button>
          </section>
          <section className='settings'>
            <Link to='/home'>
              <Button className='button-ui-back'>
                <FiArrowLeft size={25} color='#f1f1f1' />
                <span className='span-user'>Back</span>
              </Button>
            </Link>
          </section>
          <section className='settings'>
            <Link to='/'>
              <Button className='button-ui-back'>
                <FiLogOut size={25} color='#f1f1f1' />
                <span className='span-user'>Exit</span>
              </Button>
            </Link>          
          </section>
        </div>
      </div>
    </>
  )
}

export default Sidebar