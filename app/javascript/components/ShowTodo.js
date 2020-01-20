// This component shows the Entire Todo Post
import React from "react";
import axios from "axios"
import ExpandTodo from "../components/ExpandTodoTemplate"

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
        .then(() => this.props.history.goBack())
        .catch(error => console.log(error.message));
    }
    
  render() {
      const {todo} = this.state;
      const {loggedInStatus, currentUser} = this.props;
      const authenticated = loggedInStatus && (currentUser.id === todo.user_id);
        return(
                <React.Fragment>
                    <ExpandTodo todo={todo} authenticated={authenticated} DeleteTodoHandler={this.DeleteTodoHandler}/>
                </React.Fragment>
        )
  }

}

export default ShowTodo;