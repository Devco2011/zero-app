import React, { useEffect, useState } from 'react';
import { getResourceCategories } from "./../../modules/APICalls";
import { Container, Row, Col, CardDeck } from 'react-bootstrap';
import { ReduceResourcesCard } from './ReduceResourcesCard';
import { Household } from './HouseHold';
import { Drink } from './Drink'
import { Secondhand } from './Secondhand'
import { Bulk } from './Bulk';
import { FarmersMarkets } from './FarmersMarkets'
import { BathPersonal } from './BathPersonal';

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
                <Row className="justify-content-center mt-5 mb-5">
                    <Col className="col-12 col-md-10">
                        <h3>These locals can help you reduce on your journey to zero waste.</h3>
                    </Col>
                </Row>
                <Row>
                    <BathPersonal />
                </Row>
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