import React from "react"
import {Card} from "react-bootstrap"
import "../../assets/stylesheets/todo.scss"

const TodoItem = (props)=>(
        <div className="card-body bg-dark todo-item">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.description}</p>
        </div>
);
    
export default TodoItem