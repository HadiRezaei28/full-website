import React from 'react';
import styles from "./Navbar.module.css";
import logo from "../images/structure.png";
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <div className={styles.logo}>
                <Link to="/"><img src={logo} alt="logo" /></Link>
            </div>
            <div className={styles.list}>
                <ul>
                    <Link to="/"><li>Home</li></Link>
                    <Link to="/products"><li>Products</li></Link>
                    <Link to="/aboutus"><li>About us</li></Link>
                    <li>
                        <Link to="/signup"><span>Sign up</span></Link>
                        <span> / </span>
                        <Link to="/login"><span>Login</span></Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;