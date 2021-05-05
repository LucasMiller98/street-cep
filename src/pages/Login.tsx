import { MdAccountBox, Si1Password, IoArrowBack } from 'react-icons/all'
import { Link, useHistory } from 'react-router-dom'
import { FiLogIn } from 'react-icons/fi'
import { Helmet } from 'react-helmet'
import '../styles/pages/login.css'
import { useState } from 'react'

function Login() {

  const history = useHistory()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function buttonOnClick() {
    if(email == '' || password == '') {
      alert('Por favor, preencha tudo!')
    }else if(email === 'abc@email.com' && password === 'abc123') {
      alert(`Bem vindo, ${email}`)
      return history.push('/home')
    }else{
      alert('Email e/ou senha incorreta')
    }

  }  

  return(
    <>
      <Helmet>
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
            <input 
              type="email" 
              placeholder='Email' 
              value={email}
              className='inputsForm'
              onChange={event => setEmail(event.target.value)}
              required
            />
          </div>

          <div className='container-float'>
            {/* <label htmlFor="password">Senha</label> */}
            <Si1Password size={35} color='#f1f1f1' className='Si1Password' />
            <input 
              type="password" 
              placeholder='Password' 
              value={password}
              className='inputsForm'
              onChange={event => setPassword(event.target.value)}
              required
            />
          </div>

          <div className='container-button-login'>
            <button 
              type='submit' 
              id='button-signIn-submit'
              onClick={buttonOnClick}
            >
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