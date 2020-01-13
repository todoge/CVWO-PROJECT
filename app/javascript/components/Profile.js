//Template for rendering User Profile

import React from "react"
import {Link} from "react-router-dom"
import Moment from "react-moment"

const Profile = (props)=>(
    <div className="card">
        <div className="card-header">
          Profile Page
        </div>
        <div className="card-body">
            <h5 className="card-title">{props.user.username}</h5>
            <p className="card-text">{props.user.email}</p>
            <div className="d-flex justify-content-between">
                <span>Joined since <Moment parse="YYYY-MM HH:mm" format="YYYY/MM" >{props.user.created_at}</Moment></span>
                <Link to= {"/users/" + props.user.id + "/edit"} className="btn btn-primary">Edit</Link>
            </div>
        </div>
    </div>
)

export default Profile