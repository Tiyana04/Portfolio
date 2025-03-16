import React from 'react';
import { Award } from 'lucide-react';
import achievements from '../data/achievements';

function Achievements() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center mb-12">
          <Award size={28} className="text-blue-600 mr-3" />
          <h2 className="text-4xl font-bold gradient-text">Achievements</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {achievements.map((achievement, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-[1.02] transition-transform duration-300">
              <div className="relative h-64">
                <img src={achievement.image} alt={achievement.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">{achievement.title}</h3>
                  <p className="text-gray-200">{achievement.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Achievements;