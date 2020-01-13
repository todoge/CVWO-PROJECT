// This is the skeleton component for the Todo form
import React from "react"
import UserForm from "../components/UserForm"
import axios from "axios"

class Signup extends React.Component{
    constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: ""
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
    .then(response => this.props.history.push(`/todos`))
    .catch(error => console.log(error.message));
}
 
    render(){
        return(
            <UserForm onChange={this.onChange} onSubmit={this.onSubmit} 
                formTitle="Create a new account" submitBtn="Signup!" 
                username ={this.state.username} email={this.state.email}
                password ={this.state.password}/>
        )
    }
}

export default Signup