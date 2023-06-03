import React from "react";
import play from "../assets/img/play.svg";
const data = [
  {
    review:
      "Harshit is a high performer and works with some of our biggest and most important clients.",
    name: "JOE KRUG",
    post: "Founder & CEO | Finsweet",
    image:
      "https://assets.website-files.com/63df7fac01f036699dd1dae4/64504b7b16d7627730e32d61_Joe%20(1).jpg",
  },
  {
    review:
      "We worked with Harshit on several Webflow projects and he taught us a ton about developing in Webflow.",
    name: "NEAL JEAN",
    post: "Co-Founder | Beacons",
    image:
      "https://assets.website-files.com/63df7fac01f036699dd1dae4/64504c6ad0997b3c5b0dc075_Neal%20Jean%20(1)%20(1).jpg",
  },
  {
    review:
      "Harshit has the best talent for Webflow, both for conversions and especially for third-party integrations.",
    name: "TAYLER FREUND",
    post: "Founder & CEO | Sendero",
    image:
      "https://assets.website-files.com/63df7fac01f036699dd1dae4/64504d67919d08417cc760d7_Tayler.jpg",
  },
  {
    review:
      "Harshit is amazing at what he does, he has done numerous projects for us and each time I've been blown away.",
    name: "CHARLES R. HOWARD",
    post: "Founder | Credit Renew",
    image:
      "https://assets.website-files.com/63df7fac01f036699dd1dae4/6450505cce2aff4c28c71570_Charles.jpg",
  },
  {
    review:
      "Super quick, attentive, and has always given us great recommendations to improve our work.",
    name: "REAGAN BRADLEY",
    post: "Marketing Director | Unicorn Labs",
    image:
      "https://assets.website-files.com/63df7fac01f036699dd1dae4/63e4eec60de407345d5c4842_6079c8a738e88c5a9804905f_Reagn-p-500%201%20(1)%20(2).jpg",
  },
  {
    review:
      "They are professional, they are fast, they are amazing, great communicator and produced outstanding work for us.",
    name: "PHIL GORDON",
    post: "Founder & CEO | Prompt.io",
    image:
      "https://assets.website-files.com/63df7fac01f036699dd1dae4/64504932083b27c08fa4615d_phil%20Gordon%201%20(1).jpg",
  },
];

function Testimonials() {
  return (
    <>
      <div className="testimonial">
        <div className="container">
          <div className="heading">
            <div className="text-div">
              <span className="title">WORDS OF WISDOM</span>
              <span className="back-text">"Testimonials"</span>
            </div>

            <span className="des">
              Read what our clients & partners have to say about their
              experiences and why they trust us to bring their vision to life.
            </span>
          </div>

          <div className="testimonials">
            <div className="video">
              <div className="first-bg"></div>
              <div className="second-bg"></div>
              <div className="videobutton">
                <img src={play}></img>
              </div>
              <img src="https://embed-ssl.wistia.com/deliveries/3ef8565796d3c2bb640c4ddb72b8459b.webp?image_crop_resized=960x540"></img>
            </div>
          </div>

          <div className="testimonial-grid">
            {data.map((item) => (
              <>
                <div className="card-container">
                  <img
                    className="backdrop"
                    src="https://assets.website-files.com/63de80ab03e95f0ae7de2a37/63e52f86dcfc2a969cfff05b_BG%20Grad3%20(5).png"
                  ></img>
                  <div className="testimonial_card">
                    <div className="profile-circle">
                      <img src={item.image}></img>
                    </div>
                    <span>"{item.review}"</span>
                    <div className="reviewer-detail">
                      <span className="name">{item.name}</span>
                      <span className="post">{item.post}</span>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Testimonials;
