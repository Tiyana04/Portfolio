import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram, FaFacebook } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="header" id="home">
      <div className="header-content">
        <h1> Tiyana Ludowyke</h1>
        <h2> Undergraduate Computer Science Student </h2>
        
        <div className="social-icons">
          <a href="https://github.com/Tiyana04" className="social-icon" target="_blank" rel="noreferrer">
            <FaGithub size={24} />
          </a>
          <a href="https://linkedin.com/in/tiyana-ludowyke" className="social-icon" target="_blank" rel="noreferrer">
            <FaLinkedin size={24} />
          </a>
          <a href="mailto:tiyanaludowyke04@gmail.com" className="social-icon">
            <FaEnvelope size={24} />
          </a>
          <a href="https://www.instagram.com/_tiyana.l/ " className="social-icon" target="_blank" rel="noreferrer">
            <FaInstagram size={24} />
          </a>
          <a href="https://web.facebook.com/profile.php?id=61556402108150" className="social-icon" target="_blank" rel="noreferrer">
            <FaFacebook size={24} />
          </a>
        </div>
      </div>

      <a href="#about" className="scroll-down">
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 10L12 15L17 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </a>
    </header>
  );
};

export default Header;