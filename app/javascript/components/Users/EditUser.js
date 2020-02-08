//Edit user profile
import React from "react"
import axios from "axios"
import UserForm from "../Users/UserForm"

class EditUser extends React.Component{
    constructor(props) {
        super(props);
        this.state = { user:{
               email:"",
               username:"",
               password:""
        },
        errors: []
    };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
     }

    componentDidMount() {
        const {
          match: {
            params: { id }
          }
        } = this.props;

        const url = `/api/v1/users/edit/${id}`;
        axios.get(url)
            .then(response => {
                console.log(response.data.status);
                if(response.data.status === "unauthorized"){
                    this.props.history.push("/UNAUTHORIZED-ACCESS");
                }
                else if(response.data.status === "not_logged_in"){
                    this.props.history.push("/login");
                }
                else{
                    this.setState({ user: response.data });
                }
            });
 
    }
    
    onChange(event) {
        event.persist();
        this.setState((prevState)=>{
            return {
            user:{
                ...prevState.user,
                [event.target.name]: event.target.value
            }};
        });
    }
    
    onSubmit(event){
    event.preventDefault();
    const _id = this.props.match.params.id;
    const url = `/api/v1/users/${_id}/update`;
    const { username, email, password } = this.state.user;
    const token = document.querySelector('meta[name="csrf-token"]').content;
    axios.put(url,{
        user: {
            email: email,
            username: username,
            password: password
        }
    },
        {with_credentials: true,
        headers: 
            {
              "X-CSRF-Token": token,
              "Content-Type": "application/json"
            }}
    )
    .then(response => {
        if (response.data.status === "401") {
            this.setState({
              errors: response.data.errors
            })
          } else {
            this.props.history.push(`/users/${_id}`);
          }
        });
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
                    formTitle="Edit Profile Page" submitBtn="Edit Profile!" 
                    username ={this.state.user.username} email={this.state.user.email} />
            </React.Fragment>
        )
    }

}

export default EditUser

