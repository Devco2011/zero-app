import React, { useEffect, useState } from 'react';
import { getResourceCategories } from "./../../modules/APICalls";
import { Container, Row, Col, CardDeck } from 'react-bootstrap';
import { ReduceResourcesCard } from './ReduceResourcesCard';
import { NashRecycleCenters } from './NashRecycleCenters';


export const RecycleResources = () => {

    const [resourceArray, setResourceArray] = useState([])

    const getAllResources = () => {
        getResourceCategories(2)
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
            <Container className="mb-3">
                <Row>
                    <Col className="col-12">
                        <h3>Recycle Resources</h3>
                    </Col>
                </Row>
                <CardDeck className="mt-2">
                    {resourceArray.map(resource => {
                        return <ReduceResourcesCard resource={resource} key={resource.id} />
                    })}
                </CardDeck>
                <hr></hr>
                <Row>
                    <NashRecycleCenters />
                </Row>

            </Container>
        </>
    )
}