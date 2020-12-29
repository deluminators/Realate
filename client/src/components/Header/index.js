import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import './style.scss';

function Header() {

    const [mobileNav, setMobileNav] = useState(false);

    function toggleMobileNav() {
        setMobileNav(c => !c);
    }

    return (
        <>
            <header className="Header">
                <div className="logo">
                    Realate
            </div>
                <nav className="nav">
                    <div className="nav-links">
                        About Us
                </div>
                    <div className="nav-links">
                        Contact Us
                </div>
                    <div className="nav-links">
                        Log In
                </div>
                    <div className="nav-links">
                        Sign Up
                </div>
                </nav>
                <div className="hamburger" onClick={toggleMobileNav}>
                    <GiHamburgerMenu />
                </div>
            </header >
            <nav className="mobile-nav" style={{ right: `${mobileNav ? '0' : '-3000px'}` }}>
                <div className="mobile-nav-links">
                    About Us
                </div>
                <div className="mobile-nav-links">
                    Contact Us
                </div>
                <div className="mobile-nav-links">
                    Log In
                </div>
                <div className="mobile-nav-links">
                    Sign Up
                </div>
            </nav>
        </>
    )
}

export default Header
