import React from 'react';
import { motion } from 'framer-motion';
import './Navbar.css';

export default function Navbar({ theme, setTheme }) {
  return (
    <motion.nav 
      className="navbar"
      initial={{ y: -100 }}
      animate={{ y: 10 }}
      transition={{ duration: 0.5 }}
    >
      <div className="logo">ATX</div>
      <ul className="nav-links">
        <li><a href="#projects">Projects</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#technologies">Technologies</a></li>     
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="theme-toggle">
        <span className="theme-icon">🌙</span>
        <label className="switch">
          <input
            type="checkbox"
            checked={theme === 'light'}
            onChange={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          />
          <span className="slider round"></span>
        </label>
        <span className="theme-icon">☀️</span>
      </div>
    </motion.nav>
  );
}

