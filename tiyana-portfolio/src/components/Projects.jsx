import React from 'react';
import { Briefcase, ExternalLink } from 'lucide-react';
import projects from '../data/projects';

function Projects() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center mb-12">
          <Briefcase size={28} className="text-blue-600 mr-3" />
          <h2 className="text-4xl font-bold gradient-text">Featured Projects</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div key={index} className="project-card bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="relative">
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
                <a href={project.link} className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-200">
                  View Project <ExternalLink size={16} className="ml-2" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;