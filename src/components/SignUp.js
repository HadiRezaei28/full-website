import React, { useEffect, useState } from 'react';
import styles from "./SignUp.module.css";
import { validate } from './validate';

const SignUp = () => {

    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
        confirmpassword: "",
        isAccepted: false
    })

    const [errors, setErrors] = useState({});

    useEffect(() => {
        setErrors(validate(data))
    }, [data])

    const changeHandler = (e) => {
        if (e.target.name === "isAccepted") {
            setData({...data, [e.target.name] : e.target.checked})
        } else {
            setData({...data, [e.target.name] : e.target.value})
        }
    }

    return (
        <div className={styles.container}>
            <form className={styles.formContainer}>
                <h1 className={styles.header}>SignUp</h1>
                <div className={styles.formField}>
                    <label>Name</label>
                    <input 
                    type="text" 
                    className={styles.formInput}
                    name="name"
                    value={data.name}
                    onChange={changeHandler}
                    />
                    {errors.name && <span>{errors.name}</span>}
                </div>
                <div className={styles.formField}>
                    <label>Email</label>
                    <input 
                    type="email" 
                    className={styles.formInput} 
                    name="email"
                    value={data.email}
                    onChange={changeHandler}
                    />
                    {errors.email && <span>{errors.email}</span>}
                </div>
                <div className={styles.formField}>
                    <label>Password</label>
                    <input 
                    type="password" 
                    className={styles.formInput} 
                    name="password"
                    value={data.password}
                    onChange={changeHandler}
                    />
                    {errors.password && <span>{errors.password}</span>}
                </div>
                <div className={styles.formField}>
                    <label>Confirm Password</label>
                    <input 
                    type="password" 
                    className={styles.formInput} 
                    name="confirmpassword"
                    value={data.confirmpassword}
                    onChange={changeHandler}
                    />
                    {errors.confirmpassword && <span>{errors.confirmpassword}</span>}
                </div>
                <div className={styles.formField}>
                    <div className={styles.checkBoxContainer}>
                        <label>I accept terms of privacy policy</label>
                        <input 
                        type="checkbox"
                        className={styles.checkbox} 
                        name="isAccepted"
                        value={data.isAccepted}
                        onChange={changeHandler}
                         />
                    </div>
                    {errors.isAccepted && <span>{errors.isAccepted}</span>}
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