import React from 'react';
import './FooterMain.css'; // Include a CSS file for styling
import location from "../../../Images/pin.png";

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
            {/* Add footer links here if needed */}
          </ul>
        </div>
        <div className="footer-main-social">
          <div className="footer-main-social-icons">
            <a
              href="https://www.linkedin.com/company/oar-studios"
              target="_blank"
              rel="noopener noreferrer"
              title="Visit our LinkedIn"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://www.instagram.com/oar_studios/"
              target="_blank"
              rel="noopener noreferrer"
              title="Visit our Instagram"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61570363323576"
              target="_blank"
              rel="noopener noreferrer"
              title="Visit our Facebook"
            >
              <i className="fab fa-facebook"></i>
            </a>
          </div>
          <div className="footer-main-copyright">© OAR IT STUDIOS 2024</div>
        </div>
      </div>
    </footer>
  );
}

export default FooterMain;
