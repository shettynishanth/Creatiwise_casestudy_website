import React from 'react';
import './FinalSection.css';
import img6 from "../image/img6.png"; // replace with your actual image

const FinalSection = () => {
  return (
    <section className="final-section">
      {/* Part 1 */}
   <div className="tools-row-wrapper">
  <div className="tools-row">
    {/* Duplicated row items for smooth scrolling */}
    {[...Array(2)].map((_, index) => (
      <React.Fragment key={index}>
        <h1>WEBFLOW</h1>
        <img src={img6} alt="separator" />
        <h1>FIGMA</h1>
        <img src={img6} alt="separator" />
        <h1>DESIGNER</h1>
        <img src={img6} alt="separator" />
        <h1>DEVELOPER</h1>
        <img src={img6} alt="separator" />
      </React.Fragment>
    ))}
  </div>
</div>


      {/* Part 2 */}
      <div className="contact-area">
        <h2>LET’S TALK!</h2>
        <p>shettynishanth100@gmail.com</p>
      </div>

      {/* Part 3 */}
     <div className="footer-note">
  <p>© Rehan Raihan - 2023</p>

  <div className="social-links">
    <span>Dribbble</span>
    <span>Behance</span>
    <span>Twitter</span>
    <span>Instagram</span>
  </div>
</div>
    </section>
  );
};

export default FinalSection;
