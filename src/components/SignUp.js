import React from 'react';
import styles from "./SignUp.module.css"

const SignUp = () => {
    return (
        <div className={styles.container}>
            <form className={styles.formContainer}>
                <h1>SignUp</h1>
                <div className={styles.formField}>
                    <label>Name</label>
                    <input type="text"/>
                    <span>Name is required</span>
                </div>
                <div className={styles.formField}>
                    <label>Email</label>
                    <input type="email"/>
                    <span>Email is required</span>
                </div>
                <div className={styles.formField}>
                    <label>Password</label>
                    <input type="password"/>
                    <span>Password is required</span>
                </div>
                <div className={styles.formField}>
                    <label>Confirm Password</label>
                    <input type="password"/>
                    <span>Confirm the Password</span>
                </div>
                <div className={styles.formField}>
                    <label>I accept terms of privacy policy</label>
                    <input type="checkbox"/>
                    <span>Accept our regulations</span>
                </div>
                <div className={styles.formButton}>
                    <a href='#'>Login</a>
                    <button type="submit">Sign Up</button>
                </div>
            </form>
        </div>
    );
};

export default SignUp;