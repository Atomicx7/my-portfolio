import React from 'react';
import { motion } from 'framer-motion';
import './Projects.css';
import image1 from '../assets/images/pw.jpg';
import image2 from '../assets/images/advo.jpg';
import image3 from '../assets/images/pixelwalls.png';
import image4 from '../assets/images/pixelwalls.png';

const projects = [
  { id: 1, title: 'PIXEL WALLS', description: '"Discover a stunning collection of high-quality wallpapers to transform your screens and spaces."', image: image1 },
  { id: 2, title: 'ADVO-KIDS', description: "Empowering children with safety knowledge through engaging and interactive learning experiences.", image: image2 },
  { id: 3, title: 'ChatX', description: 'Java Client-Server Chat Application with interactive UI and real-time messaging.', image: image3 },
  { id: 4, title: 'Project 4', description: 'A brief description of Project 4', image: image4 },
];

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project }) {
  return (
    <motion.div
      className="project-card"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.1 }}
    >
      <div className="project-image">
<img src={project.image} alt={project.title} />
      </div>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
    </motion.div>
  );
}

