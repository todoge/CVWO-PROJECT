import React from "react"
import {Link} from "react-router-dom"

const ErrorRoute = ()=>(
        <React.Fragment>
            <h1>404 Error</h1>
            <Link to="/">Return Back Home</Link>
        </React.Fragment>
)

export default ErrorRoute