import React from 'react';
import styles from "./SignUp.module.css"

const SignUp = () => {
    return (
        <div className={styles.container}>
            <form className={styles.formContainer}>
                <h1 className={styles.header}>SignUp</h1>
                <div className={styles.formField}>
                    <label>Name</label>
                    <input type="text" className={styles.formInput} />
                    <span>Name is required</span>
                </div>
                <div className={styles.formField}>
                    <label>Email</label>
                    <input type="email" className={styles.formInput} />
                    <span>Email is required</span>
                </div>
                <div className={styles.formField}>
                    <label>Password</label>
                    <input type="password" className={styles.formInput} />
                    <span>Password is required</span>
                </div>
                <div className={styles.formField}>
                    <label>Confirm Password</label>
                    <input type="password" className={styles.formInput} />
                    <span>Confirm the Password</span>
                </div>
                <div className={styles.formField}>
                    <div className={styles.checkBoxContainer}>
                        <label>I accept terms of privacy policy</label>
                        <input className={styles.checkbox} type="checkbox" />
                    </div>
                    <span>Accept our regulations</span>
                </div>
                <div className={styles.formButtons}>
                    <a href='#'>Login</a>
                    <button type="submit">Sign Up</button>
                </div>
            </form>
        </div>
    );
};

export default SignUp;