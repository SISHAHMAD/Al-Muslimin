import React from "react";

function Contact() {
    return (
        <div style={styles.container}>

            {/* Contact Section */}
            <section style={styles.contactSection}>

                {/* Left Side */}
                <div style={styles.contactInfo}>

                    <h2 style={styles.title}>
                        Ma'had Islah Al-Muslimin
                    </h2>

                    <p style={styles.text}>
                        Join our online Quran and Islamic learning platform
                        with qualified teachers and flexible class timings.
                    </p>

                    <div style={styles.infoBox}>
                        <h3>📞 Phone</h3>
                        <p>9939092487</p>
                    </div>

                    <div style={styles.infoBox}>
                        <h3>✉️ Email</h3>
                        <p>mahadislahalmuslimin@gmail.com</p>
                    </div>

                    <div style={styles.infoBox}>
                        <h3>🕌 Sessions</h3>
                        <p>One-on-One Session</p>
                        <p>Group Session</p>
                    </div>

                    <div style={styles.infoBox}>
                        <h3>💰 Fees</h3>
                        <p>Registration Fee: ₹1000</p>
                        <p>Monthly Fees Starting From ₹1000/month</p>
                    </div>

                </div>

                {/* Right Side Form */}
                <div style={styles.formContainer}>

                    <h2 style={styles.formHeading}>
                        Send Us a Message
                    </h2>

                    <form style={styles.form}>

                        <input
                            type="text"
                            placeholder="Your Name"
                            style={styles.input}
                        />

                        <input
                            type="email"
                            placeholder="Your Email"
                            style={styles.input}
                        />

                        <input
                            type="text"
                            placeholder="Phone Number"
                            style={styles.input}
                        />

                        <select style={styles.input}>
                            <option>Select Course</option>
                            <option>Basic Tajweed</option>
                            <option>Advanced Tajweed</option>
                            <option>Nazira Qur'an Course</option>
                            <option>Hifz-e-Qur'an Course</option>
                            <option>Islamic Course</option>
                            <option>Urdu Language Course</option>
                        </select>

                        <textarea
                            placeholder="Your Message"
                            rows="5"
                            style={styles.textarea}
                        />

                        <button style={styles.button}>
                            Send Message
                        </button>

                    </form>

                </div>

            </section>

        </div>
    );
}

const styles = {

    container: {
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "#f8f8f8",
        paddingBottom: "50px",
    },

    heroSection: {
        textAlign: "center",
        padding: "80px 20px",
        background: "#e9e5dd",
    },

    heading: {
        fontSize: "52px",
        color: "#1f2937",
        marginBottom: "15px",
    },

    subHeading: {
        fontSize: "20px",
        color: "#555",
        maxWidth: "700px",
        margin: "0 auto",
        lineHeight: "1.7",
    },

    contactSection: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "40px",
        padding: "70px 10%",
    },

    contactInfo: {
        flex: "1",
        minWidth: "320px",
        background: "white",
        padding: "40px",
        borderRadius: "20px",
        boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
    },

    title: {
        fontSize: "38px",
        marginBottom: "20px",
        color: "#1f2937",
    },

    text: {
        fontSize: "18px",
        lineHeight: "1.8",
        color: "#555",
        marginBottom: "30px",
    },

    infoBox: {
        marginBottom: "25px",
    },

    formContainer: {
        flex: "1",
        minWidth: "320px",
        background: "white",
        padding: "40px",
        borderRadius: "20px",
        boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
    },

    formHeading: {
        fontSize: "34px",
        marginBottom: "25px",
        color: "#1f2937",
    },

    form: {
        display: "flex",
        flexDirection: "column",
        gap: "20px",
    },

    input: {
        padding: "15px",
        borderRadius: "12px",
        border: "1px solid #ccc",
        fontSize: "16px",
        outline: "none",
    },

    textarea: {
        padding: "15px",
        borderRadius: "12px",
        border: "1px solid #ccc",
        fontSize: "16px",
        outline: "none",
        resize: "none",
    },

    button: {
        padding: "15px",
        border: "none",
        borderRadius: "12px",
        background: "#2563eb",
        color: "white",
        fontSize: "18px",
        cursor: "pointer",
        transition: "0.3s",
    },

};

export default Contact;