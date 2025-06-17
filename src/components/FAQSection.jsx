import React from "react";
import "./FAQSection.css";
import img3 from "../image/img3.png"; // Replace with your image

const FAQSection = () => {
  return (
    <section className="faq-section">
      {/* Heading with Image */}
      <div className="faq-header">
        <img src={img3} alt="FAQ Icon" />
        <h2>Frequently asked questions</h2>
      </div>

      {/* Question 1 */}
      <div className="faq-item">
        <h3 className="faq-question">What is your design process?</h3>
        <p className="faq-answer">
          My design process typically involves four key phases: research, design,
          prototype, and test. In the research phase, I gather insights about the
          user and their needs. In the design phase, I create wireframes and visual
          designs that meet those needs. In the prototype phase, I create interactive
          models of the design for testing. In the test phase, I collect feedback from
          users to refine the design.
        </p>
      </div>

      {/* Question 2 */}
      <div className="faq-item">
        <h3 className="faq-question">What tools and software do you use for UX design?</h3>
      </div>

      {/* Question 3 */}
      <div className="faq-item">
        <h3 className="faq-question">How do you measure the success of your UX designs?</h3>
      </div>
    </section>
  );
};

export default FAQSection;
