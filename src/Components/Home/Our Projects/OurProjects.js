import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Our Projects/OurProjects.css";
import aceWearsLogo from '../../../Images/1.png';
import nomadLogo from '../../../Images/2.png';
import pubaLogo from '../../../Images/3.png';
import didwaniaLogo from '../../../Images/4.png';
import holaYogLogo from '../../../Images/5.png';
import aceWearsLogoDark from '../../../Images/8.png';
import nomadLogoDark from '../../../Images/9.png';
import pubaLogoDark from '../../../Images/10.png';
import didwaniaLogoDark from '../../../Images/11.png';
import holaYogLogoDark from '../../../Images/12.png';
import { useNavigate } from "react-router-dom";

const OurProjects = () => {
  const [sts, setSts] = useState(3); // Default for larger screens
  const navigate = useNavigate();
  const [opp, setOpp] = useState(false)

  useEffect(() => {
    // Adjust slider settings for smaller screens
    const handleResize = () => {
      if (window.innerWidth < 425) {
        setSts(2); // Show 1 slide on mobile screens
      } else {
        setSts(3); // Show 3 slides on larger screens
      }
    };

    handleResize(); // Call the function on mount
    window.addEventListener("resize", handleResize); // Update on resize

    // Clean up the event listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const settings = {
    infinite: true,
    slidesToShow: sts,
    slidesToScroll: 1,
    autoplay: true, 
    autoplaySpeed: 0,
    speed: 8000,
    cssEase: "linear",
    arrows: false,
    pauseOnHover: false, 
    
  };

  const settings2 = {
    rtl: true,
  };

  const images = [
    { id: "1", light: aceWearsLogo, dark: aceWearsLogoDark },
    { id: "2", light: didwaniaLogo, dark: didwaniaLogoDark },
    { id: "3", light: nomadLogo, dark: nomadLogoDark },
    { id: "4", light: pubaLogo, dark: pubaLogoDark },
    { id: "5", light: holaYogLogo, dark: holaYogLogoDark },
  ];

  const handleNavigate = (id) => {
    window.location.href = `/our-works/${id}`;
  };

  return (
    <div className="op">
      <div className="heading">
        <h2>Our Work</h2>
      </div>
      {/* <div className="shadow"></div> */}

      {/* First Slider */}
      <Slider {...settings}>
        {images.map((image) => (
          <div
            key={image.id}
            onClick={() => handleNavigate(image.id)}
            style={{ cursor: "pointer" }}
          >
            <img
              src={image.dark}
              alt={`Slide ${image.id}`}
              className="opImg dark"
            />
            <img
              src={image.light}
              alt={`Slide ${image.id}`}
              className="opImg light"
            />
            <div className="view">
              <button>VIEW</button>
            </div>
          </div>
        ))}
      </Slider>

      {/* Second Slider (RTL) */}
      <Slider {...settings} {...settings2}>
        {images.map((image) => (
          <div
            key={image.id}
            onClick={() => handleNavigate(image.id)}
            style={{ cursor: "pointer" }}
          >
            <img
              src={image.dark}
              alt={`Slide ${image.id}`}
              className="opImg dark"
            />
            <img
              src={image.light}
              alt={`Slide ${image.id}`}
              className="opImg light"
            />
            <div className="view">
              <button>VIEW</button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default OurProjects;
