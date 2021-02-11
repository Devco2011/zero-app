import React, { useEffect, useState } from 'react';
import { getRecyclingCenters, getResourceCategories } from "./../../modules/APICalls";
import { Container, Row, Col, CardDeck } from 'react-bootstrap';
import { NashRecycleCard } from './NashRecycleCard';
import { Pagination } from './Pagination';


export const NashRecycleCenters = () => {

    const [resourceArray, setResourceArray] = useState([])
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage] = useState(2)

    const getAllResources = () => {
        getRecyclingCenters()
            .then(data => {
                let newArray = Object.keys(data).map((key, index) => {
                    data[key].id = key;
                    return data[key];
                });
                setResourceArray(newArray)
                console.log("resource array", newArray)
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
                        <h5>Metro Works Recycling Centers and Drop-off Locations</h5>
                    </Col>
                </Row>
                <CardDeck className="mt-2">
                    {currentPosts.map(resource => {
                        return <NashRecycleCard resource={resource} key={resource.id} />
                    })}
                </CardDeck>
                <hr></hr>
                <Pagination postsPerPage={postsPerPage} totalPosts={resourceArray.length} paginate={paginate} />
            </Container>
        </>
    )
}