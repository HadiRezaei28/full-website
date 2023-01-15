import React, { useEffect } from 'react';
import styles from "./Download.module.css";
import { GrAndroid } from "react-icons/gr";
import { FaApple, FaWindows } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Download = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000
        });
    }, [])

    return (
        <div className={styles.container} >
            <h1 data-aos="fade-up">Download Our Application</h1>
            <div className={styles.line} data-aos="fade-up"></div>
            <p data-aos="fade-up">Our apps are available for download in all stores</p>
            <div className={styles.app} data-aos="fade-up">
                <div>
                    <GrAndroid />
                    <p>Android</p>
                </div>
                <div>
                    <FaWindows />
                    <p>Windows</p>
                </div>
                <div>
                    <FaApple />
                    <p>iphone</p>
                </div>
            </div>

        </div>
    );
};

export default Download;