import React from "react";
import "./Card.css";

function Card({ title, description, onClick }) {
    return (
        <div className="glass-card" onClick={onClick}>

            <div className="card-top">
                <span className="live-badge">● LIVE</span>
            </div>

            <div className="card-content">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>

        </div>
    );
}

export default Card;