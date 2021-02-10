import React, { useEffect, useState } from 'react';
import { getResourceCategories } from "./../../modules/APICalls";
import { Container, Row, Col, CardDeck } from 'react-bootstrap';
import { ReduceResourcesCard } from './ReduceResourcesCard'

export const Secondhand = () => {

    const [resourceArray, setResourceArray] = useState([])

    const getAllResources = () => {
        getResourceCategories(4)
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
            <Container className="mt-5">
                <Row>
                    <Col className="col-12 pl-4">
                        <h5>Secondhand Stores</h5>
                    </Col>
                </Row>
                <CardDeck className="mt-2">
                    {resourceArray.map(resource => {
                        return <ReduceResourcesCard resource={resource} key={resource.id} />
                    })}
                </CardDeck>

            </Container>
        </>
    )
}