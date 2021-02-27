import React, {useState} from 'react';
import {Row, Col} from 'react-bootstrap';
import axios from '../../../axios/axios';
import search from '../images/search.svg';
import './Search.css';
import arrowLeft from '../images/arrow-left.svg';
import Aux from '../../../Auxiliary/Auxiliary';

function Search({fetchUrl}) {
    const [open, getOpen] = useState(false);
    const [movies, getMovies] = useState([]);

            async function getMovie(e) {
                const searchElement = e;
                const mov = await axios.get(fetchUrl+ searchElement);
                console.log("movie:" ,e);
                return mov;
            }
            getMovie();
        
    
    
    return (
        <Aux>
            <img className="search" src={search} onClick={() => {getOpen(true)}} style={{display : open ? "none" : "block"}}></img>

            <div className={`search-menu ${open && "block"}`}>
                <Row>
                    <Col className="Colomn">
                        <div>
                            <img className="back-arrow" src={arrowLeft} onClick={() => {
                                getOpen(false)
                                console.log('clicked')}}></img> 
                            <form id="form" 
                                onClick={(e) => {
                                getMovie(e.target);
                                console.log('event',e.target);
                                return false}}>
                                <img className="search-inside-menu" src={search}></img>
                                <input type="text" name="searchEl" id="searchEl" placeholder="search"></input>
                                <button id="submit" type="submit">Search</button>
                            </form>
                        </div>
                    </Col>
                </Row>
            </div>

            <div className="body-for-search" onClick={() => {getOpen(false)
            console.log('clicked by body')}} style={{display : open ? "block" : "none"}} ></div>
        </Aux>
    )
}

export default Search;