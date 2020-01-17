import React, {Component} from 'react';
import {Link} from "react-router-dom"
import axios from "axios"
import { Navbar, NavItem, NavDropdown, MenuItem, Nav } from 'react-bootstrap';
import "../../assets/stylesheets/todo.scss"

const MainNav = (props)=>{
       
        const handleClick = () => {
            const token = document.querySelector('meta[name="csrf-token"]').content;
            axios.delete('/api/v1/logout', {withCredentials: true,
            headers: 
                {
                  "X-CSRF-Token": token,
                  "Content-Type": "application/json"
                }})
            .then(response => {props.handleLogout();props.history.push('/todos');})
            .catch(error => console.log(error))
        }
          
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
                      <NavDropdown.Item href="https://www.comp.nus.edu.sg/~vwo/">CVWO</NavDropdown.Item>
                    </NavDropdown>
                  </Nav>
                </Navbar.Collapse>
                
                <div className="my-2 my-lg-0">
                    <Link to='/login' className="btn btn-md btn-primary mr-3">Log In</Link>
                    <Link to='/signup' className="btn btn-md btn-success mr-3">Sign Up</Link>
                </div>
                { 
                    props.loggedInStatus && 
                    <Link to='/logout' className="btn btn-md btn-warning" onClick={handleClick}>Log Out</Link>
                }
              </Navbar>
            </section>
        )

};

export default MainNav

