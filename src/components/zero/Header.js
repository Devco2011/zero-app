import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { getCategories, getResourceCategories } from '../../modules/APICalls';
import firebase from 'firebase';

export const Header = () => {

    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <h2>This is the new Header.</h2></Col>
                </Row>
            </Container>
        </>
    )
}
