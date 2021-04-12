import React, {useState, useEffect} from 'react';
import styles from './firstMain.module.css';
import {Container, Row, Col, Button} from 'react-bootstrap';
import axios from '../../axios/axios';
import requests from '../../environments/environments';
import fire from '../../images/firee.png';


const FirstMain = (ref) => {
    const [movie, setMovies] = useState([]);

    useEffect(() => {
        async function fetchBanner() {
            const mov = await axios.get(requests.fetchOriginals);
            console.log('fetchBanner:',mov.data.results[Math.floor(Math.random() * mov.data.results.length - 1)])
            setMovies(mov.data.results[Math.floor(Math.random() * mov.data.results.length - 1)])
            return mov;
        }
        fetchBanner(); 
    }, [])
    console.log(movie);

    // const handleUpcomingClick = () => {
    //         upcomingMovies.current.scrollIntoView({ behavior: 'smooth' });
    // }

    return (
        <Container className={styles.FirstMain} style={{
            backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
            backgroundPosition: "center center no-repeat", 
            backgroundSize: "cover"}}>
            <Row className="">
                <Col sm={12}>
                    <img className="Logo" src={fire}></img>
                    {/* <h1 className={styles.h1}>All Your Favorite Movies in the Same Place</h1> */}
                    <h3 className={styles.h3}>Check all the Categories, Personal Lists, Tv Shows, and free Streaming</h3>
                    {/* <Button onClick={handleUpcomingClick} className={styles.Button} variant="outline-light">New Releases</Button>{' '} */}
                    <Button className={styles.Button} variant="outline-light" >My List</Button>{' '}
                </Col>
            </Row>
        </Container>
    )
}

export default FirstMain;