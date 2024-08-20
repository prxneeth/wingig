import React from "react";
import "./services.css";

const Services = () => {
  return (
    <div>
      <div className="homeService">
        <div className="leftService">
          <p>
            The Best <br />
            <span className="serviceSpan1">
              Services We <span className="serviceSpan2">Serve</span>
            </span>
          </p>
        </div>
        <div className="rightSService">
          <div className="rightServiceTop">
            <p>
              ★
              <br />
              WinGIG is a Recruitment and HR Consulting company, offering job
              search services and strategic people solutions to Multinational
              Companies and Small-and-Medium Sized Enterprises in India. Our
              team of experienced and dedicated professionals are committed to
              provide prompt and reliable services to our clients and
              candidates.
            </p>
          </div>
          <div className="rightServiceDown">
            <div className="serviceBox">
              <img src="frame1.png" alt="img" />
              <p className="hoverText">
                Employers determine full-time status based on business needs and
                typically consider an employee to be full-time if they work
                anywhere from 32 to 40 or more hours per week. However, certain
                laws define full-time differently, which considers full-time as
                working, on average, at least 30 hours per week.
              </p>
              <div className="serviceBoxText">
                <i className="fa-solid fa-people-group" />
                <p>Full time employment</p>
              </div>
            </div>
            <div className="serviceBox">
              <img src="frame2.png" alt="img" />
              <p className="hoverText">
                Employee who works less than full-time. While this sounds
                obvious, it's important to spell out this distinction in your
                employee policy manual. You can designate specific types of
                employees or specific types of jobs as part-time.
              </p>
              <div className="serviceBoxText">
                <i className="fa-solid fa-arrow-trend-up" />
                <p>PartTime or PayRoll</p>
              </div>
            </div>
            <div className="serviceBox">
              <img src="frame3.png" alt="img" />
              <p className="hoverText">
                Freelancers are all types of Independent Contractors that are
                part of the contingent workforce. Unlike temporary employees
                (temps), ICs are not employed by a company or staffing firm.
                Freelancers are skilled independent professionals, who only work
                on a project basis.
              </p>
              <div className="serviceBoxText">
                <i className="fa-solid fa-dove" />
                <p>Freelancing Jobs</p>
              </div>
            </div>
            <div className="serviceBox">
              <img src="frame3.png" alt="img" />
              <p className="hoverText">
                Bench workforce is essential for a growing company. It helps
                company to staff a new project quickly without waiting for
                recruitment.
              </p>
              <div className="serviceBoxText">
                <i className="fa-solid fa-mug-hot" />
                <p>Bench Resource</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
