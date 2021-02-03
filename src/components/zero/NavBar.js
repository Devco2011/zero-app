import { React } from 'react';
import { Navbar, Nav, Container, Button, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const NavBar = () => {

    return (
        <Navbar collapseOnSelect expand="md navbar-dark bg-primary" sticky="top">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Brand href="#home">ZERO</Navbar.Brand>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <NavDropdown title="REDUCE" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Tips and Tricks</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Local Resources</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="REUSE" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Learn</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Local Resources</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="RECYCLE" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Learn</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Local Resources</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="COMPOSTE" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Learn</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Local Resources</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#pricing">TRACK YOUR TRASH</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}