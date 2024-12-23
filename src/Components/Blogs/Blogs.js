import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Blogs.css";
import { blogData } from "./BlogsData";
import { Link } from "react-router-dom";
import { FiShare2 } from "react-icons/fi";

function Blogs() {
  const { id } = useParams();

  useEffect(() => {
    const scrollContainer = document.querySelector(".scroll-container");
    if (scrollContainer) {
      scrollContainer.scrollTo(0, 0);
    }
  }, [id]);

  const blog = blogData.find((b) => b.id === parseInt(id, 10));

  if (!blog) {
    return <div className="blog-not-found">Blog not found!</div>;
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
      <div className="blog">
        <header className="blog-header">
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
            aria-label={`Share ${blog.title}`}
          >
            <FiShare2 size={24} />
          </button>
        </header>
        <div className="blog-image">
          <img
            src={blog.bannerImage}
            alt={`${blog.title} banner`}
            className="blog-banner"
          />
        </div>
        <article className="blog-content">
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
                  <h2 key={index} className="blog-section-header">
                    {item.value}
                  </h2>
                );
              case "image":
                return (
                  <figure key={index} className="content-image">
                    <img src={item.value} alt="Blog content" />
                  </figure>
                );
              default:
                return null;
            }
          })}
        </article>
        <footer className="bottom-section">
          <h2
            dangerouslySetInnerHTML={{ __html: blog.bottomSection.heading }}
          ></h2>
          <p>
            Get a free consultation today. Connect with our industry experts to
            boost your business growth.
          </p>
          <Link to="/help-center">
            <button className="submit-btn-footer">Contact Us</button>
          </Link>
        </footer>
      </div>
    </div>
  );
}

export default Blogs;
