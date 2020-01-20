import React from "react"
import { Link } from "react-router-dom";
import Moment from "react-moment"
import 'moment-timezone'

const ExpandTodo = (props)=>{
    const { todo } = props;
    return(
            <div className="container-fluid">
                <div className="row justify-content-md-center">
                    <div className="col-3">
                        
                    </div>
                    <div className="col-6">
                        <div className="card ">
                            <h5 className="card-header">Show Todo</h5>
                            <div className="card-body">
                                <h5 className="card-title">{todo.title}</h5>
                                <p className="card-text">{todo.description}</p>
                                
                                <div className="d-flex justify-content-between">
                                    {props.authenticated && 
                                        <div>
                                            <Link to={"/todos/" + todo.id + "/edit"} className="btn btn-md btn-success">Edit Me</Link>
                                        </div>
                                    }
                                    <span>
                                        <p>Updated <Moment fromNow>{todo.updated_at}</Moment></p>
                                        <p>Created on <Moment format="YYYY/MM/DD">{todo.created_at}</Moment></p>
                                    </span>
                                </div>
                
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <Link to="/todos/new" className="btn btn-primary">New Todo</Link>
                    </div>
                </div>
            </div>
    );
};

export default ExpandTodo;