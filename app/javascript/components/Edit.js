import React from "react"
import TodoForm from "../components/TodoForm"

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
    const url = `/api/v1/show/${id}`;
    fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then(response => this.setState({ todo: response }))
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

      if (this.state.todo.title.length === 0 || this.state.todo.description.length === 0)
        return;

      const body = {
        title,
        description
      };

    const token = document.querySelector('meta[name="csrf-token"]').content;
    fetch(url, {
      method: "PUT",
      headers: {
        "X-CSRF-Token": token,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
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