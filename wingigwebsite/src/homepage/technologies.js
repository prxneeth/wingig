import React, { useState } from "react";
import "./technologies.css";
import AI from "../techPages/AI";
import JavaTech from "../techPages/javaTech";

const Technologies = () => {
  const technologies = [
    { imgSrc: "/techImages/ai.png", name: "Artificial Intelligence", component: <AI /> },
    { imgSrc: "/techImages/cybersecurity.png", name: "Cyber Security" },
    { imgSrc: "/techImages/augmentedreality.png", name: "Augmented Reality" },
    { imgSrc: "/techImages/java.png", name: "Java" },
    { imgSrc: "/techImages/dotnet.png", name: ".NET" },
    { imgSrc: "/techImages/devops.png", name: "DevOps" },
    { imgSrc: "/techImages/sap.png", name: "SAP" },
    { imgSrc: "/techImages/testingsoftware.png", name: "Testing Software" },
    { imgSrc: "/techImages/identitymanagement.png", name: "Identity Management" },
    { imgSrc: "/techImages/group.png", name: "Group" },
    { imgSrc: "/techImages/servicenow.png", name: "Service Now" },
    { imgSrc: "/techImages/mulesoft.png", name: "MuleSoft" },
    { imgSrc: "/techImages/react.png", name: "React" },
    { imgSrc: "/techImages/ios.png", name: "iOS" },
    { imgSrc: "/techImages/intelligentapps.png", name: "Intelligent Apps" },
    { imgSrc: "/techImages/angular.png", name: "Angular" },
    { imgSrc: "/techImages/android.png", name: "Android" },
    { imgSrc: "/techImages/machinelearning.png", name: "Machine Learning" },
  ];

  const [visibleCount, setVisibleCount] = useState(8);
  const [showMore, setShowMore] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedTech, setSelectedTech] = useState(null);

  const handleShowMore = () => {
    setShowMore(!showMore);
    setVisibleCount(showMore ? 8 : technologies.length);
  };

  const handleKnowMoreClick = (tech) => {
    setSelectedTech(tech);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="techSection">
      <h1>Top Trending Technologies</h1>
      <div className="techItems">
        <section className="grid-container">
          {technologies.slice(0, visibleCount).map((tech, index) => (
            <div className="box" key={index}>
              <img className="boximg" src={tech.imgSrc} alt={tech.name} />
              <p className="boxname">{tech.name}</p>
              <button className="know-more-btn" onClick={() => handleKnowMoreClick(tech)}>
                Know More
              </button>
            </div>
          ))}
        </section>
        <button className="show-more-btn" onClick={handleShowMore}>
          {showMore ? "Show Less" : "More..."}
        </button>
      </div>

      {showModal && (
        <div className="modal-overlayAI" onClick={handleCloseModal}>
          <div className="modal-contentAI" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal-btnAI" onClick={handleCloseModal}>
              <i className="fa-regular fa-circle-xmark" id="Xmark"></i>
            </button>
            {selectedTech.name === "Artificial Intelligence" ? (
              <AI />
            ) : selectedTech.name === "Java" ? (
              <JavaTech />
            ) : (
              <p>{selectedTech.name} information will be here.</p>
            )}

          </div>
        </div>
      )}
    </div>
  );
};

export default Technologies;
