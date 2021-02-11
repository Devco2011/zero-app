import React, { useEffect, useState } from 'react';
import { getResourceCategories } from "./../../modules/APICalls";
import firebase from "firebase";
import { Pagination } from './Pagination';
import { Container, Row, Col, CardDeck } from 'react-bootstrap';
import { ReduceResourcesCard } from './ReduceResourcesCard'

export const Household = () => {

    const [resourceArray, setResourceArray] = useState([])
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage] = useState(2)

    const getAllResources = () => {
        getResourceCategories(6)
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
            <Container className="mt-5">
                <Row>
                    <Col className="col-12 pl-4">
                        <h5>Household/Kitchen/Cleaning</h5>
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