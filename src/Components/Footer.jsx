import React from "react";
import Logo from "../assets/img/header/logo.svg";

function Footer() {
  return (
    <div className="container">
      <div className="footer">
        <div className="about">
          <img src={Logo} className="logo"></img>

          <span className="des">
            We cook <span className="highlight">powerful</span> <br /> websites
            with Webflow.
          </span>
          <img
            className="webflow"
            src="https://assets.website-files.com/63de80ab03e95f0ae7de2a37/6405b76e08d4077ba2aadf3e_Partner%20Seal.svg"
          ></img>
        </div>
        <div className="footer-container">
          <div className="navigation">
            <span className="title">Navigation</span>

            <a href="">
              <span className="item"> Our Works</span>
            </a>
            <a href="">
              <span className="item"> Services</span>
            </a>
            <a href="">
              <span className="item">Testimonials</span>
            </a>
            <a href="">
              <span className="item">Why Flowchef</span>
            </a>
            <a href="">
              <span className="item">Pricing & Plans</span>
            </a>
            <a href="">
              <span className="item">Frequently Asked Questions</span>
            </a>
          </div>

          <div className="resources">
            <span className="title">Resources</span>

            <a href="">
              <span className="item">Client-first Documentation</span>
            </a>
            <a href="">
              <span className="item"> Potato Extension for Webflow</span>
            </a>
            <span className="title">Get Started</span>
            <a href="">
              <span className="item">Start a Project</span>
            </a>
            <a href="">
              <span className="item">Webflow Partner Subscription Plan</span>
            </a>
            <a href="">
              <span className="item">Schedule a Free Call</span>
            </a>
            <a href="">
              <span className="item"> Manage Subscriptions</span>
            </a>
          </div>

          <div className="contact-us">
            <span className="title">Contact Us</span>

            <a href="">
              <span className="item">hello@flowchef.co</span>
            </a>
            <a href="">
              <span className="item">+917665795615</span>
            </a>
            <span className="title">Join Us</span>
            <a href="">
              <span className="item">careers@flowchef.co</span>
            </a>
            <span className="title">Contact Us</span>
            <a href="">
              {" "}
              <img src="https://assets.website-files.com/63de80ab03e95f0ae7de2a37/6470cf252ad053ba65f5ce6a_Webflow%20custom%20badge.svg"></img>
            </a>
            <a href="">
              <img src="https://assets.website-files.com/63de80ab03e95f0ae7de2a37/6470cf52ca93b536d1cc4e6a_Whalesync%20Badge.svg" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
