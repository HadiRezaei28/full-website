import React, { useState } from 'react';
import styles from "./Question.module.css";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const Question = ({title, answer}) => {

    const [show, setShow] = useState(false);

    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <h2>{title}</h2>
                <button onClick={() => setShow(!show)}>
                    {show ? <AiOutlineMinus color='#333' /> : <AiOutlinePlus color='#333' />}
                </button>
            </div>
            <div className={styles.answer}>
                {
                    show && <p>{answer}</p>
                }
            </div>
        </div>
    );
};

export default Question;