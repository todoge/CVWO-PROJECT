import React from "react"
//import "../../../assets/stylesheets/todo.scss"
import TodoItem from "../Todo/IndividualTodo"
import TodoList from "../Todo/TodoList"
import axios from "axios"
import {Link} from "react-router-dom"
import Flash from "../Messages/Flash"
import "../../../assets/stylesheets/todo.scss"

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Todos: []
    };
    }
   
    componentDidMount() {
    const url = "/api/v1/todos/index";
    axios.get(url)
        .then(response => this.setState({Todos: response.data}))
        .catch(() => this.props.history.push("/PageNotFound"));
    }
    
    componentWillUnmount() {
        
    }
    
    render(){
        const {Todos} = this.state;
        return(
            <div className="container-fluid">
                <div className="row justify-content-md-center">
                    <div className="col-2">
                    
                    </div>
                    <div className="col-8">
                        <TodoList title="All the things to do...." 
                            list={Todos.map((item)=>(<TodoItem key={item.id} 
                            todo={item} />))}
                        />
                    </div>
                    <div className="col-2">
                    <Link to="/todos/new" className="btn my-large-btn">New Todo</Link>
                    </div>
                </div>
            </div>
        );
    }
  
}

export default Home