import React, { useEffect, useState } from 'react';
import { getHowToCategories } from "./../../modules/APICalls";
import { Pagination } from './Pagination';
import { Container, Row, Col, CardDeck } from 'react-bootstrap';
import { HowToCard } from './HowToCard';


export const ReduceLearn = () => {

    const [howToArray, setHowToArray] = useState([])
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage] = useState(3)

    const getAllHowTos = () => {
        getHowToCategories(0)
            .then(data => {
                let newArray = Object.keys(data).map((key, index) => {
                    data[key].id = key;
                    return data[key];
                });
                setHowToArray(newArray)
            })


    }


    useEffect(() => {
        getAllHowTos()
    }, [])

    //get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = howToArray.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = pageNumber =>
        setCurrentPage(pageNumber);


    return (
        <>
            <Container>
                <Row>
                    <Col className="col-12">
                        <h3>How To Reduce</h3>
                    </Col>
                </Row>
                <CardDeck className="mt-2">
                    {currentPosts.map(howTo => {
                        return <HowToCard howTo={howTo} key={howTo.id} />
                    })}
                </CardDeck>
                <Pagination postsPerPage={postsPerPage} totalPosts={howToArray.length} paginate={paginate} />
                <hr></hr>
            </Container>
        </>
    )
}