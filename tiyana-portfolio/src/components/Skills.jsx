import React, { useEffect } from 'react';

const Skills = () => {
  const skillsData = {
    'Programming Languages': [
      { name: 'Java', level: 80 },
      { name: 'JavaScript', level: 80 },
      { name: 'Python', level: 70 }
    ],
    'Web Technologies': [
      { name: 'HTML5/CSS3', level: 97 },
      { name: 'Node.js', level: 85 },
      { name: 'React', level: 80 },
      { name: 'Express.js', level: 70 }
    ],
    'Other Skills': [
      { name: 'UI/UX Design', level: 97 },
      { name: 'Canva', level: 95 },
      { name: 'GitHub', level: 85 },
      { name: 'Database (MySQL)', level: 70 }    
    ]
  };

  useEffect(() => {
    // Animation for skill bars
    const skillBars = document.querySelectorAll('.skill-progress');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.width = `${entry.target.dataset.level}%`;
        }
      });
    }, { threshold: 0.3 });

    skillBars.forEach(bar => observer.observe(bar));

    return () => {
      skillBars.forEach(bar => observer.unobserve(bar));
    };
  }, []);

  return (
    <section className="skills" id="skills">
      <div className="container">
        <div className="section-title">
          <h2>Skills</h2>
        </div>
        <div className="skills-container">
          {Object.entries(skillsData).map(([category, skills]) => (
            <div className="skill-category" key={category}>
              <h3>{category}</h3>
              {skills.map((skill, index) => (
                <div className="skill-item" key={index}>
                  <div className="skill-name">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      data-level={skill.level}
                      style={{ width: '0%' }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;