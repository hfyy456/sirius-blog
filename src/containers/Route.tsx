import React from 'react'
import App from './App'
import { Route, Switch } from 'react-router-dom'
import About from './AboutPage'
import Home from './HomePage'
import Article from './ArticlePage'
export default function RootRoute() {
  return (
    <App>
      <Switch>
        <Route exact path='/about' component={About} />
        <Route exact path='/' component={Home} />
        <Route exact path='/article/:id' component={Article} />
      </Switch>
    </App>
  )
}

