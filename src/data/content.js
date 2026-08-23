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

  // ── About / Bio ───────────────────────────────────────────
  // Supports inline HTML (<strong>, <a>, <br>)
  bio: `I'm a full-stack software engineer and technical lead with experience across
backend, frontend, and cloud infrastructure — with growing depth in security,
compliance, and accessibility.
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
        'Coordinate a UI development team for an AI-assisted research product — distributing work, aligning implementation, and owning frontend delivery.',
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
      title: 'OpenSearch Search-Data Platform',
      period: '2026',
      problem: 'The product needed documents searchable in OpenSearch, but there was no provisioned cluster access and no reliable way to load, reshape, or re-index the underlying data at scale.',
      approach: 'Stood up OpenSearch cluster access via infrastructure-as-code, designed the index mappings, and built the pipeline that loads and vectorizes documents from S3 into OpenSearch — including large-file batch vectorization and zero-downtime re-indexing via alias swap.',
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
      period: '2025–2026',
      problem: 'An AI-assisted research product needed a modern, usable, and responsive interface.',
      approach: 'Built React micro-frontend features — a Redux state store, cross-MFE reference syncing with a legacy web app, and responsive layouts — and stood up a new micro-frontend end-to-end with its supporting AWS infrastructure.',
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
      items: ['Spring / Spring Boot', 'React', 'Redux', 'FastAPI'],
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
      items: ['GitHub Actions', 'CI/CD', 'Datadog', 'SonarQube'],
    },
  ],

  // ── Projects ──────────────────────────────────────────────
  // liveUrl: null hides the "Live Demo" button automatically.
  projects: [
    {
      title: 'Distributed Task Queue',
      description:
        'A Redis-backed distributed task queue with priority scheduling, retry logic, and a real-time monitoring dashboard. Built to handle high-throughput job processing in production.',
      tech: ['Go', 'Redis', 'Docker', 'React'],
      githubUrl: 'https://github.com/jtoniolo2314/task-queue',
      liveUrl: null,
    },
    {
      title: 'CLI Dev Tool',
      description:
        'A developer productivity CLI that scaffolds projects, manages environment configs, and integrates with GitHub and Jira APIs to streamline the development workflow.',
      tech: ['Node.js', 'TypeScript', 'Commander.js'],
      githubUrl: 'https://github.com/jtoniolo2314/dev-cli',
      liveUrl: null,
    },
    {
      title: 'Portfolio Site',
      description:
        'This site. Built with Vite and vanilla JS, dark glassmorphism design system, deployed to Firebase Hosting with zero runtime dependencies.',
      tech: ['Vite', 'JavaScript', 'CSS', 'Firebase'],
      githubUrl: 'https://github.com/jtoniolo2314/personal-website',
      liveUrl: null,
    },
  ],
}
