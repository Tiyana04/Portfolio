import React from 'react';
import { User } from 'lucide-react';

function About() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-center mb-12">
            <User size={28} className="text-blue-600 mr-3" />
            <h2 className="text-4xl font-bold gradient-text">About Me</h2>
          </div>
          <div className="text-xl text-gray-600 leading-relaxed space-y-6">
            <p>
              With over 8 years of experience in software development, I specialize in building scalable, enterprise-level applications that solve complex business problems. My expertise spans across full-stack development, cloud architecture, and AI integration.
            </p>
            <p>
              I'm passionate about creating innovative solutions that make a real impact, whether it's developing high-performance web applications, designing robust backend systems, or implementing cutting-edge machine learning models.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;