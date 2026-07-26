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

    useEffect(() => {
        getMeeting();
    }, []);

    const getMeeting = async () => {
        const { data, error } = await supabase
            .from("live_classes")
            .select("*")
            .order("created_at", { ascending: false })
            .limit(1)
            .maybeSingle();

        if (error) {
            console.log(error);
            return;
        }

        if (data) {
            setTitle(data.title || "");
            setMeetingLink(data.meeting_link || "");
            setClassDate(data.class_date || "");
            setStartTime(data.start_time || "");
            setEndTime(data.end_time || "");
        }
    };

    const saveMeeting = async () => {
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
            alert(error.message);
            return;
        }

        alert("Live class saved successfully.");
        getMeeting();
    };

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div className="live-container">
            <div className="live-card">

                {meetingLink ? (
                    <>
                        <h2>{title}</h2>

                        <p>
                            Welcome to Mahad Islah Al-Muslimin.
                            Click the button below to join today's live class.
                        </p>

                        <p>
                            <strong>Date:</strong> {classDate}
                        </p>

                        <p>
                            <strong>Time:</strong> {startTime} - {endTime}
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

                {profile?.role === "admin" && (
                    <div className="admin-panel">
                        <h3>Admin Panel</h3>

                        <input
                            type="text"
                            placeholder="Class Title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />

                        <input
                            type="text"
                            placeholder="Google Meet Link"
                            value={meetingLink}
                            onChange={(e) => setMeetingLink(e.target.value)}
                        />

                        <input
                            type="date"
                            value={classDate}
                            onChange={(e) => setClassDate(e.target.value)}
                        />

                        <input
                            type="time"
                            value={startTime}
                            onChange={(e) => setStartTime(e.target.value)}
                        />

                        <input
                            type="time"
                            value={endTime}
                            onChange={(e) => setEndTime(e.target.value)}
                        />

                        <button onClick={saveMeeting}>
                            Save Class
                        </button>
                    </div>
                )}

            </div>
        </div>
    );
};

export default LiveClasses;