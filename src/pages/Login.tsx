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
import apiFake from '../services/createUseApi'
import { FiLogIn } from 'react-icons/fi'
import '../styles/pages/login.css'
import { useFormik } from 'formik'
import { useHistory } from 'react-router-dom'

function Login() {
  document.title = 'Login'

  // const consumerApiFake = async () => {
  //   const response = 
  //   return response.data
  // } 

  const schema = Yup.object().shape({
    email: Yup.string().email('Field email is required').required(''),
    password: Yup.string().required('Field required')
  }) 

  const history = useHistory()
  
  const formik = useFormik({

    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: schema,
    onSubmit: async values => {
      console.log(JSON.stringify(values, null, 2))

      const isNotEmpty = values.email && values.password
      
      try{
        if(isNotEmpty) {
          await apiFake.get(`users/:id?_embed=login`)
          
        }

        if(!isNotEmpty) {
          throw new Error('Field email is empty')
        }

      }catch(error) {
        console.error(error)
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

  // function buttonOnClick() {
  //   if(email === '' || password === '') {
  //     alert('Por favor, preencha tudo!')
  //   }else if(email === 'abc@email.com' && password === 'abc123') {
  //     return history.push('/home')
  //   }else{
  //     alert('Email e/ou senha incorreta')
  //   }
  // } 

  return(
    <>
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