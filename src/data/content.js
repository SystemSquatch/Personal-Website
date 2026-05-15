// ─────────────────────────────────────────────────────────────
// content.js — Edit this file to update your portfolio.
// No other files need to change for content updates.
// ─────────────────────────────────────────────────────────────

export const content = {

  // ── Personal ──────────────────────────────────────────────
  name: 'Joseph Toniolo',
  title: 'Senior Software Engineer',
  tagline: '5 years building scalable systems and shipping products that matter.',
  email: 'jtoniolo2314@gmail.com',
  github: 'https://github.com/jtoniolo2314',
  linkedin: 'https://linkedin.com/in/joseph-toniolo',

  // ── About / Bio ───────────────────────────────────────────
  // Supports inline HTML (<strong>, <a>, <br>)
  bio: `I'm a Senior Software Engineer with 5 years of full-time experience designing
and building production systems. I care about code that's maintainable,
performance that's measurable, and software that actually ships.
<br><br>
I've worked across the stack — from distributed backend services to polished
frontend products — and I thrive in environments where engineering quality matters.
When I'm not writing code, I'm usually exploring new technologies or contributing
to open source.`,

  // ── Experience ────────────────────────────────────────────
  // Most recent first. end: 'Present' for current role.
  experience: [
    {
      company: 'Your Current Company',
      role: 'Senior Software Engineer',
      start: 'Jan 2023',
      end: 'Present',
      bullets: [
        'Led redesign of the data ingestion pipeline, reducing average latency by 40%.',
        'Mentored junior engineers through code review, pair programming, and design doc feedback.',
        'Shipped the real-time analytics dashboard used by enterprise customers.',
      ],
    },
    {
      company: 'Previous Company',
      role: 'Software Engineer',
      start: 'Jun 2021',
      end: 'Dec 2022',
      bullets: [
        'Built and maintained the REST API serving millions of requests per day with 99.9% uptime.',
        'Migrated monolithic deployment to containerized microservices on cloud infrastructure.',
        'Reduced CI build times by 60% by parallelizing test suites and caching dependencies.',
      ],
    },
    {
      company: 'First Company',
      role: 'Junior Software Engineer',
      start: 'Jul 2020',
      end: 'May 2021',
      bullets: [
        'Delivered multiple client projects across web, mobile, and API integration.',
        'Introduced automated end-to-end testing, cutting QA cycle time in half.',
      ],
    },
  ],

  // ── Skills ────────────────────────────────────────────────
  // Add or remove categories freely.
  skills: [
    {
      category: 'Languages',
      items: ['JavaScript', 'TypeScript', 'Python', 'Go', 'SQL'],
    },
    {
      category: 'Frameworks & Libraries',
      items: ['Node.js', 'React', 'Express', 'FastAPI', 'Vite'],
    },
    {
      category: 'Tools & Platforms',
      items: ['Git', 'Docker', 'Kubernetes', 'Terraform', 'GitHub Actions'],
    },
    {
      category: 'Cloud & Databases',
      items: ['AWS', 'GCP', 'Firebase', 'PostgreSQL', 'Redis', 'MongoDB'],
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
