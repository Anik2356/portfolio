import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../assets/logo.png';
import menuOpen from '../assets/menu_open.svg';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const sections = ['hero', 'about', 'services', 'portfolio', 'contact'];

  // Scroll to section
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id); // update active section on click
      setMobileMenuOpen(false); // close mobile menu
    }
  };

  useEffect(() => {
    // Update active section based on scroll
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 2;
      sections.forEach((sec) => {
        const section = document.getElementById(sec);
        if (section) {
          const top = section.offsetTop;
          const bottom = top + section.offsetHeight;
          if (scrollPos >= top && scrollPos < bottom) {
            setActiveSection(sec);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    // On initial load, check URL hash
    const hash = window.location.hash.replace('#', '');
    if (sections.includes(hash)) {
      setActiveSection(hash);
      const section = document.getElementById(hash);
      if (section) {
        section.scrollIntoView();
      }
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className='navbar'>
      {/* Logo */}
      <div className="logo-container" onClick={() => scrollToSection('hero')}>
        <img src={logo} alt="Logo" className="navbar-logo" />
      </div>

      {/* Hamburger */}
      <div className="mobile-menu-icon" onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}>
        <img src={menuOpen} alt="Menu" />
      </div>

      {/* Navigation Links */}
      <ul className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
        {sections.map((sec) => (
          <li
            key={sec}
            className={activeSection === sec ? 'active' : ''}
            onClick={() => scrollToSection(sec)}
          >
            {sec === 'hero'
              ? 'Home'
              : sec === 'services'
              ? 'Certificates'
              : sec.charAt(0).toUpperCase() + sec.slice(1)}
          </li>
        ))}
      </ul>

      {/* Connect button */}
      <div className='nav-connect' onClick={() => scrollToSection('contact')}>
        Connect with me
      </div>
    </nav>
  );
};

export default Navbar;
