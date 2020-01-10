import React from "react"
import "../../assets/stylesheets/todo.scss"
import TodoItem from "../components/IndividualTodo"
import {Link} from "react-router-dom"

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
            <div className="container-fluid">
                <div className="row justify-content-md-center">
                    <div className="col-3">
                        
                    </div>
                    <div className="col-6">
                        <div className="text-white mb-3">
                        <div className="card-header bg-purple" id="title-font">All the things to do....</div>
                            {Todos.map((item)=>(<TodoItem key={item.id} todo={item} Delete={this.DeleteTodoHandler}/>))}
                        </div>
                    </div>
                    <div className="col-3">
                    <Link to="/todos/new" className="btn my-large-btn">New Todo</Link>
                    </div>
                </div>
            </div>
        )
  }
  
}

export default App