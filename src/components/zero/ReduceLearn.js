import React, { useEffect, useState } from 'react';
import { getHowToCategories } from "./../../modules/APICalls";
import { Container, Row, Col, CardDeck } from 'react-bootstrap';
import { HowToCard } from './HowToCard';


export const ReduceLearn = () => {

    const [howToArray, setHowToArray] = useState([])

    const getAllHowTos = () => {
        getHowToCategories(0)
            .then(data => {
                let newArray = Object.keys(data).map((key, index) => {
                    data[key].id = key;
                    return data[key];
                });
                setHowToArray(newArray)
            })


    }


    useEffect(() => {
        getAllHowTos()
    }, [])


    return (
        <>
            <Container>
                <Row>
                    <Col className="col-12">
                        <h3>How To Reduce</h3>
                    </Col>
                </Row>
                <CardDeck className="mt-2">
                    {howToArray.map(howTo => {
                        return <HowToCard howTo={howTo} key={howTo.id} />
                    })}
                </CardDeck>
                <hr></hr>
            </Container>
        </>
    )
}