import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div>
      <div className="homeEnd">
        <div className="end1">
          <img src="WinGigLogo.png" />
          <p>
            WinGig was founded in 2018 <br /> IN Hyderabad, India <br /> It is a
            unique Assessement
            <br /> based consultancy in India. <br /> Wingig provides
            proffestional IT <br />
            Consulting Services
          </p>
        </div>
        <div className="end2">
          <h2>SUPPORT</h2>
          <ul>
            <li>contact us</li>
            <li>Support system</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="end3">
          <h2>ADDRESS</h2>
          <ul>
            <li>+91 888 659 9438</li>
            <li>contact@wingig.com</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div>
          <h2>GALLERY</h2>
          <div className="end-gallery">
            <div className="gallery-item">
              <img src="logo512.png" alt="Image 1" />
            </div>
            <div className="gallery-item">
              <img src="logo512.png" alt="Image 2" />
            </div>
            <div className="gallery-item">
              <img src="logo512.png" alt="Image 3" />
            </div>
            <div className="gallery-item">
              <img src="logo512.png" alt="Image 4" />
            </div>
            <div className="gallery-item">
              <img src="logo512.png" alt="Image 5" />
            </div>
            <div className="gallery-item">
              <img src="logo512.png" alt="Image 6" />
            </div>
          </div>
        </div>
      </div>
      <div className="homeFooter">
        <div className="copyrightsec">
          <h5>2024 © All rights reserved by Wingig</h5>
        </div>
        <div className="followsec">
          follow us :<i className="fa-brands fa-x-twitter"></i>
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-facebook"></i>
          <i className="fa-brands fa-youtube"></i>
        </div>
      </div>
    </div>
  );
};

export default Footer;
