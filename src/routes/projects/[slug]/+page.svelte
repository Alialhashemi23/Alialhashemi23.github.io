<script>
  import Meta from '$lib/components/Meta.svelte';
  import Icon from '$lib/components/Icon.svelte';
  import Architecture from '$lib/components/Architecture.svelte';
  import { codeUrl, person } from '$lib/data/portfolio';
  export let data;
  $: project = data.project;
  $: nextProject = data.nextProject;
</script>

<Meta
  title={`${project.title} — Ali Al-Hashemi`}
  description={project.summary}
  path={`/projects/${project.slug}/`}
/>

<div class="case-page wrap">
  <a class="back-link" href="/#work"
    ><Icon name="back" size={15} /> All selected work</a
  >
  <header class="case-header">
    <p class="eyebrow">{project.number} / {project.category}</p>
    <h1>{project.title}</h1>
    <p class="case-subtitle">{project.headline}</p>
    <p class="case-description">{project.detail}</p>
    <div class="tags">
      {#each project.tags as tag}<span>{tag}</span>{/each}
    </div>
    <div class="case-actions">
      <a
        class="button primary"
        href={codeUrl(project)}
        target="_blank"
        rel="noreferrer"
        ><Icon name="code" size={17} /> Explore the source <Icon
          name="arrow"
          size={15}
        /></a
      ><a class="text-link" href="#evidence"
        >View evidence <Icon name="right" size={16} /></a
      >
    </div>
  </header>
  <div class="case-status">
    <span></span>
    <p><strong>{project.status}.</strong> {project.statusDetail}</p>
  </div>
  <div class="case-body">
    <div class="case-main">
      <section aria-labelledby="problem-title">
        <h2 id="problem-title">The problem</h2>
        <p>{project.problem}</p>
      </section>
      <section aria-labelledby="architecture-title">
        <h2 id="architecture-title">How it fits together</h2>
        <p>{project.architecture}</p>
        <div class={`case-architecture ${project.color}`}>
          <Architecture kind={project.diagram} />
        </div>
        <div class="case-flow" aria-label="Architecture flow">
          {#each project.flow as step, i}{#if i > 0}<span aria-hidden="true"
                >→</span
              >{/if}<span>{step}</span>{/each}
        </div>
      </section>
      <section aria-labelledby="decisions-title">
        <h2 id="decisions-title">Decisions & tradeoffs</h2>
        {#each project.decisions as decision, i}<article class="decision">
            <h3><span>0{i + 1}</span>{decision.title}</h3>
            <p>{decision.body}</p>
          </article>{/each}
      </section>
      <section id="evidence" aria-labelledby="validation-title">
        <h2 id="validation-title">Validation & evidence</h2>
        <p>
          Evidence from the project’s implementation, test harnesses, and
          recorded status.
        </p>
        <ul class="validation-list">
          {#each project.validation as item}<li>
              <Icon name="check" size={16} />{item}
            </li>{/each}
        </ul>
      </section>
      <section class="case-scope" aria-labelledby="scope-title">
        <h2 id="scope-title">Current scope</h2>
        <p>{project.limits}</p>
      </section>
      <section aria-labelledby="next-title">
        <h2 id="next-title">The next engineering step</h2>
        <p>{project.next}</p>
      </section>
    </div>
    <aside class="case-side" aria-label="Project source and evidence">
      <div>
        <p class="eyebrow">FOLLOW THE IMPLEMENTATION</p>
        {#each project.evidence as evidence}<a
            href={codeUrl(project, evidence.path)}
            target="_blank"
            rel="noreferrer">{evidence.label}<Icon name="arrow" size={14} /></a
          >{/each}{#if project.ci}<a
            href={project.ci}
            target="_blank"
            rel="noreferrer">Recorded CI run<Icon name="arrow" size={14} /></a
          >{/if}
        <p class="source-label">
          Source snapshot <code>{project.source.ref.slice(0, 7)}</code><br
          />Reviewed {person.reviewed}. Links point to the reviewed
          implementation, including work on development branches.
        </p>
      </div>
    </aside>
  </div>
  <div class="case-next">
    <a class="back-link" href="/#work"
      ><Icon name="back" size={15} /> Back to selected work</a
    >
    <div>
      <small>NEXT CASE STUDY</small><a
        class="next-project"
        href={`/projects/${nextProject.slug}/`}
        >{nextProject.title}<Icon name="right" size={19} /></a
      >
    </div>
  </div>
</div>
