import React, { useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import "./Blogs.css";
import { blogData } from "./BlogsData";
import { Link } from "react-router-dom";
import { FiShare2 } from "react-icons/fi";

function Blogs() {
  const { id } = useParams();
  const location = useLocation();

  useEffect(() => {
    const scrollContainer = document.querySelector(".scroll-container");
    if (scrollContainer) {
      scrollContainer.scrollTo(0, 0);
    }
  }, [id, location]);

  const blog = blogData.find((b) => b.id === parseInt(id));

  if (!blog) {
    return <div>Blog not found!</div>;
  }

  const handleShare = () => {
    const blogUrl = window.location.href;

    if (navigator.share) {
      navigator
        .share({
          title: blog.title,
          text: blog.subtitle,
          url: blogUrl,
        })
        .then(() => console.log("Blog shared successfully!"))
        .catch((err) => console.error("Error sharing blog:", err));
    } else {
      alert("Web Share API is not supported in this browser.");
    }
  };

  return (
    <div className="blogs-container">
      {/* Dynamic Metadata */}
      <Helmet>
      <meta name="robots" content="index, follow" />
        <title>{blog.title}</title>
        <meta name="description" content={blog.subtitle} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={blog.title} />
        <meta property="og:description" content={blog.subtitle} />
        <meta property="og:image" content={blog.bannerImage} />
        <meta
          property="og:url"
          content={`https://www.oarstudios.in/blogs/${blog.id}`}
        />
        <meta property="og:site_name" content="OAR Studios" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={blog.title} />
        <meta name="twitter:description" content={blog.subtitle} />
        <meta name="twitter:image" content={blog.bannerImage} />
        <link
          rel="canonical"
          href={`https://www.oarstudios.in/blogs/${blog.id}`}
        />
      </Helmet>

      <div className="blog">
        <div className="blog-header">
          <h1>
            {blog.title}
            <br />
            <span>{blog.subtitle}</span>
          </h1>
          {/* Share Icon Button */}
          <button
            className="share-icon-btn"
            onClick={(e) => {
              e.stopPropagation(); // Prevent triggering any parent click events
              handleShare();
            }}
            aria-label="Share Blog"
          >
            <FiShare2 size={24} />
          </button>
        </div>
        <div className="blog-image">
          <img
            src={blog.bannerImage}
            alt={`${blog.title} banner`}
            className="blog-banner"
          />
        </div>
        <div className="blog-content">
          {blog.content.map((item, index) => {
            switch (item.type) {
              case "text":
                return (
                  <p key={index} className="blog-text">
                    {item.value}
                  </p>
                );
              case "header":
                return (
                  <h2 key={index} className="blog-header">
                    {item.value}
                  </h2>
                );
              case "image":
                return (
                  <div key={index} className="content-image">
                    <img src={item.value} alt="Blog content" />
                  </div>
                );
              default:
                return null;
            }
          })}
        </div>
        <div className="bottom-section">
          <h2
            dangerouslySetInnerHTML={{ __html: blog.bottomSection.heading }}
          ></h2>
          <p>
            Get a free consultation today, get on a call with our industry
            experts to skyrocket your business growth.
          </p>
          <Link to="/help-center">
            <button className="submit-btn-footer">Contact Us</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Blogs;
