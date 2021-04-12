import React, {useState, useEffect} from 'react';
import axios from '../../../../axios/axios';
import './Hamburger.css';
import fire from '../../../../images/firee.png';
import Aux from '../../../../Auxiliary/Auxiliary';
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
import {ReactComponent as ReactLogo} from '../../images/hand-point-left.svg';

const BASE_IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

function Hamburger({fetchUrl, fetchUrlMoviesTopRated}) {

    /* newState to fetch all HAMB genres */
    const [genres, setGenres] = useState([]);
    /* new State to fetch movie API */
    const [movies, setMovies] = useState([]);
    /* new State to open the movie menu */
    const [closed, getOpenedMenu] = useState(false); 
    /* new State to add youtube trailer  */
    const [trailerUrl, setTrailerUrl] = useState("");
    /* new State to open movie description*/
    const [closedTr, getOpenedMenuTr] = useState(false);
    /* new State to add filtered movie inside an array*/
    const [filteredMovies, addFilteredMovies] = useState([]);
    /* new State to add filtered movie inside an array*/
    const [typeOfGenre, getTypeOfGenre] = useState("");

    useEffect(() => {
        async function getCategories() {
            const cat = await axios.get(fetchUrl);
            const mov = await axios.get(fetchUrlMoviesTopRated);
            console.log("cat:" ,cat.data.genres);
            console.log("popular movies", mov.data.results);
            setGenres(cat.data.genres);
            setMovies(mov.data.results);
            return cat, mov;
        }
        getCategories();
    }, [fetchUrl, fetchUrlMoviesTopRated])


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


    const opts = {
        playerVars: {
            autoplay: 0,
        }
    };

    console.log('genres: ', genres)

    return (
        
        <Aux>
            <div className="container_hamburger" style={{display : closed ? "none" : "block"}}>
            <img className="logo" src={fire}></img>
            <h3>Categories</h3>
            <ul className="ul-hamburger">
                {genres.map((genre) => {
                    return (
                        <li className="li-hamburger">
                            <a 
                            key={genre.id} 
                            id={genre.id} 
                            name={genre.name}

                            onClick={(e) => {
                                let event = e.target.id;
                                getTypeOfGenre(e.target.name);
                                console.log("movies by click",movies);
                                const filteredMovies = movies.filter(movie => movie.genre_ids.includes(+event));
                                console.log("filtered movies", filteredMovies);
                                addFilteredMovies(filteredMovies);
                                getOpenedMenu(true)}}
                            >{genre.name}</a>
                        </li>
                            )
                         })}
                 </ul>
            </div>

            <div className="body" 
                 style={{display: closed ? "flex" : "none"}} 
                //  onClick={() => {
                //     getOpenedMenu(false)
                >
                    <ReactLogo 
                        className="point-left"
                        onClick={() => {
                            getOpenedMenu(false);
                            getOpenedMenuTr(false);
                            setTrailerUrl("");
                            getTypeOfGenre("");

                            console.log("body closed");
                        }}></ReactLogo>
                    <h1 className="menu-title">Most Popular - {typeOfGenre}</h1>
                        <div className="filteredMovie">
                            <div className="movie">
                                {filteredMovies.map((movie) => {
                                    return (
                                            <img className="image"
                                                id={movie.genre_ids}
                                                alt={movie.title}
                                                key={movie.id}
                                                src={`${BASE_IMAGE_URL}${movie.poster_path}`}
                                                onClick = {() => {
                                                    handleClickForTrailer(movie)
                                                    getOpenedMenu(true)
                                                    
                                                }} 
                                                ></img>
                                        )})}
                            </div>
                        </div>  
                        {trailerUrl && <YouTube 
                                            videoId={trailerUrl} 
                                            opts={opts} 
                                            className="youtube-trailer-HAM" 
                                            style={{display : !closedTr ? "block" : "none"}}>
                                        </YouTube>}
            </div>

    </Aux>
    
    )       
}


export default Hamburger;
