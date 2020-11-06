import React from 'react'
import App from './App'
import { Route, Switch } from 'react-router-dom'
import About from './AboutPage'
import Home from './HomePage'

export default function RootRoute() {
  return (
    <App>
      <Switch>
        <Route path='/about' component={About} />
        <Route path='/' component={Home} />

      </Switch>
    </App>
  )
}

