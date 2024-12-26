import React from 'react';
import './FooterMain.css'; // Include a CSS file for styling
import location from "../../../Images/pin.png";

function FooterMain() {
  const handleWhatsAppClick = () => {
    const phoneNumber = '9987336411'; // Replace with the target phone number
    const message = 'Hello, I would like to know more about your services.'; // Customize the message
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(url, '_blank', 'noopener,noreferrer');
  };

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
            <a
              onClick={handleWhatsAppClick}
              title="Chat with us on WhatsApp"
              style={{ cursor: 'pointer' }}
            >
              <i className="fab fa-whatsapp"></i>
            </a>
          </div>
          <div className="footer-main-copyright">© OAR IT STUDIOS 2024</div>
        </div>
      </div>
    </footer>
  );
}

export default FooterMain;
