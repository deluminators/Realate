import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import styles from './Header.module.css';

function Header() {

    const [mobileNav, setMobileNav] = useState(false);

    const navbar = [
        {
            name: "About Us",
            path: "/about-us"
        },
        {
            name: "Contact Us",
            path: "/contact-us"
        },
        {
            name: "Sign In",
            path: "/sign-in"
        },
        {
            name: "Sign-up",
            path: "/sign-up"
        }
    ]

    function toggleMobileNav() {
        setMobileNav(c => !c);
    }

    return (
        <>
            <header className={styles.Header}>
                <Link className={styles.logo} to='/'>
                    Realate
                </Link>
                <nav className={styles.nav}>
                    {
                        navbar.map(element => (
                            <Link className={styles.nav_links} key={element.path} to={element.path}>
                                {element.name}
                            </Link>
                        ))
                    }
                </nav>
                <div className={styles.hamburger} onClick={toggleMobileNav}>
                    <GiHamburgerMenu />
                </div>
            </header >
            <nav className={styles.mobile_nav} style={{ right: `${mobileNav ? '0' : '-3000px'}` }}>
                {
                    navbar.map(element => (
                        <div className={styles.mobile_nav_links} key={element.path}>
                            {element.name}
                        </div>
                    ))
                }
            </nav>
        </>
    )
}

export default Header
