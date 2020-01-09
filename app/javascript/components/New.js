import React from "react"
import TodoForm from "../components/TodoForm"

class NewTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: ""
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.stripHtmlEntities = this.stripHtmlEntities.bind(this);
  }

  stripHtmlEntities(str) {
    return String(str)
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }

  onChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  onSubmit(event) {
    event.preventDefault();
    const url = "/api/v1/todos/create";
    const { title, description } = this.state;

    if (title.length === 0 || description.length === 0)
      return;

    const body = {
      title,
      description
    };

    const token = document.querySelector('meta[name="csrf-token"]').content;
    fetch(url, {
      method: "POST",
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