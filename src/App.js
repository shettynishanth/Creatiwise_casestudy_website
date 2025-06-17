// App.js
import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import './App.css';
import ExpertiseSection from './components/ExpertiseSection';
import ProjectShowcaseSection from './components/ProjectShowcaseSection';
import ExperienceSection from './components/ExperienceSection';
import BlogSection from './components/BlogSection';
import WhatTheySaySection from './components/WhatTheySaySection';
import FAQSection from './components/FAQSection';
import FinalSection from './components/FinalSection';
// import smallImg from ''

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection/>
      <ExpertiseSection />
      <ProjectShowcaseSection/>
      <ExperienceSection/>
      <BlogSection/>
      <WhatTheySaySection/>
      <FAQSection/>
      <FinalSection/>
    </div>
  );
}

export default App;
