import React from "react"
import TodoForm from "../Todo/TodoForm"
import axios from "axios"

class EditTodo extends React.Component {
    constructor(props) {
    super(props);
    this.state = { todo: { title: "", description: "" }, errors:[] };
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
      .then(response => {
        if(response.data.status === "unauthorized"){
                  this.props.history.push("/UNAUTHORIZED-ACCESS");
              }
              else if(response.data.status === "not_logged_in"){
                  this.props.history.push("/login");
              }
              else{
                  this.setState({ todo: response.data })
              }
      })
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
        .then(response => {
            if(response.data.status === '500'){
                this.setState({errors: response.data.errors});
            }
            else{
                this.props.history.push(`/todos/${_id}`)
            }
        })
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

  render() {
    return (
            <React.Fragment>
            {this.handleErrors()}
            <TodoForm onChange={this.onChange} onSubmit={this.onSubmit} 
                formTitle="Edit Todo" submitBtn="Edit!" 
                title={this.state.todo.title} description={this.state.todo.description}/>
            </React.Fragment>
    )}
}

export default EditTodo;