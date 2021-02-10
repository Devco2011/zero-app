import React, { useEffect, useState } from 'react';
import { getFarmersMarkets } from "./../../modules/APICalls";
import { Container, Row, Col, CardDeck } from 'react-bootstrap';
import { FarmersMarketsCard } from './FarmersMarketsCard'

export const FarmersMarkets = () => {

    const [resourceArray, setResourceArray] = useState([])

    const getAllFarmersMarkets = () => {
        getFarmersMarkets()
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
        getAllFarmersMarkets()
    }, [])


    return (
        <>
            <Container className="mt-5">
                <Row>
                    <Col className="col-12 pl-4">
                        <h5>Farmers Markets</h5>
                    </Col>
                </Row>
                <CardDeck className="mt-2">
                    {resourceArray.map(resource => {
                        return <FarmersMarketsCard resource={resource} key={resource.id} />
                    })}
                </CardDeck>

            </Container>
        </>
    )
}