import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

export const ReduceResourcesCard = ({ resource }) => {
    return (
        <>

            <Col className="col-4 mt-5">
                <Card className="h-100" style={{ width: '18rem' }} bg="primary">
                    <Card.Body>
                        <Card.Title >{resource.name}</Card.Title>
                        <Card.Text>
                            {resource.description}
                        </Card.Text>
                        <Card.Text>
                            <strong>Phone: </strong>{resource.phone}
                        </Card.Text>
                        <Card.Link href={resource.url}>Website</Card.Link>
                    </Card.Body>
                </Card>
            </Col>

        </>
    )
}