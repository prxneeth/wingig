import React, { useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);  // Toggle between true and false
  };

  return (
    <div className="header">
      <div className="logo">
        <img src="/WinGigLogo.png" alt="Logo" />
      </div>
      <div className={`navDiv ${isOpen ? "open" : ""}`}>  {/* Apply 'open' class based on isOpen */}
        <nav className="navbar">
          <ul className="navbarUl">
            <li className="navbarLi">
              <Link to="/">Home</Link>
            </li>
            <li className="navbarLi">
              <Link to="/blog">Blog</Link>
            </li>
            <li className="navbarLi">
              <Link to="/aboutUsPage/aboutusPage">About us</Link>
            </li>
            <li className="navbarLi">
              <Link to="/contactpage/contactpage">Contact us</Link>
            </li>
            <li className="navbarLi">
              <Link to="/login/Login">
                <i className="fas fa-user"></i> Jobseeker
              </Link>
            </li>
            <li className="navbarLi">
              <Link to="/authh/login/page">
                <i className="fas fa-briefcase"></i> Recruiter
              </Link>
            </li>
            <li className="navbarLi">
              <Link to="/login/Login">
                <i className="fas fa-users"></i> Partner
              </Link>
            </li>
            <li className="navbarLi">
              <Link to="/jobPortal/jobPortal">
                JOBS
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="hamburger" onClick={toggleMenu}>  {/* Call toggleMenu on click */}
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </div>
  );
};

export default Navbar;

