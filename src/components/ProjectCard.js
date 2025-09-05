import React, { useState } from 'react';
import './ProjectCard.css';

const ProjectCard = (props) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="project-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        opacity: 0,
        transform: 'translateY(30px)',
        animation: 'fadeInUp 0.8s ease-out forwards',
      }}
    >
      {/* Gradient Top Bar */}
      <div className="project-gradient-bar" />

      {/* Image Container with Overlay */}
      <div className="project-image-container">
        <img
          src={props.image}
          alt={props.title}
          style={{
            transition: `all 0.5s cubic-bezier(0.4, 0, 0.2, 1) ${isHovered ? '0s' : '0.1s'}`,
          }}
        />
        <div className="project-overlay">
          <div
            className="project-actions"
            style={{
              transition: `transform 0.4s cubic-bezier(0.4, 0, 0.2, 1) ${isHovered ? '0.1s' : '0s'}`,
              transform: isHovered ? 'translateY(0)' : 'translateY(20px)',
            }}
          >
            {props.source_link !== 'N/A' && (
              <a
                href={props.source_link}
                target="_blank"
                rel="noreferrer"
                className="project-link"
                aria-label="View source code"
                onMouseEnter={(e) => {
                  e.target.style.transform = 'scale(1.2) rotate(10deg)';
                  e.target.style.boxShadow = '0 0 20px rgba(139, 92, 246, 0.6)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'scale(1)';
                  e.target.style.boxShadow = 'none';
                }}
              >
                <i className="fa-solid fa-code" />
              </a>
            )}
            {props.demo_link && props.demo_link !== 'N/A' && (
              <a
                href={props.demo_link}
                target="_blank"
                rel="noreferrer"
                className="project-link"
                aria-label="View live demo"
                onMouseEnter={(e) => {
                  e.target.style.transform = 'scale(1.2) rotate(-10deg)';
                  e.target.style.boxShadow = '0 0 20px rgba(240, 147, 251, 0.6)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'scale(1)';
                  e.target.style.boxShadow = 'none';
                }}
              >
                <i className="fa-solid fa-arrow-up-right-from-square" />
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Card Description */}
      <div className="card-description">
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <div className="stacks">
          {props.stacks.map((stack, id) => (
            <span
              key={id}
              className="tech-stack"
              style={{
                transitionDelay: `${id * 0.08}s`,
              }}
            >
              {stack}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;