import React from 'react';

const Achievements = () => {
  const achievementsData = [
    {
      title: 'Participated in Hult Prize',
      organization: 'Tech Conference 2023',
      description: 'Received award for developing an innovative AI-powered solution that increased productivity by 40%.',
      image: '/assets/Hult Prize.jpg'
    },
    {
      title: 'Open Source Contributor',
      organization: 'GitHub',
      description: 'Contributed to several major open-source projects with over 1000+ stars and 200+ forks.',
      image: '/assets/images/achievement1.jpg'
    },
    {
      title: 'Certified Cloud Architect',
      organization: 'AWS',
      description: 'Earned AWS Certified Solutions Architect - Professional certification with a 95% score.',
      image: '/assets/images/achievement1.jpg'
    }
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