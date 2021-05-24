import { MdAccountBox, Si1Password } from 'react-icons/all'
import { Link, useHistory } from 'react-router-dom'
import { FiLogIn } from 'react-icons/fi'
import '../styles/pages/login.css'
import { FormEvent, useState } from 'react'
import { 
  Button, 
  Input, 
  FormControl,
  Theme,
  createStyles,
  makeStyles,
  InputLabel
} from '@material-ui/core'

function Login() {
  document.title = 'Login'

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

  const styles = useStyles()

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
      <div className='container-form'>

        <form onSubmit={handleSubmit}>
          <h1 id='h1-login'>ZipCode</h1>

          <div className='container-float'>
            <MdAccountBox size={35} color='#f1f1f1' className='MdAccountBox' />
            <FormControl className={styles.formControl}>
              <InputLabel className='inputs-label-float' id='input-label-email'>Email</InputLabel>
              <Input 
                type="email" 
                value={email}
                id='input-email'
                onChange={event => setEmail(event.target.value)}
              />
            </FormControl>
          </div>

          <div className='container-float'>
            <Si1Password size={35} color='#f1f1f1' className='Si1Password' />
            <FormControl className={styles.formControl}>
              <InputLabel className='inputs-label-float' id='input-label-password'>Password</InputLabel>
                <Input 
                type="password" 
                value={password}
                id='input-password'
                onChange={event => setPassword(event.target.value)}
              />
            </FormControl>
            
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