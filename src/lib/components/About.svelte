<section id="about" class="about-section">
  <div class="about-container">
    <div class="about-text">
      <h2>About Me</h2>
      <p class="lead">
        I'm Ali — a developer who spends equal time obsessing over game feel and clean API design.
      </p>
      <p>
        My background is split between game development and full-stack web work. On the games side, I build in
        C# with MonoGame — everything from roguelike dungeon crawlers to shoot-em-ups. On the web side, I work
        across the stack with Angular and .NET, and I'm currently learning Svelte (hence this site).
      </p>
      <p>
        What drives me is the intersection of systems and experience — whether that's designing a combat system
        with type matchups, architecting a clean backend API, or figuring out why a game just <em>feels</em> right
        to play. I care a lot about the craft.
      </p>
      <p>
        When I'm not coding, I'm probably playing the games that inspired the ones I'm building.
      </p>
      <div class="about-links">
        <a href="https://github.com/alialhashemi23" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
          View GitHub
        </a>
        <a href="https://linkedin.com/in/alialhashemi" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">
          Connect on LinkedIn
        </a>
      </div>
    </div>

    <div class="about-highlights">
      <div class="highlight-card">
        <div class="highlight-icon">🎮</div>
        <h3>Game Dev</h3>
        <p>Building games with C# and MonoGame — roguelikes, shmups, idle games, and a Game Boy emulator.</p>
      </div>
      <div class="highlight-card">
        <div class="highlight-icon">🌐</div>
        <h3>Full-Stack Web</h3>
        <p>Angular frontends, .NET backends, and clean REST APIs. Comfortable across the whole stack.</p>
      </div>
      <div class="highlight-card">
        <div class="highlight-icon">⚙️</div>
        <h3>Systems Thinker</h3>
        <p>Whether it's an ECS architecture or a database schema, I like understanding how things fit together.</p>
      </div>
      <div class="highlight-card">
        <div class="highlight-icon">🚀</div>
        <h3>Always Building</h3>
        <p>Multiple projects on the go at any given time. Check GitHub for the latest.</p>
      </div>
    </div>
  </div>
</section>

<style>
  .about-section {
    padding: 5rem 2rem;
  }

  .about-container {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: start;
  }

  .about-text h2 {
    font-size: 2.25rem;
    margin-bottom: 1.5rem;
    background: linear-gradient(135deg, var(--primary), var(--secondary));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .lead {
    font-size: 1.2rem;
    color: #e5e7eb;
    margin-bottom: 1.25rem;
    line-height: 1.7;
  }

  .about-text p {
    color: #d1d5db;
    margin-bottom: 1.25rem;
    line-height: 1.8;
  }

  .about-text em {
    color: var(--primary);
    font-style: italic;
  }

  .about-links {
    display: flex;
    gap: 1rem;
    margin-top: 2rem;
    flex-wrap: wrap;
  }

  .btn {
    padding: 0.75rem 1.5rem;
    border-radius: 8px;
    font-size: 0.95rem;
    font-weight: 600;
    transition: all 0.3s ease;
    display: inline-block;
    text-decoration: none;
  }

  .btn-primary {
    background: linear-gradient(135deg, var(--primary), var(--primary-dark));
    color: white;
    box-shadow: 0 4px 15px rgba(99, 102, 241, 0.4);
  }

  .btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(99, 102, 241, 0.6);
    color: white;
  }

  .btn-secondary {
    background: transparent;
    color: var(--primary);
    border: 2px solid var(--primary);
  }

  .btn-secondary:hover {
    background: var(--primary);
    color: white;
    transform: translateY(-2px);
  }

  .about-highlights {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.25rem;
  }

  .highlight-card {
    background: rgba(99, 102, 241, 0.05);
    border: 1px solid rgba(99, 102, 241, 0.2);
    border-radius: 12px;
    padding: 1.5rem;
    transition: all 0.3s ease;
  }

  .highlight-card:hover {
    background: rgba(99, 102, 241, 0.1);
    border-color: var(--primary);
    transform: translateY(-4px);
  }

  .highlight-icon {
    font-size: 2rem;
    margin-bottom: 0.75rem;
  }

  .highlight-card h3 {
    font-size: 1rem;
    color: white;
    margin-bottom: 0.5rem;
  }

  .highlight-card p {
    font-size: 0.875rem;
    color: #9ca3af;
    line-height: 1.6;
    margin: 0;
  }

  @media (max-width: 900px) {
    .about-container {
      grid-template-columns: 1fr;
      gap: 2.5rem;
    }
  }

  @media (max-width: 600px) {
    .about-highlights {
      grid-template-columns: 1fr;
    }

    .about-section {
      padding: 3rem 1rem;
    }
  }
</style>
