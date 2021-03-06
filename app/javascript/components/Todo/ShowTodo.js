// This component shows the Entire Todo Post
import React from "react";
import axios from "axios"
import ExpandTodo from "../Todo/ExpandTodoTemplate"
import {Link} from "react-router-dom"

class ShowTodo extends React.Component {
    constructor(props) {
        super(props);
        this.state = { todo:[] };
        this.DeleteTodoHandler = this.DeleteTodoHandler.bind(this);
    }

    componentDidMount() {
      const {
        match: {
          params: { id }
        }
      } = this.props;

      const url = `/api/v1/show/${id}`;

      axios.get(url,{withCredential:true})
        .then(response => this.setState({ todo: response.data }))
        .catch(() => this.props.history.push("/todos/error"));
    }
    
    DeleteTodoHandler(id){
    const url = `/api/v1/todos/${id}`;
    const token = document.querySelector('meta[name="csrf-token"]').content;

    axios.delete(url,{withCredentials: true,
        headers: 
            {
              "X-CSRF-Token": token,
              "Content-Type": "application/json"
            }})
        .then((response) => this.props.history.push("/todos"))
        .catch(error => console.log(error.message));
    }
    
  render() {
      const {todo} = this.state;
      const {loggedInStatus, currentUser} = this.props;
      const authenticated = loggedInStatus && (currentUser.id === todo.user_id);
        return(
                <div className="container-fluid">
                <div className="row justify-content-md-center">
                    <div className="col-2">
                    
                    </div>
                    <div className="col-8">
                        <ExpandTodo todo={todo} authenticated={authenticated} DeleteTodoHandler={this.DeleteTodoHandler}/>
                    </div>
                    <div className="col-2">
                    <Link to="/todos" className="btn my-large-btn">Back to Todos</Link>
                    </div>
                </div>
            </div>
        )
  }

}

export default ShowTodo;