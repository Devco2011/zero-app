import React from 'react';
import { Container, Nav, Col, ListGroup } from 'react-bootstrap';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { IconContext } from "react-icons";

export const NashRecycleCard = ({ resource }) => {
    return (
        <>

            <IconContext.Provider value={{ style: { verticalAlign: 'middle' }, color: "secondary", className: "global-class-name" }}>
                <Col className="col-12 col-md-10 pl-3 mt-3">

                    <Nav.Link href={resource.website_url_more_information}><ListGroup.Item action variant="secondary"><FaExternalLinkAlt className="pr-1" /> <p><h6>{resource.facility_name}</h6></p>
                        <p><strong>Address:</strong> {resource.open}</p>
                        <p><strong>When:</strong> {resource.address}, {resource.city}, {resource.st}, {resource.zip}</p>
                        <p><strong>Phone:</strong> {resource.phone}</p>
                        <p><strong>Website:</strong> {resource.website_url_more_information}</p> </ListGroup.Item></Nav.Link>




                </Col>
            </IconContext.Provider>
        </>
    )
}
