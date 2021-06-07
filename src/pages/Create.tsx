import SignForm from '../components/form/Form'
import Button from '@material-ui/core/Button';
import { Container } from '@material-ui/core'
import { useHistory } from 'react-router';
import '../styles/pages/create.css'

function CreateAccount() {
  document.title = 'Create a new account'

  const history = useHistory()

  const handleClick = () => {
    return history.push('/')
  }
  
  return(
    <>
      <Container maxWidth='xl' id='header-create-account'>
        <h1 id='h1-code'>ZipCode</h1>
        <Button
        type='button'
        id='button-material-ui-history' 
        onClick={handleClick}
        >
          Login
        </Button>
      </Container>
      <Container maxWidth='sm' id='create-new-account-easily'>
        <h3 id='h3-Create-a-new-account'>Create a New Account</h3>
        <span>It’s quick and easy.</span>
      </Container>

      <SignForm />
    </>
  )
}

export default CreateAccount