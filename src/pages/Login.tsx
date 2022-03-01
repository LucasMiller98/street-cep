import { 
  Button, 
  Input, 
  FormControl,
  Theme,
  createStyles,
  makeStyles,
  InputLabel,
} from '@material-ui/core'
import { MdAccountBox, Si1Password } from 'react-icons/all'
import { Link } from 'react-router-dom'
import * as Yup from 'yup'
import { FiLogIn } from 'react-icons/fi'
import '../styles/pages/login.css'
import { useFormik } from 'formik'
import { useHistory } from 'react-router-dom'
import apiFake from '../services/createUseApi'
import User from './types/types'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css' 

function Login() {
  document.title = 'Login'

  const schema = Yup.object().shape({
    email: Yup.string().email('Field email is required').required(''),
    password: Yup.string().required('Field required')
  }) 

  const history = useHistory()

  const formik = useFormik({

    initialValues: {
      email: '',
      password: '',
    },
    
    validationSchema: schema,
    onSubmit: async values => {
      
      try{
        const hasEmailAndPasswordOnField = values.email && values.password

        if(!hasEmailAndPasswordOnField) {
          throw new Error('Email ou password não pode ser nulo!')
        }

        const { data } = await apiFake.get<User[]>(`users?email=${values.email}`)

        if(data[0].email !== values.email) {
          throw new Error('Email ou senha incorreta')
        }

        if(data[0].newPassword !== values.password) {
          throw new Error('Email ou senha incorreta')
        }
        
        apiFake.post(`sessions`, { // Salvando a sessão
          userId: data[0].id,
          createAt: Date.now()
        })

        history.push('/home')

      }catch(error: any) {
        toast.error(`🤦‍♂️${error.message}`, {
          autoClose: 5000,
          position: 'top-right',
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined
        })
      }
    
    },
  })

  const useStyles = makeStyles((theme: Theme) => 
    createStyles({
      formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
      }
    })
  )

  const styles = useStyles()

  return(
    <>

      <ToastContainer 
        position='top-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeButton
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    
      <div className='container-form'>

        <form id='form-login' onSubmit={formik.handleSubmit}>
          <h1 id='h1-login'>ZipCode</h1>

          <div className='container-float'>
            <MdAccountBox size={35} color='#f1f1f1' className='MdAccountBox' />
            <section className="section-errors">
              <FormControl className={styles.formControl}>
                <InputLabel aria-autocomplete='none' className='inputs-label-float' id='input-label-email'>Email</InputLabel>
                <Input 
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  autoComplete='off'
                  id='input-email'
                  type="email" 
                  name='email'
                />
              </FormControl>
              { formik.errors.email && <div className='formik-errors'>{formik.errors.email}</div> }
            </section>
          </div>

          <div className='container-float'>
            <Si1Password size={35} color='#f1f1f1' className='Si1Password' />
            <section className="section-errors">
              <FormControl className={styles.formControl}>
                <InputLabel className='inputs-label-float' id='input-label-password'>Password</InputLabel>
                  <Input 
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  id='input-password'
                  type="password" 
                  name='password'
                />
              </FormControl>
              { formik.errors.password && <div className='formik-errors'>{formik.errors.password}</div>}
            </section>
          </div>

          <div className='container-button-login'>
            <Button 
              type='submit' 
              id='button-signIn-submit'
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