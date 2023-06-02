import React from "react";
import TrustSection from "./Section/TrustSection";
import client from "../assets/img/section/projects/client.svg";
import Experience from "./Section/Experience";

function Section() {
  return (
    <div className="section">
      <TrustSection />

      <Experience />
    </div>
  );
}

export default Section;
