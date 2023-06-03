import React from "react";
const data = ["Super Hot", "With Love", "Fresh", "Best Quality", "Amazing"];

const featureData = [
  {
    id: "1",
    title: "Client-First System",
    des: "All our websites follow industry-leading Client-first system by Finsweet.",
    image:
      "https://assets.website-files.com/63de80ab03e95f0ae7de2a37/64558cfd1b66b2ab60e6cfc3_Muscle%20(1).svg",
  },
  {
    id: "2",
    title: "Fully Responsive",
    des: "All our websites are made fully responsive for different devices and screens.",
    image:
      "https://assets.website-files.com/63de80ab03e95f0ae7de2a37/63ee78a84384ec4ca43b2634_Responsive%20(6).svg",
  },
  {
    id: "3",
    title: "Flexible And Scalable",
    des: "We follow organised HTML structure inside Webflow to make website scalable.",
    image:
      "https://assets.website-files.com/63de80ab03e95f0ae7de2a37/63ee51cdfcb0c0ff2e953331_Scalable.svg",
  },
  {
    id: "4",
    title: "Faster Turnarounds",
    des: "All our websites follow industry-leading Client-first system by Finsweet.",
    image:
      "https://assets.website-files.com/63de80ab03e95f0ae7de2a37/63ee51cde240699daca34c02_Interactions.svg",
  },
  {
    id: "5",
    title: "Advance Interactions",
    des: "All our websites follow industry-leading Client-first system by Finsweet.",
    image:
      "https://assets.website-files.com/63de80ab03e95f0ae7de2a37/645542aef64eda193320b9fe_Interactions%20(2).svg",
  },
  {
    id: "6",
    title: "Custom-Code Support",
    des: "Need to go beyond Webflow's capabilities? We provide custom code support to make your vision a reality.",
    image:
      "https://assets.website-files.com/63de80ab03e95f0ae7de2a37/63ee787ba96dd268c94aad1d_Custom%20Code.svg",
  },
  {
    id: "7",
    title: "High Performance",
    des: "All our websites follow industry-leading Client-first system by Finsweet.",
    image:
      "https://assets.website-files.com/63de80ab03e95f0ae7de2a37/6455438dcd6e382e76049b14_Perfomance.svg",
  },
  {
    id: "8",
    title: "Accessibility Guidelines",
    des: "All our websites follow industry-leading Client-first system by Finsweet.",
    image:
      "https://assets.website-files.com/63de80ab03e95f0ae7de2a37/63ee51cd50f5b512966e5be5_A11y.svg",
  },
  {
    id: "9",
    title: "Free Webflow Training",
    des: "We provide free Webflow training to allow your team to efficiently manage and scale your website on your own.",
    image:
      "https://assets.website-files.com/63de80ab03e95f0ae7de2a37/64558ca03d8642333876e4de_Training.svg",
  },
];
function Deliver() {
  return (
    <>
      <div className="scroll-div-hot">
        <div className="hot">
          {data.map(() => (
            <>
              {" "}
              <div className="single">
                <div className="circle"></div>
                <img src="https://assets.website-files.com/63de80ab03e95f0ae7de2a37/6455fc47d43e2509fa79946f_Fire%20Svg%20Icon%20(1).svg"></img>
                <div className="circle"></div>
              </div>
              <div className="single">
                <div className="circle"></div>
                <img src="https://assets.website-files.com/63de80ab03e95f0ae7de2a37/6455fc47d43e2509fa79946f_Fire%20Svg%20Icon%20(1).svg"></img>
                <div className="circle"></div>
              </div>
              <div className="single">
                <div className="circle"></div>
                <img src="https://assets.website-files.com/63de80ab03e95f0ae7de2a37/6455fc47d43e2509fa79946f_Fire%20Svg%20Icon%20(1).svg"></img>
                <div className="circle"></div>
              </div>
            </>
          ))}
        </div>

        <div className="text-hot">
          {data.map((item) => (
            <>
              {" "}
              <div className="single">
                <span>{item}</span>
                <div className="circle"></div>
              </div>
            </>
          ))}
        </div>
      </div>

      <div className="features">
        <div className="features-heading">
          <div className="about">
            <span className="title">WE DELIVER QUALITY</span>
            <span className="des">
              We prioritize quality of work and client experience. That's why
              you get a range of powerups when you work with us!
            </span>
          </div>
          <div className="feature-button">
            <a href="" className="action-button">
              <div className="button">Let's cook a website</div>
              <div className="button_bg"></div>
            </a>
          </div>
        </div>

        <div className="feature-grid">
          <div className="circle"></div>
          {featureData.map((item) => (
            <>
              <div className="feature-card" key={item.id}>
                <div className="image-bg">
                  <img src={item.image}></img>
                </div>
                <div className="text">
                  <span className="title">{item.title}</span>
                  <span className="des">{item.des}</span>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
}

export default Deliver;
