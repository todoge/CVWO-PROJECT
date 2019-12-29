import React, {Component} from 'react'
import {Button, Card, CardBody, CardGroup, Col, Container, Input, InputGroup, InputGroupAddon, InputGroupText, Row, NavLink  } from 'react-bootstrap';

class Btn extends Component{
    constructor(props){
        super(props)
        this.state = {
            styleClass: this.styleClass,
            value: this.value,
            link: this.link
        }
        this.routeChange = this.routeChange.bind(this);
    }
    routeChange = () => {
        window.location.href= this.props.link
    }
    render(){
        return(
                <button className = {`btn ${this.props.styleClass}`} onClick={this.routeChange} >
                    {this.props.value}
                </button>      
            )
    }
}

export default Btn

