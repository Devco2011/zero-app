import React from 'react';
import { Link } from "react-router-dom";
import { Col, Card, Button, Nav } from 'react-bootstrap';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { IconContext } from "react-icons";

export const HowToCard = ({ howTo }) => {
    return (
        <>
            <IconContext.Provider value={{ style: { verticalAlign: 'middle' }, color: "secondary", className: "global-class-name" }}>
                <Col className="col-12 col-md-10 pl-3 mt-3">

                    <Card.Title ><FaExternalLinkAlt className="pr-1" /> <Nav.Link href={howTo.url}>{howTo.title}</Nav.Link> </Card.Title>
                    <Card.Text>
                        {howTo.description}
                    </Card.Text>

                    <hr></hr>

                </Col>
            </IconContext.Provider>
        </>
    )
}