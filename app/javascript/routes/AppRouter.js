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
import AboutMe from "../components/AboutMe"
import axios from "axios"

class App extends React.Component {
    constructor(props) {
    super(props);
    this.state = { 
        isLoggedIn: false,
            user: {}
       };
        this.handleLogout = this.handleLogout.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }
    componentDidMount() {
        this.loginStatus();
      }
      loginStatus = () => {
        axios.get('/api/v1/logged_in', {withCredentials: true})
        .then(response => {
          if (response.data.logged_in) {
              this.handleLogin(response.data);
          } else {
            this.handleLogout();
          }
        })
        .catch(error => console.log('api errors:', error));
      }
    handleLogin(data){
        this.setState({
          isLoggedIn: true,
          user: data.user
        });
    }
    handleLogout(){
        this.setState({
        isLoggedIn: false,
        user: {}
        });
    }
    
    render(){
        const {user, isLoggedIn} = this.state;
        return(
            <BrowserRouter>
                <Route render={props => (<Nav {...props} user={user} handleLogout={this.handleLogout} loggedInStatus={isLoggedIn}/>)} />
                <Switch>
                
                    <Route component={Welcome} exact path="/" />
                    <Route component={Home} exact path="/todos" />
                    <Route exact path='/todos/new' render={props => (<NewTodo {...props} loggedInStatus={this.state.isLoggedIn} user={user}/>)} />
                    <Route component={EditTodo} exact path="/todos/:id/edit" />
                    <Route exact path='/todos/:id' render={props => (<ShowTodo {...props} loggedInStatus={this.state.isLoggedIn} currentUser={user}/>)} />
                    <Route exact path = "/signup" render = {props => (<Signup {...props} handleLogin={this.handleLogin} /> )}/>
                    <Route component={UpdateUser} exact path="/users/:id/edit" />
                    <Route component={AboutMe} exact path="/about" />
                    <Route exact path='/users/:id' render={props => (<UserProfile {...props} currentUser={user} loggedInStatus={isLoggedIn} DeleteTodoHandler={this.DeleteTodoHandler}/>)} />
                    <Route exact path='/login' render={props => (<Login {...props} handleLogin={this.handleLogin} loggedInStatus={isLoggedIn}/>)} />
                    <Route component={ErrorRoute}/>
                </Switch>
            </BrowserRouter>
    );}
}
export default App


