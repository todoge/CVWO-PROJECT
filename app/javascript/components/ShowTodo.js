// This component shows the Entire Todo Post
import React from "react";
import axios from "axios"
import ExpandTodo from "../components/ExpandTodoTemplate"

class ShowTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { todo:[] };
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

  render() {
      const {todo} = this.state;
      const {loggedInStatus, currentUser} = this.props;
      const authenticated = loggedInStatus && (currentUser.id === todo.user_id);
        return(
                <React.Fragment>
                    <ExpandTodo todo={todo} authenticated={authenticated} />
                </React.Fragment>
        )
  }

}

export default ShowTodo;