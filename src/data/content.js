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
  // Clips shown as tabs in the hero. They autoplay muted.
  // To add a recording, replace video: null with
  //   video: { mp4: 'https://...', webm: 'https://...' }  (webm is optional)
  // and set poster to an image URL. Then set each stage's `at` to the second in
  // the clip where that stage begins, so the strip stays in sync with the video.
  // Set hasAudio: true to show a "Play with sound" button for that clip.
  hero: {
    demos: [
      {
        label: 'Professor Sakura',
        description:
          'An AI Pokémon professor you can chat with inside my DexDB app, designed to answer from live tool calls, not model memory.',
        videoAlt: 'Silent demo of Professor Sakura answering a question about Bulbasaur in the DexDB app, followed by the evolution chain that confirms her answer.',
        video: {
          mp4: 'https://systemsquatch.github.io/portfolio-media/sakura.mp4',
          webm: 'https://systemsquatch.github.io/portfolio-media/sakura.webm',
        },
        poster: 'https://systemsquatch.github.io/portfolio-media/sakura-poster.jpg',
        stages: [
          { label: 'Question', at: 0 },
          { label: 'Tool call', at: 7.8 },
          { label: 'Postgres lookup', at: 9.8 },
          { label: 'Answer', at: 11.9 },
        ],
      },
      {
        label: 'Voice Assistant',
        description:
          'A self-hosted voice assistant with a custom wake word, local speech-to-text, and a voice I fine-tuned myself.',
        videoAlt: 'Captioned demo of the voice assistant. Joseph asks about tomorrow\'s weather, the logs show the wake word and transcript, the assistant answers aloud, and the dashboard shows the get_weather tool call.',
        hasAudio: true,
        video: {
          mp4: 'https://systemsquatch.github.io/portfolio-media/voice-assistant.mp4',
          webm: 'https://systemsquatch.github.io/portfolio-media/voice-assistant.webm',
        },
        poster: 'https://systemsquatch.github.io/portfolio-media/voice-assistant-poster.jpg',
        stages: [
          { label: 'Wake word', at: 0 },
          { label: 'Speech to text', at: 0.9 },
          { label: 'LLM + tools', at: 3.6 },
          { label: 'Custom voice', at: 6.6 },
          { label: 'Dashboard', at: 12.7 },
        ],
      },
    ],
  },

  // ── About / Bio ───────────────────────────────────────────
  // Supports inline HTML (<strong>, <a>, <br>)
  bio: `I'm a full-stack software engineer working across backend, frontend, and cloud
infrastructure, with growing depth in security, compliance, and accessibility.
<br><br>
I take large initiatives from design through production: cloud migrations,
event-driven data pipelines, search infrastructure, and government-grade compliance
work.
<br><br>
Outside of work, I build self-hosted AI projects, including a voice assistant with a
custom wake word and a voice I fine-tuned myself.`,

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
        'Designed the architecture for an event-driven fan-out delete pipeline using SNS and SQS with dead-letter queues for reliable, retryable cross-store data deletion.',
        'Established automated accessibility testing in CI and drove remediation of screen-reader, contrast, focus, and text-spacing issues across the product.',
        'Stood up OpenSearch cluster access via infrastructure-as-code and built the pipeline that loads and vectorizes documents from S3 into OpenSearch, including zero-downtime re-indexing.',
        'Built React micro-frontend features, including a Redux state store and cross-MFE reference syncing, and stood up a new micro-frontend end-to-end with its supporting AWS infrastructure.',
        'Implemented a separate government/commercial encryption path with FIPS AMI support and dynamic authorization to enable compliant handling of FedRAMP data.',
        'Wrote technical documentation and helped onboard and mentor engineers on the team.',
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
        'Worked out how to implement KMS encryption at rest across S3, DynamoDB, Lambda, and ECR, and carried out the security remediation for my team.',
        'Owned the data-retention and purge subsystem across multiple releases, redesigning foreign-key/cascade behavior and resolving orphaned-data edge cases in production.',
        'Winner of the 2023 Thomson Reuters AI/ML Hackathon.',
      ],
    },
  ],

  // ── Highlights ────────────────────────────────────────────
  // Deep-dive case studies (problem → approach → outcome). Most recent first.
  highlights: [
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
    {
      title: 'Custom Wake Word Training (Personal Project)',
      period: '2026',
      problem: 'My voice assistant needed its own wake word, but models trained only on synthetic speech kept missing real voices on a live mic.',
      approach: 'Trained on synthetic speech plus similar-sounding decoy phrases, so the model learned the phrase itself, then mixed in a small set of real voice recordings and tested against unrelated real-world audio.',
      outcome: 'The real recordings fixed live-mic detection. Adding too many made it worse with other voices, so they stay a small share of the training data.',
      tech: ['openWakeWord', 'PyTorch', 'Orpheus TTS', 'ONNX'],
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
        'A self-hosted voice assistant built as separate services. A custom-trained wake word starts it, faster-whisper transcribes speech locally, Gemini or a local Ollama model replies with date, weather, and memory tools, and a fine-tuned Orpheus voice speaks the answer.',
      tech: ['Python', 'FastAPI', 'openWakeWord', 'faster-whisper', 'Orpheus TTS', 'llama.cpp', 'Ollama', 'Gemini'],
      links: [],
      liveUrl: null,
    },
    {
      title: 'PokeDataPipeline',
      description:
        'A Python ETL pipeline that loads Pokémon data from PokeAPI and Bulbapedia into PostgreSQL. Idempotent writes let a multi-hour run stop and resume safely, and the database is designed for a local LLM to query with generated SQL.',
      tech: ['Python', 'PostgreSQL', 'Docker', 'PokeAPI', 'Bulbapedia'],
      links: [],
      liveUrl: null,
    },
    {
      title: 'DexDB',
      description:
        'A full-stack Pokédex with a React frontend and a Node.js and PostgreSQL backend. It includes damage and catch-rate calculators, type-effectiveness lookups, and an embedded chat with Professor Sakura.',
      tech: ['React', 'Vite', 'Node.js', 'PostgreSQL'],
      links: [],
      liveUrl: null,
    },
    {
      title: 'Professor Sakura',
      description:
        'A tool-calling AI Pokémon professor designed to answer from live lookups, not model memory. It queries self-hosted Postgres, with PokeAPI as a fallback. Runs on Ollama or Gemini, with a Discord bot front end.',
      tech: ['Python', 'FastAPI', 'Ollama', 'Gemini', 'PostgreSQL', 'discord.js'],
      links: [],
      liveUrl: null,
    },
    {
      title: 'Dexio',
      description:
        'A Pokédex tracker for marking caught and shiny progress in the browser and viewing stats, evolution chains, and per-game locations. Collections export and restore as JSON.',
      tech: ['React', 'Tailwind CSS', 'Firebase Hosting'],
      links: [],
      liveUrl: 'https://dexio-6b5cc.web.app',
    },
  ],
}
