import React, {useState, useEffect} from "react";
import axios from '../../axios/axios';
import {Row, Col} from 'react-bootstrap';
import './row.css';
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
import Aux from '../../Auxiliary/Auxiliary';
const BASE_IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

function MovieRow({title, fetchUrl, biggerRow, className}) {
    /* useState to fetch movies */
    const [movies, setMovies] = useState([]);
    /* useState to set Trailer Url for clicked movie */
    const [trailerUrl, setTrailerUrl] = useState("");
    /* useState to get Description content for clicked movie */
    const [description, setDecription] = useState([]);

    const [closed, setOpenMenu] = useState(true);

    useEffect(() => {
        async function fetchData(){ 
            const request = await axios.get(fetchUrl);
            /* console.log(request.data.results); */
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl]);

    console.log('movies', movies);
    
    const opts = {
        playerVars: {
            autoplay: 0,
        }
    };

    const handleClickForTrailer = (movie) => {
        if(trailerUrl) {
            setTrailerUrl('');
        } else {
            movieTrailer(movie?.title || movie?.name || "")
            .then(url => {
                const urlParams = new URLSearchParams(new URL(url).search);
                setTrailerUrl(urlParams.get('v'));
            }).
            catch((error) => console.log(error));
        }
    }

    
    const handleClickForDescription = (movie) => {
        setDecription([(movie.title || movie.name), movie.overview, movie.vote_average, movie.release_date]);
    }
        console.log(description);


    return (
        <Aux className="root">
            <div className="row-movies">
                {/* title */}
                <h5>{title}</h5>
                {/* posters */}
                {/* add base url to poster path  */}
                <div className="container_posters">
                    {movies && movies.length > 0 ? movies.map(movie => (
                        <img
                        onClick={() => {
                            handleClickForTrailer(movie)
                            handleClickForDescription(movie)
                            setOpenMenu(false)
                        }} 
                        className={`poster ${biggerRow && "bigger_row"}`} 
                        src={className === "biggerRow" ? `${BASE_IMAGE_URL}${movie.backdrop_path}` : `${BASE_IMAGE_URL}${movie.poster_path}`} 
                        key={movie.id} 
                        alt={movie.name}></img>))
                    : console.log('error: ',movies)}
                </div>
            </div>
            
            
            <div className="bodyTrailer" style={{display: !closed ? "block" : "none"}} onClick={() => setOpenMenu(true)}>
            </div>
                    
            <div className="movieTrailer-container closed" style={{display : !closed ? "block" : "none"}}>
                    {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} className="youtube-trailer"></YouTube>}
                    <Row className="movie-description">
                        <Col xs="auto"><h1>{description[0]}</h1></Col>
                        <Col xs="auto"><h3>{description[2]}</h3></Col>
                        <Col xs="auto"><h5>{description[3]}</h5></Col>
                        <Col sm={12}><h2>{description[1]}</h2></Col>
                    </Row>
            </div>        
        </Aux>
    ) 
}

export default MovieRow;