import React, { useState } from "react";
import AuthUser from "../Auth/AuthUser";
import { FaUserCircle, FaVideo, FaQrcode } from "react-icons/fa";
import "./profile.css";
import paymentQR from "../../assets/payment.jpeg";
import { supabase } from "../../utils/supabase";
import { useNavigate } from "react-router-dom";
import ProfileUser from "../Auth/ProfileUser";
import StudentsTable from "../Students/Students-Lists";

const Profile = () => {
    const { user } = AuthUser();
    const navigate = useNavigate();
    const { profile, loading } = ProfileUser();
    const handleLogout = async () => {
        const { error } = await supabase.auth.signOut();
    };
    const [paymentCompleted, setPaymentCompleted] = useState(false);

    return (
        <div className="profile-page">
            <div className="profile-card">

                {/* Profile Header */}
                <div className="profile-header ">
                    <div className="d-flex justify-content-center align-items-center">
                        <FaUserCircle className="profile-icon " />
                    </div>

                    <h2>
                        Assalamu Alaikum,
                        <br />
                        {user?.user_metadata?.full_name ||
                            user?.email?.split("@")[0] ||
                            "Student"}
                    </h2>

                    <p>{user?.email}</p>
                    {user ? (
                        <button className=" btns" onClick={handleLogout}>
                            Logout
                        </button>
                    ) : (
                        <button className=" btns" onClick={() => navigate('/login')}>
                            Login
                        </button>
                    )}
                </div>
                {/* ========== ADMIN STUDENTS SECTION \============= */}
                {profile?.role === "admin" && (
                    <div className="profile-section students-section">
                        <h3> Students Management </h3>
                        <p> View and manage all students, including their course enrollment and payment status. </p>
                        <StudentsTable profile={profile} />
                    </div>
                )}

                {/* Live Classes */}

                {user && profile?.role !== "admin" && (

                    <div className="profile-section">
                        <h3>
                            <FaVideo /> Live Classes
                        </h3>

                        <p>
                            Welcome to <strong>Mahad Islah Al-Muslimin</strong>.
                            To join our live Quran and Islamic studies classes,
                            please complete your course enrollment first.
                        </p>

                        <button className="btns" onClick={() => navigate('/live-classes')}>
                            Access Live Classes
                        </button>
                    </div>
                )}

                {/* Payment Section */}
                {user && profile?.role !== "admin" && (
                    <div className="profile-section payment-section">
                        <h3>
                            <FaQrcode /> Course Enrollment & Payment
                        </h3>

                        <p>
                            To enroll in any course, kindly complete the payment using the QR
                            code below. After payment, share the payment screenshot with the
                            administrator to activate your course access.
                        </p>

                        {/* Replace with your scanner image */}
                        <div className="scanner-box">
                            <img src={paymentQR} alt="Payment QR" />
                        </div>

                        {paymentCompleted ? (
                            <p className="success-message">
                                Please  wait from admin  side  to activate your course access!
                            </p>
                        ) : (
                            <button className="btns" onClick={() => setPaymentCompleted(true)}>
                                I Have Completed the Payment
                            </button>
                        )}
                    </div>
                )}

                {!user && (
                    <div className="profile-section">
                        <h3>Access Denied</h3>
                        <p>You must be logged in to view your profile.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Profile;