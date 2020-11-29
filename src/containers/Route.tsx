import React from 'react'
import App from './App'
import { Route, Switch, useHistory, useLocation } from 'react-router-dom'
import About from './AboutPage'
import Home from './HomePage'
import Article from './ArticlePage'
import './App.scss'
import {
  TransitionGroup,
  CSSTransition
} from "react-transition-group";
export default function RootRoute() {
  const location: any = useLocation();
  const history: any = useHistory();
  const ANIMATION_MAP: any = {
    PUSH: 'forward',
    POP: 'back'
  }

  return (
    <App>
      <TransitionGroup
        id={'router-wrapper'}
        childFactory={child => React.cloneElement(
          child,
          { classNames: ANIMATION_MAP[history.action] }
        )}
      >
        <CSSTransition
          key={location.pathname}
          timeout={500}
          appear={true}
          unmountOnExit={true}
        >
          <Switch location={location}>
            <Route path='/about' component={About} />
            <Route exact path='/' component={Home} />
            <Route path='/article/:id' component={Article} />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </App>
  )
}

