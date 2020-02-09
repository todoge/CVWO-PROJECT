// This is the skeleton component for the Todo form
import React from "react"
import UserForm from "../Users/UserForm"
import axios from "axios"

class Signup extends React.Component{
    constructor(props) {
    super(props);
    this.state = {
      username: "",
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
        const url = `/api/v1/users/create`;
        const { username, email, password } = this.state;
        const token = document.querySelector('meta[name="csrf-token"]').content;
        axios.post(url,{
            user: {
                email: email,
                username: username,
                password: password
            }
        },
            {with_credentials: true,headers: 
            {
              "X-CSRF-Token": token,
              "Content-Type": "application/json"
            }}
        )
        .then(response => {
          if (response.data.status === 'created') {
            this.props.handleLogout();
            this.props.handleLogin(response.data);
            this.props.history.push(`/todos`);
          } else {
            this.setState({
              errors: response.data.errors
            })
          }
        })
        .catch(error => console.log('api errors:', error))
    };
    
    handleErrors = () => {
        return (
                this.state.errors.length !== 0 && 
                <div className="alert alert-danger mx-3" role="alert">
                  <ul>
                  {this.state.errors.map((error) => {
                    return <li key={error}>{error}</li>
                  })}
                  </ul> 
                </div>
            )
    }

    render(){
        return(
            <React.Fragment>
            {this.handleErrors()}
            <UserForm onChange={this.onChange} onSubmit={this.onSubmit} 
                formTitle="Create a new account" submitBtn="Signup!" 
                username ={this.state.username} email={this.state.email}
                password ={this.state.password}/>
            </React.Fragment>
        )
    }
}

export default Signup