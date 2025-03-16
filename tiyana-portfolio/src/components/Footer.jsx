import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Your Name</h3>
          <p className="text-gray-400 mb-6">Building the future through code</p>
          <div className="flex justify-center space-x-6 mb-8">
            <a href="#" className="hover:text-blue-400 transition-colors duration-200">
              <Github size={24} />
            </a>
            <a href="#" className="hover:text-blue-400 transition-colors duration-200">
              <Linkedin size={24} />
            </a>
            <a href="#" className="hover:text-blue-400 transition-colors duration-200">
              <Mail size={24} />
            </a>
          </div>
          <p className="text-gray-500">© {new Date().getFullYear()} Your Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;