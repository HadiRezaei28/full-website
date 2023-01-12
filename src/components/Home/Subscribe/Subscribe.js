import React from 'react';
import styles from "./Subscribe.module.css";
import { TiSocialGooglePlus } from "react-icons/ti";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Subscribe = () => {
    return (
        <div className={styles.container}>
            <h1>Subscribe now!</h1>
            <div className={styles.btncontainer}>
                <input type="text" placeholder='Please Entet Your Email...' />
                <button>Subscribe</button>
            </div>
            <div className={styles.social}>
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