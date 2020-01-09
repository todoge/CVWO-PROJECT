import React, {Component} from 'react';
import {Link} from "react-router-dom"
import { Navbar, NavItem, NavDropdown, MenuItem, Nav } from 'react-bootstrap';
import "../../assets/stylesheets/todo.scss"

class MainNav extends Component {
    render(){
        return (
            <section className="mb-3">
                <Navbar className="navbar-dark" id="main-navbar" expand="md">
                <Navbar.Brand href="/todos">Gérer</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="mr-auto">
                    <Nav.Link href="/about">About me</Nav.Link>
                    <Nav.Link href="https://github.com/todoge/CVWO-PROJECT">Github</Nav.Link>
                    <NavDropdown title="Other Projects" id="basic-nav-dropdown">
                      <NavDropdown.Item href="https://infinite-river-35557.herokuapp.com/">YelpCamp</NavDropdown.Item>
                      <NavDropdown.Item href="https://young-bastion-76363.herokuapp.com/">NASA API</NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
            </section>
        )
    }
};

export default MainNav

