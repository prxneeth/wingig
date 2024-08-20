import React from "react";
import "./maindisplay.css";

const MainDisplay = () => {
  return (
    <div>
      <div className="maindisplay">
        <div className="sections">
          <div className="leftSection">
            <div className="image-container">
              <img src="man.png" alt="pic" />
              <div className="text-box">
                <i className="fa-solid fa-suitcase"></i>
                <span>Match With Your Ideal Tech Job</span>
              </div>
            </div>

            <div className="image-container">
              <img className="man2img" src="man2.png" alt="pic" />
              <div className="text-box" id="middle-box">
                <i className="fa-regular fa-comment"></i>
                <span>Connect directly to hiring teams</span>
              </div>
            </div>

            <div className="image-container">
              <img src="man3.png" alt="pic" />
              <div className="text-box">
                <i className="fa-solid fa-paste"></i>
                <span>Tech career advices you can see</span>
              </div>
            </div>
          </div>

          <div className="rightSection">
            <h1>Tech jobs you want, </h1>
            <h1 id="h1color">at companies you admire </h1>
            <h2> Build the tech careers that's right for you.</h2>

            <div className="jobsearchSection">
              <p>
                Start your <span className="colorP"> job search</span>
              </p>
              <div className="jobSearchSectionInside">
                <div className="icon-jobsearch">
                  <i className="fas fa-search"></i>
                  <input
                    type="text"
                    className="search-input"
                    placeholder="Job title, Skill"
                  />
                </div>
                <div className="icon-jobsearch">
                  <i className="fas fa-location"></i>
                  <input
                    type="text"
                    className="icon-input"
                    placeholder="Location"
                  />
                </div>
                <button>Search Jobs</button>
              </div>
            </div>
            <div className="techTalent">
              <i className="fa-solid fa-eye"></i>
              <div className="techTalentText">
                {" "}
                <h3>
                  Looking for Tech Talent?{" "}
                  <span>
                    <h5>The Tech Professionals You Need Are On Wingig.</h5>
                  </span>
                </h3>
              </div>

              <button>Hire Tech</button>
              <button>Post a Job</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainDisplay;
