import React, { useEffect } from 'react';
import styles from "./Subscribe.module.css";
import { TiSocialGooglePlus } from "react-icons/ti";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Subscribe = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000
        });
    }, [])

    return (
        <div className={styles.container}>
            <h1 data-aos="fade-up">Subscribe now!</h1>
            <div className={styles.btncontainer} data-aos="fade-up">
                <input type="text" placeholder='Please Entet Your Email...' />
                <button>Subscribe</button>
            </div>
            <div className={styles.social} data-aos="fade-up">
                <div className={styles.icon}>
                    <FaInstagram />
                </div>
                <div className={styles.icon}>
                    <FaTwitter />
                </div>
                <div className={styles.icon}>
                    <FaFacebookF />
                </div>
                <div className={styles.icon}>
                    <TiSocialGooglePlus />
                </div>
            </div>
        </div>
    );
};

export default Subscribe;