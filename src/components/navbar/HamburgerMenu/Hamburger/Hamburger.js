import React, {useState, useEffect} from 'react';
import axios from '../../../../axios/axios';
import './Hamburger.css';
import fire from '../../../../images/firee.png';

function Hamburger({fetchUrl}) {
    const [genres, setGenres] = useState([]);

    useEffect(() => {
        async function getCategories() {
            const cat = await axios.get(fetchUrl);
            console.log("cat:" ,cat.data.genres);
            setGenres(cat.data.genres);
            return cat;
        }
        getCategories();
    }, [fetchUrl])

    console.log('genres: ', genres)

    return (
        <div className="container_hamburger">
            <img className="logo" src={fire}></img>
            <h3>Categories</h3>
            <ul className="ul-hamburger">
                {genres.map((genre) => {
                    return (
                        <li className="li-hamburger" key={genre.id} id={genre.id} name={genre.name}>
                            <a>{genre.name}</a></li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Hamburger;
