import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.",
      image: "/api/placeholder/400/300",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "https://github.com",
      live: "https://example.com",
      featured: true
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "/api/placeholder/400/300",
      technologies: ["React", "Socket.io", "Express", "PostgreSQL"],
      github: "https://github.com",
      live: "https://example.com",
      featured: true
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "A responsive weather application with location-based forecasts, interactive maps, and detailed weather analytics.",
      image: "/api/placeholder/400/300",
      technologies: ["React", "Chart.js", "OpenWeather API"],
      github: "https://github.com",
      live: "https://example.com",
      featured: false
    },
    {
      id: 4,
      title: "Social Media Dashboard",
      description: "A comprehensive social media management dashboard with analytics, scheduling, and content management features.",
      image: "/api/placeholder/400/300",
      technologies: ["Vue.js", "Python", "Django", "Redis"],
      github: "https://github.com",
      live: "https://example.com",
      featured: false
    },
    {
      id: 5,
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website built with React and styled with CSS-in-JS. Features smooth animations and dark mode.",
      image: "/api/placeholder/400/300",
      technologies: ["React", "Framer Motion", "CSS-in-JS"],
      github: "https://github.com",
      live: "https://example.com",
      featured: false
    },
    {
      id: 6,
      title: "API Documentation Tool",
      description: "An interactive API documentation generator with testing capabilities, code examples, and collaborative editing.",
      image: "/api/placeholder/400/300",
      technologies: ["Next.js", "TypeScript", "Prisma"],
      github: "https://github.com",
      live: "https://example.com",
      featured: false
    }
  ];

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <p className="section-subtitle">
          Here are some of my recent projects that showcase my skills and experience.
        </p>
        
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className={`project-card ${project.featured ? 'featured' : ''}`}>
              <div className="project-image">
                <div className="project-placeholder">
                  <span>{project.title.charAt(0)}</span>
                </div>
                <div className="project-overlay">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                    <FaGithub />
                  </a>
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-link">
                    <FaExternalLinkAlt />
                  </a>
                </div>
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
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
