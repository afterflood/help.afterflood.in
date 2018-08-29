import React from 'react'
import { Switch, Route } from 'react-router-dom'
import OrganizationListing from './OrganizationListing'
import ApplianceRepair from './ApplianceRepair'
const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={OrganizationListing}/>
      <Route path='/orglist' component={OrganizationListing}/>
      <Route path='/appl-repair' component={ApplianceRepair}/>
    </Switch>
  </main>
)

export default Main