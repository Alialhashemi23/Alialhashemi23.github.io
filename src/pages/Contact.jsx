import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import './Contact.css';


function Contact() {
  return (
    <motion.div
      className="page-container"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.5 }}
    >
      <h1>Contact Me</h1>

      <div className="contact-content">
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p>I'm always open to new opportunities, collaborations, or just a friendly chat...</p>

          <div className="contact-methods">
            <div className="contact-method">
              <h3>Email</h3>
              <p>alialh01@gmail.com</p>
            </div>
            <div className="contact-method">
              <h3>Location</h3>
              <p>Dearborn Heights, MI</p>
            </div>
            <div className="contact-method">
              <h3>Social</h3>
              <div className="social-links">
                <a href="https://github.com/Alialhashemi23" target="_blank" rel="noopener noreferrer">
                  <FaGithub size={24} />
                </a>
                <a href="https://www.linkedin.com/in/alialhashemi/" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form-container">
          <h2>Send a Message</h2>
          <form action="https://formspree.io/f/meogeobk" method="POST" className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" required />
            </div>

            <button type="submit" className="submit-button">Send</button>
          </form>
        </div>
      </div>
    </motion.div>
  );
}

export default Contact;
