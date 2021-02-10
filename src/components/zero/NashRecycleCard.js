import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

export const NashRecycleCard = ({ resource }) => {
    return (
        <>

            <Col className="col-4 mt-5">
                <Card className="h-100" style={{ width: '18rem' }} bg="primary">
                    <Card.Body>
                        <Card.Title >{resource.facility_name}</Card.Title>
                        <Card.Text>
                            {resource.address}, {resource.city}, {resource.st}, {resource.zip}
                        </Card.Text>
                        <Card.Text>
                            <strong>Phone: </strong>{resource.phone}
                        </Card.Text>
                        <Card.Link href={resource.website_url_more_information}>Website</Card.Link>
                    </Card.Body>
                </Card>
            </Col>

        </>
    )
}