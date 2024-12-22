import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../SliderNew/slidernew.css";
import acewares from "../../../Videos/AceWearsvideo.webm";
import didwania from "../../../Videos/DidwaniaVideo.webm";
import holayog from "../../../Videos/HolaYogVideo.webm";
import nomad from "../../../Videos/NomadVideo.webm";
import puba from "../../../Videos/PubaVideo.webm";
import acewaresImg from "../../../Images/Ace Wears video.png";
import didwaniaImg from "../../../Images/Didwania Video.png";
import holayogImg from "../../../Images/HolaYog Video.png";
import nomadImg from "../../../Images/Nomad Video.png";
import pubaImg from "../../../Images/Puba Video.png";

const SliderNew = () => {
  const [slidesToShow, setSlidesToShow] = useState(7);
  const [perspective, setPerspective] = useState("rotateX(4deg) rotateY(20deg) rotateZ(5deg)");
  const boxRef = useRef(null);

  // Responsive slider settings
  useEffect(() => {
    const updateSettings = () => {
      if (window.innerWidth < 425) {
        setSlidesToShow(2);
        setPerspective("rotateX(5deg) rotateY(45deg) rotateZ(4deg)");
      } else if (window.innerWidth >= 425 && window.innerWidth < 769) {
        setSlidesToShow(4);
        setPerspective("rotateX(5deg) rotateY(45deg) rotateZ(4deg)");
      } else {
        setSlidesToShow(6);
        setPerspective("rotateX(4deg) rotateY(20deg) rotateZ(5deg)");
      }
    };

    updateSettings();
    window.addEventListener("resize", updateSettings);

    return () => {
      window.removeEventListener("resize", updateSettings);
    };
  }, []);

  // Scroll effect with proper event listener
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const offset = scrollY / 2;
      // console.log(boxRef)
      if (boxRef.current) {
        boxRef.current.style.transform = `${perspective} translateY(${-offset}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    // console.log(boxRef)

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [perspective]); // Trigger on perspective change

  // Slider settings
  const settings = {
    infinite: true,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 6000,
    cssEase: "linear",
    arrows: false,
    pauseOnHover: false,
    touchMove: true, // Ensures smooth touch swipe behavior
    draggable: true, // Allows drag to slide on desktop and mobile
  };

  const [iww, setIww] = useState(false)

  useEffect(()=>{
    if(window.innerWidth < 425)
    {
      setIww(true)
    }else{
      setIww(false)
    }
  },[iww])

  const videos = [acewares, didwania, holayog, nomad, puba, acewares, didwania, holayog, nomad, puba];
  const images = [acewaresImg, didwaniaImg, holayogImg, nomadImg, pubaImg, acewaresImg, didwaniaImg, holayogImg, nomadImg, pubaImg];

  return (
    <>
      <div className="slider-text-container">
        <h1 className="innovative-designs">Innovative Designs</h1>
        <h2 className="seamless-solutions">SEAMLESS SOLUTIONS</h2>
      </div>
      <div className="container">
        <div className="box" ref={boxRef}>
          <div className="boxInner">
            
          </div>

          {!iww ? 
          <Slider {...settings}>
          {videos.map((video, index) => {
            return (
              <div key={index}>
                <video
                  src={video}
                  style={{ width: "100%" }}
                  autoPlay
                  muted
                  loop
                ></video>
              </div>
            );
          })}
        </Slider>
          : 
          <Slider {...settings}>
          {images.map((image, index) => {
            return (
              <div key={index}>
                <img src={image} alt="" style={{ width: "100%" }}/>
              </div>
            );
          })}
        </Slider>
          }
          
         
        </div>
      </div>
    </>
  );
};

export default SliderNew;
