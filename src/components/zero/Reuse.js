import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Divert } from './Divert';

export const Reuse = () => {
    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <h2>This is Reuse.</h2></Col>
                </Row>
                <Row>
                    <Divert />
                </Row>
                <hr></hr>
            </Container>
        </>
    )
}