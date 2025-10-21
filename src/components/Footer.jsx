import React from 'react';
import { FaHeart, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>Jonas</h3>
            <p>Full Stack Developer</p>
          </div>
          
          <div className="footer-links">
            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#home" onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}>Home</a></li>
                <li><a href="#about" onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>About</a></li>
                <li><a href="#projects" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>Projects</a></li>
                <li><a href="#skills" onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}>Skills</a></li>
                <li><a href="#contact" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>Contact</a></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h4>Connect</h4>
              <ul>
                <li><a href="mailto:jonas@example.com">Email</a></li>
                <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                <li><a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h4>Services</h4>
              <ul>
                <li>Web Development</li>
                <li>Mobile Apps</li>
                <li>UI/UX Design</li>
                <li>Consulting</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>
              © {currentYear} Jonas. Made with <FaHeart className="heart-icon" /> and React.
            </p>
          </div>
          
          <div className="footer-social">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FaTwitter />
            </a>
          </div>
          
          <button className="back-to-top" onClick={scrollToTop} aria-label="Back to top">
            ↑
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
