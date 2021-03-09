import React, {useState, useEffect} from "react";
import axios from '../../axios/axios';
import './row.css';
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
import Aux from '../../Auxiliary/Auxiliary';
const BASE_IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

function Row({title, fetchUrl, smallerRow}) {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");

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
        height: '390px',
        width: '100%',
        playerVars: {
            autoplay:1,
        }
    };

    const handleClickForTrailer = (movie) => {
        if(trailerUrl) {
            setTrailerUrl('');
        } else {
            movieTrailer(movie?.title || "")
            .then(url => {
                const urlParams = new URLSearchParams(new URL(url).search);
                setTrailerUrl(urlParams.get('v'));  
            }).
            catch((error) => console.log(error));
        }
    }


    return (
        <Aux>
            <div className="row-movies">
                {/* title */}
                <h5>{title}</h5>
                {/* posters */}
                {/* add base url to poster path  */}
                <div className="container_posters">
                    {movies && movies.length > 0 ? movies.map(movie => (
                        <img
                        onClick={() => handleClickForTrailer(movie)} 
                        className={`poster ${smallerRow && "smaller_row"}`} 
                        src={`${BASE_IMAGE_URL}${movie.poster_path}`} 
                        key={movie.id} 
                        alt={movie.name}></img>))
                    : console.log('error: ',movies)}
                </div>
            </div>
            
            <div className="movieTrailer-container">
                {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}></YouTube>}
            </div>
        
            <div className="bodyTrailer"></div>
        </Aux>
    ) 
}

export default Row;