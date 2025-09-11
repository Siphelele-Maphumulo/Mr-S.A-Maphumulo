import React, { useState } from 'react';
import './Hero.css';
import { Link } from 'react-scroll';
import Imu from '../assets/imu.png';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Floating particles
  const createParticles = () => {
    return [...Array(12)].map((_, i) => (
      <div
        key={i}
        className="particle"
        style={{
          position: 'absolute',
          width: Math.random() * 5 + 2 + 'px',
          height: Math.random() * 5 + 2 + 'px',
          background: `linear-gradient(45deg, #667eea, #f093fb)`,
          borderRadius: '50%',
          left: Math.random() * 100 + '%',
          top: Math.random() * 100 + '%',
          animation: `float ${Math.random() * 3 + 2}s ease-in-out infinite`,
          animationDelay: Math.random() * 3 + 's',
          opacity: Math.random() * 0.5 + 0.2,
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />
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
      `}</style>

      <div className={`hero ${isLoaded ? 'loaded' : ''}`} id="home">
        {/* Background Effects */}
        {createParticles()}

        <div
          className="bg-glow"
          style={{
            position: 'absolute',
            width: '400px',
            height: '400px',
            background: 'radial-gradient(circle, rgba(102, 126, 234, 0.15), transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(80px)',
            top: '50%',
            right: '-10%',
            transform: 'translateY(-50%)',
            opacity: 0.4,
            zIndex: 1,
            animation: 'pulse 6s ease-in-out infinite alternate',
          }}
        />

        <div className="hero-overlay">
          <div className="description">
          <h2 className="title">Hello, I am Siphelele Maphumulo</h2>
          <h3 className="tagline">Full-Stack Software Developer | Technical Supporter | Technical Facilitator</h3>
          <p className="paragraph">
            I am a Software Developer with 3+ years of experience in full-stack development and technical support. I have designed and built scalable 
            web systems using C#, PHP, Java, and Python, while also creating responsive pages with HTML, CSS, JavaScript, and WordPress. My background includes schema design, SQL query tuning, and database administration. Beyond coding, I provide training and mentorship as a facilitator, helping future developers grow their skills. I enjoy solving real world problems, supporting teams, and delivering software solutions that improve efficiency and create real impact.
          </p>


            <div className="hero-btns">
              <a
                href="https://drive.google.com/file/d/1EwxM1iyRPFEMlQyLrhj4dM14f1rgbe6k/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="btn-primary"
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-5px) scale(1.05)';
                  e.target.style.boxShadow = '0 20px 40px rgba(139, 92, 246, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0) scale(1)';
                  e.target.style.boxShadow = '0 15px 35px rgba(139, 92, 246, 0.3)';
                }}
              >
                GET MY CV
              </a>

              <Link
                spy
                smooth
                offset={50}
                duration={500}
                to="lets talk"
                className="btn-secondary"
                onMouseEnter={(e) => {
                  e.target.style.color = '#a78bfa';
                  e.target.style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = 'white';
                  e.target.style.transform = 'translateY(0)';
                }}
              >
                LET'S TALK
              </Link>
            </div>
          </div>

          <div className="hero-image-container">
            <img src={Imu} alt="Siphelele Maphumulo" className="hero-image" />
          </div>
        </div>

        <div className="social-icons">
          <a
            href="https://github.com/SipheleleMaphumulo"
            target="_blank"
            rel="noreferrer"
            className="icon"
            aria-label="GitHub"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/siphelele-maphumulo-52a787355"
            target="_blank"
            rel="noreferrer"
            className="icon"
            aria-label="LinkedIn"
          >
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
          <a
            href="https://twitter.com/MbuyisaMbongo"
            target="_blank"
            rel="noreferrer"
            className="icon"
            aria-label="Twitter"
          >
            <i className="fa-brands fa-twitter"></i>
          </a>
        </div>
      </div>
    </>
  );
};

export default Hero;