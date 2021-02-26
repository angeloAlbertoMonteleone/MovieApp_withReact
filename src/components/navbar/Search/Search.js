import React, {useState} from 'react';
import search from '../images/search.svg';
import './Search.css';
import arrowLeft from '../images/arrow-left.svg';
import Aux from '../../../Auxiliary/Auxiliary';

function Search() {
    const [open, getOpen] = useState(false);  
    
    return (
        <Aux>
            <img className="search" src={search}></img>
            <div className="search-menu">
                <form action="">
                    <img className="back-arrow" src={arrowLeft}></img>
                    <img className="search-inside-menu" src={search}></img>
                    <input></input>
                </form>
            </div>
            <div className="body-for-search"></div>
        </Aux>
    )
}

export default Search;