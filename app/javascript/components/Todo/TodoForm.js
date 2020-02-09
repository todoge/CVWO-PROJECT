// This is the form to create and edit todos.
import React from "react"
import {Link} from "react-router-dom"

const TodoForm = (props)=>{
    return (
      <div className="container whiten-bg my-5 py-5">
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
                  maxlength='50'
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
                maxlength='200'
                required
                onChange={props.onChange}
              />
              <button type="submit" className="btn btn btn-outline-success mt-3">
                {props.submitBtn}
              </button>
              <Link to="/todos" className="btn btn-outline-warning mt-3 ml-3">
                Back to todos
              </Link>
            </form>
          </div>
        </div>
      </div>
    );
}

export default TodoForm