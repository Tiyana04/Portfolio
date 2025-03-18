import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <h2> Tiyana Ludowyke </h2>
          </div>
          <nav className="footer-nav">
            <ul>
              <li><a href="#home"> Home </a></li>
              <li><a href="#about"> About </a></li>
              <li><a href="#education"> Education </a></li>
              <li><a href="#skills"> Skills </a></li>
              <li><a href="#projects"> Projects </a></li>
              <li><a href="#achievements"> Achievements </a></li>
              <li><a href="#contact"> Contact </a></li>
            </ul>
          </nav>
          <div className="footer-social">
            <a href="https://github.com/Tiyana04" className="social-icon" target="_blank" rel="noreferrer">
              <FaGithub size={20} />
            </a>
            <a href="https://linkedin.com/in/tiyana-ludowyke" className="social-icon" target="_blank" rel="noreferrer">
              <FaLinkedin size={20} />
            </a>
            <a href="https://www.instagram.com/_tiyana.l/" className="social-icon" target="_blank" rel="noreferrer">
              <FaInstagram size={24} />
            </a>
            <a href="https://web.facebook.com/profile.php?id=61556402108150" className="social-icon" target="_blank" rel="noreferrer">
              <FaFacebook size={24} />
            </a>
          </div>
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Tiyana Ludowyke. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;