import React from "react";
import Logo from "../../images/code.png";
import { Link } from "react-router-dom";
import ScrollToHashElement from "../../Utils/ScrollToHashElement";
import "./Nav.scss";

function Nav() {
  return (
    <nav className="navigation">
      <ScrollToHashElement />
      <div className="container">
        <div className="nav-container">
          <div className="section_one">
            <ul className="nav-item logo-item">
              <img src={Logo} alt="logo" className="Logo" />
            </ul>
            <Link to="#Skills" className="nav-item">Skills</Link>
            <Link to="#Experience" className="nav-item">Experience</Link>
          </div>
          <div className="section_two">
            <Link to="#contact" className="nav-item">contact</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
