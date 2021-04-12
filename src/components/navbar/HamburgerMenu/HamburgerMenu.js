import React ,{useState} from 'react';
import './HamburgerMenu.css';
import requests from '../../../environments/environments';
import Hamburger from './Hamburger/Hamburger';
import Aux from "../../../Auxiliary/Auxiliary";


function HamburgerMenu() {
    const [open, setOpen] = useState(false);

        return (
            <Aux className="root">
                <div className="ham-menu" onClick={() => {setOpen(!open)}}>
                    <div clicked className="Logo-ham">
                        <div className="ham"></div>
                        <div className="ham"></div>
                        <div className="ham"></div>
                    </div>
                </div>                   
                

                <div className="hamburgerMenu" style={{transform: open ? "translateX(0px)" : "translateX(-500px)"}}>
                    <Hamburger fetchUrl={requests.fetchGenres} fetchUrlMoviesTopRated={requests.fetchPopular}></Hamburger>
                </div>
                <div className="body-next-HAM" style={{display: open ? "block" : "none"}} onClick={() => setOpen(false)}></div>
            </Aux>
        )
}

export default HamburgerMenu;