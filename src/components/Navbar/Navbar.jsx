import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/Al-Muslimin Logo.jpeg";
import { useNavigate } from "react-router-dom";
import AuthUser from "../Auth/AuthUser";
import { FaUserCircle, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const { user } = AuthUser();
  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);

  const goTo = (path) => {
    navigate(path);
    setMenuOpen(false);
  };

  return (
    <div className="row p-4">
      <nav className="navbar container">
        {/* Mobile Hamburger */}
        <div
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Logo */}
        <img
          src={logo}
          alt="Logo"
          className="logo"
          onClick={() => goTo("/")}
        />

        {/* Desktop Menu */}
        <ul className="nav-links">
          <li onClick={() => goTo("/")}>Home</li>
          <li onClick={() => goTo("/courses")}>Courses</li>
          <li onClick={() => goTo("/about")}>About</li>
          <li onClick={() => goTo("/contact")}>Contact</li>
        </ul>

        {/* Right Side */}
        <div className="nav-right">
          <button
            className="live-classes btns desktop-btn"
            onClick={() => goTo("/live-classes")}
          >
            Live Classes
          </button>

          {user ? (
            <FaUserCircle
              className="profile-icons "
              size={34}
              onClick={() => goTo("/profile")}
            />
          ) : (
            <button className="btns" onClick={() => goTo("/login")}>
              Login
            </button>
          )}
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${menuOpen ? "active" : ""}`}>
          <li onClick={() => goTo("/")}>Home</li>
          <li onClick={() => goTo("/courses")}>Courses</li>
          <li onClick={() => goTo("/about")}>About</li>
          <li onClick={() => goTo("/contact")}>Contact</li>

          <button
            className="btns mobile-live-btn"
            onClick={() => goTo("/live-classes")}
          >
            Live Classes
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;