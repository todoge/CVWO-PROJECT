import React from "react"
import "../../assets/stylesheets/todo.scss"
import TodoItem from "../components/IndividualTodo"
import TodoList from "../components/TodoList"
import axios from "axios"
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Todos: [],
    };
    }
    CancelToken = axios.CancelToken;
    source = this.CancelToken.source();
    abortController = new AbortController();
  
    fetchUser = async () => {
    const url = "/api/v1/todos/index";
    try {
      let result = await axios.get(url, {
        cancelToken: this.source.token
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
            <TodoList title="All the things to do...." 
                list={Todos.map((item)=>(<TodoItem key={item.id} 
                todo={item} />))}
            />
        );
    }
  
}

export default Home