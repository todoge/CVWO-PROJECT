//Template for rendering User Profile
import React from "react"
import {Link} from "react-router-dom"
import Moment from "react-moment"
import Gravatar from 'react-gravatar'

const Profile = (props)=>(
    <section className="container">
        <div className="card">
        <span className="card-header">Profile Page</span>
            <div className="card-body">
                <div className="d-flex justify-content-center">
                    <div className="text-center">
                    <Gravatar email={props.user.email} size={150} />
                    <h5 className="card-title">{props.user.username}</h5>
                    <p className="card-text">{props.user.email}</p>
                    </div>
                </div>
                <div className="d-flex justify-content-between">
                    <span>Joined since <Moment parse="YYYY-MM HH:mm" format="YYYY/MM" >{props.user.created_at}</Moment></span>
                    {props.authenticated && <Link to= {"/users/" + props.user.id + "/edit"} className="btn-lg btn-primary">Edit</Link>}
                </div>
            </div>
        </div>
    </section>
)

export default Profile