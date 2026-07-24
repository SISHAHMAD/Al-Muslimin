import React, { useState } from "react";
import styles from "./AuthForm.module.css";
import { supabase } from "../../utils/supabase";
import { useNavigate } from "react-router-dom";

const RegisterForm = ({ setIsLogin }) => {
    const navigate = useNavigate();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        const form = e.target;

        const email = form.email.value.trim();
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;

        // Validation
        if (!email) {
            return setError("Email is required.");
        }

        if (password.length < 6) {
            return setError("Password must be at least 6 characters.");
        }

        if (password !== confirmPassword) {
            return setError("Passwords do not match.");
        }

        setLoading(true);

        const { data, error } = await supabase.auth.signUp({
            email,
            password,
        });

        setLoading(false);

        if (error) {
            setError(error.message);
            return;
        }

        console.log(data);
        alert("Registration successful. Please confirm your email for verification.");
        form.reset();
        navigate("/login");
    };

    return (
        <form onSubmit={handleSubmit} className={styles.form}>

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
                minLength={6}
                required
            />

            <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                minLength={6}
                required
            />

            {error && <p className={styles.error}>{error}</p>}

            <button type="submit" disabled={loading}>
                {loading ? "Signing Up..." : "Sign Up"}
            </button>

            <p>
                Already a Member?{" "}
                <a
                    href="#"
                    onClick={(e) => {
                        e.preventDefault();
                        setIsLogin(true);
                    }}
                >
                    Login now
                </a>
            </p>

        </form>
    );
};

export default RegisterForm;