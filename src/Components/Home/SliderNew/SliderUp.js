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
  const [isMobile, setIsMobile] = useState(window.innerWidth < 425);

  const videos = [acewares, holayog, didwania, nomad, puba];
  const images = [acewaresImg, didwaniaImg, holayogImg, nomadImg, pubaImg];
  const content = isMobile ? images : videos;

  const duplicateSlides = [...content, ...content];

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 425);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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

  return (
    <>
      <div className="slider-text-container">
        <h1 className="innovative-designs">Innovative Designs</h1>
        <h2 className="seamless-solutions">SEAMLESS SOLUTIONS</h2>
      </div>
      <div className="slider-container">
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
