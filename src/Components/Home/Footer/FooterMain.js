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
            <svg xmlns="http://www.w3.org/2000/svg" width="448" height="512" viewBox="0 0 448 512" ><path fill="currentColor" d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222c0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222c0-59.3-25.2-115-67.1-157m-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4l-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2c0-101.7 82.8-184.5 184.6-184.5c49.3 0 95.6 19.2 130.4 54.1s56.2 81.2 56.1 130.5c0 101.8-84.9 184.6-186.6 184.6m101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18c-5.1-1.9-8.8-2.8-12.5 2.8s-14.3 18-17.6 21.8c-3.2 3.7-6.5 4.2-12 1.4c-32.6-16.3-54-29.1-75.5-66c-5.7-9.8 5.7-9.1 16.3-30.3c1.8-3.7.9-6.9-.5-9.7s-12.5-30.1-17.1-41.2c-4.5-10.8-9.1-9.3-12.5-9.5c-3.2-.2-6.9-.2-10.6-.2s-9.7 1.4-14.8 6.9c-5.1 5.6-19.4 19-19.4 46.3s19.9 53.7 22.6 57.4c2.8 3.7 39.1 59.7 94.8 83.8c35.2 15.2 49 16.5 66.6 13.9c10.7-1.6 32.8-13.4 37.4-26.4s4.6-24.1 3.2-26.4c-1.3-2.5-5-3.9-10.5-6.6"/></svg>
          </div>
          <div className="footer-main-copyright">© OAR IT STUDIOS 2024</div>
        </div>
      </div>
    </footer>
  );
}

export default FooterMain;
