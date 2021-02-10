import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

export const FarmersMarketsCard = ({ resource }) => {
    return (
        <>

            <Col className="col-4 mt-5">
                <Card className="h-100" style={{ width: '18rem' }} bg="primary">
                    <Card.Body>
                        <Card.Title >{resource.name}</Card.Title>
                        <Card.Text>
                            <strong>Open: </strong> {resource.open}
                        </Card.Text>
                        <Card.Text>
                            <strong>When: </strong>{resource.when}
                        </Card.Text>
                        <Card.Link href={resource.url}>Website</Card.Link>
                    </Card.Body>
                </Card>
            </Col>

        </>
    )
}