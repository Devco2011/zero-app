import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

import logo from '../images/zeroLogo.png'
import { Header } from './Header';



export const Home = () => {
    return (
        <>
            <Header />
            <Container>
                <Row className="justify-content-center">
                    <Col className="col-12 col-md-12 p-4 pl-2">

                        <div className="headerBorderBox">
                            <div className="headerBox">
                                <center><img className="logo mb-3 mt-3" src={logo} height="50%" width="50%" alt="Zero Logo" /> <h4>The future of Nashville's trash.
                            </h4>
                                </center>
                                {/* <br></br>
                                <center><h5 className="mt-4">Every year, Metro Public Works collects <strong>228,000 tons</strong> of trash.</h5></center>
                                {/* <p>This trash ends up in our ever expanding landfills- costing us money, harming our health, and contributing to climate change.</p> */}
                                {/* <br></br> */}
                                {/* <center><h5 className="mt-4"><strong>You can make a difference. ZERO is here to help.</strong></h5></center> */}
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className="justify-content-center mt-5 mb-5">
                    <Col className="col-12 col-md-8 border-bottom">
                        <center><h5>228,000 tons of trash are collected by Metro Works every year.</h5>
                            <h5>You can help get that number to ZERO.</h5></center>
                    </Col>
                </Row>
                <Row className="justify-content-center mt-5">
                    <Col className="col-12 col-md-4 mt-5 border-right">
                        <h6>Reduce</h6>
                        <p>The most important step for getting to zero waste.</p>
                        <Button variant="outline-secondary" onClick={event => window.location.href = "#/Reduce-Learn"}>Learn How</Button>{' '}
                        <Button variant="outline-secondary" onClick={event => window.location.href = "#/Reduce-Resources"}>Find Resources</Button>
                    </Col>
                    <Col className="col-12 col-md-4 mt-5 pl-5"><h6>Reuse</h6>
                        <p>Reuse, repurpose, upcycle- whatever you call it, it's easy and it matters!</p>
                        <Button variant="outline-secondary" onClick={event => window.location.href = "#/Reuse-Learn"}>Learn How</Button>{' '}
                        <Button variant="outline-secondary" onClick={event => window.location.href = "#/Reuse-Resources"}>Find Resources</Button>
                    </Col>
                </Row>
                <Row className="justify-content-center mt-5 mb-5">
                    <Col className="col-12 col-md-4 mt-5 border-right"><h6>Recycle</h6>
                        <p>Make sure you know what to take and where to take it.</p>
                        <Button variant="outline-secondary" onClick={event => window.location.href = "#/Recycle-Learn"}>Learn How</Button>{' '}
                        <Button variant="outline-secondary" onClick={event => window.location.href = "#/Recycle-Resources"}>Find Resources</Button></Col>
                    <Col className="col-12 col-md-4 mt-5 pl-5 mb-5"><h6>Compost</h6>
                        <p>Food and organic matter make up 60% of our landfills. Make compost instead.</p>
                        <Button variant="outline-secondary" onClick={event => window.location.href = "#/Compost-Learn"}>Learn How</Button>{' '}
                        <Button variant="outline-secondary" onClick={event => window.location.href = "#/Compost-Resources"}>Find Resources</Button></Col>
                </Row>

            </Container>
        </>
    )
}
