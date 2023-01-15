import React, { useEffect } from 'react';
import styles from "./Header.module.css";
import picture01 from "../../../images/01.png";
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Header = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000
        });
    }, [])

    return (
        <div className={styles.container}>
            <div className={styles.left} data-aos="fade-left">
                <img src={picture01} alt="picture01" />
            </div>
            <div className={styles.right} data-aos="fade-right">
                <h1>Easy Shopping</h1>
                <h2>Range of products</h2>
                <h3>Affordable prices</h3>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>
                <div className={styles.btncontainer}>
                    <Link className={styles.start} to="/products">Start Shopping</Link>
                    <Link className={styles.signup} to="/signup">Sign Up</Link>
                </div>
            </div>
        </div>
    );
};

export default Header;