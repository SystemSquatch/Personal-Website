// ─────────────────────────────────────────────────────────────
// content.js — Edit this file to update your portfolio.
// No other files need to change for content updates.
// ─────────────────────────────────────────────────────────────

export const content = {

  // ── Personal ──────────────────────────────────────────────
  name: 'Joseph Toniolo',
  title: 'Senior Software Engineer',
  tagline: 'Full-stack engineer who likes taking on the problems nobody else wants to touch.',
  email: 'jtoniolo2314@gmail.com',
  github: 'https://github.com/SystemSquatch',
  linkedin: 'https://www.linkedin.com/in/joseph-toniolo/',

  // ── Hero Demos ────────────────────────────────────────────
  // Silent clips shown as tabs in the hero.
  // To add a recording, replace video: null with
  //   video: { mp4: 'https://...', webm: 'https://...' }  (webm is optional)
  // and set poster to an image URL. Then set each stage's `at` to the second in
  // the clip where that stage begins, so the strip stays in sync with the video.
  hero: {
    demos: [
      {
        label: 'Voice Assistant',
        description:
          'A self-hosted voice assistant with a custom wake word, local speech-to-text, and a voice I fine-tuned myself.',
        videoAlt: 'Silent, captioned demo of the voice assistant answering a spoken question.',
        video: null,
        poster: null,
        stages: [
          { label: 'Wake word', at: 0 },
          { label: 'Speech to text', at: 3 },
          { label: 'LLM + tools', at: 6 },
          { label: 'Custom voice', at: 9 },
        ],
      },
      {
        label: 'Professor Sakura',
        description:
          'An AI Pokémon professor you can chat with inside my DexDB app. Every fact comes from a live tool call, never from model memory.',
        videoAlt: 'Silent demo of a chat with Professor Sakura inside the DexDB app.',
        video: null,
        poster: null,
        stages: [
          { label: 'Question', at: 0 },
          { label: 'Tool call', at: 3 },
          { label: 'Postgres lookup', at: 6 },
          { label: 'Answer', at: 9 },
        ],
      },
    ],
  },

  // ── About / Bio ───────────────────────────────────────────
  // Supports inline HTML (<strong>, <a>, <br>)
  bio: `I'm a full-stack software engineer with experience across backend, frontend,
and cloud infrastructure, plus growing depth in security, compliance, and
accessibility.
<br><br>
I specialize in taking large, ambiguous initiatives from design through production:
cloud migrations, event-driven data pipelines, search infrastructure, and
government-grade compliance work. I also coordinate a UI development team,
distributing work and aligning implementation while staying hands-on.`,

  // ── Education ─────────────────────────────────────────────
  // Shown as a small line in the footer, not its own section.
  education: {
    degree: 'B.S. Computer Information Technology',
    school: 'Minnesota State University',
  },

  // ── Experience ────────────────────────────────────────────
  // Most recent first. end: 'Present' for current role.
  experience: [
    {
      company: 'Thomson Reuters',
      role: 'Senior Software Engineer',
      start: 'Apr 2024',
      end: 'Present',
      bullets: [
        'Coordinate a UI development team for an AI-assisted research product, distributing work, aligning implementation, and owning frontend delivery.',
        'Built React micro-frontend features, including a Redux state store and cross-MFE reference syncing, and stood up a new micro-frontend end-to-end with its supporting AWS infrastructure.',
        'Stood up OpenSearch cluster access via infrastructure-as-code and built the pipeline that loads and vectorizes documents from S3 into OpenSearch, including zero-downtime re-indexing.',
        'Designed the architecture for an event-driven fan-out delete pipeline using SNS and SQS with dead-letter queues for reliable, retryable cross-store data deletion.',
        'Implemented a separate government/commercial encryption path with FIPS AMI support and dynamic authorization to enable compliant handling of FedRAMP data.',
      ],
    },
    {
      company: 'Thomson Reuters',
      role: 'Software Engineer',
      start: 'Jun 2021',
      end: 'Apr 2024',
      bullets: [
        'Drove the migration of core services from on-prem Oracle to AWS Aurora PostgreSQL, partnering with backend and platform teams to set up dual-region disaster recovery and IAM-based authentication.',
        'Helped architect a serverless AWS batch processing pipeline that replaced manual on-prem systems, personally building several of its core services.',
        'Led an organization-wide security modernization initiative, coordinating KMS encryption at rest across S3, DynamoDB, Lambda, and ECR.',
        'Owned the data-retention and purge subsystem across multiple releases, redesigning foreign-key/cascade behavior and resolving orphaned-data edge cases in production.',
        'Winner of the 2023 Thomson Reuters AI/ML Hackathon.',
      ],
    },
  ],

  // ── Highlights ────────────────────────────────────────────
  // Deep-dive case studies (problem → approach → outcome). Most recent first.
  highlights: [
    {
      title: 'Custom Wake Word Training (Personal Project)',
      period: '2026',
      problem: 'My voice assistant needed its own wake word, but models trained only on synthetic speech kept missing real voices on a live mic.',
      approach: 'Trained on synthetic speech plus similar-sounding decoy phrases, so the model learned the phrase itself, then mixed in a small set of real voice recordings and tested against unrelated real-world audio.',
      outcome: 'The real recordings fixed live-mic detection. Adding too many made it worse with other voices, so they stay a small share of the training data.',
      tech: ['openWakeWord', 'PyTorch', 'Orpheus TTS', 'ONNX'],
    },
    {
      title: 'OpenSearch Search-Data Platform',
      period: '2026',
      problem: 'The product needed documents searchable in OpenSearch, but there was no provisioned cluster access and no reliable way to load, reshape, or re-index the underlying data at scale.',
      approach: 'Stood up OpenSearch cluster access via infrastructure-as-code, designed the index mappings, and built the pipeline that loads and vectorizes documents from S3 into OpenSearch, including large-file batch vectorization and zero-downtime re-indexing via alias swap.',
      outcome: 'Delivered a repeatable, IaC-managed search-data platform that can ingest and re-index documents without downtime.',
      tech: ['OpenSearch', 'S3', 'CloudFormation', 'PostgreSQL'],
    },
    {
      title: 'Event-Driven Delete Pipeline',
      period: '2026',
      problem: 'Deleting a workspace meant removing its data from many independent stores; a single missed target would leave orphaned data and compliance risk.',
      approach: 'Designed the architecture for an event-driven fan-out delete pipeline using SNS and SQS with dead-letter queues, building the core pieces and a database progress tracker to make the delete observable and recoverable.',
      outcome: 'Made cross-store deletion reliable and retryable, with failures isolated to dead-letter queues instead of silently dropping data.',
      tech: ['SNS', 'SQS', 'OpenSearch', 'S3'],
    },
    {
      title: 'Government-Grade Compliance (FedRAMP / FIPS)',
      period: '2025',
      problem: 'Government customers required stricter, separated encryption handling than commercial users.',
      approach: 'Implemented a separate government/commercial encryption path, FIPS AMI support, and dynamic authorization, handling signed/GPG file flows per user type.',
      outcome: 'Enabled compliant handling of government-customer data alongside the commercial flow.',
      tech: ['FedRAMP', 'FIPS', 'OIDC/JWT', 'GPG'],
    },
    {
      title: 'AI-Assisted Research Product Frontend',
      period: '2025-2026',
      problem: 'An AI-assisted research product needed a modern, usable, and responsive interface.',
      approach: 'Built React micro-frontend features, including a Redux state store, cross-MFE reference syncing with a legacy web app, and responsive layouts, and stood up a new micro-frontend end-to-end with its supporting AWS infrastructure.',
      outcome: 'Delivered core UI for a strategic AI product and modernized the frontend architecture.',
      tech: ['React', 'Redux', 'TypeScript', 'AWS'],
    },
  ],

  // ── Skills ────────────────────────────────────────────────
  // Add or remove categories freely.
  skills: [
    {
      category: 'Languages',
      items: ['Java', 'Python', 'TypeScript', 'SQL'],
    },
    {
      category: 'Frameworks & Libraries',
      items: ['Spring / Spring Boot', 'React', 'Redux', 'FastAPI', 'Node.js'],
    },
    {
      category: 'AI & Voice',
      items: ['Tool-Calling Agents', 'Ollama', 'Gemini', 'TTS Fine-Tuning (Orpheus, Unsloth)', 'openWakeWord', 'faster-whisper', 'llama.cpp'],
    },
    {
      category: 'Cloud & Infrastructure (AWS)',
      items: ['Lambda', 'S3', 'DynamoDB', 'EventBridge', 'SNS/SQS', 'KMS', 'AWS Transfer', 'CloudFormation'],
    },
    {
      category: 'Data & Search',
      items: ['PostgreSQL (Aurora)', 'Oracle', 'OpenSearch', 'Elasticsearch'],
    },
    {
      category: 'Security & Compliance',
      items: ['FedRAMP / FIPS', 'OIDC / JWT', 'WCAG 2.2 AA / Section 508', 'Veracode / Snyk'],
    },
    {
      category: 'DevOps & Practices',
      items: ['GitHub Actions', 'CI/CD', 'Docker', 'Datadog', 'SonarQube'],
    },
  ],

  // ── Projects ──────────────────────────────────────────────
  // liveUrl: null hides the "Live Demo" button automatically.
  // links: one entry per public repo to show as a button. Leave empty for private
  // repos; with no links and no liveUrl, the card shows a "private repo" label.
  projects: [
    {
      title: 'Voice Assistant',
      description:
        'A self-hosted voice assistant built from separate services that talk over HTTP. Custom-trained openWakeWord models listen for the wake word, faster-whisper transcribes speech locally, Gemini or a local Ollama model replies using date, weather, and memory tools, and a fine-tuned Orpheus TTS voice served through llama.cpp speaks the answer.',
      tech: ['Python', 'FastAPI', 'openWakeWord', 'faster-whisper', 'Orpheus TTS', 'llama.cpp', 'Ollama', 'Gemini'],
      links: [],
      liveUrl: null,
    },
    {
      title: 'PokeDataPipeline',
      description:
        'A Python ETL pipeline that ingests Pokémon data from both PokeAPI and Bulbapedia into a self-hosted PostgreSQL database, covering items, Pokémon, moves, abilities, evolution chains, and locations. Writes are fully idempotent, so a multi-hour ingestion run can be safely stopped and resumed, and the resulting database is designed to be queried directly by a local LLM that generates SQL to answer natural-language Pokémon questions.',
      tech: ['Python', 'PostgreSQL', 'Docker', 'PokeAPI', 'Bulbapedia'],
      links: [],
      liveUrl: null,
    },
    {
      title: 'DexDB',
      description:
        'A full-stack Pokédex web app with a React/Vite frontend and a Node.js backend over PostgreSQL, including damage and catch-rate calculators, type-effectiveness lookups, ~19,000 locally cached sprite images, and an embedded chat widget wired into the Professor Sakura AI agent.',
      tech: ['React', 'Vite', 'Node.js', 'PostgreSQL'],
      links: [],
      liveUrl: null,
    },
    {
      title: 'Professor Sakura',
      description:
        'A tool-calling AI Pokémon "professor" with a persona hard-blocked from ever guessing game data from model memory; every fact comes from a live tool call against a self-hosted Postgres database, falling back to PokeAPI if it\'s unreachable. Runs as a FastAPI/CLI service with a swappable backend (Ollama on my home server, or Gemini in the cloud), plus a Discord bot front end sharing the same tool-calling pattern.',
      tech: ['Python', 'FastAPI', 'Ollama', 'Gemini', 'PostgreSQL', 'discord.js'],
      links: [],
      liveUrl: null,
    },
    {
      title: 'Dexio',
      description:
        'A Pokédex tracker for browsing every Pokémon, marking caught and shiny progress saved in the browser, and viewing stats, abilities, evolution chains, and per-game locations. Collections can be exported and restored as JSON.',
      tech: ['React', 'Tailwind CSS', 'Firebase Hosting'],
      links: [],
      liveUrl: 'https://dexio-6b5cc.web.app',
    },
  ],
}
