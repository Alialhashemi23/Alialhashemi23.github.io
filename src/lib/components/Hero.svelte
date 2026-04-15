<script>
  let mousePosition = { x: 0, y: 0 };

  const handleMouseMove = (e) => {
    mousePosition = {
      x: (e.clientX / window.innerWidth) * 20,
      y: (e.clientY / window.innerHeight) * 20
    };
  };
</script>

<section id="home" class="hero" on:mousemove={handleMouseMove}>
  <div class="background-animation">
    <div class="blob blob-1" style="--x: {mousePosition.x}px; --y: {mousePosition.y}px;"></div>
    <div class="blob blob-2" style="--x: {-mousePosition.x}px; --y: {-mousePosition.y}px;"></div>
  </div>

  <div class="hero-content">
    <h1 class="hero-title">
      <span class="gradient-text">Creative Developer</span>
      <br />
      Building Amazing Experiences
    </h1>
    <p class="hero-subtitle">
      Crafting beautiful, functional, and responsive web solutions with modern technologies.
    </p>
    <div class="hero-cta">
      <button class="btn btn-primary">View My Work</button>
      <button class="btn btn-secondary">Get In Touch</button>
    </div>

    <div class="social-links">
      <a href="https://github.com/alialhashemi23" target="_blank" rel="noopener noreferrer" class="social-link" title="GitHub">
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.6.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      </a>
      <a href="https://linkedin.com/in/alialhashemi" target="_blank" rel="noopener noreferrer" class="social-link" title="LinkedIn">
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
        </svg>
      </a>
      <a href="#" class="social-link" title="Twitter">
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.953 4.57a10 10 0 002.856-3.886 9.95 9.95 0 01-2.876.794 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
        </svg>
      </a>
    </div>
  </div>

</section>

<style>
  .hero {
    position: relative;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    padding-top: 80px;
  }

  .background-animation {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    overflow: hidden;
  }

  .blob {
    position: absolute;
    border-radius: 50%;
    filter: blur(80px);
    opacity: 0.1;
    mix-blend-mode: multiply;
  }

  .blob-1 {
    width: 400px;
    height: 400px;
    background: var(--primary);
    top: 20%;
    left: 10%;
    animation: float 20s infinite ease-in-out;
    transform: translate(var(--x), var(--y));
  }

  .blob-2 {
    width: 400px;
    height: 400px;
    background: var(--secondary);
    bottom: 10%;
    right: 10%;
    animation: float 25s infinite ease-in-out reverse;
    transform: translate(var(--x), var(--y));
  }

  @keyframes float {
    0%, 100% {
      transform: translate(0, 0);
    }
    50% {
      transform: translate(30px, -30px);
    }
  }

  .hero-content {
    position: relative;
    z-index: 10;
    text-align: center;
    max-width: 800px;
  }

  .hero-title {
    font-size: 4rem;
    line-height: 1.2;
    margin-bottom: 1.5rem;
    animation: slideInUp 0.8s ease-out;
  }

  .gradient-text {
    background: linear-gradient(135deg, var(--primary), var(--secondary));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .hero-subtitle {
    font-size: 1.25rem;
    color: #d1d5db;
    margin-bottom: 2rem;
    animation: slideInUp 0.8s ease-out 0.2s backwards;
  }

  .hero-cta {
    display: flex;
    gap: 1rem;
    justify-content: center;
    margin-bottom: 3rem;
    animation: slideInUp 0.8s ease-out 0.4s backwards;
    flex-wrap: wrap;
  }

  .btn {
    padding: 1rem 2rem;
    border-radius: 8px;
    font-size: 1rem;
    font-weight: 600;
    transition: all 0.3s ease;
  }

  .btn-primary {
    background: linear-gradient(135deg, var(--primary), var(--primary-dark));
    color: white;
    box-shadow: 0 4px 15px rgba(99, 102, 241, 0.4);
  }

  .btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(99, 102, 241, 0.6);
  }

  .btn-secondary {
    background: transparent;
    color: var(--primary);
    border: 2px solid var(--primary);
  }

  .btn-secondary:hover {
    background: var(--primary);
    color: white;
  }

  .social-links {
    display: flex;
    gap: 1.5rem;
    justify-content: center;
    margin-top: 2rem;
    animation: slideInUp 0.8s ease-out 0.6s backwards;
  }

  .social-link {
    width: 45px;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid var(--primary);
    border-radius: 50%;
    color: var(--primary);
    transition: all 0.3s ease;
  }

  .social-link:hover {
    background: var(--primary);
    color: white;
    transform: translateY(-3px);
  }

  .social-link svg {
    width: 24px;
    height: 24px;
  }

  @keyframes slideInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 768px) {
    .hero-title {
      font-size: 2.25rem;
    }

    .hero-subtitle {
      font-size: 1rem;
    }

    .hero-cta {
      flex-direction: column;
    }

    .btn {
      width: 100%;
    }
  }
</style>
