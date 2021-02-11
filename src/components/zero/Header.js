import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { getCategories, getResourceCategories } from '../../modules/APICalls';
import taco from "../images/zeroLogo.png"
import skyline from "../images/hero1.jpg"
import firebase from 'firebase';

export const Header = () => {

    return (
        <>
            <Container fluid>
                <Row>
                    <Col className="col-12">

                        <div className="images">
                            <img className="hero" src={skyline} height="60%" width="100%" alt="Nashville skyline." />
                        </div></Col>
                </Row>
            </Container>
        </>
    )
}
