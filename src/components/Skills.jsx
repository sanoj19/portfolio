import React from 'react';
import { FaReact, FaNodeJs, FaJs, FaPython, FaGitAlt, FaDocker, FaAws } from 'react-icons/fa';
import { SiTypescript, SiMongodb, SiPostgresql, SiRedis, SiFirebase } from 'react-icons/si';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", icon: FaReact, level: 90 },
        { name: "JavaScript", icon: FaJs, level: 85 },
        { name: "TypeScript", icon: SiTypescript, level: 80 },
        { name: "HTML/CSS", icon: FaJs, level: 95 },
        { name: "Vue.js", icon: FaJs, level: 70 }
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: FaNodeJs, level: 85 },
        { name: "Python", icon: FaPython, level: 80 },
        { name: "Express.js", icon: FaNodeJs, level: 85 },
        { name: "Django", icon: FaPython, level: 75 },
        { name: "REST APIs", icon: FaJs, level: 90 }
      ]
    },
    {
      title: "Database",
      skills: [
        { name: "MongoDB", icon: SiMongodb, level: 85 },
        { name: "PostgreSQL", icon: SiPostgresql, level: 80 },
        { name: "Redis", icon: SiRedis, level: 70 },
        { name: "MySQL", icon: SiPostgresql, level: 75 }
      ]
    },
    {
      title: "Tools & DevOps",
      skills: [
        { name: "Git", icon: FaGitAlt, level: 90 },
        { name: "Docker", icon: FaDocker, level: 75 },
        { name: "AWS", icon: FaAws, level: 70 },
        { name: "Firebase", icon: SiFirebase, level: 80 },
        { name: "CI/CD", icon: FaGitAlt, level: 75 }
      ]
    }
  ];

  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title">Skills & Technologies</h2>
        <p className="section-subtitle">
          Here are the technologies and tools I work with to bring ideas to life.
        </p>
        
        <div className="skills-grid">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="skill-category">
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-header">
                      <div className="skill-icon">
                        <skill.icon />
                      </div>
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="skills-summary">
          <h3>What I Bring to the Table</h3>
          <div className="summary-grid">
            <div className="summary-item">
              <h4>Problem Solving</h4>
              <p>I approach challenges systematically and find creative solutions to complex problems.</p>
            </div>
            <div className="summary-item">
              <h4>Continuous Learning</h4>
              <p>I stay updated with the latest technologies and best practices in web development.</p>
            </div>
            <div className="summary-item">
              <h4>Team Collaboration</h4>
              <p>I work well in teams and communicate effectively with designers, developers, and stakeholders.</p>
            </div>
            <div className="summary-item">
              <h4>Quality Focus</h4>
              <p>I prioritize code quality, testing, and user experience in every project I work on.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;