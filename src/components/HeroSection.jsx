import React from "react";
import "./HeroSection.css";
import img1 from "../image/img1.jpg";
import img2 from "../image/img2.png";
import img3 from "../image/img3.png";
import img8 from "../image/img8.png";
import img4 from "../image/img4.png";
import img9 from "../image/img9.png";
import img11 from "../image/img11.png";
const HeroSection = () => (
  <section className="hero-section">
    {/* Hero top */}
    <div className="hero-top">
      <div className="line">
        <h1>I AM A</h1>
        <img src={img1} alt="Icon" />
        <h1>FREELANCE</h1>
      </div>
      <div className="line">
        <h1>DESIGNER</h1>
        <img src={img2} alt="Icon" />
        <h1>FROM</h1>
      </div>
      <div className="line">
        <h1>San Francisco</h1>
      </div>
    </div>

    {/* Features row */}
    <div className="features-section">
      <div className="feature-box">
        <img src={img3} alt="Icon 1" />
        <h2><img src={img4} alt="" /></h2>
      </div>
      <div className="feature-box">
        <img src={img8} alt="Icon 2" />
        <h2><img src={img9} alt="" /></h2>
      </div>
      <div className="feature-box">
        <img src={img11} alt="Icon 3" />
        <h2><img src={img11} alt="" /></h2>
      </div>
      <div className="description-box">
        <p>
         Welcome to my portfolio. Here, artistry meets functionality.
        Dive into a curated showcase of distinctive branding and
        web designs, each crafted to captivate and inspire.
        </p>
      </div>
    </div>
  </section>
);

export default HeroSection;
