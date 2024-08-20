import React from "react";
import "./mininav.css";

const MiniNav = () => {
  return (
    <div>
      <nav className="insideNav">
        <ul className="insideUl" id="uli">
          <li>
            <button>Jobs</button>
          </li>
          <li>
            <button>Services</button>
          </li>
          <li>
            <button>Companies</button>
          </li>
          <li>
            <div className="icon-mininav">
              <i className="fas fa-search"></i>
              <input
                type="text"
                className="search-input"
                placeholder="Search..."
              />
            </div>
          </li>
          <li>
            <input type="text" placeholder=" Profile" />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MiniNav;
