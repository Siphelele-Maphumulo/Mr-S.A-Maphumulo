import React, { useState } from 'react';
import './Projects.css';

import Image3 from '../assets/daily-logsheet.png';
import Image4 from '../assets/testing-system.png';
import Image5 from '../assets/mobile-store.png';
import Image6 from '../assets/music-website.png';
import Image7 from '../assets/blackboard.png';
import Image8 from '../assets/pos.png';
import Image9 from '../assets/incubation.png';

const projectImages = [

  {
    name: 'Daily Logsheet',
    title: 'Daily Logsheet',
    image: Image3,
    link: 'https://environmental-health-wil-frontend.netlify.app/',
    description: 'Web app for managing daily logsheets in environmental health at MUT, built with Angular, Spring Boot, and MySQL.',
    tech: ['Angular', 'Spring Boot', 'MySQL'],
  },
  {
    name: 'Testing System',
    title: 'School Testing System',
    image: Image4,
    link: 'https://online-test-web-application-7mu3.onrender.com/',
    description: 'Java and MySQL app for student and lecturer dashboards; create tests, take exams, and view results instantly.',
    tech: ['Java', 'MySQL'],
  },
  {
    name: 'Hardware Store',
    title: 'Hardware Mobile App',
    image: Image5,
    link: 'https://siphelele-maphumulo.github.io/Hardware/',
    description: 'Mobile app built with Angular, Firebase, and MySQL to manage customer administration, purchases, and digital services.',
    tech: ['Angular', 'Firebase', 'MySQL'],
  },
  {
    name: 'Music Website',
    title: 'Music Management Platform',
    image: Image6,
    link: '#',
    description: 'Platform built with PHP, HTML, CSS, MySQL, and Python to manage, upload, and share music online.',
    tech: ['PHP', 'HTML', 'CSS', 'MySQL', 'Python'],
  },
  {
    name: 'Blackboard',
    title: 'Enhanced Blackboard System',
    image: Image7,
    link: 'https://youtu.be/LIVvV9IzP-E',
    description: 'Web app built with Java, Tomcat, and MySQL to improve MUT’s blackboard system with better UI, icons, and accessibility features.',
    tech: ['Java', 'Tomcat', 'MySQL'],
  },
  {
    name: 'Point Of Sales',
    title: 'POS System',
    image: Image8,
    link: 'https://youtu.be/HMUn_aXKSDQ',
    description: 'Java and MySQL app for managing products, customer orders, and receipts for stores, supporting managers and waiters.',
    tech: ['Java', 'MySQL'],
  },
  {
    name: 'Incubation Platform',
    title: 'SMME Virtual Incubation',
    image: Image9,
    link: 'https://virtualincubation.infinityfreeapp.com/',
    description: 'Platform built with Angular, Firebase, and MySQL to support startups with registration, funding, and mentorship tools.',
    tech: ['Angular', 'Firebase', 'MySQL'],
  },
];


const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Floating Particles
  const createParticles = () => {
    return [...Array(8)].map((_, i) => (
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
          0%, 100% { transform: translateY(0) rotate(0deg); opacity: 0.3; }
          33% { transform: translateY(-15px) rotate(120deg); opacity: 0.6; }
          66% { transform: translateY(-5px) rotate(240deg); opacity: 0.4; }
        }
      `}</style>

      <section className={`projects ${isVisible ? 'loaded' : ''}`} id="projects">
        {/* Floating Particles */}
        {createParticles()}

        {/* Background Effects */}
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

        <div className="projects-content">
          <h2 className="projects-title">FEATURED PROJECTS</h2>

          <p className="projects-para">
            I've had the privilege of working on a diverse range of projects that showcase my skills and dedication to crafting meaningful and impactful solutions. 
            My portfolio is a curated collection of my work — each representing a unique challenge I've embraced, demonstrating my ability to adapt, innovate, and deliver results.
          </p>

          <div className="projects-container">
            {projectImages.map((project, index) => (
              <a
                key={index}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
                aria-label={`View project: ${project.title}`}
              >
                <div className="project-card">
                  <div className="project-image-wrapper">
                    <img src={project.image} alt={project.name} className="project-image" />
                    <div className="project-overlay">
                      <p className="view-project">Explore →</p>
                    </div>
                  </div>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tech">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="tech-tag"
                        style={{ animationDelay: `${index * 0.1 + i * 0.05}s` }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;