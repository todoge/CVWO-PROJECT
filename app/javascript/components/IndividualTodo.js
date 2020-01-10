import React from "react"
import {Card} from "react-bootstrap"
import {Link} from "react-router-dom"
import Moment from "react-moment"
import "../../assets/stylesheets/todo.scss"

const TodoItem = (props)=>(
        <div className="card-body bg-dark todo-item">
            <h5 className="card-title">{props.todo.title}</h5>
            <p className="card-text">{props.todo.description}</p>
            <div className="d-flex justify-content-between">
                <div>
                    <button className="btn btn-sm btn-primary" onClick={()=>props.Delete(props.todo.id)}>Delete</button>
                    <Link className="btn btn-sm btn-primary ml-3" to={"/todos/" + props.todo.id}>Show</Link>
                </div>
                <span className="text-white">
                    Updated <Moment parse="YYYY-MM-DD HH:mm" fromNow>{props.todo.updated_at}</Moment>
                </span>
            </div>
            
        </div>
);
    
export default TodoItem