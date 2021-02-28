import React, {useState} from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import axios from '../../../axios/axios';
import search from '../images/search.svg';
import './Search.css';
import arrowLeft from '../images/arrow-left.svg';
import Aux from '../../../Auxiliary/Auxiliary';
const IMAGE_BASEURL = 'https://image.tmdb.org/t/p/w500/';

function Search({fetchUrl}) {
    const [open, getOpen] = useState(false);
    /* create states input - movies */
    const [query, setQuery] = useState('');
    /* create the state for movies, and update the state appropriate */
    const [movies, setMovies] = useState([]);
            
            async function getMovie(e) {
                e.preventDefault();
                const mov = await axios.get(fetchUrl + query);
                console.log("movie:", mov.data.results);
                setMovies(mov.data.results)
                return mov;
            }
        
    
    
    return (
        <Aux>
            <img className="search" src={search} onClick={() => {getOpen(true)}} style={{display : open ? "none" : "block"}}></img>
            <Container fluid className={`search-menu ${open && "block"}`}>
                    <Row>
                        <Col className="Colomn">
                            <div>
                                <img className="back-arrow" src={arrowLeft} onClick={() => {
                                    getOpen(false)
                                    console.log('clicked')}}></img> 
                                <form id="form" onSubmit={getMovie}>
                                    <img className="search-inside-menu" src={search}></img>
                                    <input type="text" name="searchEl" id="searchEl" placeholder="Search" value={query} onChange={(e) => setQuery(e.target.value)}></input>
                                    {/* <button id="submit" type="submit">Search</button> */}
                                </form>
                            </div>
                        </Col>
                    </Row>

                    <div className="card-list">
                        {movies && movies.length > 0 ? movies.map((movie) => {
                            return (
                            <Aux className="card-root">
                                <img className="card-image"
                                src={IMAGE_BASEURL + movie.poster_path}
                                alt={movie.title + ' poster'}
                                key={movie.id}></img>

                                <div className="card-content" key={movie.id}>
                                    <h3>{movie.title}</h3>
                                    <p>RELEASE DATE: {movie.release_date}</p>
                                    <p>RATING: {movie.vote_average}</p>
                                    <p className="card-description">{movie.overview}</p>
                                </div>
                            </Aux>
                        )}
                        ): null}
                    </div>
            </Container>
            <div className="body-for-search" onClick={() => {getOpen(false)
            console.log('clicked by body')}} style={{display : open ? "block" : "none"}} ></div>

            
        </Aux>
    )
}

export default Search;