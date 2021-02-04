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
                </Row>
            </Container>
        </>
    )
}
