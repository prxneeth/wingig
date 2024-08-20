import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="page">
      <div className="header">
        <div className="logo">
          <img src="/WinGigLogo.png" alt="Logo" />
        </div>
        <nav className="navbar">
          <ul className="navbarUl">
            <Link to="/login/Login">
              <li className="navbarLi">
                <i className="fas fa-users"></i>Partner
              </li>
            </Link>
            <Link to="/login/Login">
              <li className="navbarLi">
                <i className="fas fa-briefcase"></i> Recruiter
              </li>
            </Link>

            <Link to="/login/Login">
              <li className="navbarLi">
                <i className="fas fa-user"></i>Jobseeker
              </li>
            </Link>

            <Link to="/contactpage/contactpage">
              <li className="navbarLi">Contact us</li>
            </Link>

            <Link to="/aboutUsPage/aboutusPage">
              <li className="navbarLi">About us</li>
            </Link>
            <li className="navbarLi">Blog</li>
            <Link to="/">
              <li className="navbarLi">Home</li>
            </Link>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
