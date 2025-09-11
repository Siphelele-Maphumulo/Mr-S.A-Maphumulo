import React, { useState, useEffect } from 'react';
import './Contact.css';

const Contact = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  const words = ['PLANNING', 'ANALYSIS', 'DESIGN', 'IMPLEMENTATION', 'TESTING', 'MAINTENANCE'];
  
  const interests = [
    { text: 'Frontend Development', icon: '⚛️' },
    { text: 'React & Next.js', icon: '🚀' },
    { text: 'Mobile Development', icon: '📱' },
    { text: 'UI/UX Design', icon: '🎨' },
    { text: 'Backend Development', icon: '⚙️' },
    { text: 'Tehnical Support', icon: '🔧' },
    { text: 'Innovative Startups', icon: '💡' },
    { text: 'New Opportunities', icon: '🌟' }
  ];

  useEffect(() => {
    // Animate entrance
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    // Track mouse movement for interactive effects
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    // Cycle through words
    const wordTimer = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }, 2000);

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      clearTimeout(timer);
      clearInterval(wordTimer);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Create floating particles
  const createParticles = () => {
    return [...Array(15)].map((_, i) => (
      <div
        key={i}
        className="particle"
        style={{
          position: 'absolute',
          width: Math.random() * 4 + 2 + 'px',
          height: Math.random() * 4 + 2 + 'px',
          background: `linear-gradient(45deg, #667eea, #764ba2)`,
          borderRadius: '50%',
          left: Math.random() * 100 + '%',
          top: Math.random() * 100 + '%',
          animation: `float ${Math.random() * 3 + 2}s ease-in-out infinite`,
          animationDelay: Math.random() * 2 + 's',
          opacity: Math.random() * 0.5 + 0.2,
          pointerEvents: 'none',
          zIndex: 1
        }}
      />
    ));
  };

  // Split text into individual characters for animation
  const animatedText = (text) => {
    return text.split('').map((char, index) => (
      <span
        key={index}
        className="char"
        style={{
          display: 'inline-block',
          animationDelay: `${index * 0.1}s`,
          animation: 'charFadeIn 0.6s ease-out forwards'
        }}
      >
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));
  };

  return (
    <>
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-10px) rotate(120deg); }
          66% { transform: translateY(5px) rotate(240deg); }
        }
        
        @keyframes charFadeIn {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        .particle {
          filter: blur(1px);
        }
      `}</style>
      
      <div 
        className={`contact ${isVisible ? 'loaded' : ''}`} 
        id="contact"
        style={{
          '--mouse-x': mousePosition.x + '%',
          '--mouse-y': mousePosition.y + '%'
        }}
      >
        {/* Floating Particles */}
        {createParticles()}
        
        {/* Interactive Background Element */}
        <div
          style={{
            position: 'absolute',
            width: '300px',
            height: '300px',
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%)',
            borderRadius: '50%',
            left: `calc(${mousePosition.x}% - 150px)`,
            top: `calc(${mousePosition.y}% - 150px)`,
            transition: 'all 0.3s ease',
            pointerEvents: 'none',
            zIndex: 1,
            filter: 'blur(40px)'
          }}
        />

        <div className="footer-left">
          <h1 data-text={words[currentWordIndex]}>
            {words.map((word, wordIndex) => (
              <div
                key={word}
                className="word"
                style={{
                  display: wordIndex === currentWordIndex ? 'block' : 'none',
                  animation: wordIndex === currentWordIndex ? 'fadeInScale 0.6s ease-out' : 'none'
                }}
              >
                {animatedText(word)}
              </div>
            ))}
            <br />
            <div className="word" style={{ fontSize: '0.4em', marginTop: '1rem', opacity: 0.8 }}>
              {animatedText('SENIOR UI/UX DEVELOPER')}
            </div>
          </h1>
        </div>

        <div className="footer-right">
          <h3>I'M PASSIONATE ABOUT</h3>
          
          <div className="interests">
            {interests.map((interest, index) => (
              <p 
                key={interest.text}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-8px) scale(1.05) rotateX(10deg)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0) scale(1) rotateX(0)';
                }}
              >
                <span style={{ marginRight: '8px', fontSize: '1.2em' }}>{interest.icon}</span>
                {interest.text}
              </p>
            ))}
          </div>

          
          <div className="lets talk"></div>
          < hr />

          <div className="project-cta">
            <h3>READY TO START YOUR PROJECT?</h3>
            <span>
              <a 
                href="mailto:siphelelemaphumulo@gmail.com"
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-5px) scale(1.05)';
                  e.target.style.boxShadow = '0 20px 40px rgba(236, 72, 153, 0.6)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0) scale(1)';
                  e.target.style.boxShadow = '0 15px 35px rgba(236, 72, 153, 0.4)';
                }}
              >
                Let's Collaborate
              </a>
            </span>
          </div>

          <hr />

          <div className="social">
            <span>
              <a 
                href="https://github.com/Siphelele-Maphumulo" 
                target="_blank" 
                rel="noreferrer"
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-10px) rotateY(15deg)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0) rotateY(0)';
                }}
              >
                GITHUB
              </a>
            </span>
            
            <span>
              <a 
                href="https://www.linkedin.com/in/siphelele-maphumulo-52a787355" 
                target="_blank" 
                rel="noreferrer"
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-10px) rotateY(15deg)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0) rotateY(0)';
                }}
              >
                LINKEDIN
              </a>
            </span>
            
            <span>
              <a 
                href="https://www.youtube.com/@siphelelemaphumulo9577" 
                target="_blank" 
                rel="noreferrer"
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-10px) rotateY(15deg)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0) rotateY(0)';
                }}
              >
                YOUTUBE
              </a>
            </span>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInScale {
          0% {
            opacity: 0;
            transform: scale(0.8);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </>
  );
};

export default Contact;