import  React, {useEffect, useState} from 'react';
import styles from './secondMain.module.css';
import left from '../../images/left.png';
import right from '../../images/right.png';
import {Container, Row, Col} from 'react-bootstrap';
import axios from 'axios';
import {BASE_URL, ENDPOINT_POPULAR, API_KEY, PAGE, IMAGE_BASE_URL} from '../../environments/environments';
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

const sliders = document.querySelector('#movies')
let scrollPerClick;
const scrollAmount = 0;
function clickScrollLeft(){
    sliders.scrollTo({
        top: 0,
    left: (scrollAmount -= scrollPerClick),
    behavior: "smooth",
    })
    if(scrollAmount < 0) {
        scrollAmount = 0
    }
}

function clickScrollRight() {
    if(scrollAmount <= sliders.scrollWidth - sliders.clientWidth) {
        sliders.scrollTo({
            top:0,
            left: (scrollAmount += scrollPerClick),
            behavior: "smooth"
        })
    }
}


return (
    <div className={styles.Container}>
        <h3 className={styles.h3}>Most Popular</h3>
        <div className={styles.movies} id="movies">
            {movies.length > 0 && movies.map((movie) => {
                return <div className={styles.movie}>
                            <Card className={styles.Card} data={movie} key={movie.id} {...movie}></Card>
                        </div> 
            })}

            <div className={styles.transparent_div_left} id="transparent_div_left" onClick={clickScrollLeft}>
                <img className={styles.left} src={left}></img>
            </div>
            <div className={styles.transparent_div_right} id="transparent_div_right" onClick={clickScrollRight}>
                <img className={styles.left} src={right}></img>
            </div>
        </div>
        
    
    </div>

)

}

export default SecondMain;