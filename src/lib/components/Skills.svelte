<script>
  const skills = [
    {
      category: 'Frontend',
      items: ['React', 'Svelte', 'Vue.js', 'TypeScript', 'Tailwind CSS', 'Next.js']
    },
    {
      category: 'Backend',
      items: ['Node.js', 'Python', 'Express', 'FastAPI', 'PostgreSQL', 'MongoDB']
    },
    {
      category: 'Tools & Platforms',
      items: ['Git', 'Docker', 'AWS', 'Firebase', 'Vercel', 'Figma']
    },
    {
      category: 'Soft Skills',
      items: ['Problem Solving', 'Team Collaboration', 'Project Management', 'Communication']
    }
  ];
</script>

<section id="skills" class="skills-section">
  <h2>Skills & Expertise</h2>
  <p class="section-subtitle">Technologies and tools I work with</p>

  <div class="skills-container">
    {#each skills as skillGroup (skillGroup.category)}
      <div class="skill-group">
        <h3>{skillGroup.category}</h3>
        <div class="skills-list">
          {#each skillGroup.items as skill}
            <div class="skill-item">
              <div class="skill-indicator"></div>
              <span>{skill}</span>
            </div>
          {/each}
        </div>
      </div>
    {/each}
  </div>

  <div class="experience-stats">
    <div class="stat">
      <div class="stat-number">5+</div>
      <div class="stat-label">Years Experience</div>
    </div>
    <div class="stat">
      <div class="stat-number">50+</div>
      <div class="stat-label">Projects Completed</div>
    </div>
    <div class="stat">
      <div class="stat-number">30+</div>
      <div class="stat-label">Happy Clients</div>
    </div>
    <div class="stat">
      <div class="stat-number">100%</div>
      <div class="stat-label">Satisfaction Rate</div>
    </div>
  </div>
</section>

<style>
  .skills-section {
    padding: 5rem 2rem;
  }

  :global(.skills-section) h2 {
    text-align: center;
    margin-bottom: 0.5rem;
  }

  .section-subtitle {
    text-align: center;
    color: #9ca3af;
    margin-bottom: 3rem;
    font-size: 1.125rem;
  }

  .skills-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    margin-bottom: 4rem;
  }

  .skill-group {
    background: rgba(99, 102, 241, 0.05);
    border: 1px solid rgba(99, 102, 241, 0.2);
    border-radius: 12px;
    padding: 2rem;
    transition: all 0.3s ease;
  }

  .skill-group:hover {
    background: rgba(99, 102, 241, 0.1);
    border-color: var(--primary);
    transform: translateY(-4px);
  }

  .skill-group h3 {
    color: var(--primary);
    margin-bottom: 1.5rem;
    font-size: 1.25rem;
  }

  .skills-list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .skill-item {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    color: #d1d5db;
  }

  .skill-indicator {
    width: 8px;
    height: 8px;
    background: linear-gradient(135deg, var(--primary), var(--secondary));
    border-radius: 50%;
  }

  .experience-stats {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 2rem;
    margin-top: 4rem;
  }

  .stat {
    text-align: center;
    padding: 2rem;
    background: linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(236, 72, 153, 0.1));
    border: 1px solid rgba(99, 102, 241, 0.2);
    border-radius: 12px;
    transition: all 0.3s ease;
  }

  .stat:hover {
    transform: scale(1.05);
    border-color: var(--primary);
  }

  .stat-number {
    font-size: 2.5rem;
    font-weight: 700;
    background: linear-gradient(135deg, var(--primary), var(--secondary));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 0.5rem;
  }

  .stat-label {
    color: #9ca3af;
    font-size: 0.95rem;
  }

  @media (max-width: 768px) {
    .skills-container {
      grid-template-columns: 1fr;
    }

    .experience-stats {
      grid-template-columns: repeat(2, 1fr);
    }

    .skills-section {
      padding: 3rem 1rem;
    }
  }
</style>
