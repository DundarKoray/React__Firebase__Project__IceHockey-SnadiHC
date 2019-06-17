import React from 'react'
import Layout from './Hoc/Layout'
import { Switch, Route } from 'react-router-dom'

import Home from './Components/home'
import SignIn from './Components/signin'

import Dashboard from './Components/admin/dashboard'

const Routes = (props) => {
  return (
    <div>
      <Layout>
        <Switch>
          <Route exact component={Dashboard} path="/dashboard"/>
          <Route exact component={SignIn} path="/sign_in"/>
          <Route exact component={Home} path="/"/>
        </Switch>
      </Layout>
    </div>
  )
}

export default Routes
