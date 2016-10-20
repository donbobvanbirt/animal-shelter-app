import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import Layout from './components/Layout'
import Pets from './components/Pets'
import Clients from './components/Clients'

render(
  <Router history ={browserHistory}>
    <Route path ='/' component ={Layout}>
      <IndexRoute component={Pets}/>
      {/* <Route path='/pets' component={Pets} /> */}
      <Route path='/clients' component={Clients} />
    </Route>
  </Router>,
  document.getElementById('root')
);
