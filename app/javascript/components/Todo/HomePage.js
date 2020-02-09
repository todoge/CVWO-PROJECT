import React from "react"
//import "../../../assets/stylesheets/todo.scss"
import TodoItem from "../Todo/IndividualTodo"
import TodoList from "../Todo/TodoList"
import axios from "axios"
import {Link} from "react-router-dom"
import Flash from "../Messages/Flash"

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Todos: []
    };
    }
    
    source = axios.CancelToken.source();
    abortController = new AbortController();
  
    fetchUser = async() => {
    const url = "/api/v1/todos/index";
    try {
      let result = await axios.get(url, {
        cancelToken: this.source.token,
        withCredentials: true
      });
      return result.data;
    } catch (error) {
      if (axios.isCancel(error)) {
        console.log("Request canceled", error.message);
        throw new Error("Cancelled");
      }
    }
    };
    componentDidMount() {
    this.fetchUser()
        .then(data => this.setState({Todos: data}))
        .catch(() => this.props.history.push("/PageNotFound"));
  }
    
    componentWillUnmount() {
        this.source.cancel("Operation canceled by the user.");
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