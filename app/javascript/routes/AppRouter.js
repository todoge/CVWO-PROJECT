import {Route, BrowserRouter, Switch, Link, NavLink} from 'react-router-dom'
import React from 'react'
import Nav from "../components/MainNav"
import App from "../components/App"
import Home from "../components/Home"
import NewTodo from "../components/NewTodo"
import EditTodo from "../components/EditTodo"
import ErrorRoute from "../components/404"
import ShowTodo from "../components/ShowTodo"
import Signup from "../components/Signup"

const Routes = ()=>(
    <BrowserRouter>
        <Nav />
        <Switch>
            <Route component={Home} exact path="/" />
            <Route component={App} exact path="/todos" />
            <Route component={NewTodo} exact path="/todos/new" />
            <Route component={EditTodo} exact path="/todos/:id/edit" />
            <Route component={ShowTodo} exact path="/todos/:id" />
            <Route component={Signup} exact path="/signup" />
            <Route component={ErrorRoute}/>
        </Switch>
    </BrowserRouter>
)

export default Routes


