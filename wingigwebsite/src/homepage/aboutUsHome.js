import React from "react";
import "./aboutUsHome.css";

const AboutUsHome = () => {
  return (
    <div>
      <div className="homeAbout">
        <div className="homeAboutLeft">
          <h1>
            Know some information <span>About</span> WinGIG
          </h1>
          <p>
            WinGIG is a Recruitment and HR Consulting company, offering job
            search services and strategic people solutions to Multinational
            Companies and Small-and-Medium Sized Enterprises in India. Our team
            of experienced and dedicated professionals are committed to provide
            prompt and reliable services to our clients and candidates.
            <br />
            <br />
            We believe that our acute ability to understand our clients' needs
            and comprehensive approach to talent acquisition, assessment,
            management and development, have enabled us to support our clients
            in making people their sustainable source of competitive advantage.
          </p>
          <br />
          <button>About Us</button>
        </div>
        <div className="homeAboutRight">
          <iframe
            width="460"
            height="355"
            src="https://www.youtube.com/embed/KdVVWu_xNDE?si=6D8Px8TAzWj81G0H"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default AboutUsHome;
