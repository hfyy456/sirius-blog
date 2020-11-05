import React from 'react'
import App from './App'
import { Route, Switch } from 'react-router-dom'
import About from './AboutPage'
export default function RootRoute() {
  return (
    <App>
      <Switch>
        <Route path='/about' component={About} />
      </Switch>
    </App>
  )
}

