import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomeMap from './pages/Home/HomeMap'
import CreateAccount from './pages/Create'
import Login from './pages/Login'
import ZipCode from './pages/ZipCodeSearch'

type ThemeProps = {
  toggleThemeProps: () => void
}

function Routes({ toggleThemeProps }: ThemeProps) {
  return(
    <Router>
      <Switch>
        <Route 
          exact 
          path='/' 
          render={ // para passar props através de rotas, devemos usar o render
            props => <Login {...props // Vai renderizar o login pegando a props
          } 

          toggleThemeLogin={
            toggleThemeProps // Props que será passada para o componente login
          } 

          /> 
          } 
        />
        <Route path='/home' component={HomeMap} />
        <Route path='/create' component={CreateAccount} />
        <Route path='/zipcode-app' component={ZipCode} />
      </Switch>
    </Router>
  )
}

export default Routes