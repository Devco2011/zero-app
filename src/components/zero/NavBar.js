import { React, useState, useContext } from 'react';
import { FirebaseContext } from "../fbAuth/FirebaseProvider";
import { Navbar, Nav, Button, NavDropdown } from 'react-bootstrap';
import taco from "../images/zeroLogo.png";
import { NavLink as RRNavLink } from "react-router-dom";

export const NavBar = () => {
    const { isLoggedIn, logout } = useContext(FirebaseContext);


    return (
        <Navbar collapseOnSelect expand="md navbar-light bg-primary" sticky="top">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Brand href="#/"><img
                alt="logo"
                src={taco}
                width="50"
                height="35"
                className="d-inline-block align-top"
            /></Navbar.Brand>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <NavDropdown title="REDUCE" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#/Reduce-Learn">Learn How</NavDropdown.Item>
                        <NavDropdown.Item href="#/Reduce-Resources">Local Resources</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="REUSE" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#/Reuse-Learn">Learn How</NavDropdown.Item>
                        <NavDropdown.Item href="#/Reuse-Resources">Local Resources</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="RECYCLE" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#/Recycle-Learn">Learn How</NavDropdown.Item>
                        <NavDropdown.Item href="#/Recycle-Resources">Local Resources</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="COMPOST" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#/Compost-Learn">Learn How</NavDropdown.Item>
                        <NavDropdown.Item href="#/Compost-Resources">Local Resources</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#/Track">TRACK YOUR TRASH</Nav.Link>

                    {isLoggedIn &&
                        <>

                            <Button className="nav-link text-right" variant="link" onClick={logout} style={{ border: "0" }}>LOGOUT</Button>

                        </>

                    }
                    {!isLoggedIn &&
                        <>

                            <Nav.Link className="ml-auto" href="#/login">LOGIN</Nav.Link>

                        </>
                    }

                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}