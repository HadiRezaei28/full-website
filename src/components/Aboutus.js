import React, { useState } from 'react';
import styles from "./Aboutus.module.css"
import Navbar from './Navbar';
import {FaChevronLeft,FaChevronRight} from 'react-icons/fa';
import data from "./data"

const Aboutus = () => {

    const [index, setIndex] = useState(0);
    const {name, job, text, image} = data[index];

    const prevSlide = () => {
        if (index === 0) {
            setIndex(data.length - 1);
        } else {
            setIndex(index - 1);
        }
    }

    const nextSlide = () => {
        if (index === data.length - 1) {
            setIndex(0)
        } else {
            setIndex(index + 1);
        }
    }

    return (
        <div>
            <Navbar />
            <div className={styles.container}>
                <div className={styles.header}>
                    <h1>About Us</h1>
                </div>
                <div className={styles.main}>
                    <img src={image} alt="photo" />
                    <h3>{name}</h3>
                    <h4>{job}</h4>
                    <p>{text}</p>
                    <div className={styles.slider}>
                        <button onClick={prevSlide}><FaChevronLeft /></button>
                        <button onClick={nextSlide}><FaChevronRight /></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Aboutus;