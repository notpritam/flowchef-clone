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
    title: "Ziptility",
    image:
      "https://assets.website-files.com/63df7fac01f036699dd1dae4/6437302bf47c6ad7977b0251_Ziptility.png",
    bg_image:
      "https://assets.website-files.com/63df7fac01f036699dd1dae4/6435429f96b00179772a5ff4_12%20(1).png",
    link: "",
    tags: [
      { title: "Client-First", image: "" },
      { title: "User Experience", image: "" },
      { title: "Development", image: "" },
    ],
  },
  {
    id: "3",
    title: "Source Health",
    image:
      "https://assets.website-files.com/63df7fac01f036699dd1dae4/643730111f24c54fb75a9592_Source%20Health.png",
    bg_image:
      "https://assets.website-files.com/63df7fac01f036699dd1dae4/643997b558376d254686e9ff_43.png",
    link: "",
    tags: [
      { title: "User Experience", image: "" },
      { title: "Development", image: "" },
    ],
  },
  {
    id: "4",
    title: "Growth School",
    image:
      "https://assets.website-files.com/63df7fac01f036699dd1dae4/643731bd3097b50070017ffb_Growth%20School.png",
    bg_image:
      "https://assets.website-files.com/63df7fac01f036699dd1dae4/643995130e8a2569410f6236_36.png",
    link: "",
    tags: [
      { title: "Client-First", image: "" },
      { title: "User Experience", image: "" },
      { title: "Development", image: "" },
    ],
  },
  {
    id: "5",
    title: "Apple Store India Rebuild",
    image:
      "https://assets.website-files.com/63df7fac01f036699dd1dae4/6437326fa0ed70b6939ed29b_Apple%20India.png",
    bg_image:
      "https://assets.website-files.com/63df7fac01f036699dd1dae4/643995130e8a2569410f6236_36.png",
    link: "",
    tags: [
      { title: "Cloneable", image: "" },
      { title: "Rebuild", image: "" },
      { title: "Development", image: "" },
    ],
  },
  {
    id: "6",
    title: "OpenTrack",
    image:
      "https://assets.website-files.com/63df7fac01f036699dd1dae4/643730e63097b5fcbb0176a1_OpenTrack.png",
    bg_image:
      "https://assets.website-files.com/63df7fac01f036699dd1dae4/6439b9be8336202edbf81ac4_41.png",
    link: "",
    tags: [
      { title: "User Experience", image: "" },
      { title: "Development", image: "" },
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
                <span className="name">{item.title}</span>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}

export default Experience;
