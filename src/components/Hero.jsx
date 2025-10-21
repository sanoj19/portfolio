import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaDownload } from 'react-icons/fa';
import ConfettiButton from './ConfettiButton';
import ProfileCard from './ProfileCard';
import BlurText from './BlurText';
import DecryptedText from './DecryptedText';
import { 
  getProfileImage, 
  getAvatarImage, 
  getMiniAvatarImage, 
  getImageWithFallback,
  preloadImages 
} from '../utils/imageUtils';

const Hero = () => {
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [profileImage, setProfileImage] = useState('');
  const [avatarImage, setAvatarImage] = useState('');
  const [miniAvatarImage, setMiniAvatarImage] = useState('');

  // Load images on component mount
  useEffect(() => {
    const loadImages = async () => {
      try {
        // Get images with fallbacks
        const profileImg = await getImageWithFallback('myselfff.png');
        const avatarImg = await getImageWithFallback('myselfff.png');
        const miniAvatarImg = await getImageWithFallback('myselfff.png');

        // Preload images for better performance
        const imageSources = [profileImg, avatarImg, miniAvatarImg];
        await preloadImages(imageSources);

        // Set the loaded images
        setProfileImage(profileImg);
        setAvatarImage(avatarImg);
        setMiniAvatarImage(miniAvatarImg);
        setImagesLoaded(true);
      } catch (error) {
        console.warn('Error loading images:', error);
        // Set fallback images
        setProfileImage('https://via.placeholder.com/300x300/3b82f6/ffffff?text=J');
        setAvatarImage('https://via.placeholder.com/200x200/3b82f6/ffffff?text=J');
        setMiniAvatarImage('https://via.placeholder.com/40x40/3b82f6/ffffff?text=J');
        setImagesLoaded(true);
      }
    };

    loadImages();
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <BlurText
              text="Hi, I'm Jonas"
              className="hero-title"
              delay={150}
              animateBy="words"
              direction="top"
              highlightWords={['jonas']}
            />
            <BlurText
              text="Junior Software Engineer"
              className="hero-subtitle"
              delay={100}
              animateBy="words"
              direction="top"
            />
            <DecryptedText
              text="I create beautiful, functional, and user-centered digital experiences. Passionate about clean code, modern technologies, and solving complex problems."
              className="hero-description"
              animateOn="view"
              speed={80}
              maxIterations={15}
              revealDirection="center"
              characters="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?"
            />
            
            <div className="hero-buttons">
              <ConfettiButton 
                variant="primary"
                size="lg"
                animation="scale"
                onClick={() => scrollToSection('projects')}
                confettiOptions={{
                  particleCount: 150,
                  spread: 60,
                  colors: ['#60a5fa', '#3b82f6', '#06b6d4', '#10b981', '#f59e0b', '#ef4444']
                }}
              >
                View My Work
              </ConfettiButton>
              <button 
                className="btn btn-secondary"
                onClick={() => scrollToSection('contact')}
              >
                Get In Touch
              </button>
            </div>
            
            <div className="hero-social">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </a>
            </div>
          </div>
          
          <div className="hero-image">
            {imagesLoaded ? (
              <ProfileCard
                name="Jonas"
                title="Junior Software Engineer"
                handle="jonasdev"
                status="Available"
                contactText="Contact Me"
                avatarUrl={profileImage}
                miniAvatarUrl={miniAvatarImage}
                showUserInfo={true}
                enableTilt={true}
                enableMobileTilt={false}
                onContactClick={() => scrollToSection('contact')}
              />
            ) : (
              <div className="loading-placeholder">
                <div className="loading-spinner"></div>
                <p>Loading profile...</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
