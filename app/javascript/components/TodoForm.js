// This is the skeleton component for the Todo form

import React from "react"
import {Link} from "react-router-dom"

const TodoForm = (props)=>{
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-sm-12 col-lg-6 offset-lg-3">
            <h1 className="font-weight-normal mb-5">
              {props.formTitle}
            </h1>
            
            <form onSubmit={props.onSubmit}>
              <div className="form-group">
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  name="title"
                  value={props.title || ""}
                  className="form-control"
                  required
                  onChange={props.onChange}
                />
              </div>
              
              <label htmlFor="description">Description</label>
              <textarea
                className="form-control"
                value={props.description || ""}
                name="description"
                rows="5"
                required
                onChange={props.onChange}
              />
              <button type="submit" className="btn custom-button mt-3">
                {props.submitBtn}
              </button>
              <Link to="/todos" className="btn btn-link mt-3">
                Back to todos
              </Link>
            </form>
          </div>
        </div>
      </div>
    );
}

export default TodoForm