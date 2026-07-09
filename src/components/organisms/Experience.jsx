import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiExternalLink, FiChevronDown, FiChevronUp } from 'react-icons/fi'

const EXPERIENCE = [
  {
    company: 'Jiffypay',
    role: 'Lead Frontend Engineer',
    period: '2022 — Present',
    type: 'Full-time',
    url: null,
    description:
      'Architected and built Simpoo Business from the ground up — a full-featured business management platform used in production.',
    highlights: [
      'Designed the entire frontend architecture: component structure, state management strategy, routing, and API integration patterns',
      'Built core product modules: POS system, inventory management, reporting dashboard, and role-based access control',
      'Implemented state management using Redux Toolkit + TanStack Query — eliminating redundant API calls and improving data consistency',
      'Created a reusable component library that reduced feature development time across the product',
      'Owned authentication flows including JWT handling, refresh token strategy, and protected route management',
      '[ Placeholder: Add metric — e.g. "reduced initial load time by X%" or "serving X active merchants" ]',
    ],
    tech: ['React', 'TypeScript', 'Redux Toolkit', 'TanStack Query', 'Tailwind CSS', 'Node.js', 'REST APIs'],
  },
  {
    company: 'NoemDek',
    role: 'Senior Frontend Engineer',
    period: '2020 — 2022',
    type: 'Full-time',
    url: null,
    description:
      'Worked on internal products and production systems serving real users across the organisation.',
    highlights: [
      'Built scalable React applications for internal tooling and client-facing products',
      'Improved codebase maintainability through component refactoring and establishing shared patterns',
      'Integrated third-party REST APIs and handled authentication flows',
      'Collaborated with design, product, and backend teams in an agile environment',
      '[ Placeholder: Add a specific project or metric from your time here ]',
    ],
    tech: ['React', 'JavaScript', 'REST APIs', 'Git'],
  },
  {
    company: 'Dora',
    role: 'Frontend Engineer (Contract)',
    period: '2022',
    type: 'Contract',
    url: 'https://usedora.com',
    description:
      'Built a browser-based VoIP and communication system from scratch — one of the most technically complex projects in my career.',
    highlights: [
      'Integrated SIP.js to handle SIP protocol communication inside a web browser — a rare engineering challenge',
      'Built real-time communication features using WebRTC and Socket.io for signalling and media negotiation',
      'Developed an Electron wrapper to ship the application as a desktop app alongside the web client',
      'Connected to Janus WebRTC media server and Asterisk PBX for call routing and session management',
      'Designed the SDK architecture to decouple communication logic from the UI layer',
      '[ Placeholder: Add usage metrics — e.g. concurrent users, call volume ]',
    ],
    tech: ['React', 'Next.js', 'Electron', 'SIP.js', 'WebRTC', 'Socket.io', 'Janus', 'Asterisk', 'SDK'],
  },
  {
    company: 'SDK & Package Development',
    role: 'Author',
    period: 'Ongoing',
    type: 'Open Source / Internal',
    url: 'https://github.com/Savics407',
    description:
      'Built and published reusable npm packages consumed across multiple projects.',
    highlights: [
      'Developed a Tailwind CSS prefixing utility to prevent class conflicts in multi-package environments',
      'Bundled packages with Rollup for optimal tree-shaking and ESM/CJS dual output',
      'Wrote TypeScript types and JSDoc documentation for all public APIs',
      'Published to npm with semantic versioning and maintained changelogs',
    ],
    tech: ['TypeScript', 'Rollup', 'npm', 'Tailwind CSS', 'SDK Design'],
  },
  {
    company: 'WordPress & Web Performance',
    role: 'Frontend Engineer',
    period: '2018 — 2020',
    type: 'Freelance',
    url: null,
    description:
      'Delivered enterprise-grade WordPress sites with a focus on performance, SEO, and Core Web Vitals.',
    highlights: [
      'Built custom WordPress themes and Elementor-based page templates for enterprise clients',
      'Optimised Core Web Vitals (LCP, FID, CLS) across multiple production sites',
      'Implemented technical SEO: structured data, sitemap generation, page speed improvements',
      'Delivered sites for clients in media, real estate, and entertainment sectors',
    ],
    tech: ['WordPress', 'Elementor', 'PHP', 'JavaScript', 'Core Web Vitals', 'SEO'],
  },
]

function ExperienceCard({ exp, index }) {
  const [expanded, setExpanded] = useState(index === 0)

  return (
    <motion.div
      initial={{ opacity: 0, x: -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className="relative pl-8"
    >
      {/* Timeline elements */}
      <div className="timeline-line" />
      <div className="timeline-dot" />

      <div className="card p-6 mb-6">
        {/* Header row */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h3 className="text-fg font-semibold text-base">{exp.company}</h3>
              {exp.url && (
                <a
                  href={exp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted hover:text-accent transition-colors"
                  aria-label={`Visit ${exp.company}`}
                >
                  <FiExternalLink size={13} />
                </a>
              )}
            </div>
            <p className="text-accent text-sm font-medium">{exp.role}</p>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            <span className="text-xs text-muted font-mono">{exp.period}</span>
            <span className="badge" style={{
              color: exp.type === 'Full-time' ? '#4ade80' : '#a1a1aa',
              borderColor: exp.type === 'Full-time' ? 'rgba(74,222,128,0.25)' : 'rgba(161,161,170,0.2)',
              background: exp.type === 'Full-time' ? 'rgba(74,222,128,0.08)' : 'rgba(161,161,170,0.05)',
            }}>
              {exp.type}
            </span>
          </div>
        </div>

        {/* Description */}
        <p className="text-secondary text-sm leading-relaxed mb-4">{exp.description}</p>

        {/* Expandable highlights */}
        <AnimatePresence initial={false}>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              style={{ overflow: 'hidden' }}
            >
              <ul className="space-y-2 mb-5">
                {exp.highlights.map((h, i) => (
                  <li key={i} className="flex gap-3 text-sm text-secondary leading-relaxed">
                    <span className="text-accent mt-1 flex-shrink-0">›</span>
                    <span className={h.startsWith('[') ? 'text-muted italic' : ''}>{h}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Tech tags + toggle */}
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <div className="flex flex-wrap gap-2">
            {exp.tech.map((t) => (
              <span key={t} className="skill-tag">{t}</span>
            ))}
          </div>
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-muted hover:text-accent transition-colors flex items-center gap-1 text-xs font-medium flex-shrink-0"
            aria-label={expanded ? 'Show less' : 'Show more'}
          >
            {expanded ? (
              <><FiChevronUp size={14} /> Less</>
            ) : (
              <><FiChevronDown size={14} /> Details</>
            )}
          </button>
        </div>
      </div>
    </motion.div>
  )
}

export default function Experience() {
  return (
    <section id="about" className="section">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-14"
        >
          <p className="section-label mb-3">Career</p>
          <h2 className="section-title mb-4">Where I've worked</h2>
          <p className="section-subtitle text-secondary">
            7 years across startups, agencies, and freelance projects — always as the engineer
            who owns the problem, not just the ticket.
          </p>
        </motion.div>

        <div className="relative">
          {EXPERIENCE.map((exp, i) => (
            <ExperienceCard key={exp.company} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
