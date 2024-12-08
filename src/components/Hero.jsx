import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';
import satoruGojo from '../assets/images/avatar.jpg'; // Adjust the path if needed
export default function Hero() {
  const nameVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', damping: 10, stiffness: 200 },
    },
  };

  return (
    <section className="hero">
      <motion.div
        className="avatar-container"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <img
         src={satoruGojo}
          alt="Yashdeep Singh"
          className="avatar"
        />
      </motion.div>
      <motion.h1 
        variants={nameVariants}
        initial="hidden"
        animate="visible"
      >
        {'Yashdeep Singh'.split('').map((letter, index) => (
          <motion.span key={index} variants={letterVariants}>
            {letter}
          </motion.span>
        ))}
      </motion.h1>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        "Passionate developer turning dreams into digital realities."
      </motion.h2>
    </section>
  );
}

