import React from 'react';
import { Code2 } from 'lucide-react';
import skills from '../data/skills';

function Skills() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center mb-12">
          <Code2 size={28} className="text-blue-600 mr-3" />
          <h2 className="text-4xl font-bold gradient-text">Technical Expertise</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {skills.map((skillGroup, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-bold mb-6 text-gray-800">{skillGroup.category}</h3>
              <ul className="space-y-3">
                {skillGroup.items.map((skill, skillIndex) => (
                  <li key={skillIndex} className="skill-item flex items-center text-gray-700">
                    <Code2 size={18} className="skill-icon text-blue-600 mr-3" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;