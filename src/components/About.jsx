import React from 'react';
import { FaCode, FaRocket, FaHeart } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">
          Get to know more about my journey, passion, and what drives me as a developer.
        </p>
        
        <div className="about-content">
          <div className="about-text">
            <h3>My Story</h3>
            <p>
              I'm a passionate full-stack developer with over 3 years of experience creating 
              digital solutions that make a difference. My journey began with curiosity about 
              how websites work, and it has evolved into a deep love for crafting elegant, 
              efficient, and user-friendly applications.
            </p>
            <p>
              I specialize in modern web technologies and enjoy working across the entire 
              stack. From designing intuitive user interfaces to building robust backend 
              systems, I'm committed to delivering high-quality solutions that exceed expectations.
            </p>
            
            <div className="about-stats">
              <div className="stat">
                <h4>50+</h4>
                <p>Projects Completed</p>
              </div>
              <div className="stat">
                <h4>3+</h4>
                <p>Years Experience</p>
              </div>
              <div className="stat">
                <h4>20+</h4>
                <p>Happy Clients</p>
              </div>
            </div>
          </div>
          
          <div className="about-features">
            <div className="feature">
              <div className="feature-icon">
                <FaCode />
              </div>
              <h4>Clean Code</h4>
              <p>I write maintainable, scalable, and well-documented code that follows best practices.</p>
            </div>
            
            <div className="feature">
              <div className="feature-icon">
                <FaRocket />
              </div>
              <h4>Performance</h4>
              <p>I optimize applications for speed and efficiency, ensuring great user experiences.</p>
            </div>
            
            <div className="feature">
              <div className="feature-icon">
                <FaHeart />
              </div>
              <h4>User Focus</h4>
              <p>Every project is built with the end user in mind, prioritizing usability and accessibility.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
