import React from 'react';
import { Col, Card, Button } from 'react-bootstrap';

export const HowToCard = ({ howTo }) => {
    return (
        <>

            <Col className="col-4 mt-5">
                <Card className="h-100" style={{ width: '18rem' }} bg="primary">
                    <Card.Body>
                        <Card.Title >{howTo.title}</Card.Title>
                        <Card.Text>
                            {howTo.description}
                        </Card.Text>
                        <Button href={howTo.url}>Source: </Button>
                    </Card.Body>
                </Card>
            </Col>

        </>
    )
}