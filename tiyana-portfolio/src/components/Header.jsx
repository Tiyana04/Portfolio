import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="header" id="home">
      <div className="header-content">
        <h1>Your Name</h1>
        <h2>Senior Software Engineer & Tech Innovator</h2>
        <div className="social-icons">
          <a href="https://github.com/yourusername" className="social-icon" target="_blank" rel="noreferrer">
            <FaGithub size={24} />
          </a>
          <a href="https://linkedin.com/in/yourusername" className="social-icon" target="_blank" rel="noreferrer">
            <FaLinkedin size={24} />
          </a>
          <a href="mailto:your.email@example.com" className="social-icon">
            <FaEnvelope size={24} />
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