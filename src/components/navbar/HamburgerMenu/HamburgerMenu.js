import React ,{useState} from 'react';
import './HamburgerMenu.css';
import requests from '../../../environments/environments';
import Hamburger from './Hamburger/Hamburger';
import Aux from "../../../Auxiliary/Auxiliary";


function HamburgerMenu() {
    const [open, setOpen] = useState(false);

        return (
            <Aux className="root">                   
                <div className="Logo-ham" onClick={() => {setOpen(!open)}} >
                    <div className="ham"></div>
                    <div className="ham"></div>
                    <div className="ham"></div>
                </div>

                <div className="hamburgerMenu" style={{transform: open ? "translateX(0px)" : "translateX(-500px)"}}>
                    <Hamburger fetchUrl={requests.fetchGenres}></Hamburger>
                </div>
                <div className="body" style={{display: open ? "block" : "none"}} onClick={() => setOpen(false)}></div>
            </Aux>
        )
}

export default HamburgerMenu;