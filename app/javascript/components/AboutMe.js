import React from "react"
import {Link} from "react-router-dom"

const Aboutme = ()=>(
    <React.Fragment>
    <div className="container mt-5">
        
        <h1>A little about me</h1>
            <div className="font-weight-normal">
                <p>Hi! My name is Jun Siang, currently a first year undergrad in NUS.</p>
                <p>This simple Todo site is created for a selection process for the CVWO which is a volunteer project for welfare organisations</p>
                <p>Please view my other projects</p>
            </div>
            <br />
            <div className="font-weight-light">
                <h3>About the App</h3>
                <p>Gérer is French for "Manage"</p>
                <p>This project is created using Reactjs and Ruby on Rails</p>
                <p>Styling is done with a CSS Library (Bootstrap 4)</p>
                <p>Client-side Routing is done using React-Router-Dom</p>
                <p>Database on sqlite3 in development and postgreSQL in production on Heroku</p>
                <p>Encryption with Bcrypt</p>
            </div>
            <p className="font-italic">This framework is still relatively new to me so implementation might not be great.</p>
            
        <Link className="btn btn-primary text-center" to="/todos">Back to Todos</Link>
    </div>
    </React.Fragment>
)

export default Aboutme