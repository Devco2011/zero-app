import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Header } from './Header';


export const Home = () => {
    return (
        <>
            <Header />
            <Container>
                <Row>
                    <Col>
                        <h2>This is Home.</h2>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
