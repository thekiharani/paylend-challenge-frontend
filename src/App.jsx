import React from 'react'
import {
  BrowserRouter as Router,
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
    <Router>
      <Switch>
        <Route exact path="/" component={Welcome} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/edit" component={Edit} />
        <Route exact path="/register" component={Register} />
      </Switch>
    </Router>
  )
}

export default App
