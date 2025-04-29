import React from 'react'
import { motion } from 'framer-motion'

function About() {
  return (
    <motion.div
      className="page-container"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.5 }}
    >
      <h1>About Me</h1>

      <div className="about-content">
        <section className="about-section">
          <h2>Who I Am</h2>
          <p>
            Hello! I'm a passionate developer focused on building intuitive and responsive applications.
            With experience across both frontend and backend technologies, I love creating complete solutions
            that solve real-world problems.
          </p>
        </section>

        <section className="about-section">
          <h2>My Skills</h2>
          <ul className="skills-list">
            <li>React & Modern JavaScript</li>
            <li>HTML5 & CSS3</li>
            <li>C# & .NET Development</li>
            <li>Game Development (MonoGame)</li>
            <li>Database Design & SQL</li>
            <li>Responsive Web Design</li>
            <li>Salesforce Apex</li>
            <li>Lightning Web Components</li>
            <li>Aura Web Components</li>
          </ul>
        </section>

        <section className="about-section">
          <h2>My Journey</h2>
          <p>
            My journey in development began with a curiosity about how software and games work.
            That curiosity evolved into a passion for programming, which I continue to grow through projects,
            collaboration, and continuous learning.
          </p>
        </section>
      </div>
    </motion.div>
  )
}

export default About
