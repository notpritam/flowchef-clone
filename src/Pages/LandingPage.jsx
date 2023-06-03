import React from "react";
import Header from "../Components/Header";
import Hero from "../Components/Hero";
import Section from "../Components/Section";
import Stats from "../Components/Stats";
import Solutions from "../Components/Solutions";
import Integeration from "../Components/Integeration";
import Testimonials from "../Components/Testimonials";
import Deliver from "../Components/Deliver";
import ContactUs from "../Components/ContactUs";

function LandingPage() {
  return (
    <>
      <div className="box">
        <div className="container">
          <Header />
          <Hero />
          <Section />
        </div>
      </div>
      <Stats />
      <Solutions />
      <Integeration />
      <Testimonials />
      <Deliver />
      <ContactUs />
    </>
  );
}

export default LandingPage;
