import React, { useState } from 'react'
import styles from './AuthForm.module.css'
import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'
import ResetPassword from './ResetPassword'

function AuthForm() {
    const params = new URLSearchParams(window.location.search);
    const isResetPassword = params.get('reset') === 'true';
    const [islogin, setIsLogin] = useState(!isResetPassword);

    return (
        <div className={styles.container}>
            <div className={styles.formContainer}>
                <div className={styles.formToggle}>
                    <button className={islogin ? styles.active : ''} onClick={() => setIsLogin(true)}>Login</button>
                    <button className={islogin ? '' : styles.active} onClick={() => setIsLogin(false)}>Sign Up</button>
                </div>
                {islogin ? <LoginForm /> : <RegisterForm isResetPassword={isResetPassword} />}
            </div>

        </div>
    )
}

export default AuthForm
