import '../styles/pages/welcome.css'
// import ImgSearch from '../images/mapGoogle.jpeg'
import { Helmet } from 'react-helmet'
import { FaAngleRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function WelcomePage() {
  return(
    <>
      <Helmet>
        {/* <link rel="shortcut icon" href={ImgSearch} /> */}
        <title>Welcome</title>
      </Helmet>
      <div className='welcome-page'>
        <div className='content-main'>

          <main>
            <h1 id='h1-welcome'>Bem vindo ao seu site de consulta de CEP</h1>
            <p>Consulte o seu CEP aqui.</p>  
          </main>

          <Link to='/login' id='start-button'>
            <strong>Login</strong>
            <FaAngleRight size={25} color='#f1f1f1' />
          </Link>
        </div>
      </div>
    </>
  )
}

export default WelcomePage
