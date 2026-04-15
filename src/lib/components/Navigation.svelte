<script>
  import { onMount } from 'svelte';
  
  let isScrolled = false;
  let isMobileMenuOpen = false;

  onMount(() => {
    const handleScroll = () => {
      isScrolled = window.scrollY > 50;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  const toggleMobileMenu = () => {
    isMobileMenuOpen = !isMobileMenuOpen;
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      isMobileMenuOpen = false;
    }
  };
</script>

<nav class="navbar" class:scrolled={isScrolled}>
  <div class="container">
    <a href="#" class="logo">Portfolio</a>
    
    <button class="hamburger" on:click={toggleMobileMenu} class:active={isMobileMenuOpen}>
      <span></span>
      <span></span>
      <span></span>
    </button>

    <ul class="nav-links" class:active={isMobileMenuOpen}>
      <li><a href="#home" on:click={() => scrollToSection('home')}>Home</a></li>
      <li><a href="#about" on:click={() => scrollToSection('about')}>About</a></li>
      <li><a href="#projects" on:click={() => scrollToSection('projects')}>Projects</a></li>
      <li><a href="#skills" on:click={() => scrollToSection('skills')}>Skills</a></li>
      <li><a href="#contact" on:click={() => scrollToSection('contact')}>Contact</a></li>
    </ul>
  </div>
</nav>

<style>
  .navbar {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1000;
    transition: all 0.3s ease;
    background: rgba(31, 41, 55, 0.8);
    backdrop-filter: blur(10px);
  }

  .navbar.scrolled {
    background: rgba(31, 41, 55, 0.95);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 1rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo {
    font-size: 1.5rem;
    font-weight: 700;
    background: linear-gradient(135deg, var(--primary), var(--secondary));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .nav-links {
    display: flex;
    list-style: none;
    gap: 2rem;
  }

  .nav-links a {
    color: #e5e7eb;
    transition: color 0.3s ease;
  }

  .nav-links a:hover {
    color: var(--primary);
  }

  .hamburger {
    display: none;
    flex-direction: column;
    background: none;
    padding: 0;
    gap: 0.5rem;
  }

  .hamburger span {
    width: 25px;
    height: 3px;
    background: #e5e7eb;
    transition: all 0.3s ease;
    display: block;
  }

  .hamburger.active span:nth-child(1) {
    transform: rotate(45deg) translateY(10px);
  }

  .hamburger.active span:nth-child(2) {
    opacity: 0;
  }

  .hamburger.active span:nth-child(3) {
    transform: rotate(-45deg) translateY(-10px);
  }

  @media (max-width: 768px) {
    .hamburger {
      display: flex;
    }

    .nav-links {
      position: absolute;
      top: 70px;
      left: 0;
      right: 0;
      flex-direction: column;
      background: rgba(31, 41, 55, 0.95);
      padding: 2rem;
      gap: 1rem;
      max-height: 0;
      overflow: hidden;
      transition: max-height 0.3s ease;
    }

    .nav-links.active {
      max-height: 400px;
    }
  }
</style>
