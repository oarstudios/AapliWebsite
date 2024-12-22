import React, { useState } from "react";
import "./Footer.css";
import copy from "../../../Images/copy (1).png";

const Footer = () => {
  const [formStatus, setFormStatus] = useState(""); // Feedback message
  const [buttonText, setButtonText] = useState("Contact Us"); // Button text state

  const handleCopyEmail = () => {
    const email = "oarstudioz@gmail.com";
    navigator.clipboard
      .writeText(email)
      .then(() => {
        alert("Email copied to clipboard!");
      })
      .catch(() => {
        alert("Failed to copy email.");
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (buttonText === "Thank You!") return; // Prevent multiple submissions
    setButtonText("Submitting...");

    const scriptURL =
      "https://script.google.com/macros/s/AKfycbxaDN1GibLCapyBZnTzFNttzNqR1Oeo8LgGkc8nTNxeGF82aG-1x5NjjTjz7ERgNvvj/exec";
    const formData = new FormData(e.target);

    fetch(scriptURL, { method: "POST", body: formData })
      .then((response) => {
        console.log("Success!", response);
        setFormStatus("Form submitted successfully!");
        setButtonText("Thank You!");
        e.target.reset(); // Reset the form

        // Reset button text after 3 seconds
        setTimeout(() => setButtonText("Submit"), 3000);
      })
      .catch((error) => {
        console.error("Error!", error.message);
        setFormStatus("An error occurred. Please try again.");
        setButtonText("Submit");
      });
  };

  return (
    <footer className="footer-container">
      <div className="footer-left">
        <h2>Get your Project Estimate for free</h2>
      </div>
      <div className="footer-right">
        <div className="footer-right-header">
          <h3>CONTACT US</h3>
          <div className="copy-email-container" onClick={handleCopyEmail}>
            <span className="copy-email">COPY EMAIL</span>
            <img src={copy} className="copyEmailIMG" alt="Copy icon" />
          </div>
        </div>
        <p className="email">
          <a href="mailto:oarstudioz@gmail.com">oarstudioz@gmail.com</a>
        </p>
        <form onSubmit={handleSubmit}>
          <label className="services-heading">Services that you require *</label>
          <div className="services-checkboxes">
            <label>
              <input type="checkbox" name="design"  />
              DESIGN
            </label>
            <label>
              <input type="checkbox" name="development"  />
              DEVELOPMENT
            </label>
            <label>
              <input type="checkbox" name="branding"  />
              BRANDING
            </label>
            <label>
              <input type="checkbox" name="other"  />
              OTHER
            </label>
          </div>

          <div className="form-row">
            <label>
              Name *
              <input type="text" name="name" required />
              <span className="short-line"></span>
            </label>
            <label>
              Email *
              <input type="email" name="email" required />
              <span className="short-line"></span>
            </label>
          </div>

          <label className="msgg">
            Message
            <textarea name="message"></textarea>
          </label>


        <div className="submit-container">
          <button
            type="submit"
            className="submit-btn-footer"
            disabled={buttonText === "Submitting..."}
          >
            {buttonText}
          </button>
          </div>
        </form>

        {formStatus && <p className="form-status">{formStatus}</p>}
      </div>
    </footer>
  );
};

export default Footer;
