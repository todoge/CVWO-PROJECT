// Dependencies
import {Route, BrowserRouter, Switch, Link, NavLink} from 'react-router-dom'
import React from 'react'
import axios from "axios"
// redux
import {Provider} from "react-redux"
import configureStore from "../components/Store/ConfigureStore"
import addFlashMessage from "../components/Messages/Actions/addFlashMessage"

// pages 
import Nav from "../components/Navbar/MainNav"
import Welcome from "../components/Pages/Welcome"
import ErrorRoute from "../components/Errors/ErrorRoute"
import AboutMe from "../components/Pages/AboutMe"

// Todos
import Home from "../components/Todo/HomePage"
import NewTodo from "../components/Todo/NewTodo"
import EditTodo from "../components/Todo/EditTodo"
import ShowTodo from "../components/Todo/ShowTodo"

// Users
import Signup from "../components/Users/Signup"
import UserProfile from "../components/Users/ShowUser"
import UpdateUser from "../components/Users/EditUser"
import Login from "../components/Users/Login"

const store = configureStore();
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
            <Provider store={store}>
                <BrowserRouter>
                    <Route render={props => (<Nav {...props} user={user} handleLogout={this.handleLogout} loggedInStatus={isLoggedIn}/>)} />
                    <Switch>
                        <Route component={Welcome} exact path="/" />
                        <Route component={Home} exact path="/todos" />
                        <Route exact path='/todos/new' render={props => (<NewTodo {...props} loggedInStatus={this.state.isLoggedIn} user={user}/>)} />
                        <Route component={EditTodo} exact path="/todos/:id/edit" />
                        <Route exact path='/todos/:id' render={props => (<ShowTodo {...props} loggedInStatus={this.state.isLoggedIn} currentUser={user}/>)} />
                        <Route exact path = "/signup" render = {props => (<Signup {...props} handleLogin={this.handleLogin} handleLogout={this.handleLogout} /> )}/>
                        <Route component={UpdateUser} exact path="/users/:id/edit" />
                        <Route component={AboutMe} exact path="/about" />
                        <Route exact path='/users/:id' render={props => (<UserProfile {...props} currentUser={user} loggedInStatus={isLoggedIn} DeleteTodoHandler={this.DeleteTodoHandler}/>)} />
                        <Route exact path='/login' render={props => (<Login {...props} addFlashMessage={addFlashMessage} handleLogin={this.handleLogin} loggedInStatus={isLoggedIn}/>)} />
                        <Route exact path='/UNAUTHORIZED-ACCESS' render={props => (<ErrorRoute {...props} status="UNAUTHORIZED ACCESS" />)}/>
                        <Route render={props => (<ErrorRoute {...props} status="404" />)}/>
                  
                    </Switch>
                </BrowserRouter>
            </Provider>
    );}
}
export default App;


