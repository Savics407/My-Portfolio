import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiDownload, FiMail, FiGithub, FiLinkedin, FiExternalLink, FiArrowRight } from 'react-icons/fi'
import DefaultLayout from './components/layout/DefaultLayout'
import Stats from './components/organisms/Stats'
import Experience from './components/organisms/Experience'
import Skills from './components/organisms/Skills'
import Principles from './components/organisms/Principles'
import Testimonials from './Testimonials'
import Form from './Form'

// Project screenshots — using existing assets
import doraImg from './assets/dora/dora.svg'
import reicoImg from './assets/reico/body.svg'
import simpooLogo from './assets/simpoo/logo.svg'

/* ─── Data ────────────────────────────────────────────────────────── */
const PROJECTS = [
  {
    id: 'simpoo',
    title: 'Simpoo Business',
    company: 'Jiffypay',
    role: 'Lead Frontend Engineer',
    tagline: 'Full-featured business management platform — POS, inventory, reporting, and role-based access — built from scratch.',
    problem:
      'Local businesses needed an all-in-one platform to manage inventory, run point-of-sale transactions, generate reports, and manage staff permissions — without stitching together five separate tools.',
    impact: 'Owned the entire frontend architecture and shipped all core modules. [ Placeholder: Add production metric — e.g. active merchants, transaction volume ]',
    tech: ['React', 'TypeScript', 'Redux Toolkit', 'TanStack Query', 'Tailwind CSS', 'REST APIs'],
    casestudyLink: null,
    externalLink: null,
    githubLink: null,
    image: simpooLogo,
    featured: true,
  },
  {
    id: 'dora',
    title: 'Dora VoIP System',
    company: 'Dora',
    role: 'Frontend Engineer',
    tagline: 'Browser-based communication system with real-time WebRTC, SIP protocol, and Electron desktop wrapper.',
    problem:
      'A delivery management company needed a fully integrated, browser-based VoIP system — not a third-party widget, but a custom-built solution deeply integrated into their workflow.',
    impact: 'Built the entire communication layer including SIP.js integration, WebRTC signalling, and SDK architecture. [ Placeholder: Call volume / user count ]',
    tech: ['React', 'Next.js', 'Electron', 'SIP.js', 'WebRTC', 'Socket.io', 'Janus', 'Asterisk'],
    casestudyLink: null,
    externalLink: 'https://usedora.com',
    githubLink: null,
    image: doraImg,
    featured: true,
  },
  {
    id: 'hxafrica',
    title: 'HxAfrica',
    company: 'HxAfrica',
    role: 'Frontend Engineer',
    tagline: 'Blockchain-powered real estate investment platform connecting African investors with property opportunities.',
    problem:
      'Real estate investment in Africa was opaque and inaccessible. HxAfrica needed a secure, trustworthy frontend that could communicate complex blockchain concepts to non-technical investors.',
    impact: 'Delivered complete frontend from design to production. Case study available.',
    tech: ['React', 'Tailwind CSS', 'Figma'],
    casestudyLink: '/projects/hxafrica',
    externalLink: null,
    githubLink: null,
    image: reicoImg,
    featured: true,
  },
  {
    id: 'sdk',
    title: 'Reusable SDK & npm Packages',
    company: 'Internal / Open Source',
    role: 'Author',
    tagline: 'Production npm packages including a Tailwind CSS prefixing utility, consumed across multiple projects.',
    problem:
      'Sharing Tailwind-based component libraries across projects caused class name collisions. Existing solutions were too heavy or required configuration sprawl.',
    impact: 'Published standalone npm packages with full TypeScript types, rollup bundling, and documentation.',
    tech: ['TypeScript', 'Rollup', 'npm', 'Tailwind CSS'],
    casestudyLink: null,
    externalLink: null,
    githubLink: 'https://github.com/Savics407',
    image: null,
    featured: false,
  },
]

/* ─── Hero Terminal Lines ─────────────────────────────────────────── */
const TERMINAL_LINES = [
  { indent: 0, content: <><span style={{color:'#7c3aed'}}>const</span> <span style={{color:'#4ade80'}}>engineer</span> = {'{'}</> },
  { indent: 1, content: <><span style={{color:'#f59e0b'}}>name</span>: <span style={{color:'#86efac'}}>"Victor Adighibe"</span>,</> },
  { indent: 1, content: <><span style={{color:'#f59e0b'}}>title</span>: <span style={{color:'#86efac'}}>"Senior Frontend Engineer"</span>,</> },
  { indent: 1, content: <><span style={{color:'#f59e0b'}}>yearsExp</span>: <span style={{color:'#fb923c'}}>7</span>,</> },
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
      className={`grid md:grid-cols-2 gap-10 md:gap-16 items-center ${!isEven ? 'md:[direction:rtl]' : ''}`}
    >
      {/* Image / Placeholder */}
      <div className={`${!isEven ? 'md:[direction:ltr]' : ''}`}>
        {project.image ? (
          <div
            className="project-card-img rounded-xl overflow-hidden"
            style={{ background: '#111113', border: '1px solid #27272a' }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-auto object-cover"
              style={{ maxHeight: '320px', objectFit: 'cover' }}
              loading="lazy"
            />
          </div>
        ) : (
          <div
            className="rounded-xl flex items-center justify-center h-64"
            style={{ background: '#111113', border: '1px solid #27272a' }}
          >
            {/* Placeholder — code snippet */}
            <div className="terminal w-[90%]">
              <div className="terminal-bar">
                <span className="terminal-dot" style={{ background: '#ef4444' }} />
                <span className="terminal-dot" style={{ background: '#f59e0b' }} />
                <span className="terminal-dot" style={{ background: '#22c55e' }} />
                <span className="text-muted text-xs ml-2">{project.id}.tsx</span>
              </div>
              <div className="p-4 text-xs space-y-1 font-mono" style={{ color: '#a1a1aa' }}>
                <div><span style={{color:'#7c3aed'}}>export</span> <span style={{color:'#7c3aed'}}>function</span> <span style={{color:'#4ade80'}}>{project.title.replace(/\s/g, '')}</span>() {'{'}</div>
                <div className="pl-4"><span style={{color:'#71717a'}}>// production-grade</span></div>
                <div className="pl-4"><span style={{color:'#71717a'}}>// {project.tech[0]} + {project.tech[1]}</span></div>
                <div className="pl-4"><span style={{color:'#7c3aed'}}>return</span> <span style={{color:'#f59e0b'}}>&lt;ShippedProduct /&gt;</span></div>
                <div>{'}'}</div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className={`${!isEven ? 'md:[direction:ltr]' : ''}`}>
        <div className="flex items-center gap-2 mb-3">
          <span className="text-accent text-xs font-mono">{String(index + 1).padStart(2, '0')}</span>
          <span className="text-muted text-xs">·</span>
          <span className="text-muted text-xs">{project.company}</span>
          {project.featured && (
            <span className="badge badge-green ml-1">Featured</span>
          )}
        </div>

        <h3 className="text-fg font-bold text-2xl mb-1 leading-tight">{project.title}</h3>
        <p className="text-accent text-xs font-medium mb-4">{project.role}</p>

        <p className="text-secondary text-sm leading-relaxed mb-4">{project.tagline}</p>

        {/* Problem */}
        <div
          className="rounded-lg p-4 mb-5 text-sm"
          style={{ background: '#111113', border: '1px solid #27272a' }}
        >
          <p className="text-muted text-xs font-semibold uppercase tracking-wide mb-1.5">The problem</p>
          <p className="text-secondary leading-relaxed">{project.problem}</p>
        </div>

        {/* Impact */}
        <p className="text-xs text-secondary mb-5 leading-relaxed">
          <span className="text-accent font-medium">Impact: </span>
          {project.impact}
        </p>

        {/* Tech */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((t) => (
            <span key={t} className="skill-tag">{t}</span>
          ))}
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-3">
          {project.casestudyLink && (
            <Link to={project.casestudyLink} className="btn-primary text-sm py-2 px-4">
              View case study <FiArrowRight size={13} />
            </Link>
          )}
          {project.externalLink && (
            <a
              href={project.externalLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost text-sm py-2 px-4"
            >
              <FiExternalLink size={13} /> Live site
            </a>
          )}
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost text-sm py-2 px-4"
            >
              <FiGithub size={13} /> GitHub
            </a>
          )}
        </div>
      </div>
    </motion.article>
  )
}

/* ─── Home ─────────────────────────────────────────────────────────── */
export default function Home() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

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
              className="mb-8"
            >
              <span className="badge badge-green">
                <span className="badge-dot" />
                Available for new opportunities
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
              I build products<br />
              <span className="text-accent">people love using.</span>
            </motion.h1>

            {/* Sub copy */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-secondary text-lg leading-relaxed mb-10 max-w-lg"
            >
              Senior Software Engineer with 7+ years shipping production software.
              React, TypeScript, Node.js. From zero-to-one startups to systems serving
              millions of API requests.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-3 mb-10"
            >
              <a href="/resume.pdf" download className="btn-primary">
                <FiDownload size={15} />
                Download Resume
              </a>
              <a href="mailto:savicstech@gmail.com" className="btn-ghost">
                <FiMail size={15} />
                savicstech@gmail.com
              </a>
              <a
                href="https://github.com/Savics407"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
                aria-label="GitHub"
              >
                <FiGithub size={15} />
              </a>
              <a
                href="https://www.linkedin.com/in/victor-adighibe-b4a89923a/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
                aria-label="LinkedIn"
              >
                <FiLinkedin size={15} />
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
            <p className="section-label mb-3">Selected work</p>
            <h2 className="section-title mb-4">Projects that mattered</h2>
            <p className="section-subtitle text-secondary">
              Not screenshots — each project represents a real problem solved, a real
              system shipped, and real lessons learned.
            </p>
          </motion.div>

          <div className="space-y-24">
            {PROJECTS.map((project, i) => (
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
            <Link to="/projects" className="btn-ghost">
              View project archive <FiArrowRight size={14} />
            </Link>
          </motion.div>
        </div>
      </section>

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