import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/pages/create.css'

function CreateAccount() {
  const [isGreen, setIsGreen] = useState(false)
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [mobileNumberOrEmail, setMobileNumberOrEmail] = useState('')
  const [newPassword, setNewPassword] = useState('')
  
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

        <form id='form-create-account'>
          <div className='text-name'>
            <input 
              type="text" 
              value={firstName}  
              onChange={event => setFirstName(event.target.value) }
              placeholder='Fist Name'
            />  

            <input 
              type="text" 
              value={lastName}  
              onChange={event => setLastName(event.target.value)}
              placeholder='Last name'
            />
          </div>

          <div className='div-data'>
            <input 
              type="text"
              value={mobileNumberOrEmail}
              onChange={event => setMobileNumberOrEmail(event.target.value)}
              placeholder='Mobile number or email'
            />

            <input 
              type="password" 
              value={newPassword}
              onChange={event => setNewPassword(event.target.value)}
              placeholder='New password'
            />
          </div>

          

          <h3 id='h3-birthday'>Birthday</h3>
          <div id='birthday'>

            <select title='months' id="select-months">
              <option value="">Jan</option>
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
              <option value="">Dez</option>
            </select>

            <select title='day' id="select-day">
              <option value="">1</option>
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
              <option value="">31</option>
            </select>

            <select title='year' id="select-year">
              <option value="">2021</option>
              <option value="">2020</option>
              <option value="">2019</option>
              <option value="">2018</option>
              <option value="">2017</option>
            </select>
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
        </form>
      </div>
    </>
  )
}

export default CreateAccount