import React from "react";

const data = [
  {
    id: "1",
    title: "Figma/XD to Webflow",
    image:
      "https://assets.website-files.com/63df7fac01f036699dd1dae4/644807312b995d73dd33ff0b_Figma%20to%20Webflow.png",
    des: "Transform your designs crafted in Figma, Adobe XD, Sketch, and more into fully-responsive, scalable, accessible and high performing Webflow website.",
  },
  {
    id: "2",
    title: "Tools & Integrations",
    image:
      "https://assets.website-files.com/63df7fac01f036699dd1dae4/6448075d23f57d000ed10218_Tools%20and%20Integrations.png",
    des: "Connect Webflow with your preferred tools, such as Zapier, Airtable, and Memberstack, to streamline marketing automation, generate user dashboards, and unlock a world of additional capabilities.",
  },
  {
    id: "3",
    title: "Migrate to Webflow",
    image:
      "https://assets.website-files.com/63df7fac01f036699dd1dae4/64480719beb0986eeb81bfa5_Migrate%20to%20Webflow.png",
    des: "Seamlessly transition your existing website from platforms like WordPress, Wix, Squarespace, and more to a fully-responsive and user-friendly Webflow website.",
  },
  {
    id: "4",
    title: "Search Engine Optimization (SEO)",
    image:
      "https://assets.website-files.com/63df7fac01f036699dd1dae4/64480721e1984f1fae59cf4d_SEO.png",
    des: "Enhance your Webflow website's search engine ranking by following industry-leading guidelines, boosting your online presence and visibility with high SEO scores.",
  },
  {
    id: "5",
    title: "Figma/XD to Webflow",
    image:
      "https://assets.website-files.com/63df7fac01f036699dd1dae4/644807312b995d73dd33ff0b_Figma%20to%20Webflow.png",
    des: "Transform your designs crafted in Figma, Adobe XD, Sketch, and more into fully-responsive, scalable, accessible and high performing Webflow website.",
  },
  {
    id: "6",
    title: "Figma/XD to Webflow",
    image:
      "https://assets.website-files.com/63df7fac01f036699dd1dae4/644807312b995d73dd33ff0b_Figma%20to%20Webflow.png",
    des: "Transform your designs crafted in Figma, Adobe XD, Sketch, and more into fully-responsive, scalable, accessible and high performing Webflow website.",
  },
  {
    id: "7",
    title: "Figma/XD to Webflow",
    image:
      "https://assets.website-files.com/63df7fac01f036699dd1dae4/644807312b995d73dd33ff0b_Figma%20to%20Webflow.png",
    des: "Transform your designs crafted in Figma, Adobe XD, Sketch, and more into fully-responsive, scalable, accessible and high performing Webflow website.",
  },
  {
    id: "8",
    title: "Figma/XD to Webflow",
    image:
      "https://assets.website-files.com/63df7fac01f036699dd1dae4/644807312b995d73dd33ff0b_Figma%20to%20Webflow.png",
    des: "Transform your designs crafted in Figma, Adobe XD, Sketch, and more into fully-responsive, scalable, accessible and high performing Webflow website.",
  },
];
function Solutions() {
  return (
    <>
      <div className="solutions">
        <div className="first">
          <div className="box-card">
            <img
              className="bg_img"
              src="https://assets.website-files.com/63de80ab03e95f0ae7de2a37/63e12855842ae7f3b6ed271a_BG%20grad3%20(1).png"
            ></img>
            <span className="title">SOLUTIONS TO YOUR NEEDS</span>
            <span className="des">
              We offer a wide range of services designed to help you achieve
              your goals, from design and user experience to custom development
              and third-party integrations.
            </span>
            <div>
              <a href="" className="action-button">
                <div className="button">Start a project</div>
                <div className="button_bg"></div>
              </a>
            </div>
          </div>
        </div>
        <div className="second">
          {data.map((item, index) => (
            <>
              <div className="solution-card" key={item.id}>
                <div className="contain-img-count">
                  <img src={item.image}></img>
                  <span className="count">{item.id}</span>
                </div>

                <span className="des">{item.des}</span>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
}

export default Solutions;
