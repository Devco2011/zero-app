import React, { useEffect, useState } from 'react';
import { getRecyclingCenters, getResourceCategories } from "./../../modules/APICalls";
import { Container, Row, Col, CardDeck } from 'react-bootstrap';
import { NashRecycleCard } from './NashRecycleCard';;


export const NashRecycleCenters = () => {

    const [resourceArray, setResourceArray] = useState([])

    const getAllResources = () => {
        getRecyclingCenters()
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
                        <h3>Metro Works Recycling Centers and Drop-off Locations</h3>
                    </Col>
                </Row>
                <CardDeck className="mt-2">
                    {resourceArray.map(resource => {
                        return <NashRecycleCard resource={resource} key={resource.id} />
                    })}
                </CardDeck>
                <hr></hr>

            </Container>
        </>
    )
}