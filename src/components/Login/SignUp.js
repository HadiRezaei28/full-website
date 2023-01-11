import React, { useEffect, useState } from 'react';
import styles from "./SignUp.module.css";
import { validate } from './validate';
import { Icon } from 'react-icons-kit'
import { eye } from 'react-icons-kit/fa/eye';
import { eyeSlash } from 'react-icons-kit/fa/eyeSlash'
import PasswordStrengthMeter from './PasswordStrengthMeter';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { notify } from './toast';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

const SignUp = () => {

    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
        confirmpassword: "",
        isAccepted: false
    })

    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});
    const [show, setShow] = useState({
        password: "password",
        confirmpassword: "password"
    })

    useEffect(() => {
        setErrors(validate(data, "signup"))
    }, [data, touched])

    const changeHandler = (e) => {
        if (e.target.name === "isAccepted") {
            setData({ ...data, [e.target.name]: e.target.checked })
        } else {
            setData({ ...data, [e.target.name]: e.target.value })
        }
    }

    const focusHandler = e => {
        setTouched({ ...touched, [e.target.name]: true })
    }

    const passHandler = () => {
        if (show.password === "password") {
            setShow({ ...show, password: "text" })
        } else {
            setShow({ ...show, password: "password" })
        }
    }

    const confirmpassHandler = () => {
        if (show.confirmpassword === "password") {
            setShow({ ...show, confirmpassword: "text" })
        } else {
            setShow({ ...show, confirmpassword: "password" })
        }
    }

    const submitHandler = (e) => {
        e.preventDefault();
        if (!Object.keys(errors).length) {
            notify("You signed up successfully", "success")
        } else {
            notify("Invalid data!", "error")
            setTouched({
                name: true,
                email: true,
                password: true,
                confirmpassword: true,
                isAccepted: true
            })
        }
    }


    return (
        <>
            <Navbar />
            <div className={styles.container}>
                <form className={styles.formContainer} onSubmit={submitHandler}>
                    <h1 className={styles.header}>SignUp</h1>
                    <div className={styles.formField}>
                        <label>Name</label>
                        <input
                            type="text"
                            className={(errors.name && touched.name) ? styles.uncompleted : styles.formInput}
                            name="name"
                            value={data.name}
                            onChange={changeHandler}
                            onFocus={focusHandler}
                        />
                        {errors.name && touched.name && <span className={styles.error}>{errors.name}</span>}
                    </div>
                    <div className={styles.formField}>
                        <label>Email</label>
                        <input
                            type="email"
                            className={(errors.email && touched.email) ? styles.uncompleted : styles.formInput}
                            name="email"
                            value={data.email}
                            onChange={changeHandler}
                            onFocus={focusHandler}
                        />
                        {errors.email && touched.email && <span className={styles.error}>{errors.email}</span>}
                    </div>
                    <div className={styles.formField}>
                        <label>Password</label>
                        <div className={styles.inputcontainer}>
                            <input
                                type={show.password}
                                className={(errors.password && touched.password) ? styles.uncompleted : styles.formInput}
                                name="password"
                                value={data.password}
                                onChange={changeHandler}
                                onFocus={focusHandler}
                            />
                            <span onClick={passHandler} >
                                {show.password === "password" ? <Icon icon={eye} /> : <Icon icon={eyeSlash} />}
                            </span>
                        </div>
                        {touched.password &&
                            <PasswordStrengthMeter password={data.password} />
                        }
                    </div>
                    <div className={styles.formField}>
                        <label>Confirm Password</label>
                        <div className={styles.inputcontainer}>
                            <input
                                type={show.confirmpassword}
                                className={(errors.confirmpassword && touched.confirmpassword) ? styles.uncompleted : styles.formInput}
                                name="confirmpassword"
                                value={data.confirmpassword}
                                onChange={changeHandler}
                                onFocus={focusHandler}
                            />
                            <span onClick={confirmpassHandler} >
                                {show.confirmpassword === "password" ? <Icon icon={eye} /> : <Icon icon={eyeSlash} />}
                            </span>
                        </div>
                        {errors.confirmpassword && touched.confirmpassword && <span className={styles.error}>{errors.confirmpassword}</span>}
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
                                onFocus={focusHandler}
                            />
                        </div>
                        {errors.isAccepted && touched.isAccepted && <span className={styles.error}>{errors.isAccepted}</span>}
                    </div>
                    <div className={styles.formButtons}>
                        <Link to='/login'>Login</Link>
                        <button type="submit">Sign Up</button>
                    </div>
                </form>
                <ToastContainer />
            </div>
        </>
    );
};

export default SignUp;