import React from 'react';
import { Link } from "react-router-dom";
import { Col, Card, Button, Nav, List, ListGroup } from 'react-bootstrap';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { IconContext } from "react-icons";

export const HowToCard = ({ howTo }) => {
    return (
        <>
            <IconContext.Provider value={{ style: { verticalAlign: 'middle' }, color: "secondary", className: "global-class-name" }}>
                <Col className="col-12 col-md-10 pl-3 mt-3">

                    <Nav.Link href={howTo.url}><ListGroup.Item action variant="secondary"><FaExternalLinkAlt className="pr-1" /> <p><h6>{howTo.title}</h6></p><p>{howTo.description}</p> </ListGroup.Item></Nav.Link>


                    <hr></hr>

                </Col>
            </IconContext.Provider>
        </>
    )
}