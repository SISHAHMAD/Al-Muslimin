import React from "react";
import cartoonVideo from '../assets/learnin video.mp4'

function About() {
    return (
        <div style={styles.container}>

            {/* About Content */}
            <section style={styles.aboutSection}>
                <div style={styles.imageContainer}>
                    <video
                        src={cartoonVideo}
                        autoPlay
                        loop
                        muted
                        playsInline
                        style={styles.video}
                    />
                </div>

                <div style={styles.content}>
                    <h2 style={styles.title}>Ma'had Islah Al-Muslimin</h2>

                    <p style={styles.text}>
                        Ma'had Islah Al-Muslimin is a dedicated online Islamic educational institute committed to providing authentic and quality Quranic and Islamic learning for students worldwide. Established with the mission of nurturing strong Islamic values.
                    </p>

                    <p style={styles.text}>
                        With flexible online classes, personalized attention, and a global reach, Ma'had Islah Al-Muslimin aims to make Quranic education accessible to every home, helping students build a strong connection with the Quran and Sunnah.
                    </p>

                    {/* <p style={styles.text}>
                        Our Vision:
                        To spread authentic Islamic knowledge and تربیہ (character building) across the العالم.
                        Our Mission:
                        To develop confident Muslims who recite, understand, and live by the teachings of the Quran.
                    </p> */}
                </div>
            </section>

            {/* Vision & Mission */}
            <section style={styles.visionMissionContainer}>

                <div style={styles.card}>
                    <h2 style={styles.cardTitle}>Our Vision</h2>
                    <p style={styles.cardText}>
                        To spread authentic Islamic knowledge and تربیہ
                        (character building) across the العالم.
                    </p>
                </div>

                <div style={styles.card}>
                    <h2 style={styles.cardTitle}>Our Mission</h2>
                    <p style={styles.cardText}>
                        To develop confident Muslims who recite, understand,
                        and live by the teachings of the Quran.
                    </p>
                </div>

            </section>

            {/* Why Choose Us */}
            <section style={styles.whyChooseUs}>
                <h2 style={styles.sectionHeading}>Why Choose Us?</h2>

                <div style={styles.featuresContainer}>

                    <div style={styles.featureCard}>
                        <h3>Qualified Teachers</h3>
                        <p>
                            Learn from experienced and dedicated Islamic teachers.
                        </p>
                    </div>

                    <div style={styles.featureCard}>
                        <h3>Flexible Timings</h3>
                        <p>
                            Choose class timings that fit your daily schedule.
                        </p>
                    </div>

                    <div style={styles.featureCard}>
                        <h3>Live Online Classes</h3>
                        <p>
                            Interactive one-on-one and group sessions available.
                        </p>
                    </div>

                    <div style={styles.featureCard}>
                        <h3>Global Access</h3>
                        <p>
                            Students from anywhere in the world can join.
                        </p>
                    </div>

                </div>
            </section>

        </div>
    );
}

const styles = {

    container: {
        width: "100%",
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
        marginBottom: "10px",
    },

    subHeading: {
        fontSize: "20px",
        color: "#555",
    },

    aboutSection: {
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
        gap: "40px",
        padding: "70px 10%",
    },

    imageContainer: {
        flex: "1",
        minWidth: "300px",
    },

    video: {
        width: "100%",
        borderRadius: "20px",
        objectFit: "cover",
        boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
    },

    content: {
        flex: "1",
        minWidth: "300px",
    },

    title: {
        fontSize: "40px",
        marginBottom: "20px",
        color: "#1f2937",
    },

    text: {
        fontSize: "18px",
        lineHeight: "1.8",
        color: "#444",
        marginBottom: "20px",
    },

    visionMissionContainer: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "30px",
        padding: "20px 10%",
    },

    card: {
        background: "white",
        padding: "35px",
        borderRadius: "20px",
        width: "400px",
        boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
    },

    cardTitle: {
        fontSize: "30px",
        marginBottom: "15px",
        color: "#1f2937",
    },

    cardText: {
        fontSize: "18px",
        lineHeight: "1.7",
        color: "#555",
    },

    whyChooseUs: {
        padding: "70px 10%",
    },

    sectionHeading: {
        textAlign: "center",
        fontSize: "42px",
        marginBottom: "50px",
        color: "#1f2937",
    },

    featuresContainer: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "25px",
    },

    featureCard: {
        background: "white",
        padding: "30px",
        borderRadius: "18px",
        textAlign: "center",
        boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
    },

};

export default About;