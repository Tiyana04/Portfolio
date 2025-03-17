// import React from 'react';
// import { Github, Linkedin, Mail } from 'lucide-react';

// function Footer() {
//   return (
//     <footer className="bg-gray-900 text-white py-12">
//       <div className="container mx-auto px-4">
//         <div className="text-center">
//           <h3 className="text-2xl font-bold mb-4">Your Name</h3>
//           <p className="text-gray-400 mb-6">Building the future through code</p>
//           <div className="flex justify-center space-x-6 mb-8">
//             <a href="#" className="hover:text-blue-400 transition-colors duration-200">
//               <Github size={24} />
//             </a>
//             <a href="#" className="hover:text-blue-400 transition-colors duration-200">
//               <Linkedin size={24} />
//             </a>
//             <a href="#" className="hover:text-blue-400 transition-colors duration-200">
//               <Mail size={24} />
//             </a>
//           </div>
//           <p className="text-gray-500">© {new Date().getFullYear()} Your Name. All rights reserved.</p>
//         </div>
//       </div>
//     </footer>
//   );
// }

// export default Footer;


// src/components/Footer.jsx
import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <h2>Your Name</h2>
          </div>
          <nav className="footer-nav">
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#education">Education</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#achievements">Achievements</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
          <div className="footer-social">
            <a href="https://github.com/yourusername" className="social-icon" target="_blank" rel="noreferrer">
              <FaGithub size={20} />
            </a>
            <a href="https://linkedin.com/in/yourusername" className="social-icon" target="_blank" rel="noreferrer">
              <FaLinkedin size={20} />
            </a>
            <a href="https://twitter.com/yourusername" className="social-icon" target="_blank" rel="noreferrer">
              <FaTwitter size={20} />
            </a>
          </div>
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Your Name. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;