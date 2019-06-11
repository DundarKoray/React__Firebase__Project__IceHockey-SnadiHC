import React from 'react'
import Layout from './Hoc/Layout'
import { Switch, Route } from 'react-router-dom'

import Home from './Components/home'

const Routes = (props) => {
  return (
    <div>
      <Layout>
        <Switch>
          <Route exact component={Home} path="/"/>
        </Switch>
      </Layout>
    </div>
  )
}

export default Routes
