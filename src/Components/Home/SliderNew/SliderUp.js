import React, { useEffect, useRef, useState } from "react";
import "./SliderNew";
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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const sliderRef = useRef(null);
  const intervalRef = useRef(null);

  const videos = [acewares, holayog, didwania, nomad, puba];
  const images = [acewaresImg, didwaniaImg, holayogImg, nomadImg, pubaImg];
  const slides = isMobile ? images : videos;

  // Adjust slides based on window size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 425);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-play functionality
  useEffect(() => {
    startAutoplay();
    return stopAutoplay;
  }, [currentIndex]);

  const startAutoplay = () => {
    stopAutoplay(); // Clear any existing interval
    intervalRef.current = setInterval(() => {
      handleNext();
    }, 3000);
  };

  const stopAutoplay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  // Slide navigation
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  // Swipe functionality
  const handleTouchStart = (e) => {
    sliderRef.current.startX = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    if (!sliderRef.current.startX) return;
    const deltaX = e.touches[0].clientX - sliderRef.current.startX;

    if (deltaX > 50) {
      handlePrev();
      sliderRef.current.startX = null;
    } else if (deltaX < -50) {
      handleNext();
      sliderRef.current.startX = null;
    }
  };

  return (
    <div className="slider-container">
      <div className="slider-text-container">
        <h1 className="innovative-designs">Innovative Designs</h1>
        <h2 className="seamless-solutions">SEAMLESS SOLUTIONS</h2>
      </div>
      <div
        className="slider-wrapper"
        ref={sliderRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
      >
        <div
          className="slider-track"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {slides.map((slide, index) => (
            <div className="slider-slide" key={index}>
              {isMobile ? (
                <img src={slide} alt="" style={{ width: "100%" }} />
              ) : (
                <video
                  src={slide}
                  style={{ width: "100%" }}
                  autoPlay
                  muted
                  loop
                ></video>
              )}
            </div>
          ))}
        </div>
        <button className="slider-prev" onClick={handlePrev}>
          &#10094;
        </button>
        <button className="slider-next" onClick={handleNext}>
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default SliderUp;
