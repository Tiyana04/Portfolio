// import React from 'react';
// import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram, FaFacebook } from 'react-icons/fa';
// // import headerImage from '../assets/Header.png';

// const Header = () => {
//   return (
//     <header className="header" id="home" 
//       // style={{
//       //   backgroundImage: `url('/assets/Header.png')`,
//       //   backgroundSize: 'cover',
//       //   backgroundPosition: 'center',
//       //   backgroundRepeat: 'no-repeat'
//       // }}
//     >
//       <div className="header-content">
//         <h1> Tiyana Ludowyke</h1>
//         <h2> Undergraduate Computer Science Student </h2>
        
//         <div className="social-icons">
//           <a href="https://github.com/Tiyana04" className="social-icon" target="_blank" rel="noreferrer">
//             <FaGithub size={24} />
//           </a>
//           <a href="https://linkedin.com/in/tiyana-ludowyke" className="social-icon" target="_blank" rel="noreferrer">
//             <FaLinkedin size={24} />
//           </a>
//           <a href="mailto:tiyanaludowyke04@gmail.com" className="social-icon">
//             <FaEnvelope size={24} />
//           </a>
//           <a href="https://www.instagram.com/_tiyana.l/" className="social-icon" target="_blank" rel="noreferrer">
//             <FaInstagram size={24} />
//           </a>
//           <a href="https://web.facebook.com/profile.php?id=61556402108150" className="social-icon" target="_blank" rel="noreferrer">
//             <FaFacebook size={24} />
//           </a>
//         </div>
//       </div>

//       <a href="#about" className="scroll-down">
//         <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//           <path d="M7 10L12 15L17 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//         </svg>
//       </a>
//     </header>
//   );
// };

// export default Header;


import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram, FaFacebook } from 'react-icons/fa';
// import headerImage from '../assets/Header.png';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  
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

  return (
    <>
      <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
        <div className="navbar-container">
          <a href="#home" className="navbar-logo">TL</a>
          <div className="navbar-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

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