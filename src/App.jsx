import { React, useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar'
import Home from './components/Body/Home'
import AuthForm from './components/Auth/AuthForm';
import About from './components/About';
import Contact from './components/Contact';
import Courses from './components/Courses';
import Profile from './components/profile/Profile';
import LiveClasses from './components/live-class/LiveClasses';
import ResetPassword from './components/Auth/ResetPassword';
function App() {
  return (

    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path="/login" element={<AuthForm />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:courseId" element={<Courses />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/live-classes" element={<LiveClasses />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
