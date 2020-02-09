// Authentication form for login and signup
import React from "react"
import {Link} from "react-router-dom"

const UserForm = (props)=>(
      <div className="container mt-5 whiten-bg">
        <div className="row">
          <div className="col-sm-12 col-lg-6 offset-lg-3">
            <h1 className="font-weight-normal mb-5">
              {props.formTitle}
            </h1>
            
            <form onSubmit={props.onSubmit}>
            
              <div className="form-group">
                {!props.is_login &&
                <div>
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
                </div>
                }
              
                
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
                
                <button type="submit" className="btn btn-outline-info mt-3">
                  {props.submitBtn}
                </button>
                        
                <Link to="/todos" className="btn btn-link btn-outline-warning mt-3 ml-3">
                  Back to todos
                </Link>
                
              </div>
            </form>
          </div>
        </div>
      </div>
)

export default UserForm


