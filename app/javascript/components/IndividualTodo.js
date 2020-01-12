import React from "react"
import {Card} from "react-bootstrap"
import {Link} from "react-router-dom"
import Moment from "react-moment"
import "../../assets/stylesheets/todo.scss"

const TodoItem = (props)=>{
    
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
                    <button className="btn btn-sm btn-warning" onClick={()=>props.Delete(props.todo.id)}>Delete</button>
                    <Link className="btn btn-sm btn-primary ml-3" to={"/todos/" + props.todo.id}>Show</Link>
                </div>
                <span className="text-white">
                    Updated <Moment parse="YYYY-MM-DD HH:mm" fromNow>{props.todo.updated_at}</Moment>
                </span>
            </div>
            
        </div>
    )
};
    
export default TodoItem