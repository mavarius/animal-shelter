import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import Layout from './components/Layout'
import HomePage from './components/HomePage'
import SearchPage from './components/SearchPage'
import AnimalDetails from './components/AnimalDetails'
import ClientDetails from './components/ClientDetails'

render(
  <Router history={browserHistory}>

    <Route path="/" component={Layout}>
      <IndexRoute component={HomePage} />
      <Route path="/search/:section" component={SearchPage} />
      <Route path="/animal/:id" component={AnimalDetails} />
      <Route path="/client/:id" component={ClientDetails} />
    </Route>

  </Router>,
  document.getElementById('root')
)
