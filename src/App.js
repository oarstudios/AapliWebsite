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
import LatestArticle from './Components/Home/Latest Article/LatestArticle';
import Blogs from './Components/Blogs/Blogs';
import Loader from './Components/Loader';
import ScrollToTop from './Components/ScrollToTop';
import OAR_business_card from './Images/OAR Business Card.pdf';
import gift from './Images/gift.png';
import voucher from './Videos/gift.mp4';
import voucherMob from './Videos/giftMobile.mp4';

import { Player } from 'lottie-react';
import flow from './Videos/Flow 1.json';
import SliderUp from './Components/Home/SliderNew/SliderUp';

function App() {
  const [loading, setLoading] = useState(true);
  const [voucherSrc, setVoucherSrc] = useState(voucher);
  const [isVideoVisible, setIsVideoVisible] = useState(false);
  const videoRef = useRef(null);
  const videoContainerRef = useRef(null);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const updateVideoSource = () => {
      if (window.innerWidth <= 520) {
        setVoucherSrc(voucherMob);
      } else {
        setVoucherSrc(voucher);
      }
    };

    updateVideoSource(); // Set the initial video source
    window.addEventListener('resize', updateVideoSource);

    return () => {
      window.removeEventListener('resize', updateVideoSource);
    };
  }, []);

  const handleGiftClick = () => {
    setIsVideoVisible((prev) => !prev);
    if (!isVideoVisible && videoRef.current) {
      setTimeout(() => videoRef.current.play(), 700);
    } else if (isVideoVisible && videoRef.current) {
      videoRef.current.pause();
    }
  };

  const handleClickOutside = (e) => {
    if (videoContainerRef.current && !videoContainerRef.current.contains(e.target)) {
      setIsVideoVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleWhatsAppClick = () => {
    const phoneNumber = '9987336411';
    const message = 'Hello, I would like to know more about your services.';
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleOpenPDF = () => {
    window.open(OAR_business_card, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="allComps">
      {isVideoVisible && (
        <div className="voucher">
          <div ref={videoContainerRef} className="voucher-box">
            <video
              src={voucherSrc}
              autoPlay
              muted
              playsInline
              preload="auto"
              ref={videoRef}
            ></video>
          </div>
        </div>
      )}

      {!loading && (
        <div className="mbcMain">
          <div className="mbcInner">
            <div className="mbc" onClick={handleWhatsAppClick}>
              MESSAGE US
            </div>
            <div className="vr"></div>
            <div className="mbc" onClick={handleOpenPDF}>
              BUSINESS CARD
            </div>
          </div>
        </div>
      )}

      <div className="scroll-container">
        <Router>
          {!loading && <Navbar />}
          <Routes>
            <Route
              path="/"
              element={
                loading ? (
                  <Loader />
                ) : (
                  <>
                    <ScrollToTop />
                    <div id="slider">
                      {/* <SliderNew /> */}
                      {/* <SliderUp/> */}
                    </div>
                    <div id="about">
                      <div className="gift" onClick={handleGiftClick}>
                        <img src={gift} alt="Gift Icon" />
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
            <Route path="/our-works/:id" element={!loading && <OurWorksDetail />} />
            <Route path="/blogs/:id" element={!loading && <Blogs />} />
          </Routes>
          <div className="footer-wrapper">
            <div id="contact">{!loading && <Footer />}</div>
            {!loading && <FooterMain />}
          </div>
        </Router>
      </div>
    </div>
  );
}

export default App;
