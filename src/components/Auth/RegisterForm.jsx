import React from 'react'
import styles from './AuthForm.module.css';
const RegisterForm = ({ setIsLogin }) => {
    return (
        <div className={styles.form}>
            <>
                <input type="email" placeholder='Email' />
                <input type="password" placeholder='Password' />
                <input type="password" placeholder='Confirm Password' />
                <button>Sign Up</button>
                <p>Already a Member?<a href="#" onClick={(e) => { e.preventDefault(); setIsLogin(true); }}>Login now</a></p>
            </>

        </div>
    )
}

export default RegisterForm
