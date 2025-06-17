import React from "react";
import "./BlogSection.css";
import img3 from "../image/img3.png"; // Replace with actual image path

const BlogSection = () => {
  return (
    <section className="blog-section">
      {/* Blog Header */}
      <div className="blog-header">
        <img src={img3} alt="Blog Icon" />
        <h2>Blog</h2>
      </div>

      {/* Blog Content */}
      <div className="blog-content-container">
        {/* Left side - Blog Info */}
        <div className="blog-info">
          <p className="blog-date">Nov 9, 2023</p>
          <h3 className="blog-title">How UX works in web</h3>
          <div className="blog-tags">
            <button>UI</button>
            <button>UX</button>
          </div>
        </div>

        {/* Right side - Button */}
        <div className="blog-button-wrapper">
          <button className="blog-read-btn">Read</button>
        </div>
      </div>

      {/* Blog Content */}
      <div className="blog-content-container">
        {/* Left side - Blog Info */}
        <div className="blog-info">
          <p className="blog-date">Aug 18, 2023</p>
          <h3 className="blog-title">Case study - Analysis Application.</h3>
          <div className="blog-tags">
            <button>
            DESGIN</button>
            <button>PRINT</button>
          </div>
        </div>

        {/* Right side - Button */}
        <div className="blog-button-wrapper">
          <button className="blog-read-btn">Read</button>
        </div>
      </div>

      {/* Blog Content */}
      <div className="blog-content-container">
        {/* Left side - Blog Info */}
        <div className="blog-info">
          <p className="blog-date">Feb 16, 2023</p>
          <h3 className="blog-title">3 ways to develop your skill</h3>
          <div className="blog-tags">
            <button>FIGMA</button>
            <button>WEB</button>
          </div>
        </div>

        {/* Right side - Button */}
        <div className="blog-button-wrapper">
          <button className="blog-read-btn">Read</button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
