import React from "react"
import {Link} from "react-router-dom"

const TodoList = (props)=>(
    <div className="container-fluid">
        <div className="row justify-content-md-center">
            <div className="col-3">

            </div>
            <div className="col-6">
                <div className="text-white mb-3">
                <div className="card-header bg-purple" id="title-font">{props.title}</div>
                    {props.list}
                </div>
            </div>
            <div className="col-3">
            <Link to="/todos/new" className="btn my-large-btn">New Todo</Link>
            </div>
        </div>
    </div>
)
export default TodoList