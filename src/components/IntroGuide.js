import React, { useState, useEffect } from 'react';
import './IntroGuide.css';

function IntroGuide() {
  const [showGuide, setShowGuide] = useState(false);
  const [hideGuide, setHideGuide] = useState(false);

  useEffect(() => {
    const hideGuide = localStorage.getItem('hideGuide');
    if (hideGuide) {
      setHideGuide(true);
    }
  }, []);

  const handleToggle = () => {
    setShowGuide(!showGuide);
  };

  const handleClose = () => {
    localStorage.setItem('hideGuide', 'true');
    setHideGuide(true);
  };

  if (hideGuide) return null;

  return (
    <div className="intro-guide">
      <div className="guide-header" onClick={handleToggle}>
        <h2>Introduction Guide! <span>{showGuide ? '-' : '+'}</span></h2>
      </div>
      {showGuide && (
        <div className="guide-content">
          <p>Here’s a quick guide to help you navigate our site:</p>
          <ul>
            <li>Explore our wide range of wigs in the <strong>Services</strong> section.</li>
            <li>Check out the latest deals in the <strong>Promotions</strong> section.</li>
            <li>Read customer reviews in the <strong>Testimonials</strong> section.</li>
            <li>Contact us for any inquiries through the <strong>About Us</strong> section.</li>
          </ul>
          <button onClick={handleClose}>Got it!</button>
        </div>
      )}
    </div>
  );
}

export default IntroGuide;
