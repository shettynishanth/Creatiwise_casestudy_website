import React from 'react';
import './WhatTheySaySection.css';
import img6 from '../image/image.png'; // replace with actual image
import img3 from "../image/img3.png"; // your icon image
import profileImg from '../image/Testimonial-Bk_cXo6j.png';

const WhatTheySaySection = () => {
  return (
    <section className="testimonial-section">
      {/* Heading */}
      <div className="testimonial-header">
        <img src={img3} alt="Icon" />
        <h3>What they say</h3>
      </div>

      {/* Testimonial Layout */}
      <div className="testimonial-content">
        {/* Left */}
<div className="testimonial-left">
  <img src={profileImg} alt="Floyd Miles" className="testimonial-img" />
  <div className="testimonial-text">
    <p className="name">Floyd Miles</p>
    <p className="company">eBay</p>
  </div>
</div>

        {/* Right */}
        <div className="testimonial-right">
          <img src={img6} alt="Quote" className="quote-icon" />
          <p className="testimonial-text">
            Synergy's resume builder is fantastic. It helped me create a professional resume that stood out to employers.
            Synergy's resume builder is fantastic. It helped me create a professional resume that stood out to employers.
          </p>
        </div>
      </div>

      {/* Middle Navigation Buttons */}
      <div className="testimonial-nav">
        <button className="nav-btn">←</button>
        <button className="nav-btn">→</button>
      </div>
    </section>
  );
};

export default WhatTheySaySection; 




