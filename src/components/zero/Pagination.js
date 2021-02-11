import React from 'react';
import { Row, Col } from 'react-bootstrap'

export const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <Row className="justify-content-center">
            <Col className="col-4">
                <nav>
                    <ul className="pagination">
                        {pageNumbers.map(number => (
                            <li key={number} className="page-item">
                                <a onClick={() => paginate(number)} className="page-link">
                                    {number}</a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </Col>
        </Row>
    )
}