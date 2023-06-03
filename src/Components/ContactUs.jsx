import React, { useEffect, useRef, useState } from "react";
import continueImg from "../assets/img/call.svg";
import second from "../assets/img/bg.webp";
import HALO from "vanta/dist/vanta.halo.min";
import bg from "../assets/img/bg.jpg";

function ContactUs() {
  const [vantaEffect, setVantaEffect] = useState(null);
  const myRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        HALO({
          el: myRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          baseColor: 0x1a1a1a,
          backgroundColor: 0x1a1a1a,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);
  return (
    <>
      <div className="contact">
        <div className="bg" ref={myRef}></div>

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
              <div className="button_bg" style={{ backgroundImage: bg }}></div>
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
