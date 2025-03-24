import React from 'react';

const Achievements = () => {
  const achievementsData = [
    {
      title: 'Participated in Hult Prize',
      organization: 'Hult Prize On-Campus Qualifier Round!',
      description: 'Competed in the Hult Prize On-Campus Qualifier with Student 360 application.',
      image: '/assets/Hult Prize.jpg'
    },
    {
      title: 'Theory of Music',
      organization: 'Trinity College of London',
      description: 'Earned a Grade 6 Theory of Music certification from Trinity College London with Merit, demonstrating a strong understanding of music theory.',
      image: '/assets/Trinity_Grade6.jpg'
    },
    {
      title: 'Inter Divisional Secretariat Athletic Meet ',
      organization: 'Ministry of Sports',
      description: 'Secured third place in the 4x100m relay at the Inter-Divisional Secretariat Athletic Meet showcasing teamwork, speed, and athletic dedication.',
      image: '/assets/Athletic.jpg'
    },
    {
      title: 'Theory of Music',
      organization: 'Trinity College of London',
      description: 'Earned a Grade 6 Theory of Music certification from Trinity College London with Merit, demonstrating a strong understanding of music theory.',
      image: '/assets/Trinity_Grade5.jpg'
    },
    {
      title: 'Piano Competition All Island Finalist',
      organization: 'IIMD',
      description: 'Won a Gold Medal in the Grade 5 Piano Competition at IIMD and advanced as an All-Island Finalist, showcasing exceptional musical talent and performance skills.',
      image: '/assets/IIMD.jpg'
    },
  ];

  return (
    <section className="achievements" id="achievements">
      <div className="container">
        <div className="section-title">
          <h2>Achievements</h2>
        </div>
        <div className="achievements-slider">
          {achievementsData.map((achievement, index) => (
            <div className="achievement-item" key={index}>
              <div className="achievement-image">
                <img src={achievement.image} alt={achievement.title} />
              </div>
              <div className="achievement-info">
                <h3>{achievement.title}</h3>
                <p className="organization">{achievement.organization}</p>
                <p>{achievement.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;