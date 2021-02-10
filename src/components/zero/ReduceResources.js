import React, { useEffect, useState } from 'react';
import { getResourceCategories } from "./../../modules/APICalls";
import { Container, Row, Col, CardDeck } from 'react-bootstrap';
import { ReduceResourcesCard } from './ReduceResourcesCard';
import { Household } from './HouseHold';
import { Drink } from './Drink'
import { Secondhand } from './Secondhand'
import { Bulk } from './Bulk';
import { FarmersMarkets } from './FarmersMarkets'

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
            <Container className="mb-3">
                <Row>
                    <Col className="col-12">
                        <h3>Bath and Personal Care</h3>
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
                <hr></hr>
                <Row>
                    <Drink />
                </Row>
                <hr></hr>
                <Row>
                    <Secondhand />
                </Row>
                <hr></hr>
                <Row>
                    <Bulk />
                </Row>
                <hr></hr>
                <Row>
                    <FarmersMarkets />
                </Row>
                <hr></hr>

            </Container>
        </>
    )
}