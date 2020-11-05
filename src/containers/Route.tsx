import React from 'react'
import App from './App'
import { Router, Route, Switch } from 'react-router'
import { createBrowserHistory } from 'history';
import About from './AboutPage'
export default function RootRoute() {
  return (
    <Router history={createBrowserHistory()}>
      <App>
        <Switch>
          <Route exact path={'/about'} component={About} />
        </Switch>
      </App>
    </Router>)
}

