import React, { useState } from 'react'
import styles from './AuthForm.module.css'
import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'

function AuthForm() {
    const [islogin, setIsLogin] = useState(true)

    return (
        <div className={styles.container}>
            <div className={styles.formContainer}>
                <div className={styles.formToggle}>
                    <button className={islogin ? styles.active : ''} onClick={() => setIsLogin(true)}>Login</button>
                    <button className={islogin ? '' : styles.active} onClick={() => setIsLogin(false)}>Sign Up</button>
                </div>
                {islogin ? <LoginForm /> : <RegisterForm />}
            </div>

        </div>
    )
}

export default AuthForm
