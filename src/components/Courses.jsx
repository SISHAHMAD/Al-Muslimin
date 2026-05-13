import React, { useState, useEffect } from "react";
import coursesData from "../data/coursesData";
import { useParams } from "react-router-dom";
import "./courses.css";

function Courses() {

    const { courseId } = useParams();

    // store slug not id
    const [expandedCard, setExpandedCard] = useState(courseId || null);

    useEffect(() => {

        if (courseId) {

            setExpandedCard(courseId);

            const element = document.getElementById(courseId);

            if (element) {

                element.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        }

    }, [courseId]);

    const toggleCard = (slug) => {

        setExpandedCard(
            expandedCard === slug ? null : slug
        );

    };

    return (

        <div className="courses-page">

            {
                coursesData.map((course) => (

                    <div
                        id={course.slug}
                        className="course-card"
                        key={course.id}
                    >

                        {/* Header */}

                        <div className="course-card-header">

                            <div>

                                <h2>{course.title}</h2>

                                <p className="short-desc">
                                    {course.description}
                                </p>

                            </div>

                            {/* Expand Button */}

                            <button
                                className={`expand-btn ${expandedCard === course.slug ? "rotate" : ""
                                    }`}
                                onClick={() => toggleCard(course.slug)}
                            >
                                ▼
                            </button>

                        </div>

                        {/* Expanded Content */}

                        {
                            expandedCard === course.slug && (

                                <div className="expanded-content">

                                    {/* Core Learning */}

                                    <section className="course-section">

                                        <h3>
                                            {course.coreLearningTitle}
                                        </h3>

                                        {/* <p className="arabic">
                                            {course.coreLearningArabic}
                                        </p> */}

                                        <ul>

                                            {
                                                course.coreLearning.map((item, index) => (

                                                    <li key={index}>
                                                        {item}
                                                    </li>

                                                ))
                                            }

                                        </ul>

                                    </section>

                                    {/* Features */}

                                    <section className="course-section">

                                        <h3>
                                            {course.keyFeaturesTitle}
                                        </h3>

                                        {/* <p className="arabic">
                                            {course.keyFeaturesArabic}
                                        </p> */}

                                        <div className="features-grid">

                                            {
                                                course.keyFeatures.map((feature, index) => (

                                                    <div
                                                        className="feature-card"
                                                        key={index}
                                                    >

                                                        <h4>
                                                            {feature.title}
                                                        </h4>

                                                        <p>
                                                            {feature.description}
                                                        </p>

                                                    </div>

                                                ))
                                            }

                                        </div>

                                    </section>

                                    {/* Objectives */}

                                    <section className="course-section">

                                        <h3>
                                            Course Objectives
                                        </h3>

                                        <ul>

                                            {
                                                course.objectives.map((item, index) => (

                                                    <li key={index}>
                                                        {item}
                                                    </li>

                                                ))
                                            }

                                        </ul>

                                    </section>

                                    {/* Sessions */}

                                    <section className="course-section">

                                        <h3>
                                            Sessions
                                        </h3>

                                        <ul>

                                            {
                                                course.sessions.map((session, index) => (

                                                    <li key={index}>
                                                        {session}
                                                    </li>

                                                ))
                                            }

                                        </ul>

                                    </section>

                                    {/* Duration */}

                                    {
                                        course.duration && (

                                            <section className="course-section">

                                                <h3>
                                                    Duration
                                                </h3>

                                                {
                                                    course.duration.dailyClass && (
                                                        <p>
                                                            <strong>Daily Class:</strong>{" "}
                                                            {course.duration.dailyClass}
                                                        </p>
                                                    )
                                                }

                                                {
                                                    course.duration.courseDuration && (
                                                        <p>
                                                            <strong>Course Duration:</strong>{" "}
                                                            {course.duration.courseDuration}
                                                        </p>
                                                    )
                                                }

                                                {
                                                    course.duration.revisionYear && (
                                                        <p>
                                                            <strong>Revision:</strong>{" "}
                                                            {course.duration.revisionYear}
                                                        </p>
                                                    )
                                                }

                                            </section>

                                        )
                                    }

                                    {/* Pricing */}

                                    <section className="course-section">

                                        <div className="pricing-box">

                                            <div className="price-card">

                                                <h4>
                                                    Monthly Fee
                                                </h4>

                                                <p>
                                                    {course.pricing.monthlyFee}
                                                </p>

                                            </div>

                                            <div className="price-card">

                                                <h4>
                                                    Registration Fee
                                                </h4>

                                                <p>
                                                    {course.pricing.registrationFee}
                                                </p>

                                            </div>

                                        </div>

                                    </section>

                                    {/* Contact */}

                                    <section className="course-section">

                                        <div className="contact-box">

                                            <p>
                                                📞 {course.contact.phone}
                                            </p>

                                            <p>
                                                ✉️ {course.contact.email}
                                            </p>

                                        </div>

                                    </section>

                                </div>

                            )
                        }

                    </div>

                ))
            }

        </div>

    );
}

export default Courses;