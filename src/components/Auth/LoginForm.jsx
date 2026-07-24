import React from 'react'
import styles from './AuthForm.module.css';
import { supabase } from "../../utils/supabase";
import { useNavigate } from "react-router-dom";
import { useState } from 'react';

const LoginForm = ({ setIsLogin }) => {
    const navigate = useNavigate();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        const form = e.target;

        const email = form.email.value.trim();
        const password = form.password.value;

        // Validation
        if (!email) {
            return setError("Email is required.");
        }

        setLoading(true);

        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        setLoading(false);

        if (error) {
            setError(error.message);
            return;
        }

        navigate("/");
    };

    return (
        <>
            <div className={styles.form}>
                <h2>Login Here</h2>
                <form className={styles.form} onSubmit={handleSubmit} >
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        required
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        required
                    />
                    {error && <p className={styles.error}>{error}</p>}
                    <a href="">Forgot Password?</a>
                    <button type="submit" disabled={loading}>
                        {loading ? "Logging In..." : "Login"}
                    </button>
                </form>
                <p>Not a Member?<a href="#" onClick={(e) => { e.preventDefault(); setIsLogin(false); }}>Signup now</a></p>
            </div>
        </>
    )
}

export default LoginForm
