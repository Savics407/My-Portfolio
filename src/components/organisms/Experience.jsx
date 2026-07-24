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
      'Architected and delivered mission-critical internal enterprise platforms across business intelligence, industrial oil & gas telemetry, and financial payroll.',
    highlights: [
      'Records & PetroData: Engineered data-dense business intelligence portals and oil & gas fleet telemetry dashboards handling massive tabular datasets and compliance workflows',
      'Konvoy & PayStream: Delivered enterprise logistics tracking systems (Konvoy) and internal financial treasury/bulk payment disbursement dashboards',
      'Architected shared internal frontend libraries and API integration layers (`Zustand` & `TanStack Table`), cutting cross-team feature delivery cycle times across enterprise business products',
      'Collaborated cross-functionally with domain experts, product owners, and backend engineering teams to transform complex enterprise operations into responsive web applications',
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
      'Architected and built SimpooBusiness from inception to scale across 185 store locations — centralizing POS checkout, inventory ledgers, and consumer e-commerce.',
    highlights: [
      'Engineered sub-second offline-first POS checkout flows and deterministic client-side transaction caching (`Redux Toolkit` + `TanStack Query`) for multi-location retail operations',
      'Built Simpoo Marketplace, enabling multi-vendor split cart checkout and real-time stock reservation sync with physical in-store POS ledgers',
      'Authored standalone embeddable TypeScript client SDKs (`@simpoo/sdk`) bundled via Rollup, allowing partner teams to embed inventory widgets in under 10 lines of code',
      'Integrated `Tiptap` document/invoice editor and client-side PDF/Excel export pipeline (`jspdf`, `xlsx`, `react-barcode`) for automated retail accounting and barcode printing',
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
      'Architected and engineered production browser-based VoIP telephony infrastructure and enterprise logistics dispatch systems.',
    highlights: [
      'Built Dora Cell (`@dora-cell/sdk` monorepo): Integrated `SIP.js` over `Asterisk` media servers to negotiate live multi-line WebRTC telephony with deterministic audio device routing',
      'Built Dora Fleet: Engineered real-time logistics dashboard featuring `react-leaflet` vector tracking at 60 FPS and custom polygon geofencing (`Geoman`) for automated route alerts',
      'Embedded `@dora-cell/sdk-react` directly into active vehicle tracking cards on the dispatch map, enabling one-click WebRTC VoIP calling to drivers without context switching',
      'Published and maintained modular NPM packages (`@dora-cell/sdk`, `@dora-cell/sdk-react`, `@dora-cell/ghl`) supporting cross-platform web and CRM integrations',
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
      'Delivered the production web application connecting institutional property opportunities across Africa with global real estate investors.',
    highlights: [
      'Architected and built the institutional investment web portal with seamless property catalog discovery and structured KYC/AML (Anti-Money Laundering) onboarding flows',
      'Designed real-time financial portfolio reporting dashboards and dividend tracking tables for property shareholders',
      'Collaborated closely with product and compliance teams to ensure intuitive UI ergonomics across regulatory tokenization workflows',
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
      'Delivered high-performance institutional portals and agency web applications across education, non-profit, and talent management sectors.',
    highlights: [
      'Engineered bespoke, high-conversion web platforms including Africurve, ACIMT (Institutional Portal), Fabulous Edutainment, and PmdAfrica (NGO)',
      'Optimized Core Web Vitals (LCP, FID, CLS) to achieve sub-second page loads and superior performance metrics across mobile devices',
      'Implemented custom CMS architectures, structured donation workflows, and strict web accessibility guidelines',
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
