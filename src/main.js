import { content } from './data/content.js'

// ── SVG Icons ──────────────────────────────────────────────
const icons = {
  github: `<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
  </svg>`,
  linkedin: `<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>`,
  email: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>`,
  external: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
    <polyline points="15 3 21 3 21 9"/>
    <line x1="10" y1="14" x2="21" y2="3"/>
  </svg>`,
  arrowRight: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <line x1="5" y1="12" x2="19" y2="12"/>
    <polyline points="12 5 19 12 12 19"/>
  </svg>`,
}

// ── Render Helpers ─────────────────────────────────────────
function renderHero() {
  document.getElementById('heroTagline').textContent = content.tagline
}

// ── Hero Demo ──────────────────────────────────────────────
// Tabbed demo frame. A demo with video: null shows a placeholder until its
// recording exists; see the comment on hero.demos in content.js.
const PLACEHOLDER_STAGE_MS = 1800

function initHeroDemo() {
  const root = document.getElementById('heroDemo')
  const demos = content.hero.demos
  const canAutoplay =
    !window.matchMedia('(prefers-reduced-motion: reduce)').matches &&
    navigator.connection?.saveData !== true

  root.innerHTML = `
    <div class="demo glass">
      <div class="demo__tabs" role="tablist" aria-label="Project demos">
        ${demos.map((demo, i) => `
        <button type="button" class="demo__tab" role="tab" id="demoTab${i}" aria-controls="demoPanel"
          aria-selected="${i === 0}" tabindex="${i === 0 ? 0 : -1}">${demo.label}</button>`).join('')}
      </div>
      <div id="demoPanel" role="tabpanel" aria-labelledby="demoTab0">
        <div class="demo__screen" id="demoScreen"></div>
        <ol class="demo__pipeline" id="demoPipeline"></ol>
        <p class="demo__desc" id="demoDesc"></p>
      </div>
    </div>
  `

  const tabs = [...root.querySelectorAll('.demo__tab')]
  const panel = root.querySelector('#demoPanel')
  const screen = root.querySelector('#demoScreen')
  const pipeline = root.querySelector('#demoPipeline')
  const desc = root.querySelector('#demoDesc')

  let video = null
  let timer = null
  let isOnScreen = false

  function highlightStage(index) {
    ;[...pipeline.children].forEach((el, i) => el.classList.toggle('is-active', i === index))
  }

  function highlightAllStages() {
    ;[...pipeline.children].forEach(el => el.classList.add('is-active'))
  }

  function syncPlayback() {
    clearInterval(timer)
    timer = null

    if (video) {
      if (!canAutoplay) return
      if (isOnScreen) video.play().catch(() => {})
      else video.pause()
      return
    }

    if (!canAutoplay) {
      highlightAllStages()
    } else if (isOnScreen) {
      let index = 0
      const count = pipeline.children.length
      highlightStage(index)
      timer = setInterval(() => {
        index = (index + 1) % count
        highlightStage(index)
      }, PLACEHOLDER_STAGE_MS)
    }
  }

  function showPlaceholder(demo) {
    video = null
    screen.innerHTML = `
      <div class="demo__placeholder">
        <div class="demo__placeholder-title">${demo.label}</div>
        <div class="demo__placeholder-note">Demo recording coming soon</div>
      </div>
    `
  }

  function showVideo(demo) {
    screen.innerHTML = `
      <video muted loop playsinline preload="none" ${canAutoplay ? '' : 'controls'}
        ${demo.poster ? `poster="${demo.poster}"` : ''} aria-label="${demo.videoAlt}">
        ${demo.video.webm ? `<source src="${demo.video.webm}" type="video/webm" />` : ''}
        <source src="${demo.video.mp4}" type="video/mp4" />
      </video>
      ${demo.hasAudio && canAutoplay ? '<button type="button" class="demo__sound">Play with sound</button>' : ''}
    `
    video = screen.querySelector('video')

    if (canAutoplay) {
      const sound = screen.querySelector('.demo__sound')
      const clip = video
      let lastTime = 0

      function setMuted(muted) {
        clip.muted = muted
        sound.textContent = muted ? 'Play with sound' : 'Mute'
      }

      sound?.addEventListener('click', () => {
        if (!clip.muted) {
          setMuted(true)
          return
        }
        // Start over so the visitor hears the question, not the middle of the reply.
        clip.currentTime = 0
        lastTime = 0
        setMuted(false)
        clip.play().catch(() => setMuted(true))
      })

      highlightStage(0)
      clip.addEventListener('timeupdate', () => {
        // Sound plays through once, then the loop continues muted.
        if (sound && !clip.muted && clip.currentTime < lastTime - 1) setMuted(true)
        lastTime = clip.currentTime

        let index = 0
        demo.stages.forEach((stage, i) => {
          if (stage.at <= clip.currentTime) index = i
        })
        highlightStage(index)
      })
    } else {
      highlightAllStages()
    }

    // If the hosted file fails to load, fall back to the placeholder.
    screen.querySelector('source:last-of-type').addEventListener('error', () => {
      showPlaceholder(demo)
      syncPlayback()
    })
  }

  function select(index) {
    const demo = demos[index]
    tabs.forEach((tab, i) => {
      tab.setAttribute('aria-selected', String(i === index))
      tab.tabIndex = i === index ? 0 : -1
    })
    panel.setAttribute('aria-labelledby', `demoTab${index}`)
    pipeline.innerHTML = demo.stages.map(stage => `<li class="demo__stage">${stage.label}</li>`).join('')
    desc.textContent = demo.description

    video?.pause()
    if (demo.video) showVideo(demo)
    else showPlaceholder(demo)
    syncPlayback()
  }

  tabs.forEach((tab, i) => {
    tab.addEventListener('click', () => select(i))
    tab.addEventListener('keydown', (e) => {
      if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return
      e.preventDefault()
      const step = e.key === 'ArrowRight' ? 1 : -1
      const next = (i + step + tabs.length) % tabs.length
      select(next)
      tabs[next].focus()
    })
  })

  // Nothing downloads or animates until the demo is on screen.
  new IntersectionObserver(([entry]) => {
    isOnScreen = entry.isIntersecting
    syncPlayback()
  }, { threshold: 0.25 }).observe(screen)

  select(0)
}

function renderAbout() {
  document.getElementById('aboutBio').innerHTML = content.bio

  const img = document.getElementById('profileImg')
  const initials = document.getElementById('profileInitials')
  img.addEventListener('error', () => {
    img.classList.add('hidden')
    initials.classList.add('visible')
  })
  img.addEventListener('load', () => {
    initials.classList.remove('visible')
  })
  // Trigger error check if already broken (cached 404)
  if (img.complete && img.naturalWidth === 0) {
    img.classList.add('hidden')
    initials.classList.add('visible')
  }
}

function renderTimeline() {
  const container = document.getElementById('timeline')
  container.innerHTML = content.experience.map(job => `
    <div class="timeline__item glass" data-animate>
      <div class="timeline__date">${job.start} - ${job.end}</div>
      <div class="timeline__role">${job.role}</div>
      <div class="timeline__company">${job.company}</div>
      <ul class="timeline__bullets">
        ${job.bullets.map(b => `<li>${b}</li>`).join('')}
      </ul>
    </div>
  `).join('')
}

function renderSkills() {
  const container = document.getElementById('skillsGrid')
  container.innerHTML = content.skills.map(group => `
    <div class="skill-group" data-animate>
      <div class="skill-group__title">${group.category}</div>
      <div class="skill-pills">
        ${group.items.map(item => `<span class="skill-pill">${item}</span>`).join('')}
      </div>
    </div>
  `).join('')
}

function renderHighlights() {
  const container = document.getElementById('highlightsGrid')
  container.innerHTML = content.highlights.map(item => `
    <div class="highlight-card glass" data-animate>
      <div class="highlight-card__header">
        <div class="highlight-card__title">${item.title}</div>
        <div class="highlight-card__period">${item.period}</div>
      </div>
      <div class="highlight-card__body">
        <div class="highlight-card__section">
          <div class="highlight-card__label">Problem</div>
          <p>${item.problem}</p>
        </div>
        <div class="highlight-card__section">
          <div class="highlight-card__label">Approach</div>
          <p>${item.approach}</p>
        </div>
        <div class="highlight-card__section">
          <div class="highlight-card__label">Outcome</div>
          <p>${item.outcome}</p>
        </div>
      </div>
      <div class="highlight-card__tech">
        ${item.tech.map(t => `<span class="skill-pill">${t}</span>`).join('')}
      </div>
    </div>
  `).join('')
}

function renderProjects() {
  const container = document.getElementById('projectsGrid')
  container.innerHTML = content.projects.map(project => `
    <div class="project-card glass" data-animate>
      <div class="project-card__title">${project.title}</div>
      <p class="project-card__desc">${project.description}</p>
      <div class="project-card__tech">
        ${project.tech.map(t => `<span class="skill-pill">${t}</span>`).join('')}
      </div>
      <div class="project-card__links">
        ${project.links.map(link => `
        <a href="${link.url}" target="_blank" rel="noopener noreferrer" class="project-card__link">
          ${link.url.includes('github.com') ? `${icons.github} ${link.label} ${icons.arrowRight}` : `${icons.external} ${link.label}`}
        </a>`).join('')}
        ${project.liveUrl ? `
        <a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="project-card__link">
          ${icons.external} Live Demo
        </a>` : ''}
        ${!project.links.length && !project.liveUrl ? `
        <span class="project-card__private">Private repo, walkthrough on request</span>` : ''}
      </div>
    </div>
  `).join('')
}

function renderFooter() {
  document.getElementById('footerEdu').textContent =
    `${content.education.degree} - ${content.education.school}`
}

function renderContact() {
  document.getElementById('contactCard').innerHTML = `
    <p class="contact__intro">
      Have a role in mind, or want a walkthrough of one of my private projects? Send me an email.
    </p>
    <a href="mailto:${content.email}" class="btn btn--primary">
      ${icons.email} Say Hello
    </a>
    <div class="contact__links">
      <a href="mailto:${content.email}" class="contact__link">
        ${icons.email} ${content.email}
      </a>
      <a href="${content.github}" target="_blank" rel="noopener noreferrer" class="contact__link">
        ${icons.github} GitHub
      </a>
      <a href="${content.linkedin}" target="_blank" rel="noopener noreferrer" class="contact__link">
        ${icons.linkedin} LinkedIn
      </a>
    </div>
  `
}

// ── Scroll Animations ──────────────────────────────────────
// Longest stagger delay (360ms) plus the entrance transition (550ms), rounded up.
const ENTRANCE_DONE_MS = 1000

function initScrollAnimations() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
          setTimeout(() => entry.target.classList.add('is-settled'), ENTRANCE_DONE_MS)
        }
      })
    },
    { threshold: 0.12 }
  )
  document.querySelectorAll('[data-animate]').forEach(el => observer.observe(el))
}

// ── Navigation ─────────────────────────────────────────────
function initNav() {
  const nav = document.getElementById('nav')
  const sections = [...document.querySelectorAll('section[id]')]
  const navLinks = [...document.querySelectorAll('.nav__links a')]

  let ticking = false

  function onScroll() {
    if (ticking) return
    ticking = true
    requestAnimationFrame(() => {
      // Scrolled state
      nav.classList.toggle('nav--scrolled', window.scrollY > 50)

      // Active link tracking
      const scrollY = window.scrollY + 120
      let current = ''
      sections.forEach(section => {
        if (section.offsetTop <= scrollY) {
          current = section.id
        }
      })
      navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${current}`)
      })

      ticking = false
    })
  }

  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()

  const logo = document.querySelector('.nav__logo')
  logo.addEventListener('click', (e) => {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
    history.replaceState(null, '', window.location.pathname + window.location.search)
  })
}

// ── Mobile Hamburger ───────────────────────────────────────
function initMobileMenu() {
  const hamburger = document.getElementById('hamburger')
  const navLinks = document.getElementById('navLinks')

  hamburger.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('nav__links--open')
    hamburger.setAttribute('aria-expanded', String(isOpen))
  })

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('nav__links--open')
      hamburger.setAttribute('aria-expanded', 'false')
    })
  })

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
      navLinks.classList.remove('nav__links--open')
      hamburger.setAttribute('aria-expanded', 'false')
    }
  })
}

// ── Init ───────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  renderHero()
  initHeroDemo()
  renderAbout()
  renderTimeline()
  renderHighlights()
  renderSkills()
  renderProjects()
  renderContact()
  renderFooter()

  // Observe [data-animate] elements — must run after injection
  initScrollAnimations()

  initNav()
  initMobileMenu()

  document.getElementById('year').textContent = new Date().getFullYear()
})
