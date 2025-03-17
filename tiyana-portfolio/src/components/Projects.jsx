import React from 'react';

const Projects = () => {
  const projectsData = [
    {
      title: 'Student 360',
      description: 'Built a full-stack e-commerce platform with React, Node.js, and MongoDB. Implemented features like user authentication, product search, shopping cart, and payment integration.',
      image: '/assets/Student 360.jpg',
      tags: ['Flutter', 'Node.js', 'MongoDB', 'Express'],
      link: 'https://github.com/yourusername/ecommerce-platform'
    },
    {
      title: 'Real Estate Agent',
      description: 'Developed an AI-powered content generator that creates blog posts, social media captions, and marketing copy. Utilized Python and OpenAI GPT-3 API for text generation.',
      image: '/assets/images/project2.jpg',
      tags: ['Python', 'Flask', 'OpenAI API', 'React', 'AWS'],
      link: 'https://github.com/yourusername/ai-content-generator'
    },
    {
      title: 'Health Monitoring App',
      description: 'Created a cross-platform mobile application for health monitoring. Features include step counting, heart rate monitoring, sleep tracking, and nutrition logging.',
      image: '/assets/images/project3.jpg',
      tags: ['React Native', 'Firebase', 'Redux', 'HealthKit', 'Google Fit'],
      link: 'https://github.com/yourusername/health-monitoring-app'
    }
  ];

  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="section-title">
          <h2>Projects</h2>
        </div>
        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, tagIndex) => (
                    <span className="project-tag" key={tagIndex}>{tag}</span>
                  ))}
                </div>
                <div style={{ marginTop: '20px' }}>
                  <a href={project.link} className="btn" target="_blank" rel="noreferrer">View Project</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;