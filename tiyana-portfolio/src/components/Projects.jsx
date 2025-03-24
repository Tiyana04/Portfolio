import React from 'react';

const Projects = () => {
  const projectsData = [
    {
        title: 'Student 360',
        description: 'Developed an app for primary schools to digitalize the student record book featuring real-time academic access, noticeboard, and communication tools.',
        image: '/assets/Student 360.jpg',
        tags: ['Flutter', 'Node.js', 'MongoDB'],
        link: 'https://github.com/yourusername/ecommerce-platform'
    },
    {
        title: "Let's Grow Pre-School & Childcare",
        description: 'Developed a responsive website for a preschool, featuring program details, admissions, gallery and contact information.',
        image: '/assets/Preschool.png',
        tags: ['React'],
        link: 'https://github.com/yourusername/ecommerce-platform'
    },
    {
        title: 'Real Estate Agent',
        description: 'Developed a dynamic real estate website using React, featuring property listings, search filters, and an intuitive user interface for seamless browsing.',
        image: '/assets/Estate Agent.jpg',
        tags: ['React'],
        link: 'https://github.com/yourusername/ai-content-generator'
    },
    {
        title: 'Green Steps',
        description: 'Designed Green Steps in Figma, a sustainability-focused app promoting eco-friendly habits through interactive features and user engagement.',
        image: '/assets/Green Steps.png',
        tags: ['Figma'],
        link: 'https://youtu.be/vKiUGMEXMVA'
    },
    {
        title: 'Real-Time Event Ticketing System',
        description: 'Developed a website using React and Node.js, enabling seamless ticket booking, live availability updates, and secure transactions.',
        image: '/assets/Ticketing System.png',
        tags: ['Java', 'React', 'Node.js'],
        link: 'https://youtu.be/47BVAqbfyeM'
    },
    {
        title: 'Biography of Zendaya',
        description: "Created a website showcasing Zendaya's life, career, and achievements with a clean and responsive design.",
        image: '/assets/Bio Zendaya.png',
        tags: ['HTML5', 'CSS'],
        link: 'https://github.com/yourusername/health-monitoring-app'
    },
    {
        title: 'Scientific Research Data Management System',
        description: 'Created a cross-platform mobile application for health monitoring. Features include step counting, heart rate monitoring, sleep tracking, and nutrition logging.',
        image: '/assets/Research Data.jpg',
        tags: ['Python'],
        link: 'https://github.com/yourusername/health-monitoring-app'
    },
    {
        title: 'Student Management System',
        description: 'Created a cross-platform mobile application for health monitoring. Features include step counting, heart rate monitoring, sleep tracking, and nutrition logging.',
        image: '/assets/Student Management.webp',
        tags: ['Java'],
        link: 'https://github.com/yourusername/health-monitoring-app'
    },
    {
        title: 'OCEANAUTS Website',
        description: 'Created a cross-platform mobile application for health monitoring. Features include step counting, heart rate monitoring, sleep tracking, and nutrition logging.',
        image: '/assets/Oceanauts.png',
        tags: ['HTML', 'CSS'],
        link: 'https://github.com/yourusername/health-monitoring-app'
    },
    {
        title: 'Banking Transaction System',
        description: 'Created a cross-platform mobile application for health monitoring. Features include step counting, heart rate monitoring, sleep tracking, and nutrition logging.',
        image: '/assets/Banking Transaction.webp',
        tags: ['Python'],
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
                <div className="project-links">
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