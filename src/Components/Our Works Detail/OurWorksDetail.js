import React, { useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import "./OurWorksDetail.css";

const worksData = [
  {
    id: "1",
    title: "Ace Wears Website Design",
    name: "ACE WEARS",
    category: "WEB DESIGN",
    imgSrc: require("../../Images/Ace Wears.webp"),
  },
  {
    id: "2",
    title: "Didwania Creations Administrative Controls",
    name: "DIDWANIA",
    category: "WEB DESIGN",
    imgSrc: require("../../Images/Didwania.webp"),
  },
  {
    id: "3",
    title: "Nomad Interiors Web Design",
    name: "NOMAD",
    category: "WEB DESIGN",
    imgSrc: require("../../Images/Nomad Interiors.webp"),
  },
  {
    id: "4",
    title: "Puba Productions Web Design & Development",
    name: "PUBA",
    category: "WEB DESIGN",
    imgSrc: require("../../Images/Puba (1).webp"),
  },
  {
    id: "5",
    title: "Nomad Interiors Web Design",
    name: "NOMAD",
    category: "WEB DESIGN",
    imgSrc: require("../../Images/Nomad Interiors.webp"),
  },
];

function OurWorksDetail() {
  const { id } = useParams();
  const location = useLocation();

  useEffect(() => {
    const scrollContainer = document.querySelector(".scroll-container");
    if (scrollContainer) {
      scrollContainer.scrollTo(0, 0);
    }
  }, [id, location]);

  const work = worksData.find((w) => w.id === id);

  if (!work) {
    return <div>Work not found!</div>;
  }

  return (
    <div className="works-container">
      <div className="works-navbar">
        <span className="works-left-text">{work.name}</span>
        <div className="works-line"></div>
        <span className="works-right-text">{work.category}</span>
      </div>
      <div className="works-main-content">
        <h1 className="works-title">{work.title}</h1>
      </div>
      <div className="works-image-container">
        <img src={work.imgSrc} alt={work.title} className="works-image" />
      </div>
      <div className="works-content">
        {work.content &&
          work.content.map((item, index) => {
            switch (item.type) {
              case "text":
                return <p key={index} className="works-text">{item.value}</p>;
              case "header":
                return <h2 key={index} className="works-header">{item.value}</h2>;
              case "image":
                return (
                  <div key={index} className="content-image">
                    <img src={item.value} alt="Work content" />
                  </div>
                );
              default:
                return null;
            }
          })}
      </div>
    </div>
  );
}

export default OurWorksDetail;
