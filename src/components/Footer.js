import React, { useState, useEffect } from 'react';
import './Footer.css';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentYear] = useState(new Date().getFullYear());
  
  const floatingIcons = ['💫', '✨', '🚀', '💎'];
  const skills = ['React', 'UI/UX', 'CSS', 'JS', 'Node'];

  useEffect(() => {
    // Trigger animations when component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 200);

    // Intersection Observer for scroll-based animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe footer element
    const footerElement = document.querySelector('.footer');
    if (footerElement) {
      observer.observe(footerElement);
    }

    return () => {
      clearTimeout(timer);
      if (footerElement) {
        observer.unobserve(footerElement);
      }
    };
  }, []);

  // Create dynamic text animation
  const animatedText = (text, className = '') => {
    return (
      <span className={className}>
        {text.split('').map((char, index) => (
          <span
            key={index}
            style={{
              display: 'inline-block',
              animationDelay: `${index * 0.05}s`,
              animation: isVisible ? 'charFadeIn 0.6s ease-out forwards' : 'none',
              opacity: 0
            }}
          >
            {char === ' ' ? '\u00A0' : char}
          </span>
        ))}
      </span>
    );
  };

  return (
    <>
      <style jsx>{`
        @keyframes charFadeIn {
          0% {
            opacity: 0;
            transform: translateY(10px) rotateX(90deg);
          }
          100% {
            opacity: 1;
            transform: translateY(0) rotateX(0deg);
          }
        }

        .animate-in .floating-icon {
          animation-play-state: running;
        }
      `}</style>

      <footer className={`footer ${isVisible ? 'loaded' : ''}`}>
        {/* Floating Decorative Icons */}
        {floatingIcons.map((icon, index) => (
          <div
            key={index}
            className="floating-icon"
            style={{
              animationDelay: `${index * 0.5}s`
            }}
          >
            {icon}
          </div>
        ))}

        <div className="footer-content">
          {/* Main Designer Credit */}
          <div className="designer-credit">
            Crafted with passion by{' '}
            <span 
              className="designer-name"
              onMouseEnter={(e) => {
                e.target.style.transform = 'scale(1.1) rotateY(10deg)';
                e.target.style.textShadow = '0 0 30px rgba(139, 92, 246, 0.8)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'scale(1) rotateY(0deg)';
                e.target.style.textShadow = 'none';
              }}
            >
              {animatedText('Siphelele Audacious Maphumulo', 'designer-name')}
            </span>
          </div>

          {/* Professional Tagline */}
          <div className="footer-tagline">
            {animatedText('Senior UI/UX Developer • Creative Problem Solver • Innovation Enthusiast')}
          </div>

          {/* Decorative Divider */}
          <div className="footer-divider"></div>

          {/* Skills Showcase */}
          <div className="skills-hint">
            {skills.map((skill, index) => (
              <div
                key={skill}
                className="skill-dot"
                data-skill={skill}
                style={{
                  animationDelay: `${2 + index * 0.1}s`
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'scale(1.5) rotate(180deg)';
                  e.target.style.background = 'linear-gradient(45deg, #8b5cf6, #ec4899)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'scale(1) rotate(0deg)';
                  e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                }}
              />
            ))}
          </div>

          {/* Copyright */}
          <div className="copyright">
            © {currentYear} All rights reserved • Built with React & Modern CSS
          </div>
        </div>

        {/* Additional Interactive Elements */}
        <div 
          style={{
            position: 'absolute',
            bottom: '10px',
            right: '20px',
            fontSize: '0.7rem',
            color: 'rgba(255, 255, 255, 0.3)',
            fontFamily: 'monospace',
            opacity: 0,
            animation: isVisible ? 'fadeInUp 1s ease-out 2.5s forwards' : 'none'
          }}
        >
          v2.0.1
        </div>

        {/* Subtle Tech Stack Indicator */}
        <div
          style={{
            position: 'absolute',
            bottom: '10px',
            left: '20px',
            fontSize: '0.7rem',
            color: 'rgba(255, 255, 255, 0.3)',
            fontFamily: 'monospace',
            display: 'flex',
            gap: '8px',
            opacity: 0,
            animation: isVisible ? 'fadeInUp 1s ease-out 2.8s forwards' : 'none'
          }}
        >
          <span 
            title="React"
            style={{
              padding: '2px 6px',
              background: 'rgba(97, 218, 251, 0.1)',
              borderRadius: '3px',
              border: '1px solid rgba(97, 218, 251, 0.2)',
              cursor: 'default'
            }}
          >
            ⚛️
          </span>
          <span 
            title="CSS3"
            style={{
              padding: '2px 6px',
              background: 'rgba(41, 101, 241, 0.1)',
              borderRadius: '3px',
              border: '1px solid rgba(41, 101, 241, 0.2)',
              cursor: 'default'
            }}
          >
            🎨
          </span>
          <span 
            title="Modern JavaScript"
            style={{
              padding: '2px 6px',
              background: 'rgba(247, 223, 30, 0.1)',
              borderRadius: '3px',
              border: '1px solid rgba(247, 223, 30, 0.2)',
              cursor: 'default'
            }}
          >
            ⚡
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;