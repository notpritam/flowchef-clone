import React from "react";

const data = [
  {
    title: "Webflow",
    image:
      "https://assets.website-files.com/63df7fac01f036699dd1dae4/64252b8f7c31857447e4bb93_Webflow.png",
  },
  {
    title: "Finsweet",
    image:
      "https://assets.website-files.com/63df7fac01f036699dd1dae4/64252c1c1eb758fcae6a53c5_Finsweet%20(1).png",
  },
  {
    title: "Growth School",
    image:
      "https://assets.website-files.com/63df7fac01f036699dd1dae4/64252bb2943fc8f988dbcca8_Growth%20School.png",
  },
  {
    title: "With Pata",
    image:
      "https://assets.website-files.com/63df7fac01f036699dd1dae4/64530b566f990d8abaafd302_With%20Para%20(1).png",
  },
  {
    title: "Sendero",
    image:
      "https://assets.website-files.com/63df7fac01f036699dd1dae4/64252b99943fc81c91dbcbc2_Sendero.png",
  },
  {
    title: "Beacons",
    image:
      "https://assets.website-files.com/63df7fac01f036699dd1dae4/6435318debb11381c15288ab_Beacons%20Logo.png",
  },
  {
    title: "Goldcast",
    image:
      "https://assets.website-files.com/63df7fac01f036699dd1dae4/6431d7d6cbc3b7d25a554419_Goldcast%20(1)%20(1).png",
  },
  {
    title: "Plum",
    image:
      "https://assets.website-files.com/63df7fac01f036699dd1dae4/64252b87afde375a02eb9f60_Plum.png",
  },
  {
    title: "Source Health",
    image:
      "https://assets.website-files.com/63df7fac01f036699dd1dae4/64372f38592dbf46f61405a2_Source%20Health.png",
  },
  {
    title: "Whaesync",
    image:
      "https://assets.website-files.com/63df7fac01f036699dd1dae4/647031df041bb767ea96c06a_Tina%20Davies%20(1).png",
  },
  {
    title: "Avataar",
    image:
      "https://assets.website-files.com/63df7fac01f036699dd1dae4/642530ccc7e05406de724a35_Avataar.png",
  },
  {
    title: "Loophealth",
    image:
      "https://assets.website-files.com/63df7fac01f036699dd1dae4/64253040aeb3539727ad90b6_Loop.png",
  },
  {
    title: "Dexai Robotics",
    image:
      "https://assets.website-files.com/63df7fac01f036699dd1dae4/642b01189f26c6b98486577c_Dexai.png",
  },
  {
    title: "Shipa Freight",
    image:
      "https://assets.website-files.com/63df7fac01f036699dd1dae4/6431d80a57e24b9737bb05f1_Shipa%20(2).png",
  },
  {
    title: "Tina Davies",
    image:
      "https://assets.website-files.com/63df7fac01f036699dd1dae4/64252baa0acd17083585288e_Tina%20Davies.png",
  },
];
function TrustSection() {
  return (
    <div className="trust-section">
      <div className="heading">
        <span className="back-title">Trusted By</span>
        <span className="trust-title">Together We've Achived</span>
      </div>
      <div className="company-logos">
        <div className="company-container">
          {data.map((item, index) => (
            <>
              <img src={item.image} alt={item.title} key={index}></img>
            </>
          ))}
        </div>
      </div>

      <div className="alone-text">
        <span>We have cooked for amazing companies backed by</span>
        <img
          alt="Y Combinator Logo"
          src="https://assets.website-files.com/63de80ab03e95f0ae7de2a37/64530c3988956b0981573b9a_Y%20Combinator.svg"
        ></img>
      </div>
    </div>
  );
}

export default TrustSection;
