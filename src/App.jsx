import React from 'react'
import {
  HashRouter as Router,
  Switch,
  Route,
  useHistory,
} from 'react-router-dom'
import { DataProvider } from './hooks/dataContext'
import Welcome from './views/Welcome'
import Login from './views/Login'
import Register from './views/Register'
import Edit from './views/Edit'

function App() {
  const history = useHistory()
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" render={(props) => <Welcome {...props} />} />
        <Route exact path="/login" render={(props) => <Login {...props} />} />
        <Route exact path="/edit" render={(props) => <Edit {...props} />} />
        <Route
          exact
          path="/register"
          render={(props) => <Register {...props} />}
        />
      </Switch>
    </Router>
  )
}

export default ({ contentParams }) => <App contentParams={contentParams} />
