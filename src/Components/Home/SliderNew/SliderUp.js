import React, { useEffect, useRef, useState } from "react";
import "./SliderUp.css";
import acewares from "../../../Videos/AceWearsvideo.webm";
import didwania from "../../../Videos/DidwaniaVideo.webm";
import holayog from "../../../Videos/HolaYog Video.mp4";
import nomad from "../../../Videos/NomadVideo.webm";
import puba from "../../../Videos/PubaVideo.webm";

const SliderUp = () => {
  const sliderRef = useRef(null);
  const containerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 425);
  const [fw, setFw] = useState("0 0 0")

   const [perspective, setPerspective] = useState("rotateX(4deg) rotateY(20deg) rotateZ(5deg)");
    const boxRef = useRef(null);
  
    // Responsive slider settings
    // useEffect(() => {
    //   const updateSettings = () => {
    //     if (window.innerWidth < 425) {
          
    //       setPerspective("rotateX(5deg) rotateY(45deg) rotateZ(4deg)");
    //     } else if (window.innerWidth >= 425 && window.innerWidth < 769) {
          
    //       setPerspective("rotateX(5deg) rotateY(45deg) rotateZ(4deg)");
    //     } else {
          
    //       setPerspective("rotateX(4deg) rotateY(20deg) rotateZ(5deg)");
    //     }
    //   };
  
    //   updateSettings();
    //   window.addEventListener("resize", updateSettings);
  
    //   return () => {
    //     window.removeEventListener("resize", updateSettings);
    //   };
    // }, []);

    
    

  const videos = [acewares, holayog, didwania, nomad, puba];
  const duplicateSlides = [...videos, ...videos]; // Always use videos, even on mobile

  // Handle responsive updates
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 769); // Combine mobile and tablet logic
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
      const sliderWidth = slider.scrollWidth;
      start -= 1; // Adjust scroll speed
      if (Math.abs(start) >= sliderWidth / 2) {
        start = 0; // Reset the slider to prevent overflow
      }
      slider.style.transform = `translateX(${start}px)`;
      requestAnimationFrame(slideAnimation);
    };

    requestAnimationFrame(slideAnimation);

    return () => cancelAnimationFrame(slideAnimation);
  }, []);

  // Scroll effect for tilt (disabled on mobile)
  useEffect(() => {
    // if (isMobile) return; 

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const offset = scrollY / 2;

      if (containerRef.current) {
        containerRef.current.style.transform =  isMobile ? `translateY(${-offset}px)`: `${perspective} translateY(${-offset}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobile, perspective]);

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
              <video
                src={item}
                autoPlay
                muted
                loop
                className="slider-video"
              ></video>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SliderUp;
