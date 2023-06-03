import React from "react";
import continueImg from "../assets/img/hero/continue.svg";
import Particles from "react-particles";
import particleConfig from "./particles/config";

function ContactUs() {
  return (
    <>
      <div className="contact">
        <Particles id="swarm" params={particleConfig}></Particles>

        <div className="hero_content">
          <span className="hero_heading">
            Time to <span className="highlight">spice up</span> your online
            presence
          </span>
          <p className="hero_des">
            We are ready to cook up something special for you, choose a plan
            that fits your needs and let's get started on creating your website.
          </p>
          <div className="hero-button">
            <a href="" className="action-button">
              <div className="button">Spice it up</div>
              <div className="button_bg"></div>
            </a>
            <a className="additional_button">
              <span>Schedule a free call</span>
              <img className="arrow-button" src={continueImg}></img>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
