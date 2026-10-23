<script>
  import '@fontsource/ibm-plex-mono/latin-400.css';
  import headingFont from '@fontsource-variable/manrope/files/manrope-latin-wght-normal.woff2?url';
  import bodyFont from '@fontsource-variable/inter/files/inter-latin-wght-normal.woff2?url';
  import '../app.css';
  import Icon from '$lib/components/Icon.svelte';
  import { person } from '$lib/data/portfolio';
  import { afterNavigate } from '$app/navigation';
  let menuOpen = false;
  afterNavigate(() => {
    menuOpen = false;
  });
</script>

<svelte:head>
  <link
    rel="preload"
    href={headingFont}
    as="font"
    type="font/woff2"
    crossorigin="anonymous"
  />
  <link
    rel="preload"
    href={bodyFont}
    as="font"
    type="font/woff2"
    crossorigin="anonymous"
  />
</svelte:head>

<a class="skip-link" href="#main-content">Skip to content</a>
<header class="site-header">
  <div class="header-inner">
    <a class="brand" href="/"
      ><span class="brand-mark" aria-hidden="true">a<span>.</span></span><span
        >ALI AL-HASHEMI</span
      ></a
    >
    <button
      class="menu-toggle"
      aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
      aria-expanded={menuOpen}
      aria-controls="main-navigation"
      onclick={() => (menuOpen = !menuOpen)}
      ><Icon name={menuOpen ? 'close' : 'menu'} /></button
    >
    <nav
      id="main-navigation"
      aria-label="Main navigation"
      class:open={menuOpen}
    >
      <a href="/#work" onclick={() => (menuOpen = false)}>Selected work</a>
      <a href="/#experience" onclick={() => (menuOpen = false)}>Experience</a>
      <a href="/#about" onclick={() => (menuOpen = false)}>About</a>
      <a
        class="nav-resume"
        href={person.resume}
        target="_blank"
        rel="noreferrer">Résumé <Icon name="arrow" size={15} /></a
      >
    </nav>
  </div>
</header>

<main id="main-content" tabindex="-1"><slot /></main>

<footer class="site-footer">
  <div class="footer-top">
    <a class="brand" href="/"
      ><span class="brand-mark" aria-hidden="true">a<span>.</span></span><span
        >ALI AL-HASHEMI</span
      ></a
    >
    <p>Built with care. Always learning.</p>
    <a href="#main-content" class="back-top"
      >Back to top <Icon name="arrow" size={15} /></a
    >
  </div>
  <div class="footer-bottom">
    <span>© {new Date().getUTCFullYear()} Ali Al-Hashemi</span><span
      >Content reviewed {person.reviewed}</span
    >
    <div>
      <a href={person.github} target="_blank" rel="noreferrer"
        >GitHub <Icon name="arrow" size={12} /></a
      ><a href={person.linkedin} target="_blank" rel="noreferrer"
        >LinkedIn <Icon name="arrow" size={12} /></a
      >
    </div>
  </div>
</footer>
