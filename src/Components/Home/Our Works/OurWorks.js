import React, { useEffect, useState, useRef } from 'react';
import './OurWorks.css';

function OurWorks() {
  const [styles, setStyles] = useState([
    { transform: 'translateX(-100px)', opacity: 0 },
    { transform: 'translateX(-100px)', opacity: 0 },
    { transform: 'translateX(-100px)', opacity: 0 },
    { transform: 'translateX(-100px)', opacity: 0 },
  ]);

  const containerRef = useRef(null);

  useEffect(() => {
    const isMobile = window.innerWidth <= 768; // Define mobile threshold
    if (isMobile) {
      // Immediately set styles for mobile devices
      setStyles([
        { transform: 'translateX(0)', opacity: 1 },
        { transform: 'translateX(0)', opacity: 1 },
        { transform: 'translateX(0)', opacity: 1 },
        { transform: 'translateX(0)', opacity: 1 },
      ]);
      return; // Skip IntersectionObserver for mobile
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const timeouts = [];
          styles.forEach((_, index) => {
            const timeout = setTimeout(() => {
              setStyles((prevStyles) => {
                const updatedStyles = [...prevStyles];
                updatedStyles[index] = { transform: 'translateX(0)', opacity: 1 };
                return updatedStyles;
              });
            }, 100 * (index + 1));
            timeouts.push(timeout);
          });

          // Cleanup timeouts
          return () => timeouts.forEach(clearTimeout);
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the component is visible
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div ref={containerRef} className="our-works-container">
      <div className="heading">
        <h2>
          There is a lot we can do.<br />
          <span>—Here is a few.</span>
        </h2>
      </div>
      <div className="work-grid">
        <div className="work-item design" style={styles[3]}>
          <div className="overlay">
            <h3>DESIGN</h3>
            <p>Web Design, App Design, UI/UX, Design System, Logo Design, Graphic Design, Social Media Design, and much more.</p>
          </div>
        </div>
        <div className="work-item development" style={styles[2]}>
          <div className="overlay">
            <h3>DEVELOPMENT</h3>
            <p>Website Development, App Developoment, WordPress Development, Backend, Deployment, AI/ML Integration, and much more.</p>
          </div>
        </div>
        <div className="work-item branding" style={styles[1]}>
          <div className="overlay">
            <h3>BRANDING</h3>
            <p>Building brands that resonate, we weave stories and visuals into powerful identities that leave a lasting impression.</p>
          </div>
        </div>
        <div className="work-item digital-marketing" style={styles[0]}>
          <div className="overlay">
            <h3>DIGITAL MARKETING</h3>
            <p>Amplify your online presence with our strategic digital marketing campaigns that drive growth and connect with your audience.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurWorks;
