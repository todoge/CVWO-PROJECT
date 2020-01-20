import React from "react"
import { Link } from "react-router-dom";
import Moment from "react-moment"
import 'moment-timezone'

const ExpandTodo = (props)=>{
    const { todo } = props;
    return(   
        <div className="container">
            <div className="card text-center">
                <div className="card-header">
                  Show Todo
                </div>
                <div className="card-body">
                    <h5 className="card-title">{todo.title}</h5>
                    <p className="card-text">{todo.description}</p>
                        {props.authenticated && 
                        <div>
                            <Link to={"/todos/" + todo.id + "/edit"} className="btn btn-md btn-primary mr-1">Edit Me</Link>
                            <button className="btn btn-md btn-danger ml-1" onClick={()=>props.DeleteTodoHandler(todo.id)}>Delete</button>
                        </div>
                        }
                </div>
                <div className="card-footer text-muted">
                    <span>
                        <p>Updated <Moment fromNow>{todo.updated_at}</Moment></p>
                        <p>Created on <Moment format="YYYY/MM/DD">{todo.created_at}</Moment></p>
                    </span>
                </div>
              </div>
        </div>
    );
};

export default ExpandTodo;