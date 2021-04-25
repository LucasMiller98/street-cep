import '../styles/pages/login.css'
import { FiLogIn } from 'react-icons/fi'
import { MdAccountBox, Si1Password, IoArrowBack } from 'react-icons/all'
import Map from '../images/map.svg'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

function Login() {
  return(
    <>
      <Helmet>
        <link rel="shortcut icon" href={Map} />
        <title>Login</title>
      </Helmet>
      <div className='container-form'>

        <Link to='/'>
          <IoArrowBack size={60} color='#1a3d39' className='arrow-back' />
        </Link>
        
        <form>
          <h1 id='h1-login'>ZipCode</h1>

          <div className='container-float'>
            <MdAccountBox size={35} color='#f1f1f1' className='MdAccountBox' />
            {/* <label htmlFor="email">Email</label> */}
            <input type="email" placeholder=' ' />
          </div>

          <div className='container-float'>
            {/* <label htmlFor="password">Senha</label> */}
            <Si1Password size={35} color='#f1f1f1' className='Si1Password' />
            <input type="password" placeholder=' ' />
          </div>

          <div className='container-button-login'>
            <button type='button'>
              <FiLogIn size={25} color='#f1f1f1' />
              <span>Entrar</span> 
            </button>
          </div>

          <div className='link-create-account'>
            <Link to='/create' className='link-signIn'>
              Crie uma nova conta
            </Link>
          </div>
          
        </form>
      </div>
    </>
  )
}

export default Login