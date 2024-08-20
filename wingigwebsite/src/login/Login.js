import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
// import applelogo from "./applelodo.png";
// import googlelogo from "./googlelodo.png";
import loginregpic from "./log_reg.png";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "" });

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let emailError = "";
    let passwordError = "";

    if (!email) {
      emailError = " * Email is required.";
    } else if (!validateEmail(email)) {
      emailError = " * Invalid email format.";
    }

    if (!password) {
      passwordError = " * Password is required.";
    } else if (password.length < 6) {
      passwordError = " * Password must be at least 6 characters.";
    }

    if (emailError || passwordError) {
      setErrors({ email: emailError, password: passwordError });
    } else {
      setErrors({ email: "", password: "" });
      // Proceed with form submission (e.g., send data to the server)
      console.log("Form submitted:", { email, password });
    }
  };

  return (
    <div className="main">
      <div className="loginLeft">
        <div className="left_text">
          <h2>New to WinGIG?</h2>
          <ul>
            <li className="loginLi">One Click Apply using WinGIG Profile</li>
            <li className="loginLi">Get Relevant Job recommendations</li>
            <li className="loginLi">
              Showcase profile to top companies and consultants.
            </li>
            <li className="loginLi">Know application status on applied jobs</li>
          </ul>
          <div id="registerBtn">
            <Link to="/registration/reg">Register for Free</Link>
          </div>
        </div>
        <div className="left_image">
          {/* <div id="left_img"> */}
          <img src={loginregpic} alt="login pic" />
          {/* </div> */}
        </div>
      </div>

      <div className="loginRight">
        <h2>Login</h2>
        <div className="content">
          <form id="content" onSubmit={handleSubmit}>
            <div id="one">
              <label>Email ID/ Username</label>
              <br></br>
              <input
                type="text"
                placeholder="Enter Email Id / Username"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && <span className="error">{errors.email}</span>}
            </div>
            <div id="one">
              <label>Password</label>
              <br />
              <input
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {errors.password && (
                <span className="error">{errors.password}</span>
              )}
            </div>

            <a href="##">Forgot Password?</a>

            <div className="loginBtn">
              <button type="submit">Login</button>
            </div>
          </form>
        </div>

        <div className="Orline"> OR </div>
        <div className="another_way">
          <div id="btn_last">
            <div className="google_img">
              <img src="/googlelodo.png" alt="Google img" />
            </div>
            <div id="logo_text">
              <a href="https://accounts.google.co.in">Continue with Google</a>
            </div>
          </div>

          <div id="btn_last">
            <div className="apple_img">
              <img src="/applelodo.png" alt="IOS img" />
            </div>
            <div id="logo_text">
              <a href="https://www.icloud.com">Continue with Apple</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
