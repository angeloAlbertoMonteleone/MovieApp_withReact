import  React, {useEffect, useState} from 'react';
import styles from './secondMain.module.css';
import {Container, Row, Col} from 'react-bootstrap';
import axios from 'axios';
import {BASE_URL, ENDPOINT_POPULAR, API_KEY, PAGE, IMAGE_BASE_URL} from './environments/environments';
import Card from './card/card';
import Aux from '../../Auxiliary/Auxiliary';


const SecondMain = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch(BASE_URL + ENDPOINT_POPULAR + API_KEY + PAGE).then((res) => res.json())
        .then((data) => {
         console.log(data);
         setMovies(data.results)
        });
}, []);

return (
    <div className={styles.Container}>
        <h3 className={styles.h3}>Most Popular</h3>
        <div className={styles.movies}>
            {movies.length > 0 && movies.map((movie) => {
                return <div className={styles.movie}><Card data={movie} key={movie.id} {...movie}></Card></div> 
            })}
        </div>
    </div>
    
)

}

export default SecondMain;