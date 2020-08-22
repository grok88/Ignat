import React from 'react'
import styles from './Navbar.module.css'
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <h2 className={styles.logo}>
                <a href="https://grok88.github.io/Ignat">homepage</a>
            </h2>
            <ul>
                <li> <NavLink to='/prejunior' activeClassName={styles.active}>Prejunior</NavLink></li>
                <li> <NavLink to='/junior' activeClassName={styles.active}>Junior</NavLink></li>
                <li> <NavLink to='/junior+' activeClassName={styles.active}>Junior+</NavLink></li>
            </ul>
        </nav>
    );
}