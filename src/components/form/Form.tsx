import { 
  Input, 
  InputLabel,  
  makeStyles,
  Theme,
  createStyles,
  FormControl,
  Button,
  Container,
} from '@material-ui/core'
import apiFake from '../../services/createUseApi'
import { useFormik } from 'formik'
import * as yup from 'yup'
import './form.css'

export default function SignForm() {

  const useStyles = makeStyles((theme: Theme) => 
    createStyles({
      formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
      },
      selectEmpty: {
        marginTop: theme.spacing(2),
      }
    })
  )
  
  const classes = useStyles()
  
  const schema = yup.object().shape({
    name: yup.string().required('Field required'),
    lastName: yup.string().required('Field required'),
    email: yup.string().email().required('Field required'),
    newPassword: yup.string().min(8).max(10).required('Field required'),
    confirmPassword: yup.string().min(8).max(10).required('Field required')
  }) 

  const formik = useFormik({
    initialValues: {
      name: '',
      lastName: '',
      email: '',
      newPassword: '',
      confirmPassword: ''
    },

    validationSchema: schema,

    onSubmit: async values => {
      console.log(JSON.stringify(values, null, 2))

      const isEqual = values.newPassword === values.confirmPassword

      try {
        if(isEqual) await apiFake.post('users', values)

        if(!isEqual) throw new Error('The confirmation must be equal.')
        
      }catch (error) {
        console.error(error.message)
      }

    },
  })
  
  return(
    <>
      <div className="form-container">
        <form onSubmit={formik.handleSubmit} id='form-create-account'>
          <Container className='text-name'>
            <section className="section-errors-create">
              <FormControl className={classes.formControl}>
                <InputLabel id='label-first-name'>First Name</InputLabel>
                <Input 
                  placeholder='Type your name here ...'
                  onChange={formik.handleChange}
                  value={formik.values.name}
                  className='inputsData'
                  autoComplete='off'
                  type="text"
                  name='name'  
                /> 
              </FormControl> 
              { formik.errors.name && <div className='div-errors-formik'>{formik.errors.name}</div> }
            </section>
            <section className="section-errors-create">
              <FormControl className={classes.formControl}>
                <InputLabel id='label-last-name'>Last name</InputLabel>
                <Input 
                  placeholder='Type your last name here'
                  onChange={formik.handleChange}
                  value={formik.values.lastName} 
                  className='inputsData'
                  autoComplete='off'
                  name='lastName' 
                  type="text" 
                />
              </FormControl>
              { formik.errors.lastName && <div className='div-errors-formik'>{formik.errors.lastName}</div> }
            </section>
          </Container>

          <Container className='div-data'>
            <FormControl className={classes.formControl}>
              <InputLabel id='label-mobile-number-or-email'>Mobile number or email</InputLabel>
              <Input 
                placeholder='Type your email here ...'
                onChange={formik.handleChange}
                value={formik.values.email}
                className='inputsData'
                autoComplete='off'
                name='email'
                type="text"
              />
            </FormControl>
            { formik.errors.email && <div className='div-errors-formik'>{formik.errors.email}</div> }
            <FormControl className={classes.formControl}>
              <InputLabel id='label-new-password'>New password</InputLabel>
              <Input 
                placeholder='Type your new password here ...'
                value={formik.values.newPassword}
                onChange={formik.handleChange}
                className='inputsData'
                autoComplete='off'
                name='newPassword'
                type="password" 
              />
            </FormControl>
            { formik.errors.newPassword && <div className='div-errors-formik'>{formik.errors.newPassword}</div> }
            <FormControl className={classes.formControl}>
              <InputLabel id='label-new-password'>Confirm your password</InputLabel>
              <Input 
                placeholder='Confirm your new password here ...'
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
                className='inputsData'
                autoComplete='off'
                name='confirmPassword'
                type="password" 
              />
            </FormControl>
            { formik.errors.confirmPassword && <div className='div-errors-formik'>{formik.errors.confirmPassword}</div> }
          </Container>

          <Button 
            style={{ color: '#f1f1f1' }}
            color='primary'
            type='submit' 
            id='anchor-signUp' 
          >
            Submit
          </Button> 
        </form>
      </div>
    </>
  )
}
