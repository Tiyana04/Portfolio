import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram, FaFacebook } from 'react-icons/fa';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    
    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  // Handle menu toggle
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    
    // Prevent body scrolling when menu is open
    if (!menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  // Close menu when clicking a navigation link
  const closeMenu = () => {
    setMenuOpen(false);
    document.body.style.overflow = 'auto';
  };

  // Navigation links array
  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#education", label: "Education" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" }
  ];

  return (
    <>
      <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
        <div className="navbar-container">
          <a href="#home" className="navbar-logo">TL</a>
          
          {/* Desktop Navigation */}
          <div className="navbar-links">
            {navLinks.map((link, index) => (
              <a key={index} href={link.href}>{link.label}</a>
            ))}
          </div>
          
          {/* Hamburger Icon */}
          <div 
            className={`hamburger ${menuOpen ? 'active' : ''}`} 
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? 'active' : ''}`}>
        {navLinks.map((link, index) => (
          <a 
            key={index} 
            href={link.href} 
            onClick={closeMenu}
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* Overlay */}
      <div 
        className={`menu-overlay ${menuOpen ? 'active' : ''}`} 
        onClick={closeMenu}
      ></div>

      <header className="header" id="home">
        <div className="header-content">
          <h1>Hello, I'm Tiyana Ludowyke</h1>
          <h2>Undergraduate Computer Science Student</h2>
          
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
            <a href="https://www.instagram.com/_tiyana.l/" className="social-icon" target="_blank" rel="noreferrer">
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
    </>
  );
};

export default Header;