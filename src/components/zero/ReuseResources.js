import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Divert } from './Divert';

export const ReuseResources = () => {
    return (
        <>
            <Container>
                <Row className="justify-content-center mt-5 mb-3">
                    <Col className="col-12 col-md-10">
                        <h3>If you can't reuse something, here are some local options for diverting.</h3></Col>
                </Row>
                <Row>
                    <Divert />
                </Row>
                <hr></hr>
            </Container>
        </>
    )
}