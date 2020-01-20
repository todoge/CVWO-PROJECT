import React from "react"
import {Link} from "react-router-dom"

const TodoList = (props)=>(
    <div className="container">
        <div className="text-white mb-3">
        <div className="card-header bg-purple" id="title-font">{props.title}</div>
            {props.list}
        </div>
    </div>
)
export default TodoList