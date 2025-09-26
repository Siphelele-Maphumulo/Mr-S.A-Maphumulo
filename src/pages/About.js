import React, { useState, useEffect } from 'react';
import './About.css';

import TailwindIcon from '../assets/redux.png';
import HTML from '../assets/html.png';
import jQuery from '../assets/jquery.png';
import AdobeXD from '../assets/adobeXD.png';
import ionic from '../assets/ionic.png';
import VSCode from '../assets/vscode.png';
import Figma from '../assets/figma.png';
import AngularIcon from '../assets/angular.png';
import ReactIcon from '../assets/react.png';
import VueIcon from '../assets/vue.png';
import Firebase from '../assets/Firebase.png';
import NPMlogo from '../assets/npm.png';
import GitLogo from '../assets/git.png';
import GitHublogo from '../assets/github.png';
import GMeet from '../assets/meet.png';
import Nodejs from '../assets/node.png';
import php from '../assets/php.png';
import Zoomlogo from '../assets/zoom.webp';
import SkypeLogo from '../assets/skype.png';
import mssms from '../assets/mssms.png';
import WebPack from '../assets/webpack.png';
import PostGres from '../assets/postgres.png';
import SQLite from '../assets/sqlite.png';

import Teams from '../assets/Teams.png';
import Canva from '../assets/canva.png';
import CDT from '../assets/cdt.png';
import CSS from '../assets/css.png';
import BootStrap from '../assets/bootstrap.png';
import NextJS from '../assets/next.webp';
import JavaScript from '../assets/javascript.png';
import CSharp from '../assets/csharp.png';
import Sass from '../assets/sass.png';
import PostMan from '../assets/postman.png';
import WordPress from '../assets/wordpress.png';
import Express from '../assets/express.png';
import MySQL from '../assets/mysql.png';
import MongoDB from '../assets/mongodb.png';
import Python from '../assets/python.png';
import Django from '../assets/django.png';
import DotNet from '../assets/dotnet.png';
import PHP from '../assets/php.png';
import Docker from '../assets/docker.png';
import GraphQL from '../assets/graphql.png';
import AWS from '../assets/aws.png';

import Flutter from '../assets/flutter.png';
import Swift from '../assets/swift.png';
import Kotlin from '../assets/kotlin.png';
import AndroidStudio from '../assets/androidstudio.png';
import Xcode from '../assets/xcode.png';

import GitLab from '../assets/gitlab.png';
import Bitbucket from '../assets/bitbucket.png';
import Yarn from '../assets/yarn.png';
import Jira from '../assets/jira.png';

import Illustrator from '../assets/illustrator.png';
import Photoshop from '../assets/photoshop.png';
import Slack from '../assets/slack.png';
import Discord from '../assets/discord.png';
import Trello from '../assets/trello.png';


const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  // Floating particles
  const createParticles = () => {
    return [...Array(10)].map((_, i) => (
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

  const skills = {
    'Front-End': [
      { name: 'Angular', img: AngularIcon },
      { name: 'React', img: ReactIcon },
      { name: 'Vue', img: VueIcon },
      { name: 'JavaScript', img: JavaScript },
      { name: 'C#', img: CSharp },
      { name: 'Tailwind', img: TailwindIcon },
      { name: 'HTML5', img: HTML },
      { name: 'CSS3', img: CSS },
      { name: 'jQuery', img: jQuery },
      { name: 'SASS', img: Sass },
      { name: 'Bootstrap', img: BootStrap },
      { name: 'Next.js', img: NextJS },
    ],
    'Back-End': [
      { name: 'Node.js', img: Nodejs },
      { name: 'Express.js', img: Express },
      { name: 'PostgreSQL', img: PostGres },
      { name: 'MySQL', img: MySQL },
      { name: 'MongoDB', img: MongoDB },
      { name: 'Python', img: Python },
      { name: 'Django', img: Django },
      { name: 'C# .NET', img: DotNet },
      { name: 'Docker', img: Docker },
    ],
    Mobile: [
      { name: 'React Native', img: ReactIcon },
      { name: 'Ionic', img: ionic },
      { name: 'Flutter', img: Flutter },        // cross-platform framework
      { name: 'Swift', img: Swift },            // iOS native
      { name: 'Kotlin', img: Kotlin },          // Android native
      { name: 'Android Studio', img: AndroidStudio }, // IDE for Android
      { name: 'Xcode', img: Xcode },            // IDE for iOS
    ],
    Tools: [
      { name: 'Git', img: GitLogo },
      { name: 'GitHub', img: GitHublogo },
      { name: 'GitLab', img: GitLab },                  // alternative Git platform
      { name: 'Chrome Dev Tools', img: CDT },
      { name: 'VS Code', img: VSCode },
      { name: 'WebPack', img: WebPack },
      { name: 'Postman', img: PostMan },
      { name: 'npm', img: NPMlogo },
      { name: 'Yarn', img: Yarn },                     // package manager alternative
      { name: 'Docker', img: Docker },                 // containerization
      { name: 'Jira', img: Jira },                     // project management
      { name: 'WordPress', img: WordPress },
    ],

    Database: [
      { name: 'Firebase', img: Firebase },
      { name: 'SQL Management Studio', img: mssms },
      { name: 'PHP MySQL', img: php },
      { name: 'SQLite', img: SQLite },
    ],
    Design: [
      { name: 'Canva', img: Canva },
      { name: 'Figma', img: Figma },
      { name: 'Adobe Illustrator', img: Illustrator },
      { name: 'Adobe Photoshop', img: Photoshop },
    ],
    Communication: [
      { name: 'Ms Teams', img: Teams },
      { name: 'Skype', img: SkypeLogo },
      { name: 'Google Meet', img: GMeet },
      { name: 'Zoom', img: Zoomlogo },
      { name: 'Slack', img: Slack },
    ],
  'Soft Skills': [
    'Remote Pair-Programming',
    'Communication',
    'Mentoring',
    'Collaboration',
    'Leadership',
    'Problem Solving',
    'Time Management',
    'Decision Making',
    'Critical Thinking',
    'Adaptability',
    'Creative Thinking',
    'Conflict Resolution',
    'Emotional Intelligence',
    'Agile & Scrum Practices',
    'Attention to Detail',
  ],

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

      <section className={`about ${isVisible ? 'loaded' : ''}`} id="about">
        {/* Floating Particles */}
        {createParticles()}

        {/* Background Effects */}
        <div
          className="bg-gradient"
          style={{
            position: 'absolute',
            top: '-10%',
            right: '-10%',
            width: '300px',
            height: '300px',
            background: 'radial-gradient(circle, rgba(240, 147, 251, 0.15), transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(60px)',
            opacity: 0.4,
            zIndex: 1,
          }}
        />

        <div className="about-container">
          <div className="about-me">
            <h2 className="title">ABOUT ME</h2>
          <p className="about-para">
            I’m a developer who builds clean, responsive, and user-friendly web interfaces while also applying manual testing to ensure quality. 
            I combine strong fundamentals with modern frameworks, styling libraries, and solid HTML/CSS skills 
            to deliver fast, accessible, and scalable applications. Along with development, I create and run test cases, perform regression and 
            exploratory testing, and report defects to make sure features work as expected. I always focus on creating the best user experiences that work across devices and browsers. I always aim to turn 
            complex ideas into simple, intuitive designs, and I enjoy collaborating.
          </p>

            <br></br><br></br>
            <p className="about-para">
             I also builds secure, scalable, and efficient back-end systems. I work with technologies like Node.js, Express.js, Python, Django, and C# .NET to create powerful APIs and server-side logic. I use databases like PostgreSQL, MySQL, and MongoDB to manage data reliably, and Docker to streamline deployment and development environments. Whether I'm building RESTful services, handling authentication, or optimizing queries, 
             I focus on performance, security, and clean architecture.</p>
            <br></br><br></br><br></br>
            <p className="about-para">
             I've built smooth, high-performance mobile apps across platforms. I work with various tools to create cross-platform experiences. I develop and test using Android Studio and Xcode, making sure apps run well on different devices. Whether I’m building user interfaces, connecting to APIs, or handling offline functionality, 
             I focus on speed, usability, and clean design. I enjoy crafting mobile solutions that feel natural to users and help businesses reach more people through reliable, modern apps.</p>
            <br></br><br></br>
            <p className="about-para">
              I work confidently with a wide range of development and testing tools that support clean code, smooth collaboration, and efficient delivery. 
              I use Git platforms like GitHub, GitLab, and Bitbucket to manage version control and team workflows. My daily toolkit includes VS Code, 
              Chrome Dev Tools, WebPack, Postman, npm, Yarn, and Docker to streamline development and testing. On the testing side, I create and execute 
              test cases, perform regression testing, log defects, and use Jira to manage tasks, sprints, and bug tracking. I’ve also built and maintained 
              WordPress sites for clients and internal projects.
            </p>
            <br></br><br></br><br></br>
            <p className="about-para">
             For data, I work with Firebase, MongoDB, MySQL, PHP MySQL, SQLite, and SQL Management Studio to store, query, and secure information across different platforms. I also bring design skills using Canva, Figma, Adobe XD, Illustrator, and Photoshop to create clean UI mockups and assets that match user needs.</p>
            <br></br><br></br><br></br>
            <p className="about-para">
             I also bring strong design and communication skills to every project. I use tools like Figma, Adobe XD, Canva, Illustrator, and Photoshop to create clean, modern interfaces and visual assets that match user needs and brand goals. Whether I’m wireframing a layout or polishing final graphics, I focus on clarity, consistency, and user experience.</p>
            <br></br><br></br><br></br>
            <p className="about-para">
             On the communication side, I collaborate effectively with teams and clients using Microsoft Teams, Slack, Zoom, Skype, and Google Meet. I’m comfortable leading demos, sharing updates, and working across time zones to keep projects moving smoothly. Good design and clear communication go hand-in-hand — and I use both to build better products, faster.</p>
            <br></br>
            <br></br><br></br><br></br>
            <p className="about-para">
             I bring a strong set of soft skills that help teams work better and deliver faster. I'm experienced in remote pair-programming, mentoring, and leading collaborative projects with clear communication and emotional intelligence. I apply Agile and Scrum practices to stay organised, manage time effectively, and make smart decisions under pressure. 
             I enjoy solving problems creatively, thinking critically, and adapting to new challenges.</p>
            <br></br>
          </div>

          <div className="skills-container">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="skill-section">
                <h3 className="skill-title">{category.toUpperCase()}</h3>
                <div className="skills-grid">
                  {items.map((item, index) =>
                    typeof item === 'string' ? (
                      <div
                        key={index}
                        className="soft-skill-card"
                        style={{
                          animationDelay: `${index * 0.08}s`,
                        }}
                      >
                        {item}
                      </div>
                    ) : (
                      <div
                        key={index}
                        className="skill-card"
                        style={{
                          animationDelay: `${index * 0.05}s`,
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.transform = 'scale(1.1) translateY(-8px)';
                          e.target.style.boxShadow = '0 15px 30px rgba(102, 126, 234, 0.3)';
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.transform = 'scale(1) translateY(0)';
                          e.target.style.boxShadow = '0 10px 20px rgba(255, 255, 255, 0.05)';
                        }}
                      >
                        <img src={item.img} alt={item.name} />
                        <p>{item.name}</p>
                      </div>
                    )
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;