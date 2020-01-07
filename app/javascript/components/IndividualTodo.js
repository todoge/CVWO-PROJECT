import React from "react"
import {Card} from "react-bootstrap"

const TodoItem = (props)=>(
        <div className="card-body bg-dark">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.description}</p>
        </div>
);
    
export default TodoItem