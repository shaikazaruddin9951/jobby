import {Route, Switch, Redirect} from 'react-router-dom'

import Login from './components/Login'
import Home from './components/Home'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'

import JobItemDetails from './components/JobItemDetails'
import JobsDetails from './components/JobsDetails'

import './App.css'

// Replace your code here
const App = () => (
  <Switch>
    <Route exact path="/login" component={Login} />
    <Route exact path="/" component={Home} />
    <ProtectedRoute exact path="/jobs" component={JobsDetails} />
    <ProtectedRoute exact path="/jobs/:id" component={JobItemDetails} />

    <Route exact path="/not-found" component={NotFound} />
    <Redirect to="not-found" />
  </Switch>
)

export default App
