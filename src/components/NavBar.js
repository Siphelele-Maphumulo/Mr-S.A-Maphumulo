import React, { useEffect, useState } from 'react';
import './NavBar.css';
import { Link } from 'react-scroll';

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const toggleMenu = () => {
    setOpen(!open);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;

      // Simple scroll detection
      if (scrollTop > 50) {
        setScroll(true);
      } else {
        setScroll(false);
      }

      // Active section detection
      const sections = ['home', 'about', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (current) {
        setActiveSection(current);
      }
    };

    const handleResize = () => {
      if (window.innerWidth > 768 && open) {
        setOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [open]);

  const handleMenuItemClick = () => {
    setOpen(false);
  };

  const navItems = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Projects', to: 'projects' },
    { name: 'Contact', to: 'contact' }
  ];

  return (
    <>
      <nav className={`navbar ${open ? 'nav-open' : ''} ${scroll ? 'scrolled' : ''}`}>
        <div className="tophead">
        <h1>
          <a
            className="name-logo"
            href="https://siphelelemaphumulo.netlify.app/"
            rel="noopener noreferrer"
          >
            Siphelele....change portfolio
          </a>
          <span className="blink" />
        </h1>


          <div 
            className={`menu-btn ${open ? 'opened-btn' : ''}`} 
            onClick={toggleMenu}
          >
            <span></span>
          </div>
        </div>

        <ul className={`menu ${open ? 'open' : ''}`}>
          {navItems.map((item) => (
            <li key={item.to}>
              <Link
                spy
                smooth
                offset={-80}
                duration={500}
                onClick={handleMenuItemClick}
                to={item.to}
                className={activeSection === item.to ? 'active' : ''}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className={`scroll-to-top ${scroll ? 'scroll-true' : ''}`}>
        <Link spy smooth offset={-80} duration={800} to="home">
          <i className="fa-solid fa-arrow-up" />
        </Link>
      </div>
    </>
  );
};

export default NavBar;