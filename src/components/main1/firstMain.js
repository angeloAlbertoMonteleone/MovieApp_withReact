import React from 'react';
import classes from './firstMain.css';
import {Container, Row, Col} from 'react-bootstrap';

const firstMain = () => {
    return (
        <Container classeName={classes.FirstMain}>
            <Row>
                <Col sm={12}></Col>
            </Row>
        </Container>
    )
}

export default firstMain;