import React from 'react'
import { Switch, Route } from 'react-router-dom'
import OrganizationListing from './OrganizationListing'
import ApplianceRepair from './ApplianceRepair'
import Contact from './Contact';
import Home from './Home';
const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/orglist' component={OrganizationListing}/>
      <Route path='/appl-repair' component={ApplianceRepair}/>
      <Route path='/contact' component={Contact}/>
    </Switch>
  </main>
)

export default Main