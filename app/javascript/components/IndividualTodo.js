import React from "react"
import {Card} from "react-bootstrap"
import "../../assets/stylesheets/todo.scss"

const TodoItem = (props)=>(
        <div className="card-body bg-dark todo-item">
            <h5 className="card-title">{props.todo.title}</h5>
            <p className="card-text">{props.todo.description}</p>
            <button onClick={()=>props.Delete(props.todo.id)}>Delete</button>
        </div>
);
    
export default TodoItem