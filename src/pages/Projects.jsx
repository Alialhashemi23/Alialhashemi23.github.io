import React from 'react'
import { motion } from 'framer-motion'

function Projects() {
  const projects = [
    {
      id: 1,
      title: "ShmupGame",
      description: "A 2D vertical shoot-'em-up game built with MonoGame.",
      technologies: ["C#", "MonoGame"],
      repoUrl: "https://github.com/Alialhashemi23/ShmupGame",
      liveUrl: "", // optional if you have a live link
      imageUrl: "https://via.placeholder.com/300x200?text=ShmupGame"
    },
    {
      id: 2,
      title: "Future Project: Roguelike",
      description: "Currently working on a procedural Pokémon Mystery Dungeon-style roguelike in C#, focusing on dynamic dungeon generation, turn-based combat, and party mechanics.",
      technologies: ["C#", "Procedural Generation", "Game Development"],
      imageUrl: "https://via.placeholder.com/300x200?text=Coming+Soon"
    },
    {
      id: 3,
      title: "Future Project: Game Boy Emulator",
      description: "Planning and developing a Game Boy emulator from scratch in C#, focusing on CPU instruction emulation, memory mapping, graphics rendering, and accurate hardware behavior.",
      technologies: ["C#", "Emulation", "Low-Level Programming"],
      imageUrl: "https://via.placeholder.com/300x200?text=Game+Boy+Emulator"
    }
  ]

  return (
    <motion.div
      className="page-container"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.5 }}
    >
      <h1>My Projects</h1>

      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <img 
              src={project.imageUrl} 
              alt={project.title} 
              className="project-image"
            />
      <div className="project-details">
        <h3>
          {project.repoUrl ? (
            <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
              {project.title}
            </a>
          ) : (
            project.title
          )}
        </h3>
        <p>{project.description}</p>

        <div className="tech-stack">
          {project.technologies.map((tech, index) => (
            <span key={index} className="tech-tag">{tech}</span>
          ))}
        </div>
        </div>
      </div>
        ))}
      </div>
    </motion.div>
  )
}

export default Projects
