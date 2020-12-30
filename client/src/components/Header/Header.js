import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
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
            name: "Sign up",
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
                            <NavLink className={styles.nav_links} key={element.path} to={element.path}
                                activeClassName={styles.nav_active_link}
                            >
                                {element.name}
                            </NavLink>
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
                        <NavLink className={styles.mobile_nav_links} key={element.path} to={element.path}
                            activeClassName="mobile-nav-active-link"
                        >
                            {element.name}
                        </NavLink>
                    ))
                }
            </nav>
        </>
    )
}

export default Header
