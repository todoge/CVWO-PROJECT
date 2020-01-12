import {Route, BrowserRouter, Switch, Link, NavLink} from 'react-router-dom'
import React from 'react'
import Nav from "../components/MainNav"
import App from "../components/App"
import Home from "../components/Home"
import New from "../components/New"
import Edit from "../components/Edit"
import ErrorRoute from "../components/404"
import Show from "../components/Show"
import Signup from "../components/Signup"

const Routes = ()=>(
    <BrowserRouter>
        <Nav />
        <Switch>
            <Route component={Home} exact path="/" />
            <Route component={App} exact path="/todos" />
            <Route component={New} exact path="/todos/new" />
            <Route component={Edit} exact path="/todos/:id/edit" />
            <Route component={Show} exact path="/todos/:id" />
            <Route component={Signup} exact path="/signup" />
            <Route component={ErrorRoute}/>
        </Switch>
    </BrowserRouter>
)

export default Routes


