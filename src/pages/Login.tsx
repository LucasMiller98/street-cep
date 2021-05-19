import { MdAccountBox, Si1Password, IoArrowBack } from 'react-icons/all'
import { Link, useHistory } from 'react-router-dom'
import { FiLogIn } from 'react-icons/fi'
import { Helmet } from 'react-helmet'
import '../styles/pages/login.css'
import { FormEvent, useState } from 'react'
import { 
  Button, 
  Input, 
  FormControl,
  Theme,
  createStyles,
  makeStyles,
} from '@material-ui/core'

function Login() {

  const history = useHistory()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const useStyles = makeStyles((theme: Theme) => 
    createStyles({
      formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
      }
    })
  )

  function buttonOnClick() {
    if(email === '' || password === '') {
      alert('Por favor, preencha tudo!')
    }else if(email === 'abc@email.com' && password === 'abc123') {
      alert(`Bem vindo, ${email}`)
      return history.push('/home')
    }else{
      alert('Email e/ou senha incorreta')
    }

  } 
  
  function handleSubmit(event: FormEvent) {
    event.preventDefault()
  }

  return(
    <>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <div className='container-form'>
        <Link to='/'>
          <IoArrowBack className='arrow-back' />
        </Link>
        <form onSubmit={handleSubmit}>
          <h1 id='h1-login'>ZipCode</h1>

          <div className='container-float'>
            <MdAccountBox size={35} color='#f1f1f1' className='MdAccountBox' />
            {/* <label htmlFor="email">Email</label> */}
            <Input 
              type="email" 
              placeholder='Email' 
              value={email}
              className='inputsForm'
              onChange={event => setEmail(event.target.value)}
            />
          </div>

          <div className='container-float'>
            {/* <label htmlFor="password">Senha</label> */}
            <Si1Password size={35} color='#f1f1f1' className='Si1Password' />
            <Input 
              type="password" 
              placeholder='Password' 
              value={password}
              className='inputsForm'
              onChange={event => setPassword(event.target.value)}
            />
          </div>

          <div className='container-button-login'>
            <Button 
              type='submit' 
              id='button-signIn-submit'
              onClick={buttonOnClick}
            >
              <FiLogIn size={25} color='#f1f1f1' />
              <span>Login</span> 
            </Button>
          </div>

          <div className='link-create-account'>
            <Link to='/create' className='link-signIn'>
              Create a new account
            </Link>
          </div>
          
        </form>
      </div>
    </>
  )
}

export default Login