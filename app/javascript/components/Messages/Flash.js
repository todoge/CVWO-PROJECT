import React from "react"
import { connect } from "react-redux"

const Flash = (props)=>(
        <div className="alert alert-primary" role="alert">
        <p>{props.flash}</p>
        </div>
)

const connectedFlash = connect((state)=>{
    return{
        flash: state.flash 
    };
})(Flash);

export default connectedFlash;