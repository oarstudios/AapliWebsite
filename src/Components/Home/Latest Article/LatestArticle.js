import React, { useState } from "react";
import Slider from "react-slick";
import "./LatestArticle.css";
import blog1 from "../../../Images/blog2.png";
import blog2 from "../../../Images/blog3.png";
import blog3 from "../../../Images/blog5.png";
import blog4 from "../../../Images/blog7.png";
import blog5 from "../../../Images/blog9.png";
import blog6 from "../../../Images/blog11.png";
import blog7 from "../../../Images/blog13.png";
import blog8 from "../../../Images/blog15.png";

function LatestArticle() {
  const [isDragging, setIsDragging] = useState(false);

  const articles = [
    {
      id: 1,
      image: blog1,
      category: "BUSINESS",
      title: "Custom Websites vs. WordPress: Make the right choice.",
      timeAgo: "6 weeks ago",
    },
    {
      id: 2,
      image: blog2,
      category: "BUSINESS",
      title: "Is a Website Necessary for a Growing Business?",
      timeAgo: "5 weeks ago",
    },
    {
      id: 3,
      image: blog3,
      category: "MARKETING",
      title: "Why Digital Marketing is a Game-Changer for Small-Scale Businesses",
      timeAgo: "5 weeks ago",
    },
    {
      id: 4,
      image: blog4,
      category: "MARKETING",
      title: "Why having a Website will boost your Digital Marketing growth",
      timeAgo: "3 weeks ago",
    },
    {
      id: 5,
      image: blog5,
      category: "MARKETING",
      title: "Drive More Traffic to Your Resort with These SEO Tips",
      timeAgo: "2 weeks ago",
    },
    {
      id: 6,
      image: blog6,
      category: "DEVELOPMENT",
      title: "How to Build a High-Converting E-Commerce Website",
      timeAgo: "2 weeks ago",
    },
    {
      id: 7,
      image: blog7,
      category: "DESIGNING",
      title: "Why High-Quality Web Design Matters for Your Brand",
      timeAgo: "3 days ago",
    },
    {
      id: 8,
      image: blog8,
      category: "BRANDING",
      title: "The Role of Branding in Building Customer Loyalty",
      timeAgo: "8 hours ago",
    },
  ];

  const settings = {
    speed: 500,
    slidesToShow: 2.7,
    infinite: false,
    arrows: true,
    prevArrow: <CustomArrow direction="left" />,
    nextArrow: <CustomArrow direction="right" />,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 576,
        settings: { slidesToShow: 1.5 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 },
      },
    ],
    beforeChange: () => setIsDragging(true),
    afterChange: () => setIsDragging(false),
  };

  const handleNavigate = (id) => {
    if (!isDragging) {
      window.location.href = `/blogs/${id}`;
    }
  };

  return (
    <>
      <div className="latest-article">
        <div className="latest-article-title">
          <h2>Latest Articles</h2>
        </div>
        <Slider {...settings} className="articles-slider">
          {articles.map((article) => (
            <div
              key={article.id}
              className="article-card"
              onMouseDown={() => setIsDragging(false)}
              onClick={() => handleNavigate(article.id)}
              style={{ cursor: "pointer" }}
            >
              <img
                src={article.image}
                alt={article.title}
                className="article-image"
              />
              <div className="article-content">
                <div className="article-meta">
                  <span className="category">{article.category}</span>
                  <span className="time">{article.timeAgo}</span>
                </div>
                <h3 className="article-title">{article.title}</h3>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="bottom-line"></div>
    </>
  );
}

const CustomArrow = ({ direction, onClick }) => {
  return (
    <button
      className={`slick-arrow ${direction}`}
      onClick={onClick}
      style={{
        cursor: "pointer",
      }}
    >
      {direction === "left" ? "<" : ">"}
    </button>
  );
};

export default LatestArticle;
