import React from "react"
import {Card} from "react-bootstrap"
import {Link} from "react-router-dom"
import "../../assets/stylesheets/todo.scss"

const TodoItem = (props)=>(
        <div className="card-body bg-dark todo-item">
            <h5 className="card-title">{props.todo.title}</h5>
            <p className="card-text">{props.todo.description}</p>
            <button onClick={()=>props.Delete(props.todo.id)}>Delete</button>
            <Link to={"/todos/" + props.todo.id}>Show</Link>
        </div>
);
    
export default TodoItem