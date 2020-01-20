//Show user profile
import React from "react"
import axios from "axios"
import Profile from "../components/Profile"
import TodoItem from "../components/IndividualTodo"

class ShowUser extends React.Component{
    constructor(props) {
       super(props);
       this.state = { loaded: false, user:{}, errors:""};
       this.DeleteTodoHandler = this.DeleteTodoHandler.bind(this);
     }

    componentDidMount() {
        const {
          match: {
            params: { id }
          }
        } = this.props;

        const url = `/api/v1/users/show/${id}`;
        axios.get(url)
            .then(response => this.setState({ loaded: true, user: response.data }))
            .catch(() => this.props.history.push("/PAGENOTFOUND"));
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
    
    content(){
        console.log(this.state.user)
            const TodoList = this.state.user.todos;
                return(
                    <React.Fragment>
                        <Profile user={this.state.user} />
                        { this.props.isLoggedIn &&
                        <div>
                        <h1 className="mt-5 mb-3 text-center">All My Posts</h1>
                            <div className="container">
                                <div className="text-white">
                                    
                                        {TodoList.map((item)=>(<TodoItem key={item.id} 
                                        todo={item} />))}
                               
                                </div>
                            </div>
                        </div>
                        }
                    </React.Fragment>
        )
    }
    
    render(){
        return(
                this.state.loaded && this.content()
        )
    }

}

export default ShowUser