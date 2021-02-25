import React, {useState, useEffect} from 'react';
import './navbar.css';
import fire from '../navbar/images/fire.jpg';
import search from '../navbar/images/search.svg';
import HamburgerMenu from '../navbar/HamburgerMenu/HamburgerMenu';

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
            <img className="logo" src={fire}></img>
            <img className="search" src={search}></img>
        </div>
    )
}

export default Navbar;

