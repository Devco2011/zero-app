import React from 'react';
import { Col, Card, ListGroup, Nav } from 'react-bootstrap';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { IconContext } from "react-icons";

export const FarmersMarketsCard = ({ resource }) => {
    return (
        <>

            <IconContext.Provider value={{ style: { verticalAlign: 'middle' }, color: "secondary", className: "global-class-name" }}>
                <Col className="col-12 col-md-10 pl-3 mt-3">

                    <Nav.Link href={resource.url}><ListGroup.Item action variant="secondary"><FaExternalLinkAlt className="pr-1" /> <p><h6>{resource.name}</h6></p>
                        <p><strong>Open:</strong> {resource.open}</p>
                        <p><strong>When:</strong> {resource.when}</p>
                        <p><strong>Website:</strong> {resource.url}</p> </ListGroup.Item></Nav.Link>




                </Col>
            </IconContext.Provider>

        </>
    )
}
