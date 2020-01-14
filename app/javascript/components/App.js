import React from "react"
import "../../assets/stylesheets/todo.scss"
import TodoItem from "../components/IndividualTodo"
import TodoList from "../components/TodoList"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Todos: []
    };
    this.DeleteTodoHandler = this.DeleteTodoHandler.bind(this);
  }
  
  componentDidMount() {
      const url = "/api/v1/todos/index";;
      fetch(url)
        .then(response => {
          if (response.ok) {
            return response.json();
          }
          throw new Error("Network response was not ok.");
        })
        .then(response => this.setState({ Todos: response }))
        .catch(() => this.props.history.push("/PageNotFound"));
  }
  
  DeleteTodoHandler(id){
    const url = `/api/v1/todos/${id}`;
    const token = document.querySelector('meta[name="csrf-token"]').content;

    fetch(url, {
      method: "DELETE",
      headers: {
        "X-CSRF-Token": token,
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then(() => this.props.history.push("/"))
      .then(() => this.props.history.goBack())
      .catch(error => console.log(error.message));
  }
  
    render(){
        const {Todos} = this.state;
            return(
                    <TodoList title="All the things to do...." 
                    list={Todos.map((item)=>(<TodoItem key={item.id} 
                    todo={item} Delete={this.DeleteTodoHandler}/>))}/>
            )
    }
  
}

export default App