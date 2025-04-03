import React from 'react';

const Education = () => {
  const educationData = [
    {
      degree: 'BSc(Hons) Computer Science',
      institution: 'Informatics Institue of Technology | University of Westminster',
      location: 'UK',
      duration: '2024 - Present',
      description: 'Pursuing a degree in Computer Science with a focus on UI/UX design, web technologies, software development and database management.',
      results: 'Year 2: Ongoing | Year 1: Passed with 120 credits.'
    },
    {
      degree: 'Diploma in Digital Marketing',
      institution: 'Open University of Sri Lanka',
      location: 'Nugegoda, Colombo.',
      duration: '2023 - 2024',
      description: 'Diploma in Digital Marketing, gaining expertise in SEO, social media marketing, content strategy, and data analytics.',
      results: "Pending results."
    },
    {
      degree: 'Advanced Level - Edexcel',
      institution: "St. Bridget's Convent",
      location: 'Colombo 07, Sri Lanka.',
      duration: '2021 - 2023',
      description: 'Successfully pursued Advanced Level studies in the Mathematics stream, specializing in Pure Mathematics, Physics and Chemistry.',
      results: "Obtained 2 B's for Pure Mathematics and Physics and 1 C for Chemistry."
    },
    {
      degree: 'Ordinary Level - Local',
      institution: "St. Bridget's Convent",
      location: 'Colombo 07, Sri Lanka.',
      duration: '2020 (2021)',
      description: 'Completed Ordinary Level studies with a concentration in Mathematics, English, Sinhala, Religion, Western Music, Science, History, Health Science, and Commerce.',
      results: 'Obtained 6 A grades including English and Mathematics and 3 B grades.'
    }
  ];

  return (
    <section className="education" id="education">
      <div className="container">
        <div className="section-title">
          <h2> Education </h2>
        </div>
        <div className="education-list">
          {educationData.map((item, index) => (
            <div className="education-item" key={index}>
              <h3>{item.degree}</h3>
              <p className="duration">{item.duration}</p>
              <p className="institution">{item.institution} | {item.location}</p>
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