import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomeMap from './pages/Home/HomeMap'
import CreateAccount from './pages/Create'
import Login from './pages/Login'
import WelcomePage from './pages/Welcome'
import ZipCode from './pages/ZipCode'

function Routes() {
  return(
    <Router>
      <Switch>
        <Route path='/' exact component={WelcomePage} />
        <Route path='/home' component={HomeMap} />
        <Route path='/login' component={Login} />
        <Route path='/create' component={CreateAccount} />
        <Route path='/zipcode-app' component={ZipCode} />
      </Switch>
    </Router>
  )
}

export default Routes