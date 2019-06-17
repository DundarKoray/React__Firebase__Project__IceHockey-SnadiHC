import React from 'react'
import Layout from './Hoc/Layout'
import { Switch, Route } from 'react-router-dom'

import PrivateRoute from './Components/authRoutes/privateRoutes'

import Home from './Components/home'
import SignIn from './Components/signin'

import Dashboard from './Components/admin/Dashboard'

const Routes = (props) => {
  return (
    <div>
      <Layout>
        <Switch>

          <PrivateRoute {...props} path="/dashboard" exact component={Dashboard}/>
          <Route exact component={SignIn} path="/sign_in"/>
          <Route exact component={Home} path="/"/>
        </Switch>
      </Layout>
    </div>
  )
}

export default Routes
