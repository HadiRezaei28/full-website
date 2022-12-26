import React, { useState } from 'react';
import styles from "./Navbar.module.css";
import logo from "../images/structure.png";
import { Link } from 'react-router-dom';
import { bars } from 'react-icons-kit/fa/bars';
import { Icon } from 'react-icons-kit';
import { close } from 'react-icons-kit/fa/close';

// `${toggle ? styles.listshow & styles.list : styles.list}`

const Navbar = () => {

    const [toggle, setToggle] = useState(false);

    return (
        <div className={styles.navbar}>
            <div className={styles.logo}>
                <Link to="/"><img src={logo} alt="logo" /></Link>
            </div>
            <div className={`${toggle ? `${styles.active} ${styles.list}` : styles.list}`} >
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
            <div className={styles.bars}>
                {toggle ?
                    <Icon onClick={() => setToggle(!toggle)} icon={close} /> :
                    <Icon onClick={() => setToggle(!toggle)} icon={bars} />
                }
            </div>
        </div>
    );
};

export default Navbar;