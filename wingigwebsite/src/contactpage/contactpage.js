import React from "react";
import "./contactpage.css";

const Contactpage = () => {
  return (
    <div>
      <div className="contactHeader">
        <h1>
          Get In Touch
          <br /> With<span> Us</span>
        </h1>
        <hr />
      </div>

      <div className="contactDetails">
        <div className="contactDetailsLeft">
          <div className="contactPageMainText">
            <h1>
              Contact Our Support Team Or Make Appointment With{" "}
              <span>Our Consultant</span>
            </h1>
            <p>
              Please contact us using the information below. For additional
              information on our management consulting services, please visit
              the appropriate page on our site.
            </p>
          </div>
          <div className="contactPageAddr">
            <div className="contactPageAddrDetails">
              <img src="/contact1.png" alt="photo" />
              contact@wingig.com
              <br />
              harinadh@wingig.com
            </div>
            <div className="contactPageAddrDetails">
              <img src="/contact2.png" alt="photo" />
              Ektha Towers, White Field Rd, HITEC City, kondapur, Hyderabad,
              Telangana, 500081
            </div>
            <div className="contactPageAddrDetails">
              <img src="/contact3.png" alt="photo" />
              +91 888 659 9438
            </div>
          </div>

          <div className="contactPageSendMsg">
            <hr />
            <p>Send Message</p>
            <div className="contactPageSendMsgIn">
              <input placeholder="FullName" />
              <input placeholder="Email" />
            </div>
            <div className="contactPageSendMsgInput">
              <textarea placeholder="Write here" />
              <button type="submit">SUBMIT</button>
            </div>
          </div>
        </div>

        <div className="contactDetailsRight">
          <iframe
            className="contactMap"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d444.8951815489932!2d78.36413403152693!3d17.454033846025293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93c7b5299b7b%3A0xa6e7e79d255d7cdf!2sEktha%20Towers%2C%20White%20Field%20Rd%2C%20Ashok%20Nagar%2C%20Golden%20Habitat%2C%20Whitefields%2C%20HITEC%20City%2C%20Kondapur%2C%20Telangana%20500084!5e0!3m2!1sen!2sin!4v1722946094513!5m2!1sen!2sin"
            width="640px"
            height="800px"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contactpage;
