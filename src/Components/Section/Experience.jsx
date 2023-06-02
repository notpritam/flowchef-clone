import React from "react";
import client from "../../assets/img/section/projects/client.svg";
const projects = [
  {
    id: "1",
    title: "Traba Pro",
    image:
      "https://assets.website-files.com/63df7fac01f036699dd1dae4/643034aa6701d7af6f3287ac_Normal%20Thumb%20Frame%20(4)%20(1).png",
    bg_image:
      "https://assets.website-files.com/63df7fac01f036699dd1dae4/643034ea62961228bbd6850b_Project%20BG%20Grad%20(1).jpg",
    link: "",
    tags: [
      { title: "Client-First", image: "" },
      { title: "User", image: "" },
      { title: "Experience", image: "" },
    ],
  },
  {
    id: "2",
    title: "Traba Pro",
    image:
      "https://assets.website-files.com/63df7fac01f036699dd1dae4/643034aa6701d7af6f3287ac_Normal%20Thumb%20Frame%20(4)%20(1).png",
    bg_image:
      "https://assets.website-files.com/63df7fac01f036699dd1dae4/643034ea62961228bbd6850b_Project%20BG%20Grad%20(1).jpg",
    link: "",
    tags: [
      { title: "Client-First", image: "" },
      { title: "User", image: "" },
      { title: "Experience", image: "" },
    ],
  },
  {
    id: "3",
    title: "Traba Pro",
    image:
      "https://assets.website-files.com/63df7fac01f036699dd1dae4/643034aa6701d7af6f3287ac_Normal%20Thumb%20Frame%20(4)%20(1).png",
    bg_image:
      "https://assets.website-files.com/63df7fac01f036699dd1dae4/643034ea62961228bbd6850b_Project%20BG%20Grad%20(1).jpg",
    link: "",
    tags: [
      { title: "Client-First", image: "" },
      { title: "User", image: "" },
      { title: "Experience", image: "" },
    ],
  },
  {
    id: "4",
    title: "Traba Pro",
    image:
      "https://assets.website-files.com/63df7fac01f036699dd1dae4/643034aa6701d7af6f3287ac_Normal%20Thumb%20Frame%20(4)%20(1).png",
    bg_image:
      "https://assets.website-files.com/63df7fac01f036699dd1dae4/643034ea62961228bbd6850b_Project%20BG%20Grad%20(1).jpg",
    link: "",
    tags: [
      { title: "Client-First", image: "" },
      { title: "User", image: "" },
      { title: "Experience", image: "" },
    ],
  },
  {
    id: "5",
    title: "Traba Pro",
    image:
      "https://assets.website-files.com/63df7fac01f036699dd1dae4/643034aa6701d7af6f3287ac_Normal%20Thumb%20Frame%20(4)%20(1).png",
    bg_image:
      "https://assets.website-files.com/63df7fac01f036699dd1dae4/643034ea62961228bbd6850b_Project%20BG%20Grad%20(1).jpg",
    link: "",
    tags: [
      { title: "Client-First", image: "" },
      { title: "User", image: "" },
      { title: "Experience", image: "" },
    ],
  },
  {
    id: "6",
    title: "Traba Pro",
    image:
      "https://assets.website-files.com/63df7fac01f036699dd1dae4/643034aa6701d7af6f3287ac_Normal%20Thumb%20Frame%20(4)%20(1).png",
    bg_image:
      "https://assets.website-files.com/63df7fac01f036699dd1dae4/643034ea62961228bbd6850b_Project%20BG%20Grad%20(1).jpg",
    link: "",
    tags: [
      { title: "Client-First", image: "" },
      { title: "User", image: "" },
      { title: "Experience", image: "" },
    ],
  },
];

function Experience() {
  return (
    <div className="experience">
      <div className="heading">
        <span className="back-title">Projects</span>
        <span className="trust-title">EXPERIENCE IN ACTION</span>
      </div>
      {/* <div className="side-text">
          <span className="back-title">Featured Projects</span>
        </div> */}
      <div className="projects-container">
        {projects.map((item) => (
          <>
            <div className="project">
              <div className="first-div">
                <div className="card">
                  <div className="lining"></div>

                  <img className="bg-img" src={item.bg_image}></img>
                  <img className="project-img" src={item.image}></img>
                </div>
              </div>
              <div className="second-div">
                <div className="project-tags">
                  {item.tags.map((tag) => (
                    <>
                      <div className="tag">
                        <img src={client}></img> <span>{tag.title}</span>
                      </div>
                    </>
                  ))}
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}

export default Experience;
