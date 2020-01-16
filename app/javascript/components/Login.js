// This is the skeleton component for the Todo form
import React from "react"
import UserForm from "../components/UserForm"
import axios from "axios"

class Login extends React.Component{
    constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      errors:""
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
          <div>
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
                <UserForm onChange={this.onChange} onSubmit={this.onSubmit} 
                    formTitle="Login" submitBtn="Login!" is_login={true}
                    email = {this.state.email} password ={this.state.password}/>
            </React.Fragment>
        )
    }
}

export default Login