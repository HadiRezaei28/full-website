import React from 'react';
import styles from "./Faq.module.css";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { questions } from './data';
import Question from "./Question"


const Faq = () => {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <MdOutlineLibraryBooks color="orangered" size={30} />
                <h2>Frequently Asked Questions</h2>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
            </div>
            <div className={styles.bottom}>
                {
                    questions.map(item => {
                        return (
                            <Question key={item.id} title={item.title} answer={item.answer} />
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Faq;