import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import CreateAccount from './pages/Create'
import Login from './pages/Login'
import WelcomePage from './pages/Welcome'

function Routes() {
  return(
    <Router>
      <Switch>
        <Route path='/' exact component={WelcomePage} />
        <Route path='/login' component={Login} />
        <Route path='/create' component={CreateAccount} />
      </Switch>
    </Router>
  )
}

export default Routes