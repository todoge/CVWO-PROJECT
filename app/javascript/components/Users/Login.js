// Handles user login
import React from "react"
import UserForm from "../Users/UserForm"
import axios from "axios"

class Login extends React.Component{
    constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      errors:[]
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    }
  
    onChange(event) {
      this.setState({ [event.target.name]: event.target.value });
    }
    
    onSubmit(event){
    event.preventDefault();
    const {email, password} = this.state;
    let user = {
        email: email,
        password: password
    }
    const token = document.querySelector('meta[name="csrf-token"]').content;
    axios.post('/api/v1/login', {user}, {withCredentials: true,
        headers: 
        {
          "X-CSRF-Token": token,
          "Content-Type": "application/json"
        }})
        .then(response => {
          if (response.data.logged_in) {
            this.props.handleLogin(response.data);
            this.redirect();
          } else {
            this.setState({
              errors: response.data.errors
            });
          }
        })
        .catch(error => console.log('api errors:', error));
    };
    redirect = () => {
        this.props.history.push('/todos');
    }
    handleErrors = () => {
        return (
            this.state.errors.length !== 0 && 
            <div className="alert alert-danger mx-3" role="alert">
                <ul>
                {this.state.errors.map(error => {
                    return <li key={error}>{error}</li>
                  })}
                </ul>
            </div>
        );
      }

    render(){
        return(
            <React.Fragment>
                {this.handleErrors()}
                <UserForm onChange={this.onChange} onSubmit={this.onSubmit} 
                    formTitle="Login" submitBtn="Login!" is_login={true}
                    email = {this.state.email} password ={this.state.password}/>
            </React.Fragment>
        )
    }
}

export default Login