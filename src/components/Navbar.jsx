import React from 'react';
import './Navbar.css';
import img0 from '../image/img0.png'
export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__logo"><img src={img0} alt="logo" /></div>
      <div className="navbar__menu">
        {['Home', 'About', 'Services', 'Contact'].map((item) => (
          <div key={item} className="navbar__item">
            {item}
          </div>
        ))}
      </div>
      <button className="navbar__button">HIRE ME</button>
    </nav>
  );
}
