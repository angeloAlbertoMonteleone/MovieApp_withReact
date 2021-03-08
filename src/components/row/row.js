import React, {useState, useEffect} from "react";
import axios from '../../axios/axios';
import './row.css';
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
const BASE_IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

function Row({title, fetchUrl, smallerRow}) {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState('');

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

    // const handleClickForTrailer = (movie) => {
    //     if(trailerUrl) {
    //         setTrailerUrl('');
    //     } else {
    //         movieTrailer('Oceans Eleven', {id: true, multi:true})
    //         .then(res => console.log(res));
    //         // movieTrailer(movie?.name || '')
    //         // .then((url) => {
    //         //     const urlParameter = new URLSearchParams(new URL(url).search); 
    //         //     setTrailerUrl(urlParameter.get('v'));
    //         // })
    //         // .catch(error => console.log(error));
    //     }
    // }


    return (
        <div className="row-movies">
            {/* title */}
            <h5>{title}</h5>
            {/* posters */}
            {/* add base url to poster path  */}
            <div className="container_posters">
                {movies && movies.length > 0 ? movies.map(movie => (
                    <img
                    // onClick={handleClickForTrailer(movie)} 
                    className={`poster ${smallerRow && "smaller_row"}`} 
                    src={`${BASE_IMAGE_URL}${movie.poster_path}`} 
                    key={movie.id} 
                    alt={movie.name}></img>))
                : console.log('error: ',movies)}
            </div>
            <YouTube videoId={'cFAtUbi7a8w'} opts={opts}></YouTube>
        </div>
    ) 
}

export default Row;