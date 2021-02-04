import React, { useState, useContext } from 'react';
import { FirebaseContext } from "../fbAuth/FirebaseProvider";
import { NavLink as RRNavLink } from "react-router-dom";
import { Container, Row, Col, Button, NavItem } from 'react-bootstrap';

export const Header = () => {
    const { isLoggedIn, logout } = useContext(FirebaseContext);
    const [expanded, setExpanded] = useState(false);

    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <h2>This is the new Header.</h2></Col>
                    {isLoggedIn &&
                        <>
                            <Button className="nav-link text-right" variant="link" onClick={logout} style={{ border: "0" }}>Logout</Button>
                        </>
                    }
                    {!isLoggedIn &&
                        <>
                            <NavItem className="nav-link text-right" variant="link"><RRNavLink to="/login">Login to Track Trash</RRNavLink></NavItem>
                        </>
                    }
                </Row>
            </Container>
        </>
    )
}
