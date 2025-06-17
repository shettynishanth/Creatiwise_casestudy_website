import React from "react";
import "./ProjectShowcaseSection.css";
import img3 from "../image/img3.png"; // Replace with your image
import card1 from "../image/Card1.png";
import card2 from "../image/Card2.png";
import card3 from "../image/Card3.png";

const ProjectShowcaseSection = () => {
  return (
    <>
    <section className="project-showcase-section">
      {/* Header */}
      <div className="section-header">
        <div className="header-left">
          <img src={img3} alt="Section Icon" />
          <h3>Works</h3>
        </div>
        <a href="#" className="view-all">
          View All
        </a>
      </div>

      <div className="project-frame-container">
            <div className="project-frame">
              {/* Left - Image */}
              <div className="frame-image">
                <img src={card1} alt='' />
              </div>

              {/* Right - Content */}
              <div className="frame-content">
                <h3>Analysis Application</h3>
                <p>
                  With user-centered approach, the goals was to create an
                  intuitive interface for enhanced financial intelligence.
                </p>

                {/* Small Buttons */}
                <div className="frame-tags">
                  <button>APP</button>
                  <button>WEB</button>
                </div>

                {/* Big Button */}
              {/* <div className="middle-highlight-box"></div> */}
                <button className="view-project-btn">View Case Study</button>
              </div>
            </div>
            <div className="project-frame">
              {/* Left - Image */}
              <div className="frame-image">
                <img src={card2} alt='' />
              </div>

              {/* Right - Content */}
              <div className="frame-content">
                <h3>Analysis Application</h3>
                <p>
                  With user-centered approach, the goals was to create an
                  intuitive interface for enhanced financial intelligence.
                </p>

                {/* Small Buttons */}
                <div className="frame-tags">
                  <button>APP</button>
                  <button>WEB</button>
                </div>

                {/* Big Button */}
              {/* <div className="middle-highlight-box"></div> */}
                <button className="view-project-btn">View Case Study</button>
              </div>
            </div>

            

            <div className="project-frame">
              {/* Left - Image */}
              <div className="frame-image">
                <img src={card3} alt='' />
              </div>

              {/* Right - Content */}
              <div className="frame-content">
                <h3>Analysis Application</h3>
                <p>
                  With user-centered approach, the goals was to create an
                  intuitive interface for enhanced financial intelligence.
                </p>

                {/* Small Buttons */}
                <div className="frame-tags">
                  <button>APP</button>
                  <button>WEB</button>
                </div>

                {/* Big Button */}
              {/* <div className="middle-highlight-box"></div> */}
                <button className="view-project-btn">View Case Study</button>
              </div>
            </div>
      </div>
      
    </section>

    
    </>
  );
};

export default ProjectShowcaseSection;
