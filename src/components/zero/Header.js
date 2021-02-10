import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { getCategories, getResourceCategories } from '../../modules/APICalls';
import taco from "../images/zeroLogo.png"
import firebase from 'firebase';

export const Header = () => {

    return (
        <>
            <Container>
                <Row className="justify-content-center mt-5">
                    <Col className="col-12">

                        <div className="images">
                            <center><img className="logo" src={taco} height="50%" width="50%" alt="logo" /></center>

                        </div></Col>
                    <h6 className="mt-3 p-2">The future of Nashville's trash</h6>
                </Row>
            </Container>
        </>
    )
}
