//Show user profile
import React from "react"
import axios from "axios"
import Profile from "../components/Profile"
import TodoItem from "../components/IndividualTodo"
import TodoList from "../components/TodoList"

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

    axios.delete(url,{withCredentials: true,
        headers: 
            {
              "X-CSRF-Token": token,
              "Content-Type": "application/json"
            }})
        .then(() => this.props.history.push("/"))
        .then(() => this.props.history.goBack())
        .catch(error => console.log(error.message));
    }
    
    content(){
                const {user} = this.state;
                const {loggedInStatus, currentUser} = this.props;
                const authenticated = loggedInStatus && (currentUser.id === user.id);
                return(
                    <React.Fragment>
                        <Profile user={user} authenticated={authenticated} />
                        <div>
                        <h1 className="mt-5 mb-3 text-center">View All {user.username}'s Posts</h1>
                            <div className="container">
                                <div className="text-white">
                                    <TodoList title="All the things to do...." 
                                    list={user.todos.map((item)=>(<TodoItem key={item.id} 
                                    todo={item} delete={ authenticated ? this.DeleteTodoHandler : null}/>))}
                                    />
                                </div>
                            </div>
                        </div>
                        
                    </React.Fragment>
        );
    }
    
    render(){
        return(
                this.state.loaded && this.content()
        )
    }

}

export default ShowUser