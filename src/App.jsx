import React, { useState, useEffect } from 'react';
import { throttle } from './utils/throttle';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import SocialLinks from './components/SocialLinks';
import './App.css';

export default function App() {
  const [theme, setTheme] = useState('dark');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  useEffect(() => {
    const handleScroll = throttle(() => {
      setIsScrolled(window.pageYOffset > 50);
    }, 100);

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`app ${theme} ${isScrolled ? 'scrolled' : ''}`}>
      <Navbar theme={theme} setTheme={setTheme} />
      <div className="backdrop-gradient" />
      <main className="main">
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>
      <SocialLinks />
    </div>
  );
}

