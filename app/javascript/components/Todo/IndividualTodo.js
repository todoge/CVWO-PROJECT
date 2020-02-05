import React from "react"
import {Card} from "react-bootstrap"
import {Link} from "react-router-dom"
import Moment from "react-moment"
import "moment-timezone"
import "../../../assets/stylesheets/todo.scss"
import axios from "axios"
import {useState, useEffect} from "react"

const TodoItem = (props)=>{
    
    const [user, setUser] = useState({});
    
    useEffect(()=>{
        const CancelToken = axios.CancelToken;
        const source = CancelToken.source();

        const loadData = () => {
            // retrieve user 
            try {
            axios.get(`/api/v1/users/show/${props.todo.user_id}`, { cancelToken: source.token }).then(response => {
              setUser(response.data);
            });
            // clean up subscription using abort controller
            } catch (error) {
              if (axios.isCancel(error)) {
                console.log("cancelled");
              } else {
                throw error;
              }
            }
    };

    loadData();
    return () => {
      source.cancel();
    };
  }, []
    )
        
    
    // method to shorten strings for displaying preview
    String.prototype.trunc =
        function( n, useWordBoundary ){
            if (this.length <= n) { return this; }
            var subString = this.substr(0, n-1);
            return (useWordBoundary 
               ? subString.substr(0, subString.lastIndexOf(' ')) 
               : subString) + "...";
         };

    return(
        <div className="card-body bg-dark todo-item">
            <h5 className="card-title">{props.todo.title.trunc(25,true)}</h5>
            <p className="card-text">{props.todo.description.trunc(35)}</p>
            <div className="d-flex justify-content-between">
                <div>
                    <Link className="btn btn-sm btn-primary" to={"/todos/" + props.todo.id}>Show more</Link>
                    {props.delete && <button className="btn btn-md btn-warning btn-sm ml-2" onClick={()=>props.delete(props.todo.id)}>Delete</button>}
                </div>
                <div className="text-white">
                    <span>Created by <Link to={`/users/${user.id}`} className="text-info">{user.username}</Link><span> </span> 
                    <Moment fromNow>{props.todo.updated_at}</Moment></span>
                </div>
            </div>
            
        </div>
    )
};
    
export default TodoItem