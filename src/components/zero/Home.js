import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import { Header } from './Header';
import { BarChart } from './BarChart'


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
                <Row>
                    <Col className="col-12 col-md-6 mt-4 mb-4">
                        <BarChart />
                    </Col>
                </Row>

            </Container>
        </>
    )
}
