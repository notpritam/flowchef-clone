import React from "react";
import call from "../assets/img/header/call.svg";
import newLink from "../assets/img/header/open.svg";
import logo from "../assets/img/header/logo.svg";

function Header() {
  return (
    <nav className="header">
      <div className="logo">
        <img src={logo}></img>
      </div>
      <div className="second-section">
        <a>
          <span>Works</span>
        </a>
        <a>
          <span>Services</span>
        </a>
        <a>
          <span>Why us</span>
        </a>
        <a>
          <span>Pricing</span>
        </a>
        <a>
          <span>Resources</span>
        </a>
      </div>

      <div className="third-section">
        <a>
          <span>Schedule a free call</span>
          <img src={call}></img>
        </a>
        <a>
          <span>Get started</span>
          <img src={newLink}></img>
        </a>
      </div>
    </nav>
  );
}

export default Header;
