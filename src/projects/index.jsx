import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiGithub, FiExternalLink, FiArrowLeft, FiArrowRight } from 'react-icons/fi'
import DefaultLayout from '../components/layout/DefaultLayout'

import paymable from './../assets/paymable/logo.svg'
import simpoo   from './../assets/simpoo/logo.svg'
import dora     from './../assets/dora/logo.svg'
import reico    from './../assets/reicoLogo.svg'
import fe       from './../assets/FE-logo.png'
import pmd      from './../assets/pmdlogo.png'

/* ─── Data ─────────────────────────────────────────────────────────── */
const PROJECTS = [
  {
    logo: simpoo,
    title: 'Simpoo Business',
    desc: 'Full-featured business management platform — POS, inventory, reporting, and role-based access.',
    role: 'Lead Frontend Engineer',
    company: 'Jiffypay',
    tech: ['React', 'TypeScript', 'Redux Toolkit', 'TanStack Query', 'Tailwind CSS', 'REST APIs'],
    casestudy: null,
    external: 'https://simpoobusiness.com',
    github: null,
    status: 'live',
  },
  {
    logo: dora,
    title: 'Dora',
    desc: 'Browser-based VoIP communication system with WebRTC, SIP protocol, and Electron desktop wrapper.',
    role: 'Frontend Engineer',
    company: 'Dora',
    tech: ['React', 'Next.js', 'Electron', 'SIP.js', 'WebRTC', 'Socket.io'],
    casestudy: null,
    external: 'https://usedora.com',
    github: null,
    status: 'live',
  },
  {
    logo: reico,
    title: 'HxAfrica',
    desc: 'Blockchain-powered real estate investment platform connecting African investors with property opportunities.',
    role: 'Frontend Engineer',
    company: 'HxAfrica',
    tech: ['React', 'Tailwind CSS', 'Figma'],
    casestudy: '/projects/hxafrica',
    external: null,
    github: null,
    status: 'live',
  },
  {
    logo: paymable,
    title: 'Paymable',
    desc: 'Virtual payment processor platform with modern checkout flows and payment integration.',
    role: 'Frontend Engineer',
    company: 'Paymable',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    casestudy: null,
    external: 'https://paymable.co',
    github: null,
    status: 'live',
  },
  {
    logo: null,
    title: 'Africurve',
    desc: 'WordPress site for a modelling agency — custom theme, Elementor, Rev Slider animations.',
    role: 'WordPress Developer',
    company: 'Africurve',
    tech: ['WordPress', 'Elementor', 'RevSlider'],
    casestudy: '/projects/africurve',
    external: null,
    github: null,
    status: 'live',
  },
  {
    logo: fe,
    title: 'Fabulous Edutainment',
    desc: 'Talent management company website — vanilla HTML/CSS/JS with performance-first build.',
    role: 'Frontend Developer',
    company: 'Fabulous Edutainment',
    tech: ['JavaScript', 'HTML', 'CSS3'],
    casestudy: null,
    external: 'https://fabulousedutainment.com/',
    github: 'https://github.com/Savics407/Fabulous-Edutainment',
    status: 'live',
  },
  {
    logo: null,
    title: 'ACIMT',
    desc: 'African College of Information and Medical Technology — WordPress institution site.',
    role: 'WordPress Developer',
    company: 'ACIMT',
    tech: ['WordPress', 'Elementor'],
    casestudy: null,
    external: 'https://acimt.org/',
    github: null,
    status: 'live',
  },
  {
    logo: pmd,
    title: 'PmdAfrica',
    desc: 'Non-Governmental Organisation site with donation flows and event management.',
    role: 'WordPress Developer',
    company: 'PmdAfrica',
    tech: ['WordPress', 'Elementor'],
    casestudy: null,
    external: 'http://povertymustdie.africa/',
    github: null,
    status: 'live',
  },
  {
    logo: null,
    title: 'npm Packages',
    desc: 'Published reusable npm packages including a Tailwind CSS prefixing utility used across multiple projects.',
    role: 'Author',
    company: 'Open Source',
    tech: ['TypeScript', 'Rollup', 'npm'],
    casestudy: null,
    external: null,
    github: 'https://github.com/Savics407',
    status: 'live',
  },
]

/* ─── Card ────────────────────────────────────────────────────────── */
function ProjectCard({ project, index }) {
  const linkHref = project.casestudy || project.external || project.github

  const CardWrapper = ({ children }) =>
    project.casestudy ? (
      <Link to={project.casestudy} className="block h-full">{children}</Link>
    ) : project.external ? (
      <a href={project.external} target="_blank" rel="noopener noreferrer" className="block h-full">{children}</a>
    ) : (
      <div className="h-full">{children}</div>
    )

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: (index % 3) * 0.06 }}
      className="card hover-lift flex flex-col"
      style={{ minHeight: '260px' }}
    >
      {/* Top */}
      <div className="p-5 flex-1 flex flex-col">
        {/* Logo or title text */}
        <div className="flex items-start justify-between mb-4">
          <div className="h-8 flex items-center">
            {project.logo ? (
              <img
                src={project.logo}
                alt={project.title}
                className="h-full w-auto object-contain"
                style={{ filter: 'brightness(0) invert(1)', maxWidth: '100px' }}
                loading="lazy"
              />
            ) : (
              <span className="text-fg font-bold text-lg tracking-tight">{project.title}</span>
            )}
          </div>
          <span className="flex items-center gap-1.5 text-xs text-secondary">
            <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
            Live
          </span>
        </div>

        {/* Meta */}
        <div className="mb-3">
          <p className="text-accent text-xs font-medium">{project.role}</p>
          <p className="text-muted text-xs">{project.company}</p>
        </div>

        {/* Description */}
        <p className="text-secondary text-sm leading-relaxed flex-1">{project.desc}</p>
      </div>

      {/* Bottom — tags + links */}
      <div
        className="px-5 py-4 flex items-end justify-between gap-3"
        style={{ borderTop: '1px solid #27272a' }}
      >
        <div className="flex flex-wrap gap-1.5">
          {project.tech.slice(0, 3).map((t) => (
            <span key={t} className="skill-tag">{t}</span>
          ))}
          {project.tech.length > 3 && (
            <span className="skill-tag">+{project.tech.length - 3}</span>
          )}
        </div>

        <div className="flex items-center gap-2 flex-shrink-0">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-accent transition-colors"
              aria-label={`${project.title} on GitHub`}
              onClick={(e) => e.stopPropagation()}
            >
              <FiGithub size={15} />
            </a>
          )}
          {project.casestudy ? (
            <Link
              to={project.casestudy}
              className="text-muted hover:text-accent transition-colors"
              aria-label={`${project.title} case study`}
            >
              <FiArrowRight size={15} />
            </Link>
          ) : project.external ? (
            <a
              href={project.external}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-accent transition-colors"
              aria-label={`${project.title} live site`}
            >
              <FiExternalLink size={15} />
            </a>
          ) : null}
        </div>
      </div>
    </motion.div>
  )
}

/* ─── Page ─────────────────────────────────────────────────────────── */
export default function Projects() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <DefaultLayout>
      {/* Hero banner */}
      <div
        className="pt-28 pb-14 px-5 md:px-10"
        style={{ borderBottom: '1px solid #27272a' }}
      >
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 text-muted text-xs hover:text-accent transition-colors mb-8"
            >
              <FiArrowLeft size={12} /> Back to home
            </Link>
            <p className="section-label mb-3">Archive</p>
            <h1 className="section-title mb-4">Everything I've shipped</h1>
            <p className="section-subtitle text-secondary max-w-xl">
              A complete list of projects — production systems, client sites, open source packages,
              and freelance work. Some have case studies, all were shipped.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Grid */}
      <div className="px-5 md:px-10 py-14">
        <div className="container mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {PROJECTS.map((project, i) => (
              <ProjectCard key={project.title} project={project} index={i} />
            ))}
          </div>
        </div>
      </div>
    </DefaultLayout>
  )
}