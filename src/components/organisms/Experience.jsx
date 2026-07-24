import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiExternalLink, FiChevronDown, FiChevronUp } from 'react-icons/fi'
import { YEARS_EXPERIENCE } from '../../data/narrative'

const EXPERIENCE = [
  {
    product: 'Enterprise Platforms: Records, Konvoy, PetroData & PayStream',
    company: 'NoemDek',
    role: 'Senior Frontend Engineer',
    period: '2025 — Present',
    type: 'Full-time',
    url: null,
    description:
      'Owned the frontend architecture and system delivery of four business-critical enterprise platforms spanning oil & gas telemetry, business intelligence, and financial operations.',
    highlights: [
      'Architected a shared, stateful table-rendering engine and data abstraction library powered by Zustand and TanStack Table, consolidating tabular workflows across all four platforms and reducing feature iteration cycles by 40%.',
      'Records & PetroData: Designed high-throughput business intelligence dashboards and telemetry data systems, implementing virtualized rendering and granular state queries to support real-time monitoring of industrial oil assets.',
      'Konvoy & PayStream: Engineered operational dispatch dashboards for heavy logistics and secure internal payroll systems, designing strict client-side validation rules and role-based views (RBAC) to ensure operational auditability.',
      'Collaborated directly with product owners and backend engineering teams to design type-safe REST APIs, resolving complex data synchronization challenges across legacy database schemas.',
    ],
    tech: ['React', 'TypeScript', 'Enterprise SaaS', 'Zustand', 'TanStack Table', 'REST APIs', 'Git'],
  },
  {
    product: 'SimpooBusiness Platform, POS & Marketplace Ecosystem',
    company: 'Jiffypay',
    role: 'Lead Frontend Engineer',
    period: '2023 — 2025',
    type: 'Full-time',
    url: 'https://simpoobusiness.com',
    description:
      'Designed and built the client architecture for the Simpoo retail ecosystem from inception, scaling the product across 185 physical store locations and centralizing multi-branch operations.',
    highlights: [
      'POS Checkout: Built a fault-tolerant Point of Sale checkout engine using Redux Toolkit and local storage persistence, reducing checkout transaction latency to sub-seconds while ensuring zero lost carts during intermittent network outages.',
      'Simpoo Marketplace: Led the development of a multi-vendor digital storefront that synchronized with physical store inventories in real-time, designing a split-cart checkout engine to route sub-orders and compute shipping fees per merchant.',
      'Developer Experience: Authored, documented, and published the company\'s standalone JavaScript SDKs (@simpoobusiness/sdk), bundling the code via Rollup with encapsulated CSS to allow partner sites to integrate within 10 lines of code.',
      'Invoice and Reporting: Integrated custom rich document editors (Tiptap) and high-speed PDF/Excel exporting pipelines, eliminating manual billing overhead for thousands of daily retail transactions.',
    ],
    tech: ['Next.js 14', 'TypeScript', 'Redux Toolkit', 'TanStack Query', 'Electron', 'Rollup SDK', 'Tiptap', 'Tailwind CSS'],
  },
  {
    product: 'Dora Cell Telephony Infrastructure & Dora Fleet Logistics',
    company: 'Dora',
    role: 'Founding Engineer (Frontend Lead)',
    period: '2023 — Present',
    type: 'Founding Engineer',
    url: 'https://usedora.com',
    description:
      'Led the frontend engineering team and technical direction for Dora\'s real-time communication platform and logistics infrastructure.',
    highlights: [
      'VoIP Infrastructure: Architected and implemented the client signaling layer using WebRTC and SIP.js over Asterisk media servers, resolving complex NAT traversal issues to achieve 99.9% signaling reliability.',
      'SDK Monorepo: Created and published the modular NPM package suite (@dora-cell/sdk, @dora-cell/sdk-react), enabling both internal products (Dora Fleet) and external CRMs like GoHighLevel to embed calling features seamlessly.',
      'Dora Fleet: Designed real-time delivery dispatch screens with Leaflet maps, Socket.io event channels, and Geoman geofencing, giving operations teams sub-second updates on active delivery routes.',
      'Engineering Leadership: Mentored and grew the frontend team, establishing strict code-quality guidelines, structured code reviews, and deterministic state management patterns.',
    ],
    tech: ['Next.js 16', 'React 19', 'TypeScript', 'WebRTC & SIP.js', 'Asterisk PBX', 'React-Leaflet', 'Socket.io', 'Monorepo SDK'],
  },
  {
    product: 'HxAfrica Real Estate & Asset Tokenization Platform',
    company: 'HxAfrica Platform',
    role: 'Principal Frontend Engineer',
    period: '2022 — 2023',
    type: 'Contract',
    url: null,
    description:
      'Architected and delivered the investor portal connecting global capital with institutional real estate assets across Africa.',
    highlights: [
      'Portal Architecture: Designed and built the core web application from scratch using React and Tailwind CSS, implementing high-performance property searches and interactive yield calculators.',
      'KYC & Compliance: Engineered structured KYC/AML onboarding systems and multi-step investor verification flows, reducing onboarding drop-offs while satisfying strict regulatory constraints.',
      'Portfolio Dashboards: Built real-time asset ownership dashboards and dividend distribution tables, providing investors with transparent, exportable audit trails of their tokenized real estate portfolios.',
    ],
    tech: ['React', 'Tailwind CSS', 'Figma', 'REST APIs', 'Portfolio Reporting'],
  },
  {
    product: 'High-Performance Institutional & Agency Web Platforms',
    company: 'Agency & Client Engineering',
    role: 'Frontend Engineer',
    period: '2019 — 2022',
    type: 'Freelance & Client Work',
    url: null,
    description:
      'Designed and delivered high-performance web applications and customized content systems for institutional clients across model management, education, and non-profits.',
    highlights: [
      'Core Web Vitals: Audited and optimized legacy client websites, using vanilla JavaScript and custom asset pipelines to achieve top-tier performance scores and sub-second page loads.',
      'CMS Engineering: Engineered custom theme frameworks and donation engines for clients like PmdAfrica (NGO) and ACIMT (African College of Information and Medical Technology), focusing on accessibility and secure checkout.',
    ],
    tech: ['JavaScript', 'WordPress', 'Performance Engineering', 'Core Web Vitals', 'Custom Theme Architecture', 'HTML5/CSS3'],
  },
]

function ExperienceCard({ exp, index }) {
  const [expanded, setExpanded] = useState(index === 0)
  const isPrimary = exp.type === 'Full-time' || exp.type === 'Founding Engineer'

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
            <p className="text-accent text-sm font-semibold">
              {exp.role}
              <span className="text-muted font-normal text-[0.8125rem]"> · {exp.company}</span>
            </p>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            <span className="text-xs text-muted font-mono">{exp.period}</span>
            <span className="badge font-semibold" style={{
              color: isPrimary ? '#4ade80' : '#a1a1aa',
              borderColor: isPrimary ? 'rgba(74,222,128,0.25)' : 'rgba(161,161,170,0.2)',
              background: isPrimary ? 'rgba(74,222,128,0.08)' : 'rgba(161,161,170,0.05)',
            }}>
              {exp.type}
            </span>
          </div>
        </div>

        {/* Description */}
        <p className="text-[#b4b4be] text-[0.875rem] leading-[1.85] mb-5">{exp.description}</p>

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
              <ul className="space-y-3 mb-5">
                {exp.highlights.map((h, i) => (
                  <li key={i} className="flex gap-3 text-[0.875rem] text-[#b0b0ba] leading-[1.8]">
                    <span className="text-accent mt-[0.2rem] flex-shrink-0 text-base leading-none">›</span>
                    <span className={h.startsWith('[') ? 'text-muted italic' : ''}>{h}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Tech tags (neutral) + toggle */}
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <div className="flex flex-wrap gap-1.5">
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
