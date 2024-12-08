import React from 'react';
import { motion } from 'framer-motion';
import './Contact.css';

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <motion.div
        className="contact-content"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2>Contact Me</h2>
        <form className="contact-form">
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <textarea placeholder="Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </motion.div>
    </section>
  );
}

