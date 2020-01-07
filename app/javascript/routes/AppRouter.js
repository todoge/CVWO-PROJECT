import {Route, BrowserRouter, Switch, Link, NavLink} from 'react-router-dom'
import React from 'react'
import Nav from "../components/MainNav"
import App from "../components/App"
import Home from "../components/Home"
import ErrorRoute from "../components/404"

const Routes = ()=>(
    <BrowserRouter>
        <Nav />
        <Switch>
            <Route component={Home} exact path="/" />
            <Route component={App} exact path="/todos" />
            <Route component={ErrorRoute}/>
        </Switch>
    </BrowserRouter>
)

export default Routes


