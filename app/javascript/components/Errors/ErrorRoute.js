import React from "react"
import {Link} from "react-router-dom"

const ErrorRoute = (props)=>(
        <React.Fragment>
            <h1>Error status: {props.status}</h1>
            <Link to="/todos">Return Back to Todos</Link>
        </React.Fragment>
)

export default ErrorRoute