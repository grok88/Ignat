import React from 'react'
import styles from './Navbar.module.css'
import {NavLink} from 'react-router-dom';

export const Navbar = () => {
    return (
        <>
            <input type="checkbox" id="navToggle" hidden />
                <nav className={styles.nav}>
                    <label htmlFor="navToggle" className={styles.navToggle}></label>
                    <h2 className={styles.logo}>
                        {/*<a href="https://grok88.github.io/Ignat">homepage</a>*/}
                        <NavLink to='/' activeClassName={styles.active}>Homepage</NavLink>
                    </h2>
                    <ul>
                        <li><NavLink to='/prejunior' activeClassName={styles.active}>Prejunior</NavLink></li>
                        <li><NavLink to='/junior' activeClassName={styles.active}>Junior</NavLink></li>
                        <li><NavLink to='/junior+' activeClassName={styles.active}>Junior+</NavLink></li>
                    </ul>
                </nav>
        </>
    );
}
