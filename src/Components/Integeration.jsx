import React from "react";

const dataArray = [
  {
    id: "stripe",
    src: "https://assets.website-files.com/63de80ab03e95f0ae7de2a37/63e0e763f0138fa701bf5109_stripe-ar21.svg",
    alt: "Stripe Logo",
  },
  {
    id: "memberstack",
    src: "https://assets.website-files.com/63de80ab03e95f0ae7de2a37/644d42f01c91164e893d02c1_Memberstack%20Logo.svg",
    alt: "Memberstack Logo",
  },
  {
    id: "webflow",
    src: "https://assets.website-files.com/63de80ab03e95f0ae7de2a37/644d3a11a698ca41f603c4b5_Webflow%20Logo.svg",
    alt: "Webflow Logo",
  },
  {
    id: "figma",
    src: "https://assets.website-files.com/63de80ab03e95f0ae7de2a37/63e0e7638952d625f574ba9f_figma-ar21.svg",
    alt: "Figma Logo",
  },
  {
    id: "finsweet",
    src: "https://assets.website-files.com/63de80ab03e95f0ae7de2a37/644d34bdbe08787d14294b24_Finsweet%20Logo.svg",
    alt: "Finsweet Logo",
  },
  {
    id: "airtable",
    src: "https://assets.website-files.com/63de80ab03e95f0ae7de2a37/63e0e764e62bc2dff801eb0e_airtable-ar21.svg",
    alt: "Airtable Logo",
  },
  {
    id: "zapier",
    src: "https://assets.website-files.com/63de80ab03e95f0ae7de2a37/63e0e764d77643837a600886_zapier-ar21.svg",
    alt: "Zapier Logo",
  },
  {
    id: "google-analytics",
    src: "https://assets.website-files.com/63de80ab03e95f0ae7de2a37/63e0e7640c31b99dea7cdcfa_google_analytics-ar21.svg",
    alt: "Google Analytics Logo",
  },
  {
    id: "chatgpt",
    src: "https://assets.website-files.com/63de80ab03e95f0ae7de2a37/644d3d9c1c9116fe343c9bef_ChatGPT%20Logo.svg",
    alt: "ChatGPT Logo",
  },
  {
    id: "monto",
    src: "https://assets.website-files.com/63de80ab03e95f0ae7de2a37/64552f75cc73930789522eba_Monto%20Logo.svg",
    alt: "Monto Logo",
  },
  {
    id: "stripe",
    src: "https://assets.website-files.com/63de80ab03e95f0ae7de2a37/63e0e763f0138fa701bf5109_stripe-ar21.svg",
    alt: "Stripe Logo",
  },
  {
    id: "memberstack",
    src: "https://assets.website-files.com/63de80ab03e95f0ae7de2a37/644d42f01c91164e893d02c1_Memberstack%20Logo.svg",
    alt: "Memberstack Logo",
  },
  {
    id: "webflow",
    src: "https://assets.website-files.com/63de80ab03e95f0ae7de2a37/644d3a11a698ca41f603c4b5_Webflow%20Logo.svg",
    alt: "Webflow Logo",
  },
  {
    id: "figma",
    src: "https://assets.website-files.com/63de80ab03e95f0ae7de2a37/63e0e7638952d625f574ba9f_figma-ar21.svg",
    alt: "Figma Logo",
  },
  {
    id: "finsweet",
    src: "https://assets.website-files.com/63de80ab03e95f0ae7de2a37/644d34bdbe08787d14294b24_Finsweet%20Logo.svg",
    alt: "Finsweet Logo",
  },
  {
    id: "airtable",
    src: "https://assets.website-files.com/63de80ab03e95f0ae7de2a37/63e0e764e62bc2dff801eb0e_airtable-ar21.svg",
    alt: "Airtable Logo",
  },
  {
    id: "zapier",
    src: "https://assets.website-files.com/63de80ab03e95f0ae7de2a37/63e0e764d77643837a600886_zapier-ar21.svg",
    alt: "Zapier Logo",
  },
  {
    id: "google-analytics",
    src: "https://assets.website-files.com/63de80ab03e95f0ae7de2a37/63e0e7640c31b99dea7cdcfa_google_analytics-ar21.svg",
    alt: "Google Analytics Logo",
  },
  {
    id: "chatgpt",
    src: "https://assets.website-files.com/63de80ab03e95f0ae7de2a37/644d3d9c1c9116fe343c9bef_ChatGPT%20Logo.svg",
    alt: "ChatGPT Logo",
  },
  {
    id: "monto",
    src: "https://assets.website-files.com/63de80ab03e95f0ae7de2a37/64552f75cc73930789522eba_Monto%20Logo.svg",
    alt: "Monto Logo",
  },
  {
    id: "stripe",
    src: "https://assets.website-files.com/63de80ab03e95f0ae7de2a37/63e0e763f0138fa701bf5109_stripe-ar21.svg",
    alt: "Stripe Logo",
  },
  {
    id: "memberstack",
    src: "https://assets.website-files.com/63de80ab03e95f0ae7de2a37/644d42f01c91164e893d02c1_Memberstack%20Logo.svg",
    alt: "Memberstack Logo",
  },
  {
    id: "webflow",
    src: "https://assets.website-files.com/63de80ab03e95f0ae7de2a37/644d3a11a698ca41f603c4b5_Webflow%20Logo.svg",
    alt: "Webflow Logo",
  },
  {
    id: "figma",
    src: "https://assets.website-files.com/63de80ab03e95f0ae7de2a37/63e0e7638952d625f574ba9f_figma-ar21.svg",
    alt: "Figma Logo",
  },
  {
    id: "finsweet",
    src: "https://assets.website-files.com/63de80ab03e95f0ae7de2a37/644d34bdbe08787d14294b24_Finsweet%20Logo.svg",
    alt: "Finsweet Logo",
  },
  {
    id: "airtable",
    src: "https://assets.website-files.com/63de80ab03e95f0ae7de2a37/63e0e764e62bc2dff801eb0e_airtable-ar21.svg",
    alt: "Airtable Logo",
  },
  {
    id: "zapier",
    src: "https://assets.website-files.com/63de80ab03e95f0ae7de2a37/63e0e764d77643837a600886_zapier-ar21.svg",
    alt: "Zapier Logo",
  },
  {
    id: "google-analytics",
    src: "https://assets.website-files.com/63de80ab03e95f0ae7de2a37/63e0e7640c31b99dea7cdcfa_google_analytics-ar21.svg",
    alt: "Google Analytics Logo",
  },
  {
    id: "chatgpt",
    src: "https://assets.website-files.com/63de80ab03e95f0ae7de2a37/644d3d9c1c9116fe343c9bef_ChatGPT%20Logo.svg",
    alt: "ChatGPT Logo",
  },
  {
    id: "monto",
    src: "https://assets.website-files.com/63de80ab03e95f0ae7de2a37/64552f75cc73930789522eba_Monto%20Logo.svg",
    alt: "Monto Logo",
  },
];

function Integeration() {
  return (
    <>
      <div className="integeration">
        <div className="intergeration_content">
          <span className="intergeration_heading">
            Integrate your website with{" "}
            <span className="highlight">powerful tools</span>
          </span>
          <p className="intergeration_des">
            Simplify your marketing processes and create powerful automations by
            integrating your Webflow website with industry-leading tools that
            can enhance and expand the capabilities of Webflow.
          </p>
          <div className="intergeration-button">
            <a href="" className="action-button">
              <div className="button">Let's cook a website</div>
              <div className="button_bg"></div>
            </a>
          </div>
        </div>
        <div className="tools-container">
          {dataArray.map((item, index) => (
            <>
              <div className="item" id={index}>
                <img src={item.src}></img>
              </div>
              <div className="circle"></div>
            </>
          ))}
        </div>
      </div>
    </>
  );
}

export default Integeration;
