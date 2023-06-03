import React from "react";
import continueImg from "../assets/img/hero/continue.svg";

function Hero() {
  const length = 400;
  const array = Array(length).fill(null);
  console.log(array);
  return (
    <>
      <div className="hero">
        <div className="rotating-wrapper">
          <div className="rotating_div">
            <div className="mask-bg"></div>
            {array.map((item, index) => (
              <>
                <div className="rotate-item" key={index}></div>
              </>
            ))}
          </div>
        </div>

        <div className="hero_content">
          <span className="hero_heading">
            WE COOK <span className="highlight">POWERFUL</span> WEBSITES WITH
            WEBFLOW.
          </span>
          <p className="hero_des">
            Empowering businesses, brands and startups with the power of Webflow
            to elevate and spice up their online presence.
          </p>
          <div className="hero-button">
            <a href="" className="action-button">
              <div className="button">Let's cook a website</div>
              <div className="button_bg"></div>
            </a>
            <a className="additional_button">
              <span>Explore projects</span>
              <img className="arrow-button" src={continueImg}></img>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
