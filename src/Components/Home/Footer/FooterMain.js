import React from 'react';
import './FooterMain.css'; // Include a CSS file for styling
import location from "../../../Images/pin.png"

function FooterMain() {
  return (
    <footer className="footer-main">
      <div className="footer-main-left">
        <div className="footer-main-logo">OAR</div>
        <div className="footer-main-location">
          <span role="img" aria-label="location">
            <img src={location} alt="" />
          </span>{' '}
          MUMBAI, INDIA
        </div>
      </div>
      <div className="footer-main-right">
        <div className="footer-main-links">
          <ul>
            {/* <li>ABOUT US</li>
            <li>PRIVACY POLICY</li>
            <li>CONTACT US</li>
            <li>ABOUT US</li>
            <li>ABOUT US</li> */}
          </ul>
        </div>
        <div className="footer-main-social">
          <div className="footer-main-social-icons">
            <i className="fab fa-linkedin"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-facebook"></i>
          </div>
          <div className="footer-main-copyright">
            © OAR STUDIOS 2024
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterMain;
