// Template for holding all the todos a component. To be used with individual todos
import React from "react"
import "../../../assets/stylesheets/todo.scss"

const TodoList = (props)=>(
    <div className="container">
        <div className="text-white mb-3">
        <div className="card-header bg-purple" id="title-font">{props.title}</div>
            {props.list}
        </div>
    </div>
);
export default TodoList