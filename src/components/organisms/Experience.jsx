import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiExternalLink, FiChevronDown, FiChevronUp } from 'react-icons/fi'
import { YEARS_EXPERIENCE } from '../../data/narrative'

const EXPERIENCE = [
  {
    product: 'Dora VoIP & Real-Time Telephony Infrastructure',
    company: 'Dora',
    role: 'Lead Telephony & Frontend Engineer',
    period: '2022',
    type: 'Contract',
    url: 'https://usedora.com',
    description:
      'Architected and engineered a production browser-based VoIP telephony platform powered by WebRTC, SIP signaling, Asterisk/Janus PBX integration, and an Electron desktop app.',
    highlights: [
      'Integrated SIP.js inside browser clients to negotiate live multi-line SIP telephony streams over Asterisk/Janus servers — solving complex NAT traversal and session control challenges',
      'Engineered deterministic audio signaling and real-time call state synchronization pipelines supporting active enterprise logistics dispatch workflows',
      'Authored standalone embeddable TypeScript client SDKs to decouple real-time communication protocols from UI view layers',
      'Shipped cross-platform desktop telephony wrapper using Electron with automated connection recovery and system notification hooks',
    ],
    tech: ['React', 'Next.js', 'Electron', 'SIP.js', 'WebRTC', 'Socket.io', 'Janus Media Server', 'Asterisk PBX', 'Client SDK'],
  },
  {
    product: 'Simpoo Business Platform & POS Ecosystem',
    company: 'Jiffypay',
    role: 'Lead Frontend Engineer',
    period: '2022 — Present',
    type: 'Full-time',
    url: 'https://simpoobusiness.com',
    description:
      'Architected and built Simpoo Business from inception to production — a full-featured enterprise business management platform.',
    highlights: [
      'Engineered sub-second POS checkout flows and deterministic client-side transaction caching for multi-location retail operations',
      'Architected live multi-warehouse stock synchronization using Redux Toolkit + TanStack Query, eliminating data drift across concurrent cashier sessions',
      'Designed and enforced granular Role-Based Access Control (RBAC) security models and JWT/refresh token authentication',
      'Created a standardized, reusable enterprise UI library that reduced cross-functional feature development cycle times',
    ],
    tech: ['React', 'TypeScript', 'Redux Toolkit', 'TanStack Query', 'Tailwind CSS', 'Node.js', 'REST APIs'],
  },
  {
    product: 'Enterprise Platforms: Records v2, Meuve, PetroData & PayStream',
    company: 'NoemDek',
    role: 'Senior Frontend Engineer',
    period: '2020 — 2022',
    type: 'Full-time',
    url: null,
    description:
      'Architected and delivered mission-critical internal enterprise platforms across oil & gas industrial analytics, logistics, and payroll.',
    highlights: [
      'Records v2 & PetroData: Engineered data-dense industrial records governance and oil & gas analytics portals handling massive tabular datasets and auditable compliance workflows',
      'Meuve & PayStream: Delivered enterprise mobility/logistics tracking systems and internal financial payroll disbursement dashboards',
      'Architected shared internal frontend libraries and API integration layers, cutting cross-team feature delivery cycle time across enterprise business products',
      'Collaborated cross-functionally with domain experts, product owners, and backend engineering teams to transform complex enterprise workflows into responsive web applications',
    ],
    tech: ['React', 'JavaScript', 'Enterprise SaaS', 'REST APIs', 'Git'],
  },
  {
    product: 'Standalone Embeddable SDKs & Developer Tooling',
    company: 'Enterprise Tooling & Open Source',
    role: 'Platform & SDK Engineer',
    period: 'Ongoing',
    type: 'Platform Tooling',
    url: 'https://github.com/Savics407',
    description:
      'Authored and published standalone TypeScript client SDKs and build tooling consumed across distributed product teams.',
    highlights: [
      'Designed embeddable client SDKs enabling third-party engineers to integrate VoIP calling and POS checkout workflows in under 10 lines of code',
      'Authored an automated Tailwind CSS prefixing utility and Rollup build pipeline to prevent CSS class collisions across consumer host applications',
      'Wrote strict TypeScript type definitions, public API ergonomics, and JSDoc documentation for zero-friction developer experience',
    ],
    tech: ['TypeScript', 'Rollup', 'npm', 'Tailwind CSS Encapsulation', 'SDK Architecture'],
  },
  {
    product: 'High-Performance Enterprise Web Platforms',
    company: 'Client & Agency Engineering',
    role: 'Frontend Engineer',
    period: '2018 — 2020',
    type: 'Freelance',
    url: null,
    description:
      'Delivered high-performance enterprise web applications with rigorous focus on Core Web Vitals and technical SEO.',
    highlights: [
      'Engineered bespoke, high-conversion web platforms for enterprise clients across media, real estate, and entertainment sectors',
      'Optimized Core Web Vitals (LCP, FID, CLS) to achieve sub-second page loads and superior search indexing',
      'Implemented structured data schemas, programmatic sitemaps, and strict accessibility standards',
    ],
    tech: ['JavaScript', 'Performance Engineering', 'Core Web Vitals', 'SEO', 'PHP'],
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
              <h3 className="text-fg font-bold text-lg leading-snug">{exp.product || exp.company}</h3>
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
            <p className="text-accent text-sm font-medium">
              {exp.role} <span className="text-muted font-normal">· {exp.company}</span>
            </p>
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
    <section id="experience" className="section">
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
            {YEARS_EXPERIENCE}+ years building enterprise software across startups, product companies, and open source — always as the engineer
            who owns the system end-to-end, not just the ticket.
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
