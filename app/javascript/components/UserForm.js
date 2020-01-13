import React from "react"
import {Link} from "react-router-dom"

const UserForm = (props)=>(
      <div className="container mt-5">
        <div className="row">
          <div className="col-sm-12 col-lg-6 offset-lg-3">
            <h1 className="font-weight-normal mb-5">
              {props.formTitle}
            </h1>
            
            <form onSubmit={props.onSubmit}>
              <div className="form-group">
              
                <label htmlFor="user-username">Username</label>
                <input
                  type="text"
                  id="user-username"
                  name="username"
                  className="form-control"
                  value={props.username || ""}
                  required
                  onChange={props.onChange}
                />
              
                <label htmlFor="user-email">Email</label>
                <input
                  type="text"
                  id="user-email"
                  name="email"
                  value={props.email || ""}
                  className="form-control"
                  required
                  onChange={props.onChange}
                />
                
                <label htmlFor="user-password">Password</label>
                <input
                  type="text"
                  id="user-password"
                  name="password"
                  className="form-control"
                  required
                  onChange={props.onChange}
                />
                
                <button type="submit" className="btn custom-button mt-3">
                  {props.submitBtn}
                </button>
                        
                <Link to="/todos" className="btn btn-link mt-3">
                  Back to todos
                </Link>
                
              </div>
            </form>
          </div>
        </div>
      </div>
)

export default UserForm