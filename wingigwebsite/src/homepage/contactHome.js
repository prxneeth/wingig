import React from "react";
import "./contactHome.css";

const ContactHome = () => {
  return (
    <div>
      <div className="homeContactSection">
        <h2>Our Contact Address</h2>
        <div className="contactContainer">
          <div className="contactBlock">
            <i className="fa-solid fa-phone"></i>

            <p>Contact phone number</p>

            <hr />
            <p>+91 9666 001 192</p>
          </div>
          <div className="contactBlock">
            <i className="fa-solid fa-envelope"></i>
            <p>Our Email Address</p>
            <hr />
            <p>info@vidyardi.com</p>
          </div>
          <div className="contactBlock">
            <i className="fa-solid fa-location-dot"></i>
            <p>Our Location</p>
            <hr />
            <p>
              Ektha Towers, White Field Rd, HITEC City, kondapur, Hyderabad,
              Telangana, 500081
            </p>
          </div>
        </div>
      </div>
      <div className="maplocation">
        <div className="insidemap">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d444.8951815489932!2d78.36413403152693!3d17.454033846025293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93c7b5299b7b%3A0xa6e7e79d255d7cdf!2sEktha%20Towers%2C%20White%20Field%20Rd%2C%20Ashok%20Nagar%2C%20Golden%20Habitat%2C%20Whitefields%2C%20HITEC%20City%2C%20Kondapur%2C%20Telangana%20500084!5e0!3m2!1sen!2sin!4v1722946094513!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map"
          ></iframe>
        </div>
        <div className="supportCanva">
          <div className="leftSupport">
            <h3>
              Contact our Support Team Or Make Appointment
              <br /> With <span className="canvaspan"> Our Consultant</span>
            </h3>
            <p>
              Please contact us using the information below. For additional
              information on our management consultant services, please visit
              the appropriate page on our site.
            </p>
            <hr />

            <div className="contactPageSendMsgg">
              <h3>Send Message</h3>
              {/* <div className="contactPageSendMsgIn"> */}
              <input placeholder="FullName" />
              <input placeholder="Email" />
              {/* </div> */}
              {/* <div className="contactPageSendMsgInput"> */}
              <textarea placeholder="Write here" />
              <button type="submit">SUBMIT</button>
              {/* </div> */}
            </div>
          </div>
          <div className="rightSupport">
            <img src="canvaimg.png" alt="img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactHome;
