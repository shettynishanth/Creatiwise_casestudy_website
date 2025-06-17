import React from "react";
import "./ExperienceSection.css";
import img7 from "../image/img7.png"; // Replace with actual image path

const ExperienceSection = () => {
  return (
    <section className="experience-section">
      {/* Section Header */}
      <div className="experience-header">
        <img src={img7} alt="Experience Icon" />
        <h3>Experience</h3>
      </div>

      {/* Experience Layout */}
      <div className="experience-layout">
        <div className="experience-row">
          <div className="experience-title">Lead Product Designer</div>
          <div className="experience-right">
            <div className="company-name">Fortknox</div>
            <div className="duration">Mar 2022 - Oct 2023</div>
          </div>
        </div>

        {/* You can duplicate the row below for more experiences */}
        <div className="experience-row">
          <div className="experience-title">Senior UX Designer</div>
          <div className="experience-right">
            <div className="company-name">AnotherCorp</div>
            <div className="duration">Jan 2021 - Feb 2022</div>
          </div>
        </div>

        <div className="experience-row">
          <div className="experience-title">Intern Designer</div>
          <div className="experience-right">
            <div className="company-name">AnotherCorp</div>
            <div className="duration">Jan 2021 - Feb 2022</div>
          </div>
        </div>

        <div className="experience-row">
          <div className="experience-title">Frontend Developer</div>
          <div className="experience-right">
            <div className="company-name">AnotherCorp</div>
            <div className="duration">Jan 2021 - Feb 2022</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
