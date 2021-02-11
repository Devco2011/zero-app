import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import { AddTrashButton } from './AddTrashButton';
import { BarChart } from './BarChart'

export const Track = () => {
    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <h2>This is Track Your Trash.</h2></Col>

                </Row>
                <Row>
                    <Col className="col-12 col-md-6 mt-4 mb-4">
                        <BarChart />
                    </Col>
                </Row>
                <Row>
                    <Col className="col-12 col-md-6 mt-4 mb-4">
                        <AddTrashButton />
                    </Col>
                </Row>
            </Container>
        </>
    )
}