import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiDownload, FiMail, FiGithub, FiLinkedin, FiExternalLink, FiArrowRight } from 'react-icons/fi'
import DefaultLayout from './components/layout/DefaultLayout'
import Stats from './components/organisms/Stats'
import About from './components/organisms/About'
import Experience from './components/organisms/Experience'
import Skills from './components/organisms/Skills'
import Principles from './components/organisms/Principles'
import Testimonials from './Testimonials'
import Form from './Form'
import EngineeringChallenges from './components/organisms/EngineeringChallenges'
import { FEATURED_PROJECTS } from './data/projects'
import { RESUME_URL, GITHUB_URL, LINKEDIN_URL, EMAIL, ROLE_TITLE, HERO_TAGLINE, YEARS_EXPERIENCE } from './data/narrative'

/* ─── Hero Terminal Lines ─────────────────────────────────────────── */
const TERMINAL_LINES = [
  { indent: 0, content: <><span style={{color:'#7c3aed'}}>const</span> <span style={{color:'#4ade80'}}>engineer</span> = {'{'}</> },
  { indent: 1, content: <><span style={{color:'#f59e0b'}}>name</span>: <span style={{color:'#86efac'}}>"Victor Adighibe"</span>,</> },
  { indent: 1, content: <><span style={{color:'#f59e0b'}}>handle</span>: <span style={{color:'#86efac'}}>"Savics"</span>, <span style={{color:'#52525b'}}>// engineering identity</span></> },
  { indent: 1, content: <><span style={{color:'#f59e0b'}}>title</span>: <span style={{color:'#86efac'}}>"{ROLE_TITLE}"</span>,</> },
  { indent: 1, content: <><span style={{color:'#f59e0b'}}>yearsExp</span>: <span style={{color:'#fb923c'}}>{YEARS_EXPERIENCE}</span>,</> },
  { indent: 1, content: <><span style={{color:'#f59e0b'}}>stack</span>: [<span style={{color:'#86efac'}}>"React"</span>, <span style={{color:'#86efac'}}>"TypeScript"</span>, <span style={{color:'#86efac'}}>"Node.js"</span>],</> },
  { indent: 1, content: <><span style={{color:'#f59e0b'}}>available</span>: <span style={{color:'#4ade80'}}>true</span>,  <span style={{color:'#3f3f46'}}>// open to opportunities</span></> },
  { indent: 0, content: <>{'}'}</> },
]

/* ─── Project Card ────────────────────────────────────────────────── */
function ProjectCard({ project, index }) {
  const isEven = index % 2 === 0

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="grid md:grid-cols-2 gap-10 md:gap-16 items-center"
    >
      {/* Image / Placeholder */}
      <div className={!isEven ? 'order-1 md:order-2' : 'order-1'}>
        {project.image ? (
          <div
            className="project-card-img rounded-xl overflow-hidden"
            style={{ background: '#111113', border: '1px solid #27272a' }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full object-cover aspect-[16/10]"
              loading="lazy"
            />
          </div>
        ) : (
          <div
            className="aspect-[16/10] rounded-xl flex flex-col items-center justify-center p-8 text-center"
            style={{ background: '#18181b', border: '1px dashed #3f3f46' }}
          >
            <span className="text-3xl mb-3">🛠️</span>
            <p className="text-fg font-bold mb-1">{project.title}</p>
            <p className="text-muted text-xs font-mono">{project.role}</p>
          </div>
        )}
      </div>

      {/* Content */}
      <div className={!isEven ? 'order-2 md:order-1' : 'order-2'}>
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-mono text-accent">{project.year}</span>
          <span className="text-muted text-xs">·</span>
          <span className="text-xs font-mono text-secondary">{project.company}</span>
          <span className="text-muted text-xs">·</span>
          <span className="text-xs font-mono text-muted">{project.categories[0]}</span>
        </div>

        <h3 className="text-2xl font-bold text-fg mb-2 tracking-tight">
          {project.title}
        </h3>
        <p className="text-secondary text-sm leading-relaxed mb-6">
          {project.tagline || project.desc}
        </p>

        {/* Problem -> Impact mini flow */}
        {(project.problem || project.impact) && (
          <div
            className="rounded-xl p-4 mb-6 space-y-3 text-xs"
            style={{ background: '#111113', border: '1px solid #27272a' }}
          >
            {project.problem && (
              <div>
                <span className="font-mono text-muted uppercase tracking-wider block mb-0.5">The Challenge</span>
                <p className="text-secondary leading-relaxed">{project.problem}</p>
              </div>
            )}
            {project.impact && (
              <div>
                <span className="font-mono text-accent uppercase tracking-wider block mb-0.5">Engineering Impact</span>
                <p className="text-fg leading-relaxed font-medium">{project.impact}</p>
              </div>
            )}
          </div>
        )}

        {/* Tech Badges */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.tech.map((t) => (
            <span key={t} className="skill-tag">{t}</span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          {project.casestudyRoute ? (
            <Link
              to={project.casestudyRoute}
              className="btn-primary py-2 px-4 text-xs font-semibold"
            >
              Read Case Study <FiArrowRight size={14} />
            </Link>
          ) : project.externalUrl ? (
            <a
              href={project.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary py-2 px-4 text-xs font-semibold"
            >
              Live Site <FiExternalLink size={14} />
            </a>
          ) : null}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost py-2 px-4 text-xs"
              aria-label="View source code on GitHub"
            >
              <FiGithub size={14} /> Source Code
            </a>
          )}
        </div>
      </div>
    </motion.article>
  )
}

/* ─── Home ─────────────────────────────────────────────────────────── */
export default function Home() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.slice(1)
      setTimeout(() => {
        const el = document.getElementById(id)
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' })
        }
      }, 60)
      return
    }
    window.scrollTo(0, 0)
  }, [location.hash])

  return (
    <DefaultLayout>

      {/* ─── Hero ───────────────────────────────────────────── */}
      <section className="hero-glow relative min-h-screen flex items-center px-5 md:px-10 pt-24 pb-16">
        {/* Ambient glow */}
        <div
          aria-hidden
          style={{
            position: 'absolute',
            top: '10%',
            right: '5%',
            width: '500px',
            height: '500px',
            background: 'radial-gradient(circle, rgba(74,222,128,0.07) 0%, transparent 65%)',
            pointerEvents: 'none',
            zIndex: 0,
          }}
        />

        <div className="container mx-auto relative z-10">
          <div className="max-w-2xl">
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="mb-8 flex flex-wrap items-center gap-2.5"
            >
              <span className="badge badge-green">
                <span className="badge-dot" />
                Available for new opportunities
              </span>
              <span
                className="text-secondary text-xs font-mono border border-border/80 px-3 py-1 rounded-full"
                style={{ background: 'rgba(24, 24, 27, 0.7)' }}
              >
                Victor Adighibe 
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-fg font-bold leading-tight mb-5"
              style={{
                fontSize: 'clamp(2.25rem, 6vw, 4rem)',
                letterSpacing: '-0.03em',
                fontFamily: 'Inter, sans-serif',
              }}
            >
              I engineer products,<br />
              <span className="text-accent">platforms & real-time systems.</span>
            </motion.h1>

            {/* Sub copy */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-secondary text-lg leading-relaxed mb-10 max-w-lg"
            >
              {HERO_TAGLINE}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-3 mb-10"
            >
              <a href="#work" className="btn-primary">
                Explore Selected Work
              </a>
              <a href={RESUME_URL} download className="btn-ghost">
                <FiDownload size={15} />
                View Resume
              </a>
            </motion.div>

            {/* Terminal */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="terminal max-w-lg"
            >
              <div className="terminal-bar">
                <span className="terminal-dot" style={{ background: '#ef4444' }} />
                <span className="terminal-dot" style={{ background: '#f59e0b' }} />
                <span className="terminal-dot" style={{ background: '#22c55e' }} />
                <span className="text-muted text-xs ml-2">~/victor</span>
              </div>
              <div className="p-5 space-y-1 text-xs font-mono" style={{ color: '#a1a1aa' }}>
                {TERMINAL_LINES.map((line, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 + i * 0.07 }}
                    style={{ paddingLeft: `${line.indent * 16}px` }}
                  >
                    {line.content}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Stats ─────────────────────────────────────────── */}
      <Stats />

      {/* ─── About ──────────────────────────────────────────── */}
      <About />

      {/* ─── Selected Work ─────────────────────────────────── */}
      <section id="work" className="section">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="mb-16"
          >
            <p className="section-label mb-3">Professional work & case studies</p>
            <h2 className="section-title mb-4">Systems that mattered</h2>
            <p className="section-subtitle text-secondary">
              Not demos or isolated builds — each system represents a real problem solved, a production
              platform shipped, and real engineering impact.
            </p>
          </motion.div>

          <div className="space-y-24">
            {FEATURED_PROJECTS.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="mt-16 flex justify-center"
          >
            <Link to="/work" className="btn-ghost text-sm py-2.5 px-5">
              View complete work archive <FiArrowRight size={15} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ─── Engineering Challenges Solved ─────────────────── */}
      <EngineeringChallenges />

      {/* ─── Skills ─────────────────────────────────────────── */}
      <Skills />

      {/* ─── Principles ─────────────────────────────────────── */}
      <Principles />

      {/* ─── Experience ─────────────────────────────────────── */}
      <Experience />

      {/* ─── Testimonials ───────────────────────────────────── */}
      <Testimonials />

      {/* ─── Contact ────────────────────────────────────────── */}
      <Form />

    </DefaultLayout>
  )
}