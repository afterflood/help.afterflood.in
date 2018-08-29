import React from 'react'
import { Switch, Route } from 'react-router-dom'
import OrganizationListing from './OrganizationListing'
const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={OrganizationListing}/>
      <Route path='/orglist' component={OrganizationListing}/>
    </Switch>
  </main>
)

export default Main