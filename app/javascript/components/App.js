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
                            {Todos.map((item)=>(<TodoItem key={item.id} title={item.title} description = {item.description}/>))}
                        </div>
                    </div>
                    <div className="col-3">
                    <Link to="/todos/new" className="btn btn-primary">New Todo</Link>
                    </div>
                </div>
            </div>
        )
  }
  
}

export default App