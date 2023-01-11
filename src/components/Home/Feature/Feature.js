import React from 'react';
import styles from "./Feature.module.css";
import { BsFillBookmarkStarFill } from "react-icons/bs";
import { FeaturesList } from './data';
import { BsHexagon } from "react-icons/bs";
import picture02 from "../../../images/02.png";

const Feature = () => {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <div><BsFillBookmarkStarFill /></div>
                <h2>Main features</h2>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
            </div>
            <div className={styles.bottom}>
                <div className={styles.text}>
                    {
                        FeaturesList.map(item => {
                            return (
                                <div className={styles.feature} key={item.id}>
                                    <div className={styles.logo}>
                                        <BsHexagon color='#fc5412' size={55} />
                                        <div className={styles.icon}>
                                            {item.icon}
                                        </div>
                                    </div>
                                    <div className={styles.about}>
                                        <h3>{item.heading}</h3>
                                        <p>{item.text}</p>
                                    </div>
                                </div>
                            )

                        })
                    }
                </div>
                <div className={styles.image}>
                    <img src={picture02} alt="picture02" />
                </div>
            </div>
        </div>
    );
};

export default Feature;