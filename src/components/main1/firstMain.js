import React from 'react';
import styles from './firstMain.module.css';
import {Container, Row, Col, Button} from 'react-bootstrap';

const firstMain = () => {
    return (
        <Container className={styles.FirstMain}>
            <Row className="">
                <Col sm={12}>
                    <h1 className={styles.h1}>All Your Favorite Movies in the Same Place</h1>
                    <h3 className={styles.h3}>Check all the Categories, Personal Lists, Tv Shows, and free Streaming</h3>
                    <Button className={styles.Button} variant="outline-light">New Releases</Button>{' '}
                    <Button className={styles.Button} variant="outline-light">My List</Button>{' '}
                </Col>
            </Row>
        </Container>
    )
}

export default firstMain;