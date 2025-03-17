import React from 'react';

const Education = () => {
  const educationData = [
    {
      degree: 'Master of Science in Computer Science',
      institution: 'University Name',
      location: 'City, Country',
      duration: '2018 - 2020',
      description: 'Specialized in Artificial Intelligence and Machine Learning. Graduated with distinction.'
    },
    {
      degree: 'Bachelor of Engineering in Computer Science',
      institution: 'University Name',
      location: 'City, Country',
      duration: '2014 - 2018',
      description: 'Focused on Software Engineering and Data Structures. Graduated with first-class honors.'
    }
  ];

  return (
    <section className="education" id="education">
      <div className="container">
        <div className="section-title">
          <h2>Education</h2>
        </div>
        <div className="education-list">
          {educationData.map((item, index) => (
            <div className="education-item" key={index}>
              <h3>{item.degree}</h3>
              <p className="duration">{item.duration}</p>
              <p className="institution">{item.institution}, {item.location}</p>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;