import React from 'react'
import Card from './Card'
import learnQuranImage from '../../assets/learning.jpg'
import { useRef } from 'react';
import { useNavigate } from "react-router-dom"
import './home.css';
function Home() {
    const navigate = useNavigate();
    const cardSectionRef = useRef(null);
    const journeyRef = useRef(null);
    const scrollToCourses = () => {
        cardSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    };
    const scrollTojourneystart = () => {
        journeyRef.current.scrollIntoView({ behavior: 'smooth' });
    }
    return (
        <>
            <div style={styles.container} className="hero-title">
                <h1 style={styles.title}>
                    MA'HAD ISLAH AL-MUSLIMIN
                </h1>

                <h2 className="urdu-title">
                    مَعْهَدُ إِصْلاح المُسْلِمینَ
                </h2>
            </div>

            <div style={styles.subtitleBox} className="hero-content">
                <img
                    src={learnQuranImage}
                    alt="learn quran"
                    className="hero-image img-fluid rounded"
                    style={styles.image}
                />

                <div className="hero-text">
                    <p style={styles.subtitle}>
                        Our Curriculum in Islamic Courses - اِسلامی کورس کا نصاب
                    </p>

                    <p style={styles.subtitle}>
                        A Tajweed Course is designed to help students recite the Qur’an
                        correctly, following the rules of pronunciation, articulation,
                        and rhythm as taught by the Prophet ﷺ.
                    </p>

                    <p>
                        We offer courses designed to provide a deep and authentic
                        understanding of Islam.
                    </p>

                    <div className="hero-buttons">
                        <button
                            className="btns rounded-pill"
                            onClick={scrollToCourses}
                        >
                            Courses We Offer
                        </button>

                        <button
                            className="btn btn-secondary rounded-pill"
                            onClick={scrollTojourneystart}
                        >
                            Start Your Journey
                        </button>
                    </div>
                </div>
            </div>
            <div ref={cardSectionRef} className="card-section d-flex justify-content-center gap-5 flex-wrap">
                <Card onClick={() => navigate('/courses/basic-tajweed')}
                    title="Basic Tajweed (Level-1)"
                    description="Learn Quran with Tajweed in live classes."
                />
                <Card onClick={() => navigate('/courses/advanced-tajweed')}
                    title="Advanced Tajweed (Level-2)"
                    description="Understand Arabic language and grammar."
                />
                <Card onClick={() => navigate('/courses/hifz')}
                    title="Hifz-e-Qur'an Course"
                    description="Learn Aqeedah, Fiqh and Islamic teachings."
                />
                <Card onClick={() => navigate('/courses/nazira')}
                    title="Nazira Qur'an Course"
                    description="Learn Aqeedah, Fiqh and Islamic teachings."
                />

                <Card onClick={() => navigate('/courses/basic-islamic')}
                    title="Basic Islamic Course"
                    description="Learn Aqeedah, Fiqh and Islamic teachings."
                />
                <Card onClick={() => navigate('/courses/primary-islamic')}
                    title="Primary Islamic Course"
                    description="Learn Aqeedah, Fiqh and Islamic teachings."
                />
                <Card onClick={() => navigate('/courses/urdu-language')}
                    title="Urdu Language Course"
                    description="Improve your Urdu language skills."
                />
                <Card onClick={() => navigate('/courses/nursery-course')}
                    title="Nursery Islamic Course"
                    description="This course is specially designed for young children to introduce them to the beauty of Islam in a fun, gentle, and engaging way while building a strong foundation of love for their faith."
                />
            </div>
            <div ref={journeyRef} style={styles.stepsSection}>
                <h2 style={styles.heading}>Start Your Journey in 3 Easy Steps</h2>

                <div style={styles.stepsContainer}>

                    <div style={styles.stepCard}>
                        <div style={styles.stepNumber}>1</div>
                        <h3>Fill the Form</h3>
                        <p>Provide your details in our simple and secure registration form.</p>
                    </div>

                    <div style={styles.stepCard}>
                        <div style={styles.stepNumber}>2</div>
                        <h3>Get a Callback</h3>
                        <p>Our admission team will contact you to discuss your goals and course details.</p>
                    </div>

                    <div style={styles.stepCard}>
                        <div style={styles.stepNumber}>3</div>
                        <h3>Start Learning</h3>
                        <p>Once confirmed, you'll get access to our portal and can begin your classes.</p>
                    </div>

                </div>
            </div>
        </>
    )
}

const styles = {
    container: {
        height: "20vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        color: "#6f6b6b"
    },
    title: {
        fontSize: "48px",
        fontWeight: "bold",
        letterSpacing: "2px",
        textShadow: "2px 2px 8px rgba(66, 65, 65, 0.7)"
    },
    subtitle: {
        fontSize: "24px",
        fontWeight: "500",
        marginTop: "10px",
        textShadow: "1px 1px 6px rgba(247, 240, 240, 0.6)",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
    },
    subtitleBox: {
        backgroundColor: "#ede9df",
        padding: "20px",
        margin: "20px",
        borderRadius: "20px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: "20px",
    },
    image: {
        width: "400px",
        height: "auto",

    },
    stepsSection: {
        padding: "40px 20px",
        textAlign: "center",
        background: "#f8f9fa",
        borderRadius: "20px",
        margin: "20px"
    },

    heading: {
        fontSize: "32px",
        marginBottom: "30px",
        fontWeight: "bold"
    },

    stepsContainer: {
        display: "flex",
        justifyContent: "center",
        gap: "20px",
        flexWrap: "wrap"
    },

    stepCard: {
        width: "280px",
        padding: "20px",
        borderRadius: "15px",
        background: "#ffffff",
        boxShadow: "0 6px 15px rgba(0,0,0,0.1)",
        transition: "0.3s",
        cursor: "pointer"
    },

    stepNumber: {
        width: "40px",
        height: "40px",
        borderRadius: "50%",
        background: "#033452",
        color: "#fff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontWeight: "bold",
        margin: "0 auto 15px"
    }
}

export default Home