import React, { useEffect, useState } from 'react';
import { getHowToCategories } from "./../../modules/APICalls";
import { Pagination } from './Pagination';
import { Container, Row, Col, CardDeck } from 'react-bootstrap';
import { HowToCard } from './HowToCard';


export const RecycleLearn = () => {

    const [howToArray, setHowToArray] = useState([])
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage] = useState(3)

    const getAllHowTos = () => {
        getHowToCategories(2)
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
                <Row className="justify-content-center mt-5 mb-3">
                    <Col className="col-12 col-md-10">
                        <h3>Learn best practices for recycling.</h3><p><h3>These articles and videos will get you on your way.</h3></p>
                    </Col>
                </Row>
                <CardDeck className="mt-2">
                    {currentPosts.map(howTo => {
                        return <HowToCard howTo={howTo} key={howTo.id} />
                    })}
                </CardDeck>
                <Pagination postsPerPage={postsPerPage} totalPosts={howToArray.length} paginate={paginate} />
            </Container>
        </>
    )
}