import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Divert } from './Divert';

export const ReuseResources = () => {
    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <h2>Info about reusing goes here.</h2></Col>
                </Row>
                <Row>
                    <Divert />
                </Row>
                <hr></hr>
            </Container>
        </>
    )
}