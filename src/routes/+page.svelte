<script>
  import Meta from '$lib/components/Meta.svelte';
  import Icon from '$lib/components/Icon.svelte';
  import Architecture from '$lib/components/Architecture.svelte';
  import {
    person,
    experience,
    projects,
    supporting,
    archive,
    skills,
    codeUrl
  } from '$lib/data/portfolio';
  const profile = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    mainEntity: {
      '@type': 'Person',
      name: person.name,
      jobTitle: person.role,
      url: person.site,
      sameAs: [person.github, person.linkedin]
    }
  };
</script>

<Meta />
<svelte:head
  >{@html `<script type="application/ld+json">${JSON.stringify(profile)}</script>`}</svelte:head
>

<section class="hero wrap" aria-labelledby="hero-title">
  <div class="hero-copy">
    <p class="eyebrow">
      <span class="small-line"></span> SOFTWARE ENGINEER · DEARBORN HEIGHTS, MI
    </p>
    <h1 id="hero-title">
      Full-stack engineer.<br /><span>Systems thinker.</span>
    </h1>
    <p class="hero-intro">
      Hi, I’m Ali. I build production applications with C#/.NET, TypeScript, and
      SQL—and explore how software works, right down to the hardware.
    </p>
    <div class="hero-actions">
      <a class="button primary" href="#work"
        >Explore my work <Icon name="right" size={18} /></a
      ><a
        class="button secondary"
        href={person.resume}
        target="_blank"
        rel="noreferrer">View résumé <Icon name="arrow" size={17} /></a
      >
    </div>
    <div class="hero-context">
      <span class="context-dot"></span>
      <p>
        Currently at <strong>United Wholesale Mortgage</strong><br /><span
          >Studying Computer Science at Georgia Tech</span
        >
      </p>
    </div>
  </div>
  <div class="hero-aside">
    <div class="impact-card">
      <div class="impact-card-top">
        <span class="mono">IN PRODUCTION</span><span class="pill"
          >SQL performance</span
        >
      </div>
      <p class="impact-title">Less waiting.<br />More useful software.</p>
      <div
        class="performance-chart"
        role="img"
        aria-label="Loan dashboard load time: before 30 to 45 seconds, after under 5 seconds"
      >
        <div class="chart-row">
          <span>Before</span>
          <div class="chart-track"><i class="before-bar"></i></div>
          <strong>30–45s</strong>
        </div>
        <div class="chart-row">
          <span>After</span>
          <div class="chart-track"><i class="after-bar"></i></div>
          <strong>&lt;5s</strong>
        </div>
      </div>
      <p class="impact-caption">
        Loan-analytics dashboard load times, improved through indexing and query
        changes.
      </p>
      <a class="impact-link" href="#performance-story"
        >The engineering behind it <Icon name="arrow" size={16} /></a
      >
    </div>
    <div class="hero-aside-foot">
      <span class="mono">A FEW THINGS I CARE ABOUT</span>
      <div>
        <span>Clarity</span><i>·</i><span>Correctness</span><i>·</i><span
          >Follow-through</span
        >
      </div>
    </div>
  </div>
</section>

<div class="discipline-strip">
  <div class="wrap">
    <span class="mono">ACROSS THE STACK</span><span>C# / .NET</span><span
      >React & TypeScript</span
    ><span>SQL & Azure</span><span>Systems & testing</span>
  </div>
</div>

<section id="work" class="work-section wrap" aria-labelledby="work-title">
  <div class="section-heading">
    <div>
      <p class="eyebrow">01 / SELECTED WORK</p>
      <h2 id="work-title">The interesting part<br />is under the hood.</h2>
    </div>
    <p>
      Three projects. Different constraints.<br />A closer look at the decisions
      behind them.
    </p>
  </div>
  <div class="featured-projects">
    {#each projects as project}
      <article class={`project-row ${project.color}`}>
        <div class="project-visual">
          <div class="visual-label">
            <span>{project.number}</span><span>{project.category}</span>
          </div>
          <Architecture kind={project.diagram} />
          <div class="visual-bottom">
            <span>DESIGN → IMPLEMENTATION → VALIDATION</span><span>↗</span>
          </div>
        </div>
        <div class="project-copy">
          <p class="eyebrow">{project.category}</p>
          <h3><a href={`/projects/${project.slug}/`}>{project.title}</a></h3>
          <p class="project-summary">{project.summary}</p>
          <ul class="project-signals">
            {#each project.signals as signal}<li>
                <Icon name="check" size={14} />{signal}
              </li>{/each}
          </ul>
          <div class="tags">
            {#each project.tags as tag}<span>{tag}</span>{/each}
          </div>
          <div class="project-actions">
            <a class="text-link" href={`/projects/${project.slug}/`}
              >Read the case study <Icon name="right" size={17} /></a
            ><a
              class="code-link"
              href={codeUrl(project)}
              target="_blank"
              rel="noreferrer"
              ><Icon name="code" size={17} /> Code <Icon
                name="arrow"
                size={13}
              /></a
            >
          </div>
          <p class="project-status"><span></span>{project.status}</p>
        </div>
      </article>
    {/each}
  </div>
</section>

<section class="more-work-section wrap" aria-labelledby="more-work-title">
  <div class="section-heading compact">
    <div>
      <p class="eyebrow">A LITTLE FURTHER AFIELD</p>
      <h2 id="more-work-title">Curiosity, shipped.</h2>
    </div>
    <p>
      Multiplayer worlds and a very small cat.<br />More places to solve
      interesting problems.
    </p>
  </div>
  <div class="supporting-grid">
    {#each supporting as project}
      <article class="supporting-card">
        <div
          class="supporting-image"
          class:pixel={project.title === 'Kishmish Nano'}
        >
          <img
            src={project.image}
            alt={project.alt}
            width={project.title === 'Kishmish Nano' ? 720 : 1280}
            height={project.title === 'Kishmish Nano' ? 720 : 800}
            loading="lazy"
          /><span class="image-label"
            >{project.title === 'Kishmish Nano'
              ? 'SOFTWARE FRAMEBUFFER'
              : 'IN-GAME CAPTURE'}</span
          >
        </div>
        <div class="supporting-body">
          <p class="eyebrow">{project.category}</p>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <p class="supporting-lesson">{project.lesson}</p>
          <div class="tags">
            {#each project.tags as tag}<span>{tag}</span>{/each}
          </div>
          <div class="supporting-links">
            <a
              class="text-link"
              href={project.code}
              target="_blank"
              rel="noreferrer">Explore source <Icon name="arrow" size={15} /></a
            ><a href={project.evidence} target="_blank" rel="noreferrer"
              >{project.evidenceLabel} <Icon name="arrow" size={13} /></a
            >
          </div>
          <details class="project-note">
            <summary>{project.status}</summary>
            <p>{project.note}</p>
          </details>
        </div>
      </article>
    {/each}
  </div>
  <details class="archive">
    <summary
      ><span>Earlier work <span class="archive-count">03 projects</span></span
      ><span class="archive-plus" aria-hidden="true">+</span></summary
    >
    <div class="archive-list">
      {#each archive as project}<article>
          <div>
            <h3>
              <a href={project.url} target="_blank" rel="noreferrer"
                >{project.title} <Icon name="arrow" size={16} /></a
              >
            </h3>
            <p>{project.description}</p>
          </div>
          <span class="mono">{project.tags}</span>
        </article>{/each}
    </div>
  </details>
</section>

<section
  id="experience"
  class="experience-section"
  aria-labelledby="experience-title"
>
  <div class="wrap">
    <div class="section-heading">
      <div>
        <p class="eyebrow">02 / PRODUCTION EXPERIENCE</p>
        <h2 id="experience-title">Software with<br />real responsibilities.</h2>
      </div>
      <p>
        From data-heavy applications to client delivery,<br />working where the
        details matter.
      </p>
    </div>
    <div class="experience-layout">
      <aside class="experience-intro">
        <div class="mini-mark" aria-hidden="true">↗</div>
        <h3>Built in a team.<br />Used in the real world.</h3>
        <p>
          Production work has shaped how I approach performance,
          maintainability, and the people depending on the software.
        </p>
        <a
          class="text-link"
          href={person.resume}
          target="_blank"
          rel="noreferrer"
          >Full experience in my résumé <Icon name="arrow" size={16} /></a
        >
      </aside>
      <div class="timeline">
        {#each experience as job, index}<article class="job">
            <div class="job-dot" class:current={index < 2}></div>
            <div class="job-meta">
              <span>{job.dates}</span>{#if index === 0}<span
                  class="current-label">CURRENT</span
                >{/if}
            </div>
            <h3>{job.company}</h3>
            <p class="job-role">{job.role}</p>
            <p class="job-description">{job.description}</p>
            <ul>
              {#each job.highlights as highlight}<li>{highlight}</li>{/each}
            </ul>
            <div class="tags">
              {#each job.tags as tag}<span>{tag}</span>{/each}
            </div>
          </article>{/each}
      </div>
    </div>
    <article id="performance-story" class="performance-story">
      <div>
        <p class="eyebrow">ONE EXAMPLE / QUERY PERFORMANCE</p>
        <h3>30–45 seconds.<br /><span>Then, under five.</span></h3>
        <p class="story-context">
          Loan-analytics dashboard at United Wholesale Mortgage
        </p>
      </div>
      <div class="story-steps">
        <div>
          <span>01</span>
          <p>
            <strong>The problem</strong>Large accounts faced slow dashboard
            loads, making a routine view expensive to use.
          </p>
        </div>
        <div>
          <span>02</span>
          <p>
            <strong>The change</strong>A composite index, narrower loan ranges,
            and query filters that avoided table scans.
          </p>
        </div>
        <div>
          <span>03</span>
          <p>
            <strong>The result</strong>Load times moved from 30–45 seconds to
            under 5 seconds. A focused data-access change made the existing
            application more useful.
          </p>
        </div>
        <p class="story-note">
          Outcome reported in my résumé. This public summary omits internal
          implementation details.
        </p>
      </div>
    </article>
  </div>
</section>

<section id="about" class="about-section wrap" aria-labelledby="about-title">
  <div class="about-grid">
    <div class="about-copy">
      <p class="eyebrow">03 / A BIT ABOUT ME</p>
      <h2 id="about-title">I like knowing<br />how things work.</h2>
      <p>
        I’m Ali, a software engineer based in Dearborn Heights, Michigan. My
        professional work spans application development, data, and cloud
        services. My side projects take that curiosity into emulation, real-time
        systems, and small pieces of hardware.
      </p>
      <p>
        I’m pursuing an M.S. in Computer Science, focused on Computing Systems,
        at Georgia Tech. Before software, I studied Biochemistry & Chemical
        Biology—a different route into the same habit of asking how a system
        fits together.
      </p>
      <div class="education">
        <Icon name="book" size={22} />
        <div>
          <strong>Georgia Institute of Technology</strong><span
            >M.S. Computer Science · Computing Systems</span
          ><small>Expected 2028</small>
        </div>
      </div>
      <div class="education small">
        <span>Also along the way</span>
        <p>
          B.S. Biochemistry & Chemical Biology, Wayne State University<br />C# /
          .NET bootcamp, Grand Circus
        </p>
      </div>
    </div>
    <div class="skills-panel">
      <p class="mono">TOOLS, WITH CONTEXT</p>
      {#each skills as group}<div class="skill-group">
          <h3>{group.name}</h3>
          <p>{group.context}</p>
          <div class="tags">
            {#each group.items as item}<span>{item}</span>{/each}
          </div>
        </div>{/each}
    </div>
  </div>
</section>

<section
  id="contact"
  class="contact-section wrap"
  aria-labelledby="contact-title"
>
  <div class="contact-panel">
    <div>
      <p class="eyebrow">LET’S CONNECT</p>
      <h2 id="contact-title">Have something<br />worth building?</h2>
      <p>
        I’m happy to talk software, engineering challenges,<br />and
        opportunities to do useful work.
      </p>
    </div>
    <div class="contact-actions">
      <a class="contact-email" href={`mailto:${person.email}`}
        >{person.email}<Icon name="arrow" size={25} /></a
      >
      <div>
        <a href={person.linkedin} target="_blank" rel="noreferrer"
          >LinkedIn <Icon name="arrow" size={15} /></a
        ><a href={person.github} target="_blank" rel="noreferrer"
          >GitHub <Icon name="arrow" size={15} /></a
        ><a href={person.resume} target="_blank" rel="noreferrer"
          >Résumé <Icon name="download" size={15} /></a
        >
      </div>
      <span class="contact-location"
        ><Icon name="location" size={14} /> {person.location}</span
      >
    </div>
  </div>
</section>
