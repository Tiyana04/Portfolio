import React from 'react';
import { Github, Linkedin, Mail, ChevronRight } from 'lucide-react';

function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-700"></div>
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl font-bold text-white mb-6 animate-fade-in">
            Your Name
          </h1>
          <p className="text-2xl text-blue-100 mb-8 animate-fade-in-delay-1">
            Senior Software Engineer & Tech Innovator
          </p>
          <div className="flex justify-center space-x-6 animate-fade-in-delay-2">
            <a href="#" className="bg-white/10 backdrop-blur-sm p-3 rounded-full hover:bg-white/20 transition-all duration-300">
              <Github size={24} className="text-white" />
            </a>
            <a href="#" className="bg-white/10 backdrop-blur-sm p-3 rounded-full hover:bg-white/20 transition-all duration-300">
              <Linkedin size={24} className="text-white" />
            </a>
            <a href="#" className="bg-white/10 backdrop-blur-sm p-3 rounded-full hover:bg-white/20 transition-all duration-300">
              <Mail size={24} className="text-white" />
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronRight size={32} className="text-white transform rotate-90" />
      </div>
    </section>
  );
}

export default Hero;