import { 
  makeStyles,
  Theme,
  createStyles,
  FormControl,
  Button,
} from '@material-ui/core'
import { StyledContainerText, StyledInput, StyledInputLabel } from '../../pages/styles/createStyles'
import { ToastContainer, toast } from 'react-toastify'
import apiFake from '../../services/createUseApi'
import 'react-toastify/dist/ReactToastify.css'
import { useFormik } from 'formik'
import * as yup from 'yup'
import './form.css'
import { StyledContainerData } from './../../pages/styles/createStyles';

export default function SignForm() {

  const useStyles = makeStyles((theme: Theme) => createStyles({
      formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
      },
      
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

      try {
        const isEqual = values.newPassword.trim() === values.confirmPassword.trim()

        if(isEqual) {
          await apiFake.post('users', values)
          toast.success('🔥 Create with success!', {
            autoClose: 5000,
            position: 'top-right',
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined
          })
        }

        if(!isEqual) throw new Error('Please, confirm your password!')
        
      }catch (error: any) {
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
      
      <div className="form-container">
        
        <form onSubmit={formik.handleSubmit} id='form-create-account'>
          <StyledContainerText>
            <section>
              <FormControl className={classes.formControl}>
                <StyledInputLabel>First Name</StyledInputLabel>
                <StyledInput
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
            <section>
              <FormControl className={classes.formControl}>
                <StyledInputLabel>Last name</StyledInputLabel>
                <StyledInput 
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
          </StyledContainerText>

          <StyledContainerData>
            <FormControl className={classes.formControl}>
              <StyledInputLabel>Mobile number or email</StyledInputLabel>
              <StyledInput 
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
              <StyledInputLabel>New password</StyledInputLabel>
              <StyledInput 
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
              <StyledInputLabel>Confirm your password</StyledInputLabel>
              <StyledInput
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
          </StyledContainerData>

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
