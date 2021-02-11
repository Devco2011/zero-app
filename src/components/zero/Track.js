import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import { AddTrashButton } from './AddTrashButton';
import { BarChart } from './BarChart';
import { getTrash } from './../../modules/APICalls';


export const Track = () => {

    const [newTrashArray, setNewTrashArray] = useState([])

    const getAllTrash = () => {
        getTrash()
            .then(data => {
                let newArray = Object.keys(data).map((key) => {
                    data[key].fbid = key;
                    return data[key];
                });
                setNewTrashArray(newArray)

                console.log("dateArray", newArray)
            })

    }

    useEffect(() => {
        getAllTrash()
    }, [])

    return (
        <>
            <Container>
                <Row className="justify-content-center">
                    <Col className="col-12 col-md-10">
                        <h2>Track Your Trash</h2></Col>

                </Row>
                <Row className="justify-content-center">
                    <Col className="col-12 col-md-10">
                        <h4>Everytime you take a bag of trash out, add it to your monthly total.</h4>
                        <p><h4>Watch your progress from month to month!</h4></p>
                    </Col>

                </Row>
                <Row>
                    <Col className="col-12 col-md-6 mt-4 mb-4">
                        <BarChart getAllTrash={getAllTrash} newTrashArray={newTrashArray} />
                    </Col>
                </Row>
                <Row>
                    <Col className="col-12 col-md-6 mt-4 mb-4">
                        <AddTrashButton getAllTrash={getAllTrash} />
                    </Col>
                </Row>
            </Container>
        </>
    )
}