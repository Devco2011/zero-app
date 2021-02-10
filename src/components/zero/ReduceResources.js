import React, { useEffect, useState } from 'react';
import { getResourceCategories } from "./../../modules/APICalls";
import firebase from "firebase";
import { Container, Row, Col, CardDeck } from 'react-bootstrap';
import { ReduceResourcesCard } from './ReduceResourcesCard';
import { Household } from './HouseHold';

export const ReduceResources = () => {

    const [resourceArray, setResourceArray] = useState([])

    const getAllResources = () => {
        getResourceCategories(7)
            .then(data => {
                let newArray = Object.keys(data).map((key, index) => {
                    data[key].id = key;
                    return data[key];
                });
                setResourceArray(newArray)
                console.log("resource array", newArray)
            })


    }


    useEffect(() => {
        getAllResources()
    }, [])


    return (
        <>
            <Container>
                <Row>
                    <Col className="col-12">
                        <h3>Reduce Resources</h3>
                    </Col>
                </Row>
                <CardDeck className="mt-2">
                    {resourceArray.map(resource => {
                        return <ReduceResourcesCard resource={resource} key={resource.id} />
                    })}
                </CardDeck>
                <hr></hr>
                <Row>
                    <Household />
                </Row>
            </Container>
        </>
    )
}