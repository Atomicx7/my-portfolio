import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

export default function About() {
  return (
    <section id="about" className="about">
      <motion.div
        className="about-content"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2>About Me</h2>
        <p>
          I'm a passionate full stack developer with over 5 years of experience in building modern web applications.
          My expertise spans across various technologies, including React, Node.js, and cloud platforms like AWS and Google Cloud.
        </p>
        <p>
          I love creating elegant solutions to complex problems and am always eager to learn new technologies.
          My approach to development is centered around writing clean, maintainable code and delivering exceptional user experiences.
        </p>
        <p>
          When I'm not coding, you can find me exploring new hiking trails, experimenting with new recipes in the kitchen,
          or contributing to open-source projects. I'm always open to new challenges and opportunities to grow as a developer.
        </p>
      </motion.div>
    </section>
  );
}

