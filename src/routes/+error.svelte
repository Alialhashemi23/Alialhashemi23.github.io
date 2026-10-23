<script>
  import { page } from '$app/state';
  import Meta from '$lib/components/Meta.svelte';
  import Icon from '$lib/components/Icon.svelte';
</script>

<Meta
  title="Page not found — Ali Al-Hashemi"
  description="Find Ali Al-Hashemi’s software engineering projects, professional experience, and contact information."
/>
<section class="error-page wrap">
  <p class="eyebrow">{page.status} / LET’S FIND THE RIGHT PAGE</p>
  <h1>This page took<br />a different path.</h1>
  <p>
    The page you’re looking for isn’t here. My projects, experience, and contact
    information are on the homepage.
  </p>
  <a class="button primary" href="/"
    >Back to the homepage <Icon name="right" size={18} /></a
  >
</section>
