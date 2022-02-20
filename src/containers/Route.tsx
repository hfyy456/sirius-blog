import React, { useEffect } from "react"
import App from "./App"
import { Route, Switch, useLocation } from "react-router-dom"
import About from "./AboutPage"
import Home from "./HomePage"
import Article from "./ArticlePage"
import "./App.scss"

export default function RootRoute() {
    const location: any = useLocation()

    useEffect(() => {
        if (document && location.pathname != "/") {
            // 可以排除不需要置顶的页面
            if (document?.documentElement || document?.body) {
                document.documentElement.scrollTop = document.body.scrollTop = 0 // 切换路由时手动置顶
            }
        }
    }, [location.pathname])
    return (
        <App>
            <Switch location={location}>
                <Route path="/about" component={About} />
                <Route exact path="/" component={Home} />
                <Route path="/article/:id" component={Article} />
            </Switch>
        </App>
    )
}
