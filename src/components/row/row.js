import React, {useState, useEffect} from "react";
import axios from '../../axios/axios';
import './row.css';

const BASE_IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

function Row({title, fetchUrl, smallerRow}) {
    const [movies, setMovies] = useState([]);

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

    return (
        <div className="row-movies">
            {/* title */}
            <h5>{title}</h5>
            {/* posters */}
            {/* add base url to poster path  */}
            <div className="container_posters">
                {movies && movies.length > 0 ? movies.map(movie => (
                    <img 
                    className={`poster ${smallerRow && "smaller_row"}`} 
                    src={`${BASE_IMAGE_URL}${movie.poster_path}`} 
                    key={movie.id} 
                    alt={movie.name}></img>))
                : console.log('error: ',movies)}
            </div>
        </div>
    ) 
}

export default Row;