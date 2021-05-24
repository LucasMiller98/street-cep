import { 
  Input, 
  Select, 
  InputLabel,  
  makeStyles,
  Theme,
  createStyles,
  FormControl,
  MenuItem
} from '@material-ui/core'

import apiFake from '../services/createUseApi';
import { ChangeEvent, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/pages/create.css'
import typeCreate from './types/typeCreate'

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
  
  const [isGreen, setIsGreen] = useState(false)
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [mobileNumberOrEmail, setMobileNumberOrEmail] = useState('')
  const [newPassword, setNewPassword] = useState('')
  
  const classes = useStyles()
  const [year, setYear] = useState<string | number>('')
  const [day, setDay] = useState<string | number>('')
  const [months, setMonths] = useState<string | number>('')
  const [isOpenMonths, setIsOpenMonths] = useState(false)
  const [isOpenDay, setIsOpenDay] = useState(false)
  const [isOpenYear, setIsOpenYear] = useState(false)
  const [firstNameApi, setFirstNameApi] = useState('')
  const [lastNameApi, setLastNameApi] = useState('')
  const [email, setEmail] = useState('')

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

  useEffect(() => {
    apiFake.get(`user`).then(response => {
      getApiFake(response.data)
    })
  }, [])

  const getApiFake = ({ firstNameUser, lastNameUser }: typeCreate) => {
    console.log(firstNameUser)
    setFirstNameApi(firstNameUser)
    setLastNameApi(lastNameUser)
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
          <span>It’s quick and easy. {firstNameApi} {lastNameApi}</span>
          
        </div>
        <section id='form-create-account'>
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
        

        <h3 id='h3-birthday'>Birthday</h3>
        <div id='birthday'>
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
              <MenuItem value=''>
                <em>Choose a option</em>
              </MenuItem>
              <MenuItem value='Jan'>Jan</MenuItem>
              <MenuItem value='Fev'>Fev</MenuItem>
              <MenuItem value='Mar'>Mar</MenuItem>
              <MenuItem value='Abr'>Abr</MenuItem>
              <MenuItem value='May'>May</MenuItem>
              <MenuItem value='Jun'>Jun</MenuItem>
              <MenuItem value='Jul'>Jul</MenuItem>
              <MenuItem value='Ago'>Ago</MenuItem>
              <MenuItem value='Set'>Set</MenuItem>
              <MenuItem value='Out'>Out</MenuItem>
              <MenuItem value='Nov'>Nov</MenuItem>
              <MenuItem value='Dez'>Dez</MenuItem>
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
                <MenuItem value=''>
                  <em>Choose a option</em>
                </MenuItem>
                <MenuItem value='1'>1</MenuItem>
                <MenuItem value='2'>2</MenuItem>
                <MenuItem value='3'>3</MenuItem>
                <MenuItem value='4'>4</MenuItem>
                <MenuItem value='5'>5</MenuItem>
                <MenuItem value='6'>6</MenuItem>
                <MenuItem value='7'>7</MenuItem>
                <MenuItem value='8'>8</MenuItem>
                <MenuItem value='9'>9</MenuItem>
                <MenuItem value='10'>10</MenuItem>
                <MenuItem value='11'>11</MenuItem>
                <MenuItem value='12'>12</MenuItem>
                <MenuItem value='13'>13</MenuItem>
                <MenuItem value='14'>14</MenuItem>
                <MenuItem value='15'>15</MenuItem>
                <MenuItem value='16'>16</MenuItem>
                <MenuItem value='17'>17</MenuItem>
                <MenuItem value='18'>18</MenuItem>
                <MenuItem value='19'>19</MenuItem>
                <MenuItem value='20'>20</MenuItem>
                <MenuItem value='21'>21</MenuItem>
                <MenuItem value='22'>22</MenuItem>
                <MenuItem value='23'>23</MenuItem>
                <MenuItem value='24'>24</MenuItem>
                <MenuItem value='25'>25</MenuItem>
                <MenuItem value='26'>26</MenuItem>
                <MenuItem value='27'>27</MenuItem>
                <MenuItem value='28'>28</MenuItem>
                <MenuItem value='29'>29</MenuItem>
                <MenuItem value='30'>30</MenuItem>
                <MenuItem value='31'>31</MenuItem>
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
                <MenuItem value=''>
                  <em>Choose a option</em>
                </MenuItem>
                <MenuItem value={2020}>2020</MenuItem>
                <MenuItem value={2019}>2019</MenuItem>
                <MenuItem value={2018}>2018</MenuItem>
                <MenuItem value={2017}>2017</MenuItem>
              </Select>
            </FormControl>
              
          </div>

          <h3 id='h3-gender'>Gender</h3>

          <div className='div-gender'>
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

        </section>
      </div>
    </>
  )
}

export default CreateAccount