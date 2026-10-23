<script>
  import { person } from '$lib/data/portfolio';
  export let title = 'Ali Al-Hashemi — Software Engineer';
  export let description =
    'Software engineer building production applications with C#/.NET, React, and SQL. Explore real-time systems, full-stack projects, and hardware emulation.';
  export let path = '/';
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />
  <link rel="canonical" href={`${person.site}${path}`} />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="Ali Al-Hashemi" />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:url" content={`${person.site}${path}`} />
  <meta property="og:image" content={`${person.site}/social-preview.png`} />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta
    property="og:image:alt"
    content="Ali Al-Hashemi, Software Engineer. Production applications, real-time systems, and hardware emulation."
  />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>
