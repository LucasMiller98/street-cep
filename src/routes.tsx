import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomeMap from './pages/Home/HomeMap'
import CreateAccount from './pages/Create'
import Login from './pages/Login'
import ZipCode from './pages/ZipCodeSearch'

type ThemeProps = {
  toggleThemeProps: () => void
}

function AllRoutes({ toggleThemeProps }: ThemeProps) {
  return(
    <Router>
      <Switch>
        <Route exact path='/' component={Login} />

        <Route 
          path='/home' 
          render={ // para passar props através de rotas, devemos usar o render
          props => <HomeMap { ...props } // Vai renderizar o login pegando a props

          toggleThemeHomeMap={
            toggleThemeProps // Props que será passada para o componente HomeMap
          }
        />
        }
      />
      
        <Route path='/create' component={CreateAccount} />
        <Route path='/zipcode-app' component={ZipCode} />
      </Switch>
    </Router>
  )
}

export default AllRoutes