import {Route, BrowserRouter, Switch, Link, NavLink} from 'react-router-dom'
import React from 'react'
import Nav from "../components/MainNav"
import Welcome from "../components/Welcome"
import Home from "../components/HomePage"
import NewTodo from "../components/NewTodo"
import EditTodo from "../components/EditTodo"
import ErrorRoute from "../components/404"
import ShowTodo from "../components/ShowTodo"
import Signup from "../components/Signup"
import UserProfile from "../components/ShowUser"
import UpdateUser from "../components/EditUser"
import Login from "../components/Login"
import axios from "axios"

class App extends React.Component {
    constructor(props) {
    super(props);
    this.state = { 
        isLoggedIn: false,
            user: {}
       };
    }
    componentDidMount() {
        this.loginStatus()
      }
      loginStatus = () => {
        axios.get('/logged_in', {withCredentials: true})
        .then(response => {
          if (response.data.logged_in) {
            this.handleLogin(response)
          } else {
            this.handleLogout()
          }
        })
        .catch(error => console.log('api errors:', error))
      }
    handleLogin = (data) => {
        this.setState({
          isLoggedIn: true,
          user: data.user
        })
    }
    handleLogout = () => {
        this.setState({
        isLoggedIn: false,
        user: {}
        })
      }
    render(){
        return(
            <BrowserRouter>
                <Nav />
                <Switch>
                    <Route component={Welcome} exact path="/" />
                    <Route component={Home} exact path="/todos" />
                    <Route component={NewTodo} exact path="/todos/new" />
                    <Route component={EditTodo} exact path="/todos/:id/edit" />
                    <Route component={ShowTodo} exact path="/todos/:id" />
                    <Route component={Signup} exact path="/signup" />
                    <Route component={UserProfile} exact path="/users/:id" />
                    <Route component={UpdateUser} exact path="/users/:id/edit" />
                    <Route exact path='/login' render={props => (<Login {...props} handleLogin={this.handleLogin} loggedInStatus={this.state.isLoggedIn}/>)} />
                    <Route component={ErrorRoute}/>
                </Switch>
            </BrowserRouter>
    )}
}
export default App


