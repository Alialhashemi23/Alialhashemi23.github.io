export const person = {
  name: 'Ali Al-Hashemi',
  role: 'Software Engineer',
  email: 'alialh01@gmail.com',
  location: 'Dearborn Heights, Michigan',
  github: 'https://github.com/Alialhashemi23',
  linkedin: 'https://www.linkedin.com/in/alialhashemi/',
  resume: '/resume/Ali-AlHashemi-Resume.pdf',
  site: 'https://alialhashemi23.github.io',
  reviewed: 'October 23, 2026'
};

export const experience = [
  {
    company: 'United Wholesale Mortgage',
    role: 'Software Developer',
    dates: 'Oct 2024 — Present',
    description:
      'Building production software across .NET, React, SQL Server, and Salesforce.',
    highlights: [
      'Reduced loan-analytics dashboard loads from 30–45 seconds to under 5 seconds through a composite index, narrower loan ranges, and query filters that avoided table scans.',
      'Contribute to a .NET document fraud-detection microservice that evaluates AI-extracted financial data against business rules.',
      'Selected as interim team lead for 2–3 months, balancing team coordination with individual sprint commitments.'
    ],
    tags: ['C# / .NET', 'React', 'SQL Server', 'Salesforce']
  },
  {
    company: 'Red Ribbon Systems',
    role: 'Software Engineer & Co-Founder',
    dates: 'Mar 2025 — Present',
    description:
      'Connecting client requirements to architecture and working software.',
    highlights: [
      'Helped secure a healthcare software engagement and worked on requirements, architecture, and delivery planning.',
      'Developed a SvelteKit UI and .NET backend with Azure Cosmos DB; hosted client-review builds and performed integration and end-to-end testing.'
    ],
    tags: ['SvelteKit', '.NET', 'Azure Cosmos DB']
  },
  {
    company: 'All Pro Logistics / MeetPlayWin',
    role: 'Software Development & Service Operations',
    dates: 'Mar — Oct 2024',
    description: 'Software and operations in a working fleet environment.',
    highlights: [
      'Supported adoption of a service-scheduling PWA for approximately 200 drivers and implemented application features.'
    ],
    tags: ['PWA', 'Service operations']
  },
  {
    company: 'JATO Dynamics',
    role: 'Associate Full-Stack .NET Developer',
    dates: 'Oct 2022 — Feb 2024',
    description:
      'Full-stack development supporting the review of complex vehicle data.',
    highlights: [
      'Worked within the team building a .NET 6, React, and Azure Cosmos DB exception-management application for vehicle records an automated ETL pipeline could not classify.'
    ],
    tags: ['.NET', 'React', 'Azure Cosmos DB']
  }
];

export const skills = [
  {
    name: 'Application development',
    items: [
      'C# / .NET',
      'ASP.NET Core',
      'React',
      'TypeScript',
      'Angular',
      'SvelteKit'
    ],
    context: 'Production work and full-stack projects'
  },
  {
    name: 'Data & infrastructure',
    items: [
      'SQL Server',
      'Entity Framework',
      'Azure',
      'Cosmos DB',
      'SQLite',
      'Docker'
    ],
    context: 'Persistence, query performance, and delivery'
  },
  {
    name: 'Engineering practice',
    items: [
      'xUnit',
      'GitHub Actions',
      'REST APIs',
      'System design',
      'Code review',
      'Debugging'
    ],
    context: 'Making behavior testable and repeatable'
  },
  {
    name: 'Beyond the web',
    items: [
      'C',
      'MonoGame',
      'Godot',
      'Hardware emulation',
      'Salesforce Apex / LWC'
    ],
    context: 'Systems projects and platform-specific work'
  }
];

export const projects = [
  {
    slug: 'settle-it',
    title: 'Settle It',
    category: 'Real-time applications',
    number: '01',
    color: 'mint',
    diagram: 'rooms',
    headline: 'Keeping the room on the same page.',
    summary:
      'A real-time party game with live voting, shared room state, and a daily community challenge.',
    detail:
      'The original Bun/Socket.IO version was deployed. The current rebuild separates a SvelteKit interface, a pure TypeScript rules engine, durable room state, and shared reporting.',
    status: 'Cloudflare rebuild',
    statusDetail:
      'Rebuild implemented; hosted and phone playtesting remain to be verified.',
    tags: ['TypeScript', 'SvelteKit', 'Cloudflare', 'SQLite'],
    signals: ['Durable room state', 'Idempotent commands', 'Failure recovery'],
    problem:
      'A voting game needs one coherent view of the round even when people reconnect, commands arrive twice, or the results database becomes unavailable. The interesting engineering work is maintaining that shared state without making reporting failures interrupt play.',
    architecture:
      'Each room has a SQLite-backed Cloudflare Durable Object. A pure TypeScript package handles round rules. Room events enter a durable outbox before being exported to D1, which holds shared results. The SvelteKit frontend communicates through a same-origin API path.',
    flow: ['Phones / SvelteKit', 'Worker API', 'Room + SQLite', 'Outbox → D1'],
    decisions: [
      {
        title: 'Give each room a durable home',
        body: 'Room-local state and round deadlines live together in a Durable Object. This makes the room lifecycle easier to reason about, with the tradeoff of depending on Cloudflare-specific infrastructure.'
      },
      {
        title: 'Treat retries as normal behavior',
        body: 'Commands carry operation IDs and stored receipts. A repeat can return the prior outcome; reusing an ID with a different payload is rejected. Transactional writes connect the command result to its receipt.'
      },
      {
        title: 'Keep reporting outside the critical path',
        body: 'The room writes export events to its durable outbox and retries delivery. Reporting can catch up after an outage while room play continues.'
      }
    ],
    validation: [
      'Room tests exercise duplicate votes and operation-ID reuse with conflicting content.',
      'Deadline tests cover round transitions and duplicate or late alarms.',
      'The repository includes outage/export tests and local workerd validation notes.'
    ],
    limits:
      'The Cloudflare rebuild is distinct from the original deployed version. Its status document still calls for hosted deployment checks, phone playtesting, and cost measurement. A public demo of the rebuild is not claimed here.',
    next: 'Validate a complete session on multiple phones, check the hosted WebSocket path, and measure update latency and recovery behavior under a documented setup.',
    source: {
      repo: 'settleit.gg',
      ref: '01bfec6315958df28eb4581e9ab62bc10929ee9b',
      branch: 'main'
    },
    evidence: [
      {
        label: 'Room state & command receipts',
        path: 'workers/api/src/room.ts'
      },
      { label: 'Room behavior tests', path: 'workers/api/test/room.test.ts' },
      { label: 'Rebuild status', path: 'docs/STATUS.md' }
    ]
  },
  {
    slug: 'pokemon-team-builder',
    title: 'Pokémon Team Builder',
    category: 'Full-stack development',
    number: '02',
    color: 'blue',
    diagram: 'teams',
    headline: 'Domain rules, from interface to database.',
    summary:
      'An Angular and ASP.NET Core application for building private Pokémon teams and analyzing their type coverage.',
    detail:
      'The developed application combines a searchable Pokédex, account-scoped teams, team analysis, EF Core persistence, and a Docker Compose setup with SQL Server.',
    status: 'Development build',
    statusDetail:
      'Implementation is on a development branch; public hosting and CI remain on the roadmap.',
    tags: ['C# / .NET', 'Angular', 'SQL Server', 'EF Core'],
    signals: [
      'Owner-scoped data',
      'Domain validation',
      'Type-coverage analysis'
    ],
    problem:
      'A team builder needs more than a list of Pokémon. It needs a consistent set of rules: private ownership, a maximum of six members, no duplicate members, and useful analysis of the resulting team.',
    architecture:
      'An Angular client talks to ASP.NET Core controllers. Application services enforce team rules and calculate analysis, repositories handle persistence through EF Core, and SQL Server stores the data. A bounded-concurrency PokeAPI client supplies Pokémon data.',
    flow: [
      'Angular UI',
      'ASP.NET Core API',
      'Application services',
      'EF Core → SQL Server'
    ],
    decisions: [
      {
        title: 'Keep team rules in application services',
        body: 'TeamService checks membership limits, duplicates, valid names, and ownership. Centralizing those rules gives API callers a consistent result and makes the rules directly testable.'
      },
      {
        title: 'Scope operations to the signed-in owner',
        body: 'Team lookups compare the owner ID and treat another user’s team as nonexistent. Authentication and ownership are separate responsibilities: a signed-in user still needs access to a particular resource.'
      },
      {
        title: 'Make analysis a separate concern',
        body: 'TeamAnalysisService evaluates defensive type matchups and summarizes stats. It builds on the same owner-scoped team service rather than duplicating access logic.'
      }
    ],
    validation: [
      'Backend tests cover team rules, ownership, type effectiveness, seeding, and analysis.',
      'The Angular client includes service specifications for authentication and team operations.',
      'Docker Compose describes the frontend, API, and SQL Server development setup.'
    ],
    limits:
      'The linked development branch contains the implemented application; the default branch is an earlier scaffold. Public hosting and CI remain on the roadmap. In-memory EF tests cover service rules; database-backed tests are the next step for SQL Server-specific behavior.',
    next: 'Run the two-user ownership journey against SQL Server, add database-backed checks where appropriate, and verify a reproducible hosted demo.',
    source: {
      repo: 'PokeTeamBuilder',
      ref: 'ff2597930c909043a3380b878e00a6c7a1b98631',
      branch: 'claude/repo-overview-4u4742'
    },
    evidence: [
      {
        label: 'Team rules & ownership',
        path: 'backend/PokeDex.Application/Services/TeamService.cs'
      },
      {
        label: 'Type-coverage analysis',
        path: 'backend/PokeDex.Application/Services/TeamAnalysisService.cs'
      },
      {
        label: 'Team service tests',
        path: 'backend/PokeDex.Tests/TeamServiceTests.cs'
      }
    ]
  },
  {
    slug: 'game-boy-emulator',
    title: 'Game Boy Emulator',
    category: 'Systems & correctness',
    number: '03',
    color: 'lilac',
    diagram: 'emulator',
    headline: 'Making correctness observable.',
    summary:
      'A C#/.NET Game Boy emulator with CPU, memory, graphics, and audio subsystems—and reference tests to check their behavior.',
    detail:
      'A dependency-free emulation core sits behind a headless CLI and a MonoGame desktop frontend. Test harnesses compare instruction state and exercise hardware test ROMs.',
    status: 'Implemented · accuracy work ongoing',
    statusDetail:
      'Recent GitHub CI runs passed. Battery saves and remaining timing accuracy are still identified as work ahead.',
    tags: ['C#', '.NET 8', 'MonoGame', 'xUnit'],
    signals: [
      'Reference testing',
      'Hardware behavior',
      'Core / frontend separation'
    ],
    problem:
      'An emulator can appear to run while subtle timing or state errors remain. Correctness needs to be examined at several levels: individual CPU instructions, memory behavior, and the interaction of graphics, audio, and timers.',
    architecture:
      'GBEmu.Core contains the CPU, bus, cartridge mappers, timers, graphics, and audio. A CLI supports headless execution and screenshots. A separate MonoGame desktop project provides input, display, and audio playback.',
    flow: [
      'SM83 CPU',
      'Memory bus',
      'Graphics / audio / timer',
      'CLI or desktop'
    ],
    decisions: [
      {
        title: 'Separate the machine from its window',
        body: 'The core has no desktop dependency. The same emulation behavior can be exercised by the CLI, the test suite, and the MonoGame frontend, which makes failures easier to isolate.'
      },
      {
        title: 'Compare against reference instruction state',
        body: 'The SingleStepTests harness loads initial registers and memory, executes one instruction, and compares final state and timing. It makes failures specific enough to investigate.'
      },
      {
        title: 'Use hardware tests alongside unit tests',
        body: 'Blargg, Mooneye, graphics, and sound harnesses test interactions that isolated instruction fixtures cannot fully establish. CI fetches the test data so those suites are not silently skipped there.'
      }
    ],
    validation: [
      'The linked GitHub CI run records a successful build and test execution.',
      'xUnit harnesses cover instruction fixtures, timers, cartridge mappers, and hardware test ROMs.',
      'The README documents graphics and sound results alongside known timing limitations.'
    ],
    limits:
      'Passing reference suites does not mean complete cycle accuracy or universal compatibility. The README identifies battery saves and a remaining timer edge case as future work. Local hardware suites can skip when external test data is absent.',
    next: 'Continue timing-accuracy work, implement battery saves, and tie any advertised compatibility or exact test totals to reproducible runs.',
    source: {
      repo: 'GBEmu',
      ref: '02a50bf5c62a676c48c371daed8f2a195ff91f4f',
      branch: 'claude/gameboy-emulator-csharp-m5q7en'
    },
    ci: 'https://github.com/Alialhashemi23/GBEmu/actions/runs/28988438486',
    evidence: [
      {
        label: 'Reference instruction harness',
        path: 'tests/GBEmu.Tests/Cpu/Sm83JsonTests.cs'
      },
      {
        label: 'Memory bus implementation',
        path: 'src/GBEmu.Core/Memory/MemoryBus.cs'
      },
      { label: 'CI workflow', path: '.github/workflows/ci.yml' }
    ]
  }
];

export const supporting = [
  {
    title: 'Relic Diver',
    category: 'Multiplayer & persistence',
    image: '/images/relic-diver.webp',
    alt: 'Actual Relic Diver gameplay showing a character exploring a three-dimensional ruin',
    description:
      'A Godot 3D roguelike fan prototype with online co-op, reconnect and host migration, plus a Node.js/PostgreSQL account-progression backend.',
    lesson:
      'A look at recovering shared sessions and preventing duplicate progress writes.',
    tags: ['Godot', 'Node.js', 'PostgreSQL'],
    status: 'Playable fan prototype',
    note: 'Browser/Windows and published Android builds currently use different co-op protocols. Capcom character assets are credited separately from the engineering.',
    code: 'https://github.com/Alialhashemi23/Megaman-Legends-Rogue/tree/35e616aab3f81833f27d2ec017e3e4b50f954f9c',
    evidence:
      'https://github.com/Alialhashemi23/Megaman-Legends-Rogue/blob/35e616aab3f81833f27d2ec017e3e4b50f954f9c/server/accounts/store.js',
    evidenceLabel: 'Progression transactions'
  },
  {
    title: 'Kishmish Nano',
    category: 'C & constrained hardware',
    image: '/images/kishmish.webp',
    alt: 'Actual Kishmish Nano software framebuffer showing the pixel-art cat and care menu',
    description:
      'A C/SDL virtual pet for the 240×240 Anbernic RG Nano, with persistent care state, bounded offline progression, and a packaged ARM runtime.',
    lesson:
      'A small application with real constraints: clocks, saves, firmware, and packaging.',
    tags: ['C', 'SDL', 'ARM Linux'],
    status: 'Released MVP + newer prerelease',
    note: 'Image: software framebuffer capture. The newer personality prerelease still needs on-device controls and audio verification.',
    code: 'https://github.com/Alialhashemi23/kishmish-nano/tree/84653f90464088b77337f6fa48c5c24b26809540',
    evidence: 'https://github.com/Alialhashemi23/kishmish-nano/releases',
    evidenceLabel: 'Builds & release notes'
  }
];

export const archive = [
  {
    title: 'MunchKeep',
    description:
      'Fixed-tick dungeon simulation, A* pathfinding, capped offline earnings, and headless auto-play tests.',
    tags: 'C# · MonoGame · xUnit',
    url: 'https://github.com/Alialhashemi23/MunchKeep/tree/f42ae31a29898fa2e611545a0e3b44a71c088c4a'
  },
  {
    title: 'PMD-Rogue',
    description:
      'A turn-based prototype with seeded dungeon generation, type-based combat, stacking items, and a headless smoke harness.',
    tags: 'C# · MonoGame',
    url: 'https://github.com/Alialhashemi23/PMDRoguelike/tree/21986610b034d47e04aefc2bde50ef17007c066a'
  },
  {
    title: 'ShmupGame',
    description:
      'Earlier work with composable movement and shooting behaviors, game states, collisions, and JSON-driven waves. Setup needs portability cleanup.',
    tags: 'C# · MonoGame',
    url: 'https://github.com/Alialhashemi23/ShmupGame/tree/759a53ae8ce09009f350b012d524bd150dc19c7d'
  }
];

export function codeUrl(project, path = '') {
  const base = `https://github.com/Alialhashemi23/${project.source.repo}`;
  return path
    ? `${base}/blob/${project.source.ref}/${path}`
    : `${base}/tree/${project.source.ref}`;
}
