import React from 'react';
import { motion } from 'framer-motion';
import './SocialLinks.css';

export default function SocialLinks() {
  return (
    <motion.section 
      className="social-links"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
    </motion.section>
  );
}

