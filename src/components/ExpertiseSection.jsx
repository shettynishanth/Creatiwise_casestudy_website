import React from "react";
import "./ExpertiseSection.css";
import img3 from "../image/img3.png";
// import icon from '../image/expertise-icon.png'; // replace with your 32×32 icon path

const ExpertiseSection = () => (
  <section className="expertise-section">
    {/* Section header */}
    <div className="expertise-header">
      <img src={img3} alt="Expertise Icon" />
      <h3>Expertise</h3>
      
    </div>

    {/* 2×2 grid */}
    <div className="expertise-grid">
      <div className="expertise-item">
        <ul className="bullet-heading">
          <li>Branding</li>
        </ul>
        <p>
          I create efficient, adaptable, and engaging websites. No predefined
          patterns. No sluggish, complex code. Webflow forms the foundation of
          my web development approach. I employ it to provide safe, top-notch
          bespoke websites.
        </p>
      </div>

      <div className="expertise-item">
        <ul className="bullet-heading">
          <li>UI Design</li>
        </ul>
        <p>
          I create efficient, adaptable, and engaging websites. No predefined
          patterns. No sluggish, complex code. Webflow forms the foundation of
          my web development approach. I employ it to provide safe, top-notch
          bespoke websites.
        </p>
      </div>

      <div className="expertise-item">
        <ul className="bullet-heading">
          <li>UX Design</li>
        </ul>
        <p>
          I comprehend and resolve digital product issues using a user-focused
          methodology. Investigation, compassion, and visual conveyance are a
          few techniques I apply to captivate and involve your users while
          fulfilling your business requirements.
        </p>
      </div>

      <div className="expertise-item">
        <ul className="bullet-heading">
          <li>Development</li>
        </ul>
        <p>
          I create user-friendly, adaptive, engaging websites. No
          cookie-cutters. No cumbersome, complex coding. Webflow forms the
          foundation of my web development approach, I employ it to produce
          safe, top-notch personalized websites.
        </p>
      </div>
    </div>
  </section>
);

export default ExpertiseSection;
