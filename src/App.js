import React, { useEffect, useRef, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Components
import Navbar from './Components/Home/Navbar/Navbar';
import SliderNew from './Components/Home/SliderNew/SliderNew';
import AboutUs from './Components/Home/About Us/AboutUs';
import FAQ from './Components/Home/FAQ/FAQ';
import Footer from './Components/Home/Footer/Footer';
import FooterMain from './Components/Home/Footer/FooterMain';
import OurWorks from './Components/Home/Our Works/OurWorks';
import OurProjects from './Components/Home/Our Projects/OurProjects';
import OurWorksDetail from './Components/Our Works Detail/OurWorksDetail';
import LatestArticle from "./Components/Home/Latest Article/LatestArticle";
import Blogs from './Components/Blogs/Blogs';
import Loader from './Components/Loader';
import ScrollToTop from './Components/ScrollToTop';
import OAR_business_card from './Images/OAR Business Card.pdf'
import gift from "./Images/gift.png";
import voucher from "./Videos/gift.mp4";
import voucherMob from "./Videos/giftMobile.mp4";

import { Player } from 'lottie-react';
import flow from './Videos/Flow 1.json'
import Cursor from './Components/Cursor';

function App() {
  useEffect(()=>{
    window.scrollTo({
      top: 0,
      // behavior: 'smooth',
    });
  },[])

  const [wp, setWp] = useState("static")
  const handleOp = (pt) =>{
    setWp(pt)
  }

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Replace with actual data loading logic

    return () => clearTimeout(timer);
  }, []);

  const handleMouseEnter = () => {
    document.querySelector('.custom-cursor').classList.add('hovered');
  };

  const handleMouseLeave = () => {
    document.querySelector('.custom-cursor').classList.remove('hovered');
  };

  const handleOpenPDF = () => {
    window.open(OAR_business_card, '_blank', 'noopener,noreferrer');
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = '9987336411'; // Replace with the target phone number
    const message = 'Hello, I would like to know more about your services.'; // Customize the message
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(url, '_blank', 'noopener,noreferrer');
  };
 const videoRef = useRef(null)
  const [vch, setVch] = useState(voucher)
  const [vd, setVd] = useState(false); // Toggle video display
    const [rotation, setRotation] = useState({ x: 0, y: 0 }); // State to store rotation values
    const handleMouseMove = (e) => {
      const rect = e.currentTarget.getBoundingClientRect(); // Get the bounding box of the element
      const x = ((e.clientX - rect.left) / rect.width) * 100; // Get x-coordinate as percentage
      const y = ((e.clientY - rect.top) / rect.height) * 100; // Get y-coordinate as percentage
  
      // Map percentages to rotation angles
      const rotateX = (y - 50) / 5; // Adjust sensitivity by dividing
      const rotateY = (x - 50) / -5;
  
      setRotation({ x: rotateX, y: rotateY });
    };
  
    const handleMouseLeaveV = () => {
      setRotation({ x: 0, y: 0 }); // Reset rotation on mouse leave
    };
     const handleClickOutside = (e) => {
        if (videoRef.current && !videoRef.current.contains(e.target)) {
          setVd(false); // Hide the video div when clicking outside
        }
      };
    
      useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
          document.removeEventListener("mousedown", handleClickOutside);
        };
      }, []);
    
      useEffect(()=>{
          if(window.innerWidth <= 520)
          {
            setVch(voucherMob)
          }else{
            setVch(voucher)
          }
      },[window.innerWidth])

      const videoRef2 = useRef(null);
        
        const handleGiftClick = () => {
          setVd(!vd);
          if (!vd) {
            setTimeout(() => {
              videoRef2.current.play();
            }, 700); // Play video when opened
          } else {
            videoRef2.current.pause(); // Pause video when closed
          }
        };
  return (
    <div className='allComps'>
      <div
        className="voucher"
        style={{
          display: vd ? "flex" : "none",
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div
         ref={videoRef}
          className="voucher-box"
          style={{
            transform: `rotateX(${-rotation.x}deg) rotateY(${-rotation.y}deg)`,
          }}
        >
          <video src={vch} autoPlay muted preload="auto" ref={videoRef2} ></video>
        </div>
      </div>
      

      {!loading && 

      <div className="mbcMain">
        <div className="mbcInner">

        <div className="mbc" onClick={handleWhatsAppClick}>MESSAGE US</div>
        <div className="vr"></div>
        <div className="mbc" onClick={handleOpenPDF}>BUSINESS CARD</div>
        </div>
      </div>
}
        {/* <Cursor/> */}
<div className="scroll-container">
      <Router>
        {!loading && <Navbar />}
        
        <Routes>
          {/* Home Page */}
          
          <Route
            path="/"
            element={
              loading ? (
                <Loader/>
              ):(
                <>
                <ScrollToTop /> 
                <div id="slider">
                  <SliderNew />
                </div>
                <div id="about">
                
      <div className="gift" onClick={handleGiftClick}>
              <img src={gift} alt="" />
            </div>
                  <AboutUs />
                </div>
                <div id="services">
                  <OurWorks />
                </div>
                <div id="work">
                  <OurProjects />
                </div>
                <div id="blogs">
                  <LatestArticle />
                </div>
                <div id="faq">
                  <FAQ />
                </div>
              </>
              )
              
            }
          />

          {/* Dynamic route for project details */}
          <Route path="/our-works/:id" element={!loading && <OurWorksDetail />} />

          {/* Dynamic route for blogs */}
          <Route path="/blogs/:id" element={!loading && <Blogs />} />
        </Routes>

        {/* Footer */}
        <div className="footer-wrapper">
          <div id="contact">
           {!loading &&  <Footer />}
          </div>
          {!loading && <FooterMain />}
        </div>
      </Router>
    </div>
     
    </div>
    
  );
}

export default App;
