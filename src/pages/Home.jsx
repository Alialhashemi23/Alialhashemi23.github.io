import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { TbBrandCSharp } from 'react-icons/tb'
import { SiDotnet, SiMonogame, SiSalesforce } from "react-icons/si";
import './Home.css'

function Home() {
  return (
    <motion.div
      className="page-container"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <section className="home-hero">
        <h1>Hello, I'm Ali</h1>
        <p className="hero-subtitle">
          I build games, web apps, and emulators with C#, .NET, React, and a lot of curiosity.
        </p>
        <Link to="/projects" className="cta-button">View My Projects</Link>
      </section>

      {/* Tech Stack Icons */}
      <section className="tech-stack-preview">
        <h2>Tech I Use</h2>
        <div className="tech-icons">
          <TbBrandCSharp size={48} />
          <SiDotnet size={48} />
          <SiMonogame size={48} />
          <SiSalesforce size={48} />
        </div>
      </section>

      {/* About Preview */}
      <section className="about-preview">
        <h2>About Me</h2>
        <p>
          I'm a self-taught full-stack developer with a love for problem solving and building meaningful things.
          Whether it's a web platform or a retro game engine, I enjoy creating from the ground up.
        </p>
        <Link to="/about" className="link-button">Learn more →</Link>
      </section>

      {/* Featured Project */}
      <section className="highlight-project">
        <h2>Featured Project: ShmupGame</h2>
        <p>
          A 2D vertical shoot-'em-up game built in MonoGame with player shooting, enemy waves, and scoring logic —
          all coded from scratch in C#.
        </p>
        <Link to="/projects" className="cta-button">See all projects</Link>
      </section>

      {/* Let's Connect */}
      <section className="connect-section">
        <h2>Let’s Connect</h2>
        <p>Have a project, question, or just want to chat? I’d love to hear from you.</p>
        <Link to="/contact" className="cta-button">Get in Touch</Link>
      </section>
    </motion.div>
  )
}

export default Home
