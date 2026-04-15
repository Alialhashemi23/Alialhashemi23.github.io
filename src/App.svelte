<script>
  import Navigation from './lib/components/Navigation.svelte';
  import Hero from './lib/components/Hero.svelte';
  import About from './lib/components/About.svelte';
  import Projects from './lib/components/Projects.svelte';
  import Skills from './lib/components/Skills.svelte';
  import Contact from './lib/components/Contact.svelte';
</script>

<Navigation />
<Hero />
<About />
<Projects />
<Skills />
<Contact />

<footer class="footer">
  <p>&copy; 2026 Ali Al-Hashemi. All rights reserved.</p>
  <p>Crafted with <span class="heart">♥</span> and Svelte</p>
</footer>

<style>
  :global(html, body) {
    scroll-behavior: smooth;
  }

  .footer {
    background: rgba(17, 24, 39, 0.8);
    border-top: 1px solid rgba(99, 102, 241, 0.2);
    padding: 2rem;
    text-align: center;
    color: #9ca3af;
  }

  .footer p {
    margin: 0.5rem 0;
  }

  .heart {
    color: var(--secondary);
    animation: heartbeat 1s ease-in-out infinite;
  }

  @keyframes heartbeat {
    0%, 100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.2);
    }
  }
</style>
