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
            I am a passionate <b>Computer Science</b> undergraduate at IIT, affiliated with the University of 
            Westminster, graduating in 2027. With a strong foundation in programming and <b>problem-solving</b>, 
            I enjoy blending technical and creative skills to build intuitive digital experiences. 
            My goal is to become a <b>UI/UX designer</b> and <b>full-stack developer.</b>
            </p> <br />
            <p>
            Beyond academics, I am involved in multiple <b>startups</b> focused on website development, social 
            media marketing, and digital branding, enhancing my skills in web development and content 
            creation. I also serve as the <b>upcoming secretary of Rotaract</b>, contributing to leadership, 
            event planning, and community service. Always eager to learn and innovate, I embrace new 
            challenges to grow as a developer, designer, and leader.
            </p> <br />
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