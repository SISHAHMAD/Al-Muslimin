import React from 'react'
import styles from './AuthForm.module.css';

const LoginForm = ({ setIsLogin }) => {
    return (
        <>
            <div className={styles.form}>
                <h2>Login Here</h2>
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <a href="">Forgot Password?</a>
                <button>Login</button>
                <p>Not a Member?<a href="#" onClick={(e) => { e.preventDefault(); setIsLogin(false); }}>Signup now</a></p>
            </div>
        </>
    )
}

export default LoginForm
