import React from 'react';
import styles from "./PasswordStrengthMeter.module.css";
import zxcvbn from 'zxcvbn';

const PasswordStrengthMeter = ({ password }) => {

    const result = zxcvbn(password);
    const num = result.score * 100 / 4;

    const progressColor = () => {
        switch (result.score) {
            case 0:
                return "#828282"
            case 1:
                return "#ea1111"
            case 2:
                return "#ffad00"
            case 3:
                return "#9bc158"
            case 4:
                return "#00b500"
            default:
                return "none"
        }
    }

    const textHandler = () => {
        switch (result.score) {
            case 0:
                return "very weak"
            case 1:
                return "weak"
            case 2:
                return "medium"
            case 3:
                return "strong"
            case 4:
                return "very strong"
            default:
                return "none"
        }
    }

    const styleHandler = () => (
        {
            width: `${num}%`,
            background: progressColor()
        }
    )


    return (
        <div className={styles.progresscontainer}>
            <div className={styles.progress}>
                <div className={styles.progressbar} style={styleHandler()}></div>
            </div>
            <p style={{color: progressColor()}}>{textHandler()}</p>
        </div>
    );
};

export default PasswordStrengthMeter;