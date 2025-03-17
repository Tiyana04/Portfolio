import React from 'react';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="section-title">
          <h2> About Me </h2>
        </div>
        <div className="about-content">
          <div className="about-text">
            <p>
              Hello! I'm a passionate Computer Science Undergraduate Student with expertise in building innovative solutions 
              that solve real-world problems. I've worked on various projects ranging from web applications to mobile appilacations.
            </p> <br />
            <p>
              My approach to software development is centered around creating clean, maintainable code 
              that delivers exceptional user experiences. I'm constantly learning and exploring new 
              technologies to stay at the forefront of the rapidly evolving tech landscape.
            </p> <br />
            <p>
              When I'm not coding, you can find me playing the piano, reading books, drawing 
              or engaging in my extra-curricular activities.
            </p>
          </div>
          <div className="about-image">
            <img src="/assets/Tiyana.jpg" alt="Your Name" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;