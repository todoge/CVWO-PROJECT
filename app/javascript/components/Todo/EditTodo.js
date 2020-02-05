import React from "react"
import TodoForm from "../Todo/TodoForm"
import axios from "axios"

class EditTodo extends React.Component {
    constructor(props) {
    super(props);
    this.state = { todo: { title: "", description: "" } };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    const {
      match: {
        params: { id }
      }
    } = this.props;
    const url = `/api/v1/edit/${id}`;
    axios.get(url)
      .then(response => console.log(response.data))
      .catch(() => this.props.history.push("/todos/error"));
  }


    onChange(event) {
        event.persist();
        this.setState((prevState)=>{
            return {
            todo:{
                ...prevState.todo,
                [event.target.name]: event.target.value
            }}
        });
    }
    
    onSubmit(event) {
    event.preventDefault();
    const _id = this.props.match.params.id;
    const url = `/api/v1/${_id}/update`;
    const { title, description } = this.state.todo;

    const token = document.querySelector('meta[name="csrf-token"]').content;
      
    axios.put(url,{
    todo: {
        ...this.state.todo,
        title: title,
        description: description
    }
    },
        {with_credentials: true,
        headers: 
            {
              "X-CSRF-Token": token,
              "Content-Type": "application/json"
            }}
    )
        .then(response => this.props.history.push(`/todos/${_id}`))
        .catch(error => console.log(error.message));
    }


  render() {
    return (
           <TodoForm onChange={this.onChange} onSubmit={this.onSubmit} 
                formTitle="Edit Todo" submitBtn="Edit!" 
                title={this.state.todo.title} description={this.state.todo.description}/>
    )}
}

export default EditTodo;