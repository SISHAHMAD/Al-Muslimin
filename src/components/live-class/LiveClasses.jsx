
import React, { useEffect, useState } from "react";
import "./LiveClasses.css";
import ProfileUser from "../Auth/ProfileUser";
import { supabase } from "../../utils/supabase";

const LiveClasses = () => {
    const { profile, loading } = ProfileUser();

    const [meetingLink, setMeetingLink] = useState("");
    const [title, setTitle] = useState("");
    const [classDate, setClassDate] = useState("");
    const [startTime, setStartTime] = useState("");
    const [endTime, setEndTime] = useState("");

    const [saving, setSaving] = useState(false);

    useEffect(() => {
        if (!loading) {
            getMeeting();
        }
    }, [loading]);

    // ============================================
    // GET LATEST LIVE CLASS
    // ============================================
    const getMeeting = async () => {
        const { data, error } = await supabase
            .from("live_classes")
            .select("*")
            .order("created_at", { ascending: false })
            .limit(1)
            .maybeSingle();

        if (error) {
            console.error("Get meeting error:", error);
            return;
        }

        if (data) {
            setTitle(data.title || "");
            setMeetingLink(data.meeting_link || "");
            setClassDate(data.class_date || "");
            setStartTime(data.start_time || "");
            setEndTime(data.end_time || "");
        } else {
            setTitle("");
            setMeetingLink("");
            setClassDate("");
            setStartTime("");
            setEndTime("");
        }
    };

    // ============================================
    // SAVE LIVE CLASS - ADMIN ONLY
    // ============================================
    const saveMeeting = async () => {
        if (!profile?.id) {
            alert("User profile not found.");
            return;
        }

        if (profile.role !== "admin") {
            alert("Only admin can create a live class.");
            return;
        }

        if (!title || !meetingLink || !classDate || !startTime || !endTime) {
            alert("Please fill all fields.");
            return;
        }

        try {
            setSaving(true);

            const { error } = await supabase
                .from("live_classes")
                .insert({
                    title,
                    meeting_link: meetingLink,
                    class_date: classDate,
                    start_time: startTime,
                    end_time: endTime,
                    created_by: profile.id,
                });

            if (error) {
                throw error;
            }

            alert("Live class saved successfully.");

            await getMeeting();
        } catch (err) {
            console.error("Save meeting error:", err);

            alert(
                err.message ||
                "Failed to save live class."
            );
        } finally {
            setSaving(false);
        }
    };

    // ============================================
    // LOADING
    // ============================================
    if (loading) {
        return <p>Loading...</p>;
    }

    // ============================================
    // ACCESS CHECK
    // ============================================
    const isAdmin = profile?.role === "admin";

    const hasStudentAccess =
        profile?.payment_status === "success" ||
        profile?.is_access === "granted";

    const isStudentWithoutAccess =
        profile?.role === "student" && !hasStudentAccess;

    return (
        <div className="live-container">
            <div className="live-card">

                {/* ============================================
                    STUDENT ACCESS DENIED
                ============================================ */}
                {isStudentWithoutAccess ? (
                    <>
                        <div className="alert alert-warning">
                            <strong>Access Denied!</strong>{" "}
                            You need to complete the payment or get
                            access from the administrator to access
                            the live classes.
                        </div>

                        <div className="alert alert-info">
                            <strong>Info:</strong>{" "}
                            Please contact the administrator for
                            further assistance.
                        </div>
                    </>
                ) : (
                    <>
                        {/* ============================================
                            LIVE CLASS
                        ============================================ */}
                        {meetingLink ? (
                            <>
                                <h2>{title}</h2>

                                <p>
                                    Welcome to Mahad Islah Al-Muslimin.
                                    Click the button below to join
                                    today's live class.
                                </p>

                                <p>
                                    <strong>Date:</strong>{" "}
                                    {classDate}
                                </p>

                                <p>
                                    <strong>Time:</strong>{" "}
                                    {startTime} - {endTime}
                                </p>

                                <a
                                    href={meetingLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="join-btn"
                                >
                                    Join Live Class
                                </a>
                            </>
                        ) : (
                            <p>No class is scheduled yet.</p>
                        )}

                        {/* ============================================
                            ADMIN PANEL
                        ============================================ */}
                        {isAdmin && (
                            <div className="admin-panel">
                                <h3>Admin Panel</h3>

                                <input
                                    type="text"
                                    placeholder="Class Title"
                                    className="border border-gray-300 p-3 mb-2 w-full"
                                    value={title}
                                    onChange={(e) =>
                                        setTitle(e.target.value)
                                    }
                                />

                                <input
                                    type="text"
                                    placeholder="Google Meet Link"
                                    className="border border-gray-300 p-3 mb-2 w-full"
                                    value={meetingLink}
                                    onChange={(e) =>
                                        setMeetingLink(e.target.value)
                                    }
                                />

                                <input
                                    type="date"
                                    className="border border-gray-300 p-3 mb-2 w-full"
                                    value={classDate}
                                    onChange={(e) =>
                                        setClassDate(e.target.value)
                                    }
                                />

                                <input
                                    type="time"
                                    className="border border-gray-300 p-3 mb-2 w-full"
                                    value={startTime}
                                    onChange={(e) =>
                                        setStartTime(e.target.value)
                                    }
                                />

                                <input
                                    type="time"
                                    className="border border-gray-300 p-3 mb-2 w-full"
                                    value={endTime}
                                    onChange={(e) =>
                                        setEndTime(e.target.value)
                                    }
                                />

                                <button
                                    onClick={saveMeeting}
                                    disabled={saving}
                                >
                                    {saving
                                        ? "Saving..."
                                        : "Save Class"}
                                </button>
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    );
};

export default LiveClasses;

