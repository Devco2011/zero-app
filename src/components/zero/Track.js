import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import { AddTrashButton } from './AddTrashButton';

export const Track = () => {
    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <h2>This is Track Your Trash.</h2></Col>
                    <AddTrashButton />
                </Row>
            </Container>
        </>
    )
}