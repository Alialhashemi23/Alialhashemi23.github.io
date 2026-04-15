<script>
  const projects = [
    {
      id: 1,
      title: 'PokeTeamBuilder',
      description: 'A full-stack Pokémon team-building app with a .NET/C# backend and Angular frontend. Pulls live data from PokéAPI with bulk fetching, strongly-typed models, and async/await architecture.',
      image: 'https://images.unsplash.com/photo-1542779283-429940ce8336?w=500&h=300&fit=crop',
      tags: ['Angular', '.NET', 'C#', 'TypeScript', 'PokéAPI'],
      github: 'https://github.com/alialhashemi23/PokeTeamBuilder',
      demo: '#'
    },
    {
      id: 2,
      title: 'PMDRoguelike',
      description: 'A fan-made roguelike dungeon crawler inspired by Pokémon Mystery Dungeon. Features procedurally generated dungeons, turn-based combat with type matchups, and an Entity Component System built on MonoGame.',
      image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=500&h=300&fit=crop',
      tags: ['C#', 'MonoGame', '.NET 6', 'Roguelike', 'ECS'],
      github: 'https://github.com/alialhashemi23/PMDRoguelike',
      demo: '#'
    },
    {
      id: 3,
      title: 'ShmupGame',
      description: 'A 2D shoot-\'em-up built with C# and MonoGame. Features keyboard-controlled player movement, a projectile firing system, dynamic randomized enemy spawning, collision detection, and score tracking.',
      image: 'https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?w=500&h=300&fit=crop',
      tags: ['C#', 'MonoGame', 'Game Dev'],
      github: 'https://github.com/alialhashemi23/ShmupGame',
      demo: '#'
    },
    {
      id: 4,
      title: 'MunchKeep',
      description: 'An early-stage idle game concept with dungeon-building mechanics. Built with C# and MonoGame, exploring the intersection of base management and idle gameplay loops.',
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=500&h=300&fit=crop',
      tags: ['C#', 'MonoGame', 'Idle Game', 'Game Dev'],
      github: 'https://github.com/alialhashemi23/MunchKeep',
      demo: '#'
    },
    {
      id: 5,
      title: 'GBEmu',
      description: 'An in-progress Game Boy emulator written in C#. Aiming to accurately emulate the original Game Boy hardware, including the CPU, memory, and display.',
      image: 'https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?w=500&h=300&fit=crop',
      tags: ['C#', 'Emulation', 'Systems Programming'],
      github: 'https://github.com/alialhashemi23/GBEmu',
      demo: '#'
    }
  ];
</script>

<section id="projects" class="projects-section">
  <h2>Featured Projects</h2>
  <p class="section-subtitle">Check out some of my recent work</p>

  <div class="projects-grid">
    {#each projects as project (project.id)}
      <div class="project-card">
        <div class="project-image">
          <img src={project.image} alt={project.title} loading="lazy" />
          <div class="project-overlay">
            {#if project.demo !== '#'}
              <a href={project.demo} class="overlay-btn" target="_blank" rel="noopener noreferrer">View Demo</a>
            {/if}
            <a href={project.github} class="overlay-btn" target="_blank" rel="noopener noreferrer">View Code</a>
          </div>
        </div>
        <div class="project-content">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <div class="project-tags">
            {#each project.tags as tag}
              <span class="tag">{tag}</span>
            {/each}
          </div>
        </div>
      </div>
    {/each}
  </div>
</section>

<style>
  .projects-section {
    background: linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(236, 72, 153, 0.1));
    padding: 5rem 2rem;
  }

  :global(.projects-section) h2 {
    text-align: center;
    margin-bottom: 0.5rem;
  }

  .section-subtitle {
    text-align: center;
    color: #9ca3af;
    margin-bottom: 3rem;
    font-size: 1.125rem;
  }

  .projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 2rem;
  }

  .project-card {
    background: rgba(31, 41, 55, 0.5);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(99, 102, 241, 0.2);
    border-radius: 12px;
    overflow: hidden;
    transition: all 0.3s ease;
    cursor: pointer;
  }

  .project-card:hover {
    transform: translateY(-8px);
    border-color: var(--primary);
    box-shadow: 0 12px 40px rgba(99, 102, 241, 0.3);
  }

  .project-image {
    position: relative;
    overflow: hidden;
    height: 200px;
  }

  .project-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  .project-card:hover .project-image img {
    transform: scale(1.1);
  }

  .project-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .project-card:hover .project-overlay {
    opacity: 1;
  }

  .overlay-btn {
    padding: 0.75rem 1.5rem;
    background: var(--primary);
    color: white;
    border-radius: 6px;
    font-weight: 600;
    transition: all 0.3s ease;
    display: inline-block;
  }

  .overlay-btn:hover {
    background: var(--secondary);
    transform: scale(1.05);
  }

  .project-content {
    padding: 1.5rem;
  }

  .project-content h3 {
    color: white;
    margin-bottom: 0.75rem;
  }

  .project-content p {
    color: #d1d5db;
    margin-bottom: 1rem;
    font-size: 0.95rem;
  }

  .project-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .tag {
    display: inline-block;
    padding: 0.25rem 0.75rem;
    background: rgba(99, 102, 241, 0.2);
    color: var(--primary);
    border-radius: 20px;
    font-size: 0.8rem;
    font-weight: 500;
  }

  @media (max-width: 768px) {
    .projects-grid {
      grid-template-columns: 1fr;
    }

    .projects-section {
      padding: 3rem 1rem;
    }
  }
</style>
