import React from 'react';
import styles from "./Footer.module.css";
import logo from "../../../images/structure.png";
import { FaMapMarkerAlt, FaPhoneAlt, FaFax, FaEnvelope, FaGlobe } from "react-icons/fa";

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>
                <img src={logo} alt="logo" />
                <p>Copyright 2024, Reactjs</p>
            </div>
            <div className={styles.contact}>
                <h4>Ways of communication</h4>
                <div>
                    <p><span><FaMapMarkerAlt /></span><span>Address: Iran Tehran</span></p>
                    <p><span><FaPhoneAlt /></span><span>Telephone: 0098021123456</span></p>
                    <p><span><FaFax /></span><span>Fax: 0098021123456</span></p>
                    <p><span><FaEnvelope /></span><span>Email: example@gmail.com</span></p>
                    <p><span><FaGlobe /></span><span>Website: www.example.com</span></p>
                </div>
            </div>
            <div className={styles.support}>
                <h4>Support</h4>
                <div>
                    <ul>
                        <li>Support</li>
                        <li>About us</li>
                        <li>Education</li>
                        <li>Hosting</li>
                        <li>Products</li>
                    </ul>
                </div>
            </div>
            <div className={styles.links}>
                <h4>Useful links</h4>
                <div>
                    <ul>
                        <li>Support</li>
                        <li>About us</li>
                        <li>Education</li>
                        <li>Hosting</li>
                        <li>Products</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;