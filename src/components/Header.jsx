import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import SparkleNavbar from './SparkleNavbar';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleNavbarClick = (index, item) => {
    const sectionMap = {
      'Home': 'home',
      'About': 'about', 
      'Projects': 'projects',
      'Skills': 'skills',
      'Contact': 'contact'
    };
    
    const sectionId = sectionMap[item];
    if (sectionId) {
      scrollToSection(sectionId);
    }
  };

  const navItems = ['Home', 'About', 'Projects', 'Skills', 'Contact'];

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <nav className="nav">
          <div className="nav-brand">
            <a href="#home" onClick={() => scrollToSection('home')}>
              Jonas
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <div className="nav-menu-desktop">
            <SparkleNavbar 
              items={navItems} 
              color="#60a5fa"
              onItemClick={handleNavbarClick}
            />
          </div>
          
          {/* Mobile Navigation */}
          <div className={`nav-menu-mobile ${isMenuOpen ? 'active' : ''}`}>
            {navItems.map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`} 
                onClick={() => {
                  const sectionMap = {
                    'Home': 'home',
                    'About': 'about', 
                    'Projects': 'projects',
                    'Skills': 'skills',
                    'Contact': 'contact'
                  };
                  scrollToSection(sectionMap[item]);
                }}
              >
                {item}
              </a>
            ))}
          </div>
          
          <div className="nav-toggle" onClick={toggleMenu}>
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
