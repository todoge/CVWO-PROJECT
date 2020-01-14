// This is the skeleton component for the Todo form
import React from "react"
import UserForm from "../components/UserForm"
import axios from "axios"

class Login extends React.Component{
    constructor(props) {
    super(props);
    this.state = {
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
    const { username, email, password } = this.state;
    const token = document.querySelector('meta[name="csrf-token"]').content;
    axios.post("/login",{
        user: {
            email: email,
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
                formTitle="Login" submitBtn="Login!" 
                email = {this.state.email} password ={this.state.password}/>
        )
    }
}

export default Login