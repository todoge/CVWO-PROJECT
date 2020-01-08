import React, {Component} from 'react';
import {Link} from "react-router-dom"
import { Navbar, NavItem, NavDropdown, MenuItem, Nav } from 'react-bootstrap';
import "../../assets/stylesheets/todo.scss"

class MainNav extends Component {
    render(){
        return (
            <section>
                <Navbar className="navbar-dark" id="main-navbar" expand="md">
                <Navbar.Brand href="/todos">Gérer</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="mr-auto">
                    <Nav.Link href="/about">About me</Nav.Link>
                    <Nav.Link href="#link">Link</Nav.Link>
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                      <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
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

