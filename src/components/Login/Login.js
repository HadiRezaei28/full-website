import React, { useEffect, useState } from 'react';
import styles from "./SignUp.module.css";
import { validate } from './validate';
import { Icon } from 'react-icons-kit'
import { eye } from 'react-icons-kit/fa/eye';
import { eyeSlash } from 'react-icons-kit/fa/eyeSlash'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { notify } from './toast';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

const Login = () => {

    const [data, setData] = useState({
        email: "",
        password: "",
    })

    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});
    const [show, setShow] = useState({
        password: "password",
        confirmpassword: "password"
    })

    useEffect(() => {
        setErrors(validate(data, "login"))
    }, [data, touched])

    const changeHandler = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
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

    const submitHandler = (e) => {
        e.preventDefault();
        if (!Object.keys(errors).length) {
            notify("You loged in successfully", "success")
        } else {
            notify("Invalid data!", "error")
            setTouched({
                email: true,
                password: true,
            })
        }
    }


    return (
        <>
            <Navbar />
            <div className={styles.container}>
                <form className={styles.formContainer} onSubmit={submitHandler}>
                    <h1 className={styles.header}>Login</h1>
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
                        {touched.password && errors.password && <span className={styles.error}>{errors.password}</span>}
                    </div>
                    <div className={styles.formButtons}>
                        <Link to='/signup'>Sign Up</Link>
                        <button type="submit">Login</button>
                    </div>
                </form>
                <ToastContainer />
            </div>
        </>
    );
};

export default Login;