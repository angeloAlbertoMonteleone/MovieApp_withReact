import React, {useState} from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import axios from '../../../axios/axios';
import search from '../images/search.svg';
import './Search.css';
import arrowLeft from '../images/arrow-left.svg';
import Aux from '../../../Auxiliary/Auxiliary';
import YouTube from 'react-youtube';
import movieTrailer from "movie-trailer";

const IMAGE_BASEURL = 'https://image.tmdb.org/t/p/w500/';

function Search({fetchUrl}) {
    /* create onClick for search menu */
    const [open, getOpen] = useState(false);
    /* create image opening onClick */
    const [image, openImage] = useState([]);
    /* create states input - movies */
    const [query, setQuery] = useState('');
    /* create the state for movies, and update the state appropriate */
    const [movies, setMovies] = useState([]);
    /* useState to get Description content for clicked movie */
    const [description, setDecription] = useState([]);
    /* useState to set Trailer Url for clicked movie */
    const [trailerUrl, setTrailerUrl] = useState("");
    /* create trailer-menu opening onClick */
    const [closed, setOpenMenu] = useState(true);
            
            async function getMovie(e) {
                e.preventDefault();
                const mov = await axios.get(fetchUrl + query);
                console.log("movie:", mov.data.results);
                setMovies(mov.data.results)
                return mov;
            }

            function reset() {
                setMovies([]);
                setQuery('')
            }
            
            const opts = {
                playerVars: {
                    autoplay: 0,
                }
            };

            const handleClickForTrailer = (movie) => {
                if(trailerUrl) {
                    setTrailerUrl('');
                    setOpenMenu(true);
                } else {
                    movieTrailer(movie?.title || movie.name || "")
                    .then(url => {
                        const urlParams = new URLSearchParams(new URL(url).search);
                        setTrailerUrl(urlParams.get('v'));
                        setOpenMenu(false);
                    }).
                    catch((error) => console.log(error));
                }
            }
        
            const handleClickForDescription = (movie) => {
                        setDecription([movie.title, movie.overview, movie.vote_average, movie.release_date]);
                }
            console.log(description);
                

            
        
    return (
        <Aux>
            <img className="search" src={search} onClick={() => {getOpen(true)}} style={{display : open ? "none" : "block"}}></img>
            <Container fluid className={`search-menu ${open && "block"}`}>
                    <Row>
                        <Col sm={12} className="Colomn">
                            <div style={{display: "flex", justifyContent: "center"}}>
                                <img className="back-arrow" src={arrowLeft} onClick={() => {
                                    reset();
                                    getOpen(false) 
                                    console.log('clicked')}}></img> 
                                <form id="form" onSubmit={getMovie}>
                                    <img className="search-inside-menu" src={search}></img>
                                    <input type="text" name="searchEl" id="searchEl" placeholder="Search" value={query} onChange={(e) => {
                                        setQuery(e.target.value)
                                        setMovies([])
                                        }}></input>
                                    {/* <button id="submit" type="submit">Search</button> */}
                                </form>
                            </div>
                        </Col>
                    </Row>

                    <div className="card-list" style={{transform : !query ? "translateY(100vh)" : "translateY(0%)"}}>
                        {movies && movies.length > 0 ? movies.filter((film) => film.poster_path).map((movie) => {
                            return (
                            <Aux className="card-root">
                                <img className="card-image" onClick={() => {
                                    handleClickForDescription(movie)
                                    handleClickForTrailer(movie)
                                }}
                                src={IMAGE_BASEURL + movie.poster_path}
                                alt={movie.title + ' poster'}
                                key={movie.id}></img>
                            </Aux>
                        )}
                        ): null}
                    </div>

                    <div className="movieTrailer-container" style={{display : !closed ? "block" : "none"}}>
                    {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} className="youtube-trailer"></YouTube>}
                        <div className="movie-description">
                            <div>
                                <h1>{description[0]}</h1>
                                <h3>{description[2]}</h3>
                                <h5>{description[3]}</h5>
                            </div>
                            <h2>{description[1]}</h2>
                        </div>
                    </div>

                    {/* <div className="card-content" style={{display : image ? "block" : "none"}}>
                        <h3>{movie.title}</h3>
                        <p>RELEASE DATE: {movie.release_date}</p>
                        <p>RATING: {movie.vote_average}</p>
                        <p className="card-description">{movie.overview}</p>
                    </div> */}

            </Container>
            <div className="body-for-search" 
                 onClick={() => {
                    getOpen(false);
                    reset();
                    setOpenMenu(true);
                    console.log('clicked by body')}} 
            style={{display : open ? "block" : "none"}} ></div>

            
        </Aux>
    )
}

export default Search;