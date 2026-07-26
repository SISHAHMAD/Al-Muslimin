import React from 'react'
import './navbar.css'
import logo from '../../assets/Al-Muslimin Logo.jpeg'
import { useNavigate } from "react-router-dom"
import AuthUser from '../Auth/AuthUser'
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  const { user, loading } = AuthUser();
  const navigate = useNavigate()
  return (
    <div className="navbar container ">
      <img src={logo} alt="Logo" className='logo' />

      <ul>
        <li className='active' onClick={() => navigate('./')}>Home</li>
        <li onClick={() => navigate('/courses')}>Courses</li>
        <li onClick={() => navigate('/about')}>About</li>
        <li onClick={() => navigate('/contact')}>Contact</li>

      </ul>
      <div className="d-flex align-items-center gap-3">
        <button className='live-classes btns' onClick={() => navigate('/live-classes')}>
          Live Classes
        </button>
        {user ? (
          <FaUserCircle size={34} onClick={() => navigate('/profile')} />
        ) : (
          <button className='btns' onClick={() => navigate('/login')}>
            Login
          </button>
        )}
      </div>
    </div>
  )
}

export default Navbar
