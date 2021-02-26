import React, {useState, useEffect} from 'react';
import {NavDropdown }from 'react-bootstrap';
import './navbar.css';
import fire from '../navbar/images/fire.jpg';
import HamburgerMenu from '../navbar/HamburgerMenu/HamburgerMenu';
import Search from './Search/Search';

const Navbar = () => {
    const [show, getScroll] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100) {
                getScroll(true);
            } else getScroll(false);
        });
        return () => {
            window.removeEventListener("scroll", '')};
        }, []);

    return (
        <div className={`Nav ${show && "nav_black"}`}>
            <HamburgerMenu></HamburgerMenu>
            <img className="Logo" src={fire}></img>
            <Search></Search>
            <NavDropdown title="Settings" id="collasible-nav-dropdown" className="dropdown">
                <NavDropdown.Item href="#action/3.1">Any help?</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Contact us!</NavDropdown.Item>
            </NavDropdown>
        </div>
    )
}

export default Navbar;

