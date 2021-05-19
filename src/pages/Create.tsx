import { 
  Container, 
  Input, 
  Select, 
  InputLabel, 
  FormHelperText, 
  FormControlLabel, 
  makeStyles,
  NativeSelect,
  Theme,
  createStyles,
  FormControl,
  MenuItem
} from '@material-ui/core'

import { ChangeEvent, FormEvent, useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/pages/create.css'

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
        <Link to='/login' className='anchor-login'>Login</Link>
      </header>

      <div className="form-container">

        <div id='create-new-account-easily'>
          <h3 id='h3-Create-a-new-account'>Create a New Account</h3>
          <span>It’s quick and easy.</span>
        </div>
        <section id='form-create-account'>
        <FormControl className={classes.formControl}>
          <div className='text-name'>
            <Input 
              type="text" 
              value={firstName}  
              onChange={event => setFirstName(event.target.value) }
              placeholder='First Name'
              className='inputsData'
            />  

            <Input 
              type="text" 
              value={lastName}  
              onChange={event => setLastName(event.target.value)}
              placeholder='Last name'
              className='inputsData'
            />
          </div>

          <div className='div-data'>
            <Input 
              type="text"
              value={mobileNumberOrEmail}
              onChange={event => setMobileNumberOrEmail(event.target.value)}
              placeholder='Mobile number or email'
              className='inputsData'
            />

            <Input 
              type="password" 
              value={newPassword}
              onChange={event => setNewPassword(event.target.value)}
              placeholder='New password'
              className='inputsData'
            />
          </div>
        </FormControl>

        <h3 id='h3-birthday'>Birthday</h3>
        <div id='birthday'>
          <FormControl className={classes.formControl}>
            <InputLabel id='inputLabel-material-months'>Months</InputLabel>
            <Select 
              title='months' 
              labelId='inputLabel-material-months'
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
              <InputLabel id='input-day-material'>Day</InputLabel>
              <Select 
                title='day'
                labelId='select-day-material'
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
              <InputLabel id='demo-controlled-open-select-label'>Year</InputLabel>
              <Select 
                title='year' 
                labelId='demo-controlled-open-select-label'
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

          <Link id='anchor-signUp' to="/login">
            Sign Up
          </Link>
        </section>
      </div>
    </>
  )
}

export default CreateAccount























// id="select-day"



{/* <option value="">1</option>
              <option value="">2</option>
              <option value="">3</option>
              <option value="">4</option>
              <option value="">5</option>
              <option value="">6</option>
              <option value="">7</option>
              <option value="">8</option>
              <option value="">9</option>
              <option value="">10</option>
              <option value="">11</option>
              <option value="">12</option>
              <option value="">13</option>
              <option value="">14</option>
              <option value="">15</option>
              <option value="">16</option>
              <option value="">17</option>
              <option value="">18</option>
              <option value="">19</option>
              <option value="">20</option>
              <option value="">21</option>
              <option value="">22</option>
              <option value="">23</option>
              <option value="">24</option>
              <option value="">25</option>
              <option value="">26</option>
              <option value="">28</option>
              <option value="">29</option>
              <option value="">30</option>
              <option value="">31</option> */}




{/* <option value="">Jan</option>
              <option value="">Fev</option>
              <option value="">Mar</option>
              <option value="">abr</option>
              <option value="">Mai</option>
              <option value="">Jun</option>
              <option value="">Jul</option>
              <option value="">Ago</option>
              <option value="">Set</option>
              <option value="">Out</option>
              <option value="">Nov</option>
              <option value="">Dez</option> */}


// id="select-months"
{/* id="select-year" */}
{/* <option value="">2021</option>
              <option value="">2020</option>
              <option value="">2019</option>
              <option value="">2018</option>
              <option value="">2017</option> */}