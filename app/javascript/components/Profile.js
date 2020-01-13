import React from "react"
import {Link} from "react-router-dom"
const Profile = (props)=>(
    <div className="card">
        <div className="card-header">
          Profile Page
        </div>
        <div className="card-body">
            <h5 className="card-title">{props.user.username}</h5>
            <p className="card-text">{props.user.email}</p>
            <Link to= {"/users/" + props.user.id + "edit"} className="btn btn-primary">Edit</Link>
        </div>
    </div>
)

export default Profile