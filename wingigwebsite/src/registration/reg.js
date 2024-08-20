import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./reg.css";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
  });
  const [errors, setErrors] = useState({});
  const validate = (name, value) => {
    let error = "";

    switch (name) {
      case "name":
        if (!value) error = "Full Name is required";
        break;
      case "email":
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) error = "Invalid email address";
        break;
      case "password":
        if (value.length < 6) error = "Password must be at least 6 characters";
        break;
      case "confirmPassword":
        if (value !== formData.password) error = "Passwords do not match";
        break;
      case "phoneNumber":
        const phoneRegex = /^[0-9]{10}$/;
        if (!phoneRegex.test(value)) error = "Phone Number must be 10 digits";
        break;
      default:
        break;
    }

    return error;
  };
  const handleBlur = (e) => {
    const { name, value } = e.target;
    const error = validate(name, value);
    setErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));

    // Remove error when the user starts typing
    if (errors[name]) {
      setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    Object.keys(formData).forEach((key) => {
      const error = validate(key, formData[key]);
      if (error) {
        newErrors[key] = error;
      }
    });

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Proceed with form submission (e.g., send data to the server)
      console.log("Form data is valid:", formData);
    }
  };

  return (
    <div id="section">
      <div className="navs">
        <div id="One">
          <Link to="#">
            {/* <img src="/WinGigLogo.png" alt="Not available" /> */}
          </Link>
        </div>
        <div id="Two">
          <p>
            Already Registered? <Link to="/Login">Login</Link>here
          </p>
        </div>
      </div>
      <div className="screen">
        <div className="reg-leftbox">
          <div className="reg-left_inside">
            <div className="One">
              <img src="/reg_pic.png" alt="Registration Pic" />
            </div>
            <h3>On Register You can</h3>
            <div className="Two">
              <ul>
                <li>Build your Profile and let Recruiter finds You</li>
                <li>Get Job postings delivered right to your mail.</li>
                <li>Find a job and grow your career.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="reg-rightbox">
          <div className="reg-right_inside">
            <div className="pic">
              <div>
                <img src="/WinGigLogo.png" alt="Logo Not Available" />
              </div>
              <div>
                <h4>Don't just get Job, WIN IT.</h4>
              </div>
            </div>
            {/* <div className="choices"> */}
            <form id="content">
              <div id="data">
                <h5>
                  Full Name<span>*</span>
                </h5>
                <input
                  type="text"
                  name="name"
                  placeholder="What is your name?"
                  value={formData.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.name && (
                  <span className="error-message">{errors.name}</span>
                )}
              </div>
              <div id="data">
                <h5>
                  Email ID <span>*</span>
                </h5>
                <input
                  type="email"
                  name="email"
                  placeholder="Tell us your Email Id"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.email && (
                  <span className="error-message">{errors.email}</span>
                )}
              </div>
              <div id="data">
                <h5>
                  Password<span>*</span>
                </h5>
                <input
                  type="password"
                  name="password"
                  placeholder="Minimum 6 Characters"
                  value={formData.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.password && (
                  <span className="error-message">{errors.password}</span>
                )}
              </div>
              <div id="data">
                <h5>
                  Conform Password<span>*</span>
                </h5>
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Conform Password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.confirmPassword && (
                  <span className="error-message">
                    {errors.confirmPassword}
                  </span>
                )}
              </div>
              <div id="data">
                <h5>
                  Phone Number<span>*</span>
                </h5>
                <input
                  type="tel"
                  name="phoneNumber"
                  placeholder="Enter Your Phone Number"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.phoneNumber && (
                  <span className="error-message">{errors.phoneNumber}</span>
                )}
              </div>

              <div className="btn">
                <button type="submit">Register Now</button>
              </div>
            </form>
            {/* </div> */}
            <div className="another-option">
              <span className="line"> Or </span>
              <div id="set">
                <div className="btn_last">
                  <div id="logo_img">
                    <img src="/googlelodo.png" alt="Google img" />
                  </div>
                  <div id="logo_text">
                    <a href="https://accounts.google.co.in">
                      <span>Continue with Google</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="reg-footer">
        <div>
          <ol className="list_unstyle">
            <li>
              <Link to="#">Home</Link>
              <hr />
            </li>
            <li>
              <Link to="#">About Us</Link>
              <hr />
            </li>
            <li>
              <Link to="#">Contact Us</Link>
              <hr />
            </li>
          </ol>
        </div>
      </footer>
    </div>
  );
};

export default Register;
