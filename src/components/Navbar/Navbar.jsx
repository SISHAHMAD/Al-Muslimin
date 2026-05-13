import React from 'react'
import './Navbar.css'
import logo from '../../assets/Al-Muslimin Logo.jpeg'
import { useNavigate } from "react-router-dom"

const Navbar = () => {

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
        <button className='live-classes btns'>Live Classes</button>
        <button className='btns' onClick={() => navigate('/login')}>Login</button>

      </div>
    </div>
  )
}

export default Navbar
