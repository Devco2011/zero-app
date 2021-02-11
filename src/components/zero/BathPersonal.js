import React, { useEffect, useState } from 'react';
import { getResourceCategories } from "./../../modules/APICalls";
import { Container, Row, Col, CardDeck } from 'react-bootstrap';
import { Pagination } from './Pagination';
import { ReduceResourcesCard } from './ReduceResourcesCard';

export const BathPersonal = () => {

    const [resourceArray, setResourceArray] = useState([])
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage] = useState(2)

    const getAllResources = () => {
        getResourceCategories(7)
            .then(data => {
                let newArray = Object.keys(data).map((key, index) => {
                    data[key].id = key;
                    return data[key];
                });
                setResourceArray(newArray)
            })


    }


    useEffect(() => {
        getAllResources()
    }, [])

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = resourceArray.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = pageNumber =>
        setCurrentPage(pageNumber);

    return (
        <>
            <Container className="mb-3">
                <Row>
                    <Col className="col-12">
                        <h5>Bath and Personal Care</h5>
                    </Col>
                </Row>
                <CardDeck className="mt-2">
                    {currentPosts.map(resource => {
                        return <ReduceResourcesCard resource={resource} key={resource.id} />
                    })}
                </CardDeck>

                <Pagination postsPerPage={postsPerPage} totalPosts={resourceArray.length} paginate={paginate} />
            </Container>
        </>
    )
}