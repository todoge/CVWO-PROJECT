import React from "react"
import TodoForm from "../components/TodoForm"
import axios from "axios"

class NewTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      user_id: "",
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  
    componentDidMount() {
        if (this.props.loggedInStatus === false){
            this.props.history.push(`/login`);
        }
        this.setState({
            user_id: this.props.user.id
        })
    }
  
  onChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  onSubmit(event) {
    event.preventDefault();
    const url = "/api/v1/todos/create";
    const { title, description, user_id} = this.state;

    if (title.length === 0 || description.length === 0)
      return;

    const todo = {
      title,
      description,
      user_id
    };

    const token = document.querySelector('meta[name="csrf-token"]').content;  
    axios.post(url, {todo}, {withCredentials: true,
    headers: 
    {
      "X-CSRF-Token": token,
      "Content-Type": "application/json"
    }})
   .then(response => this.props.history.push(`/todos`))
   .catch(error => console.log(error.message));
  }

  render() {
        return(
            <TodoForm onChange={this.onChange} onSubmit={this.onSubmit} 
                formTitle="Create a new Todo" submitBtn="Create!" 
                title={this.state.title} description={this.state.description}/>
        )
  }

}

export default NewTodo;