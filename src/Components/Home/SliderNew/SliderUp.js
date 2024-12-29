import React, { useEffect, useRef, useState } from "react";
import "./SliderUp.css";
import acewares from "../../../Videos/AceWearsvideo.webm";
import didwania from "../../../Videos/DidwaniaVideo.webm";
import holayog from "../../../Videos/HolaYog Video.mp4";
import nomad from "../../../Videos/NomadVideo.webm";
import puba from "../../../Videos/PubaVideo.webm";
import acewaresImg from "../../../Images/Ace Wears video.png";
import didwaniaImg from "../../../Images/Didwania Video.png";
import holayogImg from "../../../Images/HolaYog Video.png";
import nomadImg from "../../../Images/Nomad Video.png";
import pubaImg from "../../../Images/Puba Video.png";

const SliderUp = () => {
  const sliderRef = useRef(null);
  const containerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 425);
  const [perspective, setPerspective] = useState("rotateX(4deg) rotateY(20deg) rotateZ(5deg)");

  const videos = [acewares, holayog, didwania, nomad, puba];
  const images = [acewaresImg, didwaniaImg, holayogImg, nomadImg, pubaImg];
  const content = isMobile ? images : videos;

  const duplicateSlides = [...content, ...content];

  // Handle responsive updates
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 425);
      if (window.innerWidth < 425) {
        setPerspective("rotateX(5deg) rotateY(45deg) rotateZ(4deg)");
      } else if (window.innerWidth >= 425 && window.innerWidth < 769) {
        setPerspective("rotateX(5deg) rotateY(45deg) rotateZ(4deg)");
      } else {
        setPerspective("rotateX(4deg) rotateY(20deg) rotateZ(5deg)");
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Handle infinite sliding
  useEffect(() => {
    const slider = sliderRef.current;
    let start = 0;

    const slideAnimation = () => {
      start -= 1;
      if (start <= -100 * content.length) {
        start = 0;
      }
      slider.style.transform = `translateX(${start}%)`;
      requestAnimationFrame(slideAnimation);
    };

    requestAnimationFrame(slideAnimation);

    return () => cancelAnimationFrame(slideAnimation);
  }, [content]);

  // Scroll effect for tilt
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const offset = scrollY / 2;

      if (containerRef.current) {
        containerRef.current.style.transform = `${perspective} translateY(${-offset}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [perspective]);

  return (
    <>
      <div className="slider-text-container">
        <h1 className="innovative-designs">Innovative Designs</h1>
        <h2 className="seamless-solutions">SEAMLESS SOLUTIONS</h2>
      </div>
      <div className="slider-container" ref={containerRef}>
        <div className="slider-track" ref={sliderRef}>
          {duplicateSlides.map((item, index) => (
            <div className="slider-item" key={index}>
              {isMobile ? (
                <img src={item} alt={`Slide ${index}`} className="slider-image" />
              ) : (
                <video
                  src={item}
                  autoPlay
                  muted
                  loop
                  className="slider-video"
                ></video>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SliderUp;
