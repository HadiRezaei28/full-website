import React from 'react';
import styles from "./Download.module.css";
import { GrAndroid } from "react-icons/gr";
import { FaApple, FaWindows } from "react-icons/fa";



const Download = () => {
    return (
        <div className={styles.container}>
            <h1>Download Our Application</h1>
            <div className={styles.line}></div>
            <p>Our apps are available for download in all stores</p>
            <div className={styles.app}>
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