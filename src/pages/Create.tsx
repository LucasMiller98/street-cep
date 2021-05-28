import { 
  Input, 
  InputLabel,  
  makeStyles,
  Theme,
  createStyles,
  FormControl,
  Select,
  MenuItem,
} from '@material-ui/core'
// import { FiArrowRight, FiX } from 'react-icons/fi'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/pages/create.css'
import { ChangeEvent } from 'react';

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
      formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
      },
      selectEmpty: {
        marginTop: theme.spacing(2)
      }
    })
  )

function CreateAccount() {
  document.title = 'Create a new account'
  const classes = useStyles()       
  
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [mobileNumberOrEmail, setMobileNumberOrEmail] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [isTheScreenSmall, setIsTheScreenSmall] = useState(false)

  const [isGreen, setIsGreen] = useState(false)
  const [year, setYear] = useState<string | number>('')
  const [day, setDay] = useState<string | number>('')
  const [months, setMonths] = useState<string | number>('')
  const [isOpenMonths, setIsOpenMonths] = useState(false)
  const [isOpenDay, setIsOpenDay] = useState(false)
  const [isOpenYear, setIsOpenYear] = useState(false)

  const monthsSelect = [
    'Jan',
    'Fev',
    'Mar',
    'Abr',
    'May',
    'Jun',
    'Jul',
    'Ago',
    'Set',
    'out',
    'Nov',
    'Dez'
  ]

  const days = []
  
  for(let days_of_the_month = 1; days_of_the_month <= 31; days_of_the_month ++) {
    days.push(days_of_the_month)
  }

  const yearSelect = []


  const getYearToday = new Date()
  
  for(let year = getYearToday.getFullYear(); year >= 1940; year -- ) {
    yearSelect.push(year)
  }

  const handleChangeMonths = (event: ChangeEvent<{ value: unknown }>) => {
    setMonths(event.target.value as string)
  }

  const handleCloseMonths = () => {
    setIsOpenMonths(false)
  }

  const handleOpenMonths = () => {
    setIsOpenMonths(true)
  }

  const handleChangeDay = (event: ChangeEvent<{ value: unknown }>) => {
    setDay(event.target.value as string)
  }

  const handleOpenDay = () => {
    setIsOpenDay(true)
  }

  const handleCloseDay = () => {
    setIsOpenDay(false)
  }

  const handleChangeYear = (event: ChangeEvent<{ value: unknown }>) => {
    setYear(event.target.value as number)
  }

  const handleCloseYear = () => {
    setIsOpenYear(false)
  }

  const handleOpenYear = () => {
    setIsOpenYear(true)
  }

  return(
    <>
      <header id='header-create-account'>
        <h1 id='h1-code'>ZipCode</h1>
        <Link to='/' className='anchor-signUp'>Sign Up</Link>
      </header>
      <div className="form-container">

        <div id='create-new-account-easily'>
          <h3 id='h3-Create-a-new-account'>Create a New Account</h3>
          <span>It’s quick and easy.</span>
          
        </div>
        <form id='form-create-account'>
          <div className='text-name'>
            <FormControl className={classes.formControl}>
              <InputLabel id='label-first-name'>First Name</InputLabel>
              <Input 
                type="text"
                value={firstName}  
                onChange={event => setFirstName(event.target.value) }
                className='inputsData'
              /> 
            </FormControl> 
            <FormControl className={classes.formControl}>
              <InputLabel id='label-last-name'>Last name</InputLabel>
              <Input 
                type="text" 
                value={lastName}  
                onChange={event => setLastName(event.target.value)}
                className='inputsData'
              />
            </FormControl>
          </div>

          <div className='div-data'>
            <FormControl className={classes.formControl}>
              <InputLabel id='label-mobile-number-or-email'>Mobile number or email</InputLabel>
              <Input 
                type="text"
                value={mobileNumberOrEmail}
                onChange={event => setMobileNumberOrEmail(event.target.value)}
                className='inputsData'
              />
            </FormControl>
            <FormControl className={classes.formControl}>
              <InputLabel id='label-new-password'>New password</InputLabel>
              <Input 
                type="password" 
                value={newPassword}
                onChange={event => setNewPassword(event.target.value)}
                className='inputsData'
              />
            </FormControl>
          </div>
          
          <div id='birthday'>
            <h3>Birthday</h3>
            <FormControl className={classes.formControl}>
              <InputLabel id='inputLabel-material-months'>Months</InputLabel>
              <Select 
                title='months' 
                labelId='select-material-months'
                className='selects-material-ui'
                open={isOpenMonths}
                onClose={handleCloseMonths}
                onOpen={handleOpenMonths}
                value={months}
                onChange={handleChangeMonths}
              > 
                <MenuItem><em>Choose a option</em></MenuItem>
                { monthsSelect.map(value => <MenuItem>{value}</MenuItem>)}
              </Select>
            </FormControl>

            <FormControl className={classes.formControl}>
              <InputLabel id='inputLabel-day'>Day</InputLabel>
              <Select 
                title='day'
                labelId='select-day'
                className='selects-material-ui'
                open={isOpenDay}
                onOpen={handleOpenDay}
                onClose={handleCloseDay}
                value={day}
                onChange={handleChangeDay}
              >
                <MenuItem><em>Choose a option</em></MenuItem>
                { days.map(value => <MenuItem>{value}</MenuItem>) }
              </Select>
            </FormControl>

            <FormControl className={classes.formControl}>
              <InputLabel id='input-label-year'>Year</InputLabel>
              <Select 
                title='year' 
                labelId='select-label-year'
                className='selects-material-ui'
                open={isOpenYear}
                onClose={handleCloseYear}
                onOpen={handleOpenYear}
                value={year}
                onChange={handleChangeYear}
              >
                <MenuItem><em>Choose a option</em></MenuItem>
                { yearSelect.map(value => <MenuItem>{value}</MenuItem>) }
              </Select>
            </FormControl>
              
          </div>

          <div className='div-gender'>
            <h3 id='gender-h3'>Gender</h3>
            <div className='container-gender'>
              <div className='female'>
                <div className='div-radio' onClick={() => setIsGreen(true)} >
                  { isGreen && (
                    <div className='radio-style-background-color' />
                  )}
                </div>
                    
                <label htmlFor="female">Female</label>
              </div>
              
              <div className='male'>
                <div className='div-radio' onClick={() => setIsGreen(false)}>
                  { !isGreen && (
                    <div className='radio-style-background-color' />
                  )}
                </div> 
                <label htmlFor="male">Male</label>
              </div>  
            </div>
          </div>
            
        </form>
      </div>
    </>
  )
}

export default CreateAccount