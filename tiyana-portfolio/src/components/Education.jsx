import React from 'react';

const Education = () => {
  const educationData = [
    {
      degree: 'BSc(Hons) Computer Science',
      institution: 'Informatics Institue of Technology | University of Westminster',
      location: 'UK',
      duration: '2024 - Present',
      description: 'Pursuing a degree in Computer Science with a focus on software development, web technologies, UI/UX design and database management.',
      results: 'Year 1: Ongoing'
    },
    {
      degree: 'Diploma in Digital Marketing',
      institution: 'Open University of Sri Lanka',
      location: 'Nugegoda, Colombo',
      duration: '2023 - 2024',
      description: 'Focused on Software Engineering and Data Structures. Graduated with first-class honors.',
    },
    {
      degree: 'Advanced Level - Edexcel',
      institution: "St. Bridget's Convent",
      location: 'Colombo 07, Sri Lanka',
      duration: '2021 - 2023',
      description: 'Focused on Software Engineering and Data Structures. Graduated with first-class honors.',
      results: ''
    },
    {
      degree: 'Ordinary Level - Local',
      institution: "St. Bridget's Convent",
      location: 'Colombo 07, Sri Lanka',
      duration: '2020 (2021)',
      description: 'Focused on Software Engineering and Data Structures. Graduated with first-class honors.',
      results: ''
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
              <p>{item.results}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;